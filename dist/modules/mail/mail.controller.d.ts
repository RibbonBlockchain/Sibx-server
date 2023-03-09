import { SendMailParams } from "./dto/mail.request";
import { MailService } from "./mail.service";
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    sendMail(input: SendMailParams): Promise<void>;
}
