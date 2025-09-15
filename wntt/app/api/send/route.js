import { EmailTemplate } from "../../components/emailTemplate";
import { Resend } from 'resend';

export async function POST(req) {

const resend = new Resend(process.env.RESEND_API_KEY);

/*Get Form Data from Request*/
  const body = await req.json();
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'We\'ve Got To Talk <contact@wevegottotalk.net>',
      to: ['serenc0107@gmail.com'],
      subject: 'WGTT: Contact Form Submission',
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

