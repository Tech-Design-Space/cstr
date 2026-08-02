
interface UserConfirmationEmailProps {
  fullName: string;
  subject: string;
  preferredMethod: string;
}

export const UserConfirmationEmail = ({
  fullName,
  subject,
  preferredMethod,
}: UserConfirmationEmailProps) => {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        backgroundColor: "#f8fafc",
        padding: "40px 20px",
        color: "#1e293b",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
          border: "1px solid #e2e8f0",
        }}
      >
        {/* Header Banner */}
        <div
          style={{
            backgroundColor: "#0a2f1d",
            padding: "28px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "22px",
              fontWeight: 700,
              margin: 0,
              letterSpacing: "0.5px",
            }}
          >
            JIBA CONSTRUCTION
          </h1>
          <p style={{ color: "#d5a330", fontSize: "13px", margin: "4px 0 0" }}>
            Inquiry Receipt
          </p>
        </div>

        {/* Content Body */}
        <div style={{ padding: "32px 28px" }}>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#0a2f1d",
              marginTop: 0,
            }}
          >
            Thank you for reaching out, {fullName}.
          </h2>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.6",
              color: "#475569",
              marginBottom: "24px",
            }}
          >
            We have successfully received your inquiry regarding{" "}
            <strong>{subject}</strong>. Our technical team is reviewing your
            details and will reach out to you shortly via{" "}
            <strong>{preferredMethod}</strong>.
          </p>

          {/* Submission Summary Table */}
          <div
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "6px",
              padding: "16px 20px",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                color: "#64748b",
                fontWeight: 700,
                margin: "0 0 12px",
              }}
            >
              Summary of your request
            </p>
            <div
              style={{
                fontSize: "13px",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span style={{ color: "#64748b" }}>Inquiry Type:</span>
              <span style={{ fontWeight: 600, color: "#1e293b" }}>{subject}</span>
            </div>
            <div
              style={{
                fontSize: "13px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#64748b" }}>Contact Preference:</span>
              <span style={{ fontWeight: 600, color: "#1e293b" }}>
                {preferredMethod}
              </span>
            </div>
          </div>

          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#475569" }}>
            If you have any immediate updates or additional files to share, feel
            free to reply directly to this email.
          </p>

          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#0a2f1d",
              marginTop: "28px",
              marginBottom: 0,
            }}
          >
            Best regards,
            <br />
            <span style={{ fontWeight: 400, color: "#64748b" }}>
              The Jiba Construction Team
            </span>
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: "#f1f5f9",
            padding: "16px 28px",
            textAlign: "center",
            fontSize: "11px",
            color: "#94a3b8",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          <p style={{ margin: 0 }}>
            This is an automated confirmation sent to {fullName}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserConfirmationEmail;