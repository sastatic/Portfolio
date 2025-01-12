import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiJavascript1,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
  SiGo,
  SiDocker,
  SiCplusplus,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGo /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaAws /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCplusplus /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiRedis /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
    </Row>
  );
}

export default Techstack;
