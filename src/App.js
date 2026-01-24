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
          Toggle
        </button>

        <h1>Rathod Chetan</h1>

        <p>Full Stack Developer | Java | Python | Flask</p>

        <div style={{ marginTop: 20 }}>
          <a
            href="https://github.com/RathodChetan1122"
            target="_blank"
            rel="noreferrer"
            style={btn}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rathod-chetan-826b13259/"
            target="_blank"
            rel="noreferrer"
            style={btn}
          >
            LinkedIn
          </a>

          <a href="/resume.pdf" style={btn}>
            Resume
          </a>
        </div>
      </header>

      <Section title="About">
        Passionate engineering student focused on building real-world projects.
      </Section>

      <Section title="Projects">
        <div style={card}>Real-Time Chat App</div>
        <div style={card}>Sentiment Analysis</div>
      </Section>

      <Section title="Contact">
        <p>Email: chetanindia41@gmail.com</p>
        <p>Phone: 8919104623</p>
      </Section>

      <footer style={footer}>
        © {new Date().getFullYear()} Rathod Chetan
      </footer>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ padding: 40, textAlign: "center" }}>
      <h2>{title}</h2>
      <div style={{ maxWidth: 700, margin: "auto" }}>{children}</div>
    </section>
  );
}

/* Styles */

const btn = {
  padding: "8px 15px",
  margin: "5px",
  background: "rgba(255,255,255,0.2)",
  borderRadius: 6,
  color: "white",
  textDecoration: "none",
  display: "inline-block",
};

const card = {
  background: "rgba(255,255,255,0.1)",
  margin: "10px auto",
  maxWidth: 500,
  padding: 15,
  borderRadius: 8,
};

const footer = {
  textAlign: "center",
  padding: 20,
  background: "rgba(0,0,0,0.4)",
  opacity: 0.7,
};