import { EmailTemplate } from "../../components/emailTemplate";
import { Resend } from 'resend';

export async function POST(req) {
/*Get Form Data from Request*/
const resend = new Resend(process.env.RESEND_API_KEY);

  const body = await req.json();
  const email = body
  try {
    const { data, error } = await resend.emails.send({
      from: 'Website Contact <contact@wevegottotalk.net>',
      to: ['serenc0107@gmail.com'],
      subject: 'WNTT: Contact Form Submission',
      react: EmailTemplate({ 
        name: body.name || "empty",
        email: body.email || "empty",
        message: body.message || "empty",
      }),
      
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

