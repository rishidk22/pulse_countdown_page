const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {

  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'cunning.libertine@gmail.com',
        pass: 'DzQZG79bbY4N4PN'
      }
    })

    let mailOptions = {
      from: req.body.name,
      to: 'cunning.libertine@gmail.com',
      replyTo: req.body.email,
      subject: 'New Message from Pulse 2020 visitor',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
      console.log('Message sent: %s', info.message)
      console.log('Message URL: %', nodemailer.getTestMessageUrl(info))
    })
  })

})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
