import { Injectable } from "@nestjs/common";
import axios from "axios";
import LazerPay from "lazerpay-node-sdk";
import { makeid } from "../../helpers/generateString";
import { InitiatePaymentParams } from "./dto/request.dto";

@Injectable()
export class TransactionService {
  async initiateFlutterwaveTransaction(input: InitiatePaymentParams) {
    const { amount, email, name, phoneNumber } = input;
    var data = JSON.stringify({
      tx_ref: makeid(8),
      amount,
      currency: "USD",
      redirect_url: "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
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
}
