import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Results driven Software Engineer with <span className="purple">4+ years</span> of experience
            specializing in building scalable backend systems and distributed architectures.
            <br />
            Demonstrated expertise in developing enterprise level solutions,
            including an <span className="purple">AI-powered call center system handling 150K daily interactions</span> and founding a food-tech startup.
            <br />
            Strong track record in system optimization, having achieved
            <span className="purple">90% latency reduction</span> and 
            <span className="purple">80% improvement</span> in processing times across projects.
            <br />
            Proficient in Python, Node.js, and Go, with extensive experience in cloud services,
            microservices architecture, and distributed systems.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Programs must be written for people to read!"{" "}
          </p>
          <footer className="blockquote-footer">Harold Abelson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
