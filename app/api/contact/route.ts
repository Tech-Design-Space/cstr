// import ContactInquiryEmail from "@/lib/emails/ContactInquiryEmail";
// import { contactFormSchema } from "@/lib/validation/contact";
// import { NextResponse } from "next/server";
// import { Resend } from "resend";


// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     // 1. Server-side Zod validation
//     const validationResult = contactFormSchema.safeParse(body);
//     if (!validationResult.success) {
//       return NextResponse.json(
//         {
//           error: "Validation error",
//           issues: validationResult.error.flatten().fieldErrors,
//         },
//         { status: 400 }
//       );
//     }

//     const data = validationResult.data;

//     // 2. Cloudflare Turnstile token verification
//     const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
//     if (turnstileSecret) {
//       const verifyRes = await fetch(
//         "https://challenges.cloudflare.com/turnstile/v0/siteverify",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/x-www-form-urlencoded" },
//           body: new URLSearchParams({
//             secret: turnstileSecret,
//             response: data.turnstileToken,
//           }),
//         }
//       );

//       const verifyJson = await verifyRes.json();
//       if (!verifyJson.success) {
//         return NextResponse.json(
//           { error: "Anti-spam verification failed. Please try again." },
//           { status: 400 }
//         );
//       }
//     }

//     // 3. Dispatch Email via Resend
//     const adminEmail = process.env.CONTACT_FORM_TO_EMAIL || "info@jibaconstruction.com";
    
//     await resend.emails.send({
//       from: "Jiba Construction Website <onboarding@resend.dev>",
//       to: adminEmail,
//       subject: `[New Inquiry] ${data.subject} - ${data.fullName}`,
//       react: ContactInquiryEmail(data),
//     });

//     return NextResponse.json(
//       { message: "Inquiry submitted successfully!" },
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("Contact API error:", err);
//     return NextResponse.json(
//       { error: "An error occurred while sending your message. Please try again later." },
//       { status: 500 }
//     );
//   }
// }











import ContactInquiryEmail from "@/lib/emails/ContactInquiryEmail";
import UserConfirmationEmail from "@/lib/emails/UserConfirmationEmail";
import { contactFormSchema } from "@/lib/validation/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Server-side Zod validation
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation error",
          issues: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Cloudflare Turnstile token verification
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: data.turnstileToken,
          }),
        }
      );

      const verifyJson = await verifyRes.json();
      if (!verifyJson.success) {
        return NextResponse.json(
          { error: "Anti-spam verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    // 3. Dispatch Parallel Emails via Resend
    const adminEmail = process.env.CONTACT_FORM_TO_EMAIL || "jibaconstructionltd@gmail.com";
    const senderEmail = "Jiba Construction <onboarding@resend.dev>"; // Replace with your verified domain in production

    await Promise.all([
      // A. Admin Notification Email
      resend.emails.send({
        from: senderEmail,
        to: adminEmail,
        replyTo: data.email,
        subject: `[New Inquiry] ${data.subject} - ${data.fullName}`,
        react: ContactInquiryEmail(data),
      }),

      // B. Client Confirmation Receipt Email
      resend.emails.send({
        from: senderEmail,
        to: data.email,
        subject: `We received your inquiry - Jiba Construction`,
        react: UserConfirmationEmail({
          fullName: data.fullName,
          subject: data.subject,
          preferredMethod: data.preferredMethod || "Email",
        }),
      }),
    ]);

    return NextResponse.json(
      { message: "Inquiry submitted successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An error occurred while sending your message. Please try again later." },
      { status: 500 }
    );
  }
}