import { MailerService } from "@nestjs-modules/mailer";
import { SendMailParams } from "./dto/mail.request";
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendMail(input: SendMailParams): Promise<void>;
}
