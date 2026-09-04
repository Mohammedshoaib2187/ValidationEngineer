import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Conversational AI with Furhat Robot"
              description ="Developed an AI-powered conversational system by integrating the Furhat humanoid robot with Ope-
nAI’s ChatGPT and emotion detection models. The system was designed to recognize user sentiment in real time
and respond with adaptive, human-like expressions.
Highlights: Built a Node.js backend for conversation orchestration, connected to an Angular dashboard that displayed
real-time analytics of interactions. Added emotion recognition to personalize responses, improving engagement."              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Travel Recommendation System"
              description="Created a smart travel assistant that recommends safe and optimal travel routes by combining Google
Maps API, Weather API, and real-time traffic data. Designed to support travelers in making data-driven journey
decisions.
Highlights: Architected with Node.js microservices for backend, Angular UI for frontend, and deployed on AWS (EC2,
Lambda, S3) with CI/CD pipelines. Optimized the system with caching and load balancing to handle 10K+ API
requests/day."              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="VoicePilot"
              description="Designed a voice-controlled digital assistant to automate routine tasks such as messaging on WhatsApp,
searching on Google, and controlling media playback on YouTube.
Highlights: Built in Python with SpeechRecognition and pyttsx3 for natural voice interaction. Supported 15+
automation commands, with modular plugin architecture for easy extension. Packaged as a lightweight desktop
assistant."                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Internal Reporting Dashboard"
              description="Developed a real-time reporting and analytics dashboard for enterprise use, replacing manual reporting
processes and enabling leadership to make faster, data-driven decisions.
Highlights: Implemented backend APIs in Node.js, a role-based Angular UI, and MongoDB for dynamic queries.
Integrated Chart.js & D3.js for visualization, and added JWT-secured APIs for authentication. Reduced report
generation time by 40%."              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="E-Commerce Platform"
              description="Designed and developed a full-stack e-commerce web application supporting product listings, shopping
cart, secure checkout, and order tracking. Implemented authentication and role-based access for customers and
admins.
Highlights: Built the backend with Node.js/Express.js and MongoDB, and frontend with Angular. Integrated payment
gateway (Stripe API) for secure transactions. Deployed using Docker containers on AWS with CI/CD pipelines for
automated builds and deployments. Implemented JWT-based authentication and Redis caching for faster responses."              
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Real-Time Collaboration Platform"
              description="Engineered a Slack/Notion-style real-time collaboration platform supporting team messaging, shared
whiteboards, and live document editing. Focused on high availability, scalability, and low-latency communication
across distributed users.
Highlights: Implemented backend microservices in Node.js with WebSockets and SignalR for real-time sync, and
frontend in React/Angular with state management (NgRx/Redux). Deployed on Kubernetes (AKS + EKS) with
auto-scaling. Added Redis + Kafka for event streaming, and ElasticSearch for chat history indexing. Integrated
role-based access control (RBAC) and OAuth2 authentication. Observability enabled with Prometheus + Grafana
dashboards. "              
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
