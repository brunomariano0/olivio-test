const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.seudominio.com.br', // Ex: smtp.seusite.com.br ou smtp.locaweb.com.br
    port: 587,
    secure: false,
    auth: {
      user: 'seuemail@seudominio.com.br',
      pass: 'SUA_SENHA_AQUI',
    },
  });

  const mailOptions = {
    from: 'seuemail@seudominio.com.br',
    to: 'seuemail@seudominio.com.br',
    subject: `Mensagem do site - ${subject}`,
    html: `
      <h3>Nova mensagem de contato</h3>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Assunto:</strong> ${subject}</p>
      <p><strong>Mensagem:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar:', error);
    res.status(500).json({ message: 'Erro ao enviar e-mail.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
