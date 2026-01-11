import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      contactNumber,
      phoneNumber,
      company,
      projectType,
      budget,
      timeline,
      message,
    } = body;

    // Use phoneNumber if contactNumber is not provided (for backward compatibility)
    const contact = contactNumber || phoneNumber || "";

    // Validate required fields (phoneNumber is optional)
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || "your-email@example.com";

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please contact the site administrator.",
        },
        { status: 500 }
      );
    }

    // Format project type for display
    const formatProjectType = (type: string) => {
      const types: Record<string, string> = {
        website: "Website",
        "web-app": "Web App",
        "admin-panel": "Admin Panel",
        "system-app": "System App (Windows • macOS • Linux)",
        other: "Other",
      };
      return types[type] || type;
    };

    // Format budget for display
    const formatBudget = (budget: string) => {
      const budgets: Record<string, string> = {
        "under-5k": "Under $5,000",
        "5k-10k": "$5,000 - $10,000",
        "10k-25k": "$10,000 - $25,000",
        "25k-50k": "$25,000 - $50,000",
        "50k-plus": "$50,000+",
        "hourly-rate": "Hourly Rate",
        discuss: "Let's Discuss",
      };
      return budgets[budget] || budget;
    };

    // Format timeline for display
    const formatTimeline = (timeline: string) => {
      const timelines: Record<string, string> = {
        asap: "ASAP / Urgent",
        "1-month": "Within 1 Month",
        "2-3-months": "2-3 Months",
        "3-6-months": "3-6 Months",
        "6-plus-months": "6+ Months",
        flexible: "Flexible",
      };
      return timelines[timeline] || timeline;
    };


    // Send email using Resend
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Update this with your verified domain
      to: contactEmail,
      subject: `New Project Inquiry from ${name}${company ? ` - ${company}` : ""}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 700px; margin: 0 auto; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">
              🚀 New Project Inquiry
            </h1>
            <p style="color: #ffffff; margin: 10px 0 0 0; opacity: 0.9; font-size: 14px;">
              You have received a new contact form submission
            </p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <!-- Personal Information -->
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #667eea;">
              <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                👤 Personal Information
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 140px;"><strong>Name:</strong></td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px;"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></td>
                </tr>
                ${contact ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px;"><a href="tel:${contact}" style="color: #667eea; text-decoration: none;">${contact}</a></td>
                </tr>
                ` : ""}
                ${company ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"><strong>Company:</strong></td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${company}</td>
                </tr>
                ` : ""}
              </table>
            </div>

            <!-- Project Details -->
            ${projectType || budget || timeline ? `
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #10b981;">
              <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                💼 Project Details
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                ${projectType ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 140px;"><strong>Project Type:</strong></td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${formatProjectType(projectType)}</td>
                </tr>
                ` : ""}
                ${budget ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"><strong>Budget:</strong></td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${formatBudget(budget)}</td>
                </tr>
                ` : ""}
                ${timeline ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px;"><strong>Timeline:</strong></td>
                  <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${formatTimeline(timeline)}</td>
                </tr>
                ` : ""}
              </table>
            </div>
            ` : ""}

            <!-- Message -->
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                💬 Project Details & Requirements
              </h2>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; color: #1f2937; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>

            <!-- Action Button -->
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}?subject=Re: Project Inquiry&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out..." 
                 style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                Reply to ${name}
              </a>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
            <p style="margin: 0;">This email was sent from your portfolio contact form.</p>
            <p style="margin: 5px 0 0 0;">Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      reply_to: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
