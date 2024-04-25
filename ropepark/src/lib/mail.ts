import nodemailer from "nodemailer";
export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const transport = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
      user: "paydaniilwa@yandex.ru",
      pass: "cscjdnjvifkdbsmh",
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
