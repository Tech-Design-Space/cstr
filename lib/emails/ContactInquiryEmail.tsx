import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";
import { ContactFormValues } from "../validation/contact";

export default function ContactInquiryEmail({
  fullName,
  email,
  phone,
  subject,
  preferredMethod,
  message,
}: ContactFormValues) {
  return (
    <Html>
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          {/* Header Banner */}
          <Section style={headerStyle}>
            <Heading style={headingStyle}>JIBA CONSTRUCTION</Heading>
            <Text style={subHeadingStyle}>New Website Contact Inquiry</Text>
          </Section>

          {/* Details Table */}
          <Section style={contentStyle}>
            <Text style={itemStyle}>
              <strong>Full Name:</strong> {fullName}
            </Text>
            <Text style={itemStyle}>
              <strong>Email Address:</strong> {email}
            </Text>
            <Text style={itemStyle}>
              <strong>Phone Number:</strong> {phone}
            </Text>
            <Text style={itemStyle}>
              <strong>Subject:</strong> {subject}
            </Text>
            <Text style={itemStyle}>
              <strong>Preferred Contact Method:</strong> {preferredMethod}
            </Text>

            <Hr style={hrStyle} />

            <Text style={itemStyle}>
              <strong>Project Brief / Message:</strong>
            </Text>
            <Text style={messageStyle}>{message || "No additional message provided."}</Text>
          </Section>

          <Hr style={hrStyle} />

          <Text style={footerStyle}>
            This email was generated from the Jiba Construction Website Contact Form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Inline styles for email compatibility
const mainStyle = {
  backgroundColor: "#f8fafc",
  fontFamily: "Arial, sans-serif",
  padding: "20px 0",
};

const containerStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "4px",
  margin: "0 auto",
  maxWidth: "600px",
  overflow: "hidden",
};

const headerStyle = {
  backgroundColor: "#0a2f1d",
  padding: "24px",
  textAlign: "center" as const,
};

const headingStyle = {
  color: "#d5a330",
  fontSize: "20px",
  margin: "0",
  textTransform: "uppercase" as const,
};

const subHeadingStyle = {
  color: "#ffffff",
  fontSize: "12px",
  margin: "4px 0 0 0",
};

const contentStyle = {
  padding: "24px",
};

const itemStyle = {
  color: "#334155",
  fontSize: "14px",
  margin: "8px 0",
};

const messageStyle = {
  backgroundColor: "#f1f5f9",
  borderRadius: "4px",
  color: "#1e293b",
  fontSize: "14px",
  lineHeight: "1.5",
  padding: "12px",
  whiteSpace: "pre-wrap" as const,
};

const hrStyle = {
  borderColor: "#e2e8f0",
  margin: "20px 0",
};

const footerStyle = {
  color: "#94a3b8",
  fontSize: "11px",
  textAlign: "center" as const,
  paddingBottom: "16px",
};