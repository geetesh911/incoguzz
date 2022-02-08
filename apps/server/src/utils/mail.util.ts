import Email from "email-templates";
import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
import config from "@/configs";
import { logger } from "./logger";
import { MailConfig, MailOptions } from "@/common/interfaces/mail.interface";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { Service } from "typedi";

@Service()
class MailingService {
  public async sendMail(
    mailOptions: MailOptions,
    cb: (error: Error | null, info: SMTPTransport.SentMessageInfo) => void,
  ): Promise<string> {
    if (process.env.NODE_ENV === "test") return;

    const { username, password }: MailConfig = config.get("mailConfig");

    const transporter = nodemailer.createTransport(
      smtpTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
          user: username,
          pass: password,
        },
      }),
    );

    const newMailOptions = {
      ...mailOptions,
      from: username,
    };
    if (mailOptions.text) {
      newMailOptions.html = null;

      transporter.sendMail(newMailOptions, (error, info) => {
        cb(error, info);
      });
    } else {
      const { from, to, locals } = newMailOptions;
      const email = new Email({
        transport: transporter,
        send: true,
      });

      try {
        await email.send({
          template: newMailOptions.html.path,
          message: { from, to },
          locals,
        });

        const successMessage = "Email has been sent";

        logger.info(successMessage);

        return successMessage;
      } catch (err) {
        logger.error(err);
      }
    }
  }
}

export default MailingService;
