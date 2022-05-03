import config from "@/configs";
import { logger } from "../../utils/logger";
import { MailConfig, MailOptions } from "@/common/interfaces/mail.interface";
import {
  TransactionalEmailsApiApiKeys,
  TransactionalEmailsApi,
  SendSmtpEmail,
} from "sib-api-v3-typescript";
import pug from "pug";
import path from "path";
import { IncomingMessage } from "http";
import { injectable } from "tsyringe";

@injectable()
class MailingService {
  private getHtmlFromPath(htmlPath: string, locals: object) {
    const htmlFn = pug.compileFile(
      path.resolve(__dirname, `../emails/${htmlPath}/html.pug`),
    );
    const htmlOutput = htmlFn(locals);

    const subjectFn = pug.compileFile(
      path.resolve(__dirname, `../emails/${htmlPath}/subject.pug`),
    );
    const subjectOutput = subjectFn(locals);

    return { html: htmlOutput, subject: subjectOutput };
  }

  public async sendMail(
    mailOptions: MailOptions,
    cb: (error: Error | null, info: IncomingMessage) => void,
  ): Promise<string> {
    if (process.env.NODE_ENV === "test") return;

    const { username, sendInBlueApiKey }: MailConfig = config.get("mailConfig");
    const { to, text, locals } = mailOptions;

    const apiInstance = new TransactionalEmailsApi();

    apiInstance.setApiKey(
      TransactionalEmailsApiApiKeys.apiKey,
      sendInBlueApiKey,
    );

    const sendSmtpEmail = new SendSmtpEmail();

    sendSmtpEmail.sender = {
      name: username,
      email: username,
    };

    sendSmtpEmail.to = [{ name: to, email: to }];

    if (text) {
      sendSmtpEmail.htmlContent = `<p>${text}</p>`;
    } else {
      const { html, subject } = this.getHtmlFromPath(
        mailOptions.html?.path,
        locals,
      );

      sendSmtpEmail.subject = subject;
      sendSmtpEmail.htmlContent = html;
    }

    try {
      const responseData = await apiInstance.sendTransacEmail(sendSmtpEmail);

      logger.info("Email has been sent");

      cb(null, responseData.response);
    } catch (error) {
      cb(error, null);
    }
  }
}

export default MailingService;
