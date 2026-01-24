import { Download, Github, Linkedin, Mail, Moon, Phone, Sun } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark
          ? "linear-gradient(135deg,#1e1b4b,#6b21a8,#be185d)"
          : "#f3f4f6",
        color: dark ? "white" : "black",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <header style={{ textAlign: "center", padding: "80px 20px" }}>
        <button
          onClick={() => setDark(!dark)}
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            padding: 8,
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
          }}
        >
          {dark ? <Sun /> : <Moon />}
        </button>

        <h1 style={{ fontSize: 48 }}>Rathod Chetan</h1>

        <p style={{ opacity: 0.8 }}>
          Full Stack Developer | Java | Python | Flask
        </p>

        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "center",
            gap: 15,
            flexWrap: "wrap",
          }}
        >
          <Btn
            href="https://github.com/RathodChetan1122"
            icon={<Github />}
            text="GitHub"
          />
          <Btn
            href="https://www.linkedin.com/in/rathod-chetan-826b13259/"
            icon={<Linkedin />}
            text="LinkedIn"
          />
          <Btn href="/resume.pdf" icon={<Download />} text="Resume" />
        </div>
      </header>

      <Section title="About">
        Passionate engineering student focused on building real-world projects.
      </Section>

      <Section title="Projects">
        <Project title="Real-Time Chat App" />
        <Project title="Sentiment Analysis" />
      </Section>

      <Section title="Contact">
        <p>
          <Mail /> chetanindia41@gmail.com
        </p>
        <p>
          <Phone /> 8919104623
        </p>
      </Section>

      <footer
        style={{
          textAlign: "center",
          padding: 20,
          background: "rgba(0,0,0,0.4)",
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} Rathod Chetan
      </footer>
    </div>
  );
}

/* Components */

function Btn({ href, icon, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        padding: "8px 15px",
        background: "rgba(255,255,255,0.2)",
        borderRadius: 6,
        color: "white",
        textDecoration: "none",
        display: "flex",
        gap: 5,
      }}
    >
      {icon} {text}
    </a>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ padding: 40, textAlign: "center" }}>
      <h2>{title}</h2>
      <div style={{ maxWidth: 700, margin: "auto", opacity: 0.8 }}>
        {children}
      </div>
    </section>
  );
}

function Project({ title }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.1)",
        margin: "10px auto",
        maxWidth: 500,
        padding: 15,
        borderRadius: 8,
      }}
    >
      {title}
    </div>
  );
}