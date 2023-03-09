import { Injectable } from "@nestjs/common";
import { PAYMENT_TYPE } from "@prisma/client";
import axios from "axios";
import { Response } from "express";
import LazerPay from "lazerpay-node-sdk";
import { PrismaService } from "src/prisma.service";
import { makeid } from "../../helpers/generateString";
import { InitiatePaymentParams } from "./dto/request.dto";

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  async initiateFlutterwaveTransaction(input: InitiatePaymentParams) {
    const { amount, email, name, phoneNumber, bondId, userId } = input;
    const tx_ref = makeid(8);
    var data = JSON.stringify({
      tx_ref,
      amount,
      currency: "USD",
      // redirect_url: "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
      customer: {
        email,
        phonenumber: phoneNumber,
        name,
      },
      payment_options: "card, mobilemoneyghana, ussd",
      customizations: {
        title: "SIBx",
        // logo: 'http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png',
      },
    });

    try {
      await this.prisma.purchsedBond.create({
        data: {
          amount,
          paymentType: PAYMENT_TYPE.CARD,
          bond: { connect: { id: bondId } },
          user: { connect: { id: userId } },
          tx_ref,
        },
      });

      const response = await axios({
        method: "post",
        url: "https://api.flutterwave.com/v3/payments",
        headers: {
          Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        data: data,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      console.log(err.response.data.error);
    }
  }

  async initiateLazerpayTransaction(input: InitiatePaymentParams) {
    console.log("LAZER");
    const lazerpay = new LazerPay(
      process.env.LAZERPAY_PUBLIC_KEY,
      process.env.LAZERPAY_SECRET_KEY
    );
    const { amount, email, name } = input;
    try {
      const transaction_payload = {
        reference: makeid(8), // Replace with a reference you generated
        customer_name: name,
        customer_email: email,
        coin: "USDC",
        currency: "USD",
        fiatAmount: "100",
        amount: amount.toString(),
        acceptPartialPayment: true, // By default it's false
      };

      const response = await lazerpay.Payment.initializePayment(
        transaction_payload
      );

      console.log(response);
      return;
    } catch (error) {
      console.log(error);
    }
  }

  async verifyFlutterwaveCheckout(data: any, res: Response) {
    const tx_ref = data.txRef;
    const status = data.status;
    const amount = data.amount;

    const user = await this.prisma.user.findUnique({
      where: { email: data.customer.email },
    });

    if (status === "successful") {
      await this.prisma.purchsedBond.updateMany({
        where: {
          AND: [
            { tx_ref: { equals: tx_ref } },
            { userId: { equals: user.id } },
            { paid: { equals: false } },
            { amount: { equals: Number(amount) } },
          ],
        },
        data: {
          paid: true,
        },
      });
    }

    return res.status(200).end();
  }
}
