import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InitiateFlutterwavePaymentParams } from './dto/request.dto';

@Injectable()
export class TransactionService {
  async initiateFlutterwaveTransaction(
    input: InitiateFlutterwavePaymentParams,
  ) {
    const { amount, email, name, phoneNumber } = input;
    var data = JSON.stringify({
      tx_ref: 'hooli-tx-1920bbtytty',
      amount,
      currency: 'USD',
      redirect_url: 'https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc',
      customer: {
        email,
        phonenumber: phoneNumber,
        name,
      },
      payment_options: 'card, mobilemoneyghana, ussd',
      customizations: {
        title: 'SIBx',
        // logo: 'http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png',
      },
    });

    try {
      const response = await axios({
        method: 'post',
        url: 'https://api.flutterwave.com/v3/payments',
        headers: {
          Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
        data: data,
      });
      return response.data;
    } catch (err) {
      console.log(err.response.data.error);
    }
  }
}
