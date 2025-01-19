// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.jino.ru",
    auth: {
      user: 'info@intertex-pb.ru',
      pass: process.env.password,
    },
    secure: true,
  })

  const mailData = {
    from: 'info@intertex-pb.ru',
    to: 'mr.korovin-mihail@ya.ru',
    subject: `Заявка с сайта`,
    html: `<div>Имя: ${req.body.name}</div><br/><div>Контакты: ${req.body.contact}</div>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      res.status(500)
    else
      res.status(200)

    res.end()
  })
}
