import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { SendMailParams } from "./dto/mail.request";

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  // sendMail(input: SendMailParams) {
  //   const { from, html, subject, text, to } = input;
  //   this.mailerService
  //     .sendMail({ to, from, subject, text, html })
  //     .then((success) => console.log(success))
  //     .catch((err) => console.log(err));
  // }

  async sendMail(input: SendMailParams) {
    const { html, subject, to } = input;
    await this.mailerService.sendMail({
      to,
      html,
      subject,
    });
  }
}
