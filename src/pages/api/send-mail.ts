import nodemailer from "nodemailer";

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.json();

  const transporter = nodemailer.createTransport({
    port: import.meta.env.MAIL_PORT,
    host: import.meta.env.MAIL_SERVER,
    auth: {
      user: import.meta.env.MAIL_USER,
      pass: import.meta.env.MAIL_PASS,
    },
    secure: false,
    tls: {
      rejectUnauthorized: true,
    },
  });

  let bodyMail = `
        <h2>Girona Plants - Solicitud informació</h2>
        <p><span>Empresa:</span> ${formData.company} </p>
        <p><span>Usurai:</span> ${formData.name} </p>
        <p><span>Telèfono:</span> ${formData.phone} </p>
        <p><span>Email:</span> ${formData.email} </p>
        <p><span>Missatge:</span> ${formData.message} </p>
        <p><span>Hora seleccionada de trucada:</span> ${formData.radio} </p>
        <p><span>Acepta les polítiques de privacitat</span> ${formData.checkbox} </p>
    `;

  try {
    const mailData = {
      from: formData.email as string,
      to: import.meta.env.MAIL_DESTINATION,
      subject: "Nuevo contacto de web comercial",
      html: bodyMail,
    };

    await transporter.sendMail(mailData);
    return new Response(
      JSON.stringify({
        message: "'Datos recibidos correctamente'",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: "Error interno del servidor",
      }),
      { status: 500 }
    );
  }
};
