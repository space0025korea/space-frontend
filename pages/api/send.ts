import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

import { generateEmail } from "src/utils/generateEmail";

const transporter = nodemailer.createTransport({
  service: "naver",
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
  // 메일에서 smtp 설정 해줘야함
});

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    transporter.sendMail(
      {
        from: process.env.NEXT_PUBLIC_EMAIL_USER,
        to: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
        subject: "329DESIGN 고객 문의 메일",
        html: generateEmail(req.body),
      },
      (err, info) => {
        if (err) {
          res.status(500).json({
            message: "이메일 발송 중 오류가 발생했습니다.\n329space@naver.com 로 메일 보내주세요.",
          });
        } else {
          res
            .status(200)
            .json({ message: "이메일이 발송되었습니다. 빠른 시간 내에 연락드리겠습니다." });
        }
      }
    );
  }
};

export default handler;
