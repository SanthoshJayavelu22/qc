import nodemailer from "nodemailer";

// Send email via Resend REST API (https://resend.com/docs/api-reference/emails/send-email)
export const sendViaResend = async (params: {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<boolean> => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const fromEmail =
    process.env.RESEND_FROM_EMAIL ||
    "Quality Conveyancing <noreply@updates.qconveyancing.com>";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: Array.isArray(params.to) ? params.to : [params.to],
        subject: params.subject,
        html: params.html,
        ...(params.replyTo ? { reply_to: params.replyTo } : {}),
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[Resend] API error (${response.status}):`, errorBody);
      return false;
    }

    const data = (await response.json()) as { id?: string };
    console.log(`[Resend] Email sent successfully (id: ${data.id || "unknown"}) to:`, params.to);
    return true;
  } catch (err) {
    console.error("[Resend] Network/fetch error:", err);
    return false;
  }
};

// Create reusable transporter object using SMTP or test account
export const createEmailTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }

  // Fallback to direct Gmail/Standard if user/pass is configured
  if (user && pass) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }

  return null;
};

export const sendCustomerQuoteEmail = async (params: {
  clientName: string;
  clientEmail: string;
  transactionType: string;
  propertyValue: string;
  tenureType: string;
  totalIncVat: string;
  subtotal: string;
  vatAmount: string;
  sdltAmount?: string;
  totalDisbursements?: string;
  grandTotal?: string;
  disbursements?: Array<{ name: string; amount: string; description: string }>;
}) => {
  const {
    clientName,
    clientEmail,
    transactionType,
    propertyValue,
    tenureType,
    totalIncVat,
    subtotal,
    vatAmount,
    sdltAmount,
    totalDisbursements,
    grandTotal,
    disbursements,
  } = params;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 24px; color: #1c2e2a; }
        .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
        .header { background: #0A1E1B; padding: 32px 24px; text-align: center; color: #ffffff; }
        .logo { font-size: 24px; font-weight: bold; letter-spacing: 1px; color: #2dd4bf; margin-bottom: 4px; }
        .subtitle { font-size: 13px; color: #cbd5e1; text-transform: uppercase; letter-spacing: 2px; }
        .content { padding: 32px 28px; }
        .greeting { font-size: 18px; font-weight: 600; margin-bottom: 16px; color: #0A1E1B; }
        .summary-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin: 18px 0; }
        .section-title { font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #0f766e; margin-bottom: 8px; border-bottom: 1px solid #ccfbf1; padding-bottom: 4px; }
        .row { display: flex; justify-content: space-between; padding: 7px 0; border-bottom: 1px dashed #e2e8f0; font-size: 13px; }
        .row:last-child { border-bottom: none; }
        .label { color: #64748b; }
        .value { font-weight: 600; color: #0A1E1B; text-align: right; }
        .total-box { background: #0A1E1B; color: #ffffff; border-radius: 12px; padding: 18px; margin-top: 16px; text-align: center; }
        .total-title { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #2dd4bf; margin-bottom: 4px; }
        .total-amount { font-size: 26px; font-weight: bold; color: #ffffff; }
        .cta { display: block; text-align: center; background: #2dd4bf; color: #0A1E1B; padding: 14px 24px; border-radius: 10px; font-weight: bold; text-decoration: none; margin: 24px 0 16px 0; font-size: 15px; }
        .footer { background: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">Quality Conveyancing</div>
          <div class="subtitle">Official Legal Fee & Disbursement Quote</div>
        </div>
        <div class="content">
          <div class="greeting">Hello ${clientName},</div>
          <p style="line-height: 1.6; font-size: 14px; color: #334155;">
            Thank you for requesting an instant conveyancing quote with Quality Conveyancing. Below is your transparent quotation breakdown, itemising both your legal fees and third-party estimated disbursements:
          </p>

          <div class="summary-card">
            <div class="section-title">Transaction Information</div>
            <div class="row"><span class="label">Transaction Type:</span><span class="value">${transactionType}</span></div>
            <div class="row"><span class="label">Property Value:</span><span class="value">£${propertyValue || "N/A"}</span></div>
            <div class="row"><span class="label">Tenure:</span><span class="value">${tenureType || "Freehold"}</span></div>
          </div>

          <div class="summary-card">
            <div class="section-title">1. Legal Fees Breakdown</div>
            <div class="row"><span class="label">Legal Work (Excl. VAT):</span><span class="value">${subtotal || "N/A"}</span></div>
            <div class="row"><span class="label">VAT (20%):</span><span class="value">${vatAmount || "N/A"}</span></div>
            <div class="row"><span class="label"><strong>Total Legal Fees (Inc. VAT):</strong></span><span class="value"><strong>${totalIncVat || "£0.00"}</strong></span></div>
          </div>

          <div class="summary-card">
            <div class="section-title">2. Estimated Disbursements & Taxes</div>
            ${sdltAmount ? `<div class="row"><span class="label">Stamp Duty Land Tax (SDLT):</span><span class="value">${sdltAmount}</span></div>` : ""}
            ${
              disbursements && disbursements.length > 0
                ? disbursements
                    .filter((d) => !d.name.includes("Stamp Duty"))
                    .map((d) => `<div class="row"><span class="label">${d.name}:</span><span class="value">${d.amount}</span></div>`)
                    .join("")
                : ""
            }
            <div class="row"><span class="label"><strong>Total Estimated Disbursements:</strong></span><span class="value"><strong>${totalDisbursements || "£0.00"}</strong></span></div>
          </div>

          <div class="total-box">
            <div class="total-title">Estimated Grand Total (Completion Funds Required)</div>
            <div class="total-amount">${grandTotal || totalIncVat || "£0.00"}</div>
            <p style="font-size: 11px; color: #94a3b8; margin: 4px 0 0 0;">Legal Fees + Estimated Third-Party Disbursements</p>
          </div>

          <p style="font-size: 13px; color: #475569; line-height: 1.6; margin-top: 20px;">
            ✓ Fixed Legal Fee Guarantee<br>
            ✓ Regulated by the Council for Licensed Conveyancers (CLC Practice 11359)<br>
            ✓ Dedicated Solicitor Assigned from Day 1<br>
            ✓ Direct Dial Phone Line & Email to Your Lawyer
          </p>

          <a href="tel:02037636767" class="cta">Instruct Your Solicitor Today • 020 3763 6767</a>

          <p style="font-size: 12px; color: #94a3b8; text-align: center;">
            Have questions? Reply directly to this email or call our direct line on 020 3763 6767.
          </p>
        </div>
        <div class="footer">
          Quality Conveyancing • Regulated Licensed Conveyancers • London UK<br>
          Aurora House, 71–75 Uxbridge Road, Ealing, London W5 5SL<br>
          Telephone: 020 3763 6767 | Mobile: 07843 476 594
        </div>
      </div>
    </body>
    </html>
  `;

  const subject = `Your Instant Conveyancing Quote: ${transactionType} (${totalIncVat})`;

  // 1. Try Resend API first
  const sentViaResend = await sendViaResend({
    to: clientEmail,
    subject,
    html: htmlContent,
  });
  if (sentViaResend) {
    return true;
  }

  // 2. Fallback to SMTP / Nodemailer
  const transporter = createEmailTransporter();
  let emailDispatched = false;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Quality Conveyancing" <${process.env.SMTP_USER || "info@qualityconveyancing.co.uk"}>`,
        to: clientEmail,
        subject,
        html: htmlContent,
      });
      emailDispatched = true;
      console.log(`[Email] Instant quote successfully sent to customer: ${clientEmail}`);
    } catch (err) {
      console.error("[Email] Transporter quote email error:", err);
    }
  }

  return emailDispatched;
};

// Send password reset email
export const sendPasswordResetEmail = async (email: string, resetToken: string, host: string) => {
  const resetUrl = `http://${host}/admin/reset-password?token=${resetToken}`;

  const transporter = createEmailTransporter();
  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Quality Conveyancing Admin" <${process.env.SMTP_USER || "admin@qualityconveyancing.co.uk"}>`,
        to: email,
        subject: "Password Reset Request - Quality Conveyancing Admin",
        html: `
          <p>Hello,</p>
          <p>You requested a password reset for your Quality Conveyancing admin account.</p>
          <p>Please click the link below to set a new password:</p>
          <p><a href="${resetUrl}" style="background:#1b75bb;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;">Reset Password</a></p>
          <p>Or copy this link into your browser: ${resetUrl}</p>
          <p>This link expires in 1 hour.</p>
        `,
      });
      return true;
    } catch (err) {
      console.error("[Email] Password reset send error:", err);
    }
  }

  console.log(`[Email] Password reset link for ${email}: ${resetUrl}`);
  return true;
};

// Send admin notification when a new contact inquiry is submitted
export const sendContactNotificationEmail = async (params: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
}) => {
  const { name, email, phone, service, message } = params;
  const adminEmail = process.env.ADMIN_NOTIFY_EMAIL || process.env.SMTP_USER || "info@qualityconveyancing.co.uk";

  const transporter = createEmailTransporter();
  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Quality Conveyancing Web" <${process.env.SMTP_USER || "noreply@qualityconveyancing.co.uk"}>`,
        to: adminEmail,
        replyTo: email,
        subject: `New Conveyancing Enquiry: ${name} (${service})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0A1E1B; color: #fff; padding: 20px; text-align: center;">
              <h2 style="margin: 0; color: #2dd4bf;">New Contact Enquiry</h2>
              <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 13px;">Quality Conveyancing Website</p>
            </div>
            <div style="padding: 24px;">
              <p><strong>Client Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              <p><strong>Service Requested:</strong> ${service}</p>
              <p><strong>Message / Notes:</strong></p>
              <div style="background: #f8fafc; padding: 12px; border-left: 4px solid #2dd4bf; border-radius: 4px;">
                ${message ? message.replace(/\n/g, "<br>") : "<em>No message provided</em>"}
              </div>
            </div>
            <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 12px; color: #64748b;">
              Submitted through qconveyancing.com contact form. Check Admin Portal to review and update status.
            </div>
          </div>
        `,
      });
      console.log(`[Email] Contact enquiry notification sent to ${adminEmail}`);
      return true;
    } catch (err) {
      console.error("[Email] Transporter error sending contact notification:", err);
    }
  }
  return false;
};

// Send live chat alert email to all active admin staff
export const sendAdminLiveChatAlert = async (params: {
  adminEmails: string[];
  clientName: string;
  clientEmail?: string;
  clientPhone?: string;
  firstMessage: string;
  sessionId: string;
}) => {
  const { adminEmails, clientName, clientEmail, clientPhone, firstMessage, sessionId } = params;
  if (!adminEmails || adminEmails.length === 0) return false;

  const adminPortalUrl = `http://localhost:3000/admin`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a; }
        .box { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
        .header { background: #0A1E1B; padding: 28px 24px; text-align: center; color: #ffffff; }
        .badge { display: inline-block; background: #2dd4bf; color: #0A1E1B; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 999px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
        .content { padding: 28px 24px; }
        .lead { font-size: 16px; font-weight: 600; color: #0A1E1B; margin-bottom: 12px; }
        .quote-box { background: #f8fafc; border-left: 4px solid #1b75bb; padding: 16px; border-radius: 0 12px 12px 0; margin: 18px 0; font-style: italic; color: #334155; font-size: 14px; }
        .details { font-size: 13px; color: #475569; margin: 16px 0; line-height: 1.6; }
        .btn { display: block; text-align: center; background: #1b75bb; color: #ffffff !important; padding: 14px 24px; border-radius: 10px; font-weight: bold; text-decoration: none; margin: 24px 0 12px 0; font-size: 14px; }
        .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="box">
        <div class="header">
          <div class="badge">Live Chat Alert</div>
          <h2 style="margin: 0; font-size: 22px; font-weight: bold;">New Client Live Chat Started</h2>
        </div>
        <div class="content">
          <div class="lead">A potential client is actively waiting on the Quality Conveyancing website:</div>
          
          <div class="details">
            • <strong>Client Name:</strong> ${clientName}<br>
            • <strong>Email:</strong> ${clientEmail || "Not provided"}<br>
            • <strong>Phone:</strong> ${clientPhone || "Not provided"}<br>
            • <strong>Session ID:</strong> ${sessionId}
          </div>

          <div class="quote-box">
            "${firstMessage || "Visitor connected to live legal support"}"
          </div>

          <p style="font-size: 13px; color: #64748b; line-height: 1.5;">
            <em>Note: The first solicitor or staff member to open this conversation in the Admin Portal will lock the reply channel to prevent conflicting answers.</em>
          </p>

          <a href="${adminPortalUrl}" class="btn">Open Admin Portal to Claim & Reply</a>
        </div>
        <div class="footer">
          Quality Conveyancing London • Instant Staff Notification System
        </div>
      </div>
    </body>
    </html>
  `;

  const transporter = createEmailTransporter();
  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Quality Conveyancing Live Chat" <${process.env.SMTP_USER || "admin@qualityconveyancing.co.uk"}>`,
        to: adminEmails.join(", "),
        subject: `🚨 [Live Chat] New Customer Inquiry from ${clientName}`,
        html: htmlContent,
      });
      console.log(`[Email] Live chat alert dispatched to ${adminEmails.length} staff emails`);
      return true;
    } catch (err) {
      console.error("[Email] Transporter error sending admin chat alert:", err);
    }
  }

  return false;
};

