"use server";
import { sendMail } from "@/lib/mail";
export const Send = async () => {
  await sendMail({
    to: "paydaniilwa@yandex.ru",
    name: "Danila",
    subject: "test send",
    body: `<h1>hello world!</h1>`,
  });
};
