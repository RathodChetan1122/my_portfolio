import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark
          ? "linear-gradient(135deg,#0f172a,#4c1d95,#be185d)"
          : "linear-gradient(135deg,#f9fafb,#e5e7eb)",
        color: dark ? "#f9fafb" : "#111827",
        fontFamily: "Poppins, Arial, sans-serif",
        transition: "0.3s",
      }}
    >
      {/* Header */}
      <header style={hero}>
        <button onClick={() => setDark(!dark)} style={toggle}>
          {dark ? "🌙" : "☀️"}
        </button>

        <h1 style={title}>Rathod Chetan</h1>

        <p style={subtitle}>
          Full Stack Developer • Java • Python • Flask
        </p>

        <div style={btnGroup}>
          <Btn
            text="GitHub"
            link="https://github.com/RathodChetan1122"
          />
          <Btn
            text="LinkedIn"
            link="https://www.linkedin.com/in/rathod-chetan-826b13259/"
          />
          <Btn text="Resume" link="/resume.pdf" />
        </div>
      </header>

      {/* Sections */}
      <Section title="About Me">
        Passionate engineering student who loves building scalable web
        applications and solving real-world problems.
      </Section>

      <Section title="Projects">
        <Project
          name="Real-Time Chat App"
          desc="Flask + SocketIO based messaging platform."
        />
        <Project
          name="Sentiment Analysis"
          desc="Machine Learning based review analyzer."
        />
      </Section>

      <Section title="Contact">
        <p>📧 chetanindia41@gmail.com</p>
        <p>📞 8919104623</p>
      </Section>

      <footer style={footer}>
        © {new Date().getFullYear()} Rathod Chetan • Portfolio
      </footer>
    </div>
  );
}

/* Components */

function Btn({ text, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={btn}>
      {text}
    </a>
  );
}

function Section({ title, children }) {
  return (
    <section style={section}>
      <h2 style={sectionTitle}>{title}</h2>
      <div style={sectionContent}>{children}</div>
    </section>
  );
}

function Project({ name, desc }) {
  return (
    <div style={card}>
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
}

/* Styles */

const hero = {
  textAlign: "center",
  padding: "100px 20px",
  position: "relative",
};

const toggle = {
  position: "absolute",
  right: 25,
  top: 25,
  fontSize: 22,
  background: "rgba(255,255,255,0.15)",
  border: "none",
  padding: "8px 12px",
  borderRadius: "50%",
  cursor: "pointer",
  color: "white",
};

const title = {
  fontSize: "3.5rem",
  fontWeight: "700",
  letterSpacing: "1px",
};

const subtitle = {
  marginTop: 10,
  fontSize: "1.2rem",
  opacity: 0.85,
};

const btnGroup = {
  marginTop: 30,
  display: "flex",
  justifyContent: "center",
  gap: 15,
  flexWrap: "wrap",
};

const btn = {
  padding: "10px 22px",
  borderRadius: 25,
  background: "linear-gradient(135deg,#6366f1,#ec4899)",
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
  transition: "0.3s",
};

const section = {
  padding: "70px 20px",
  textAlign: "center",
};

const sectionTitle = {
  fontSize: "2.2rem",
  marginBottom: 20,
};

const sectionContent = {
  maxWidth: 800,
  margin: "auto",
  fontSize: "1.05rem",
  opacity: 0.9,
};

const card = {
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(10px)",
  margin: "15px auto",
  maxWidth: 500,
  padding: 25,
  borderRadius: 15,
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
};

const footer = {
  textAlign: "center",
  padding: 25,
  background: "rgba(0,0,0,0.4)",
  fontSize: "0.9rem",
  opacity: 0.8,
};