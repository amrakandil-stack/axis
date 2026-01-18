import { colors, layout, typography } from "../styles";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        style={{
          backgroundColor: colors.light,
          padding: layout.sectionPadding,
        }}
      >
        <div style={{ maxWidth: layout.maxWidth, margin: "0 auto" }}>
          <h1 style={{ ...typography.title, color: colors.primary }}>
            Strategic Consulting for Modern Businesses
          </h1>

          <p style={{ ...typography.subtitle, marginTop: "20px" }}>
            Axis helps companies grow, optimize operations, and navigate digital
            transformation with confidence.
          </p>

          <a
            href="/contact"
            style={{
              marginTop: "40px",
              display: "inline-block",
              padding: "14px 28px",
              backgroundColor: colors.primary,
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Talk to an Expert
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: layout.sectionPadding }}>
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2 style={{ ...typography.sectionTitle, color: colors.primary }}>
            What We Do
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "30px",
              marginTop: "60px",
            }}
          >
            {[
              {
                title: "Business Strategy",
                text:
                  "Data-driven strategies designed to scale your business and improve competitiveness.",
              },
              {
                title: "Operational Excellence",
                text:
                  "We streamline processes, reduce costs, and increase efficiency.",
              },
              {
                title: "Digital Transformation",
                text:
                  "Modern solutions that help your organization adapt and thrive.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "40px",
                  borderRadius: "12px",
                  backgroundColor: colors.light,
                }}
              >
                <h3 style={{ color: colors.primary }}>{item.title}</h3>
                <p style={{ marginTop: "12px", color: colors.muted }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

