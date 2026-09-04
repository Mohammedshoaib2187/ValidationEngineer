import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/company-logo.jpg";
import imge from "../../Assets/Logo.jpg";
import Particle from "../Particle";

function Experience() {
    return (
        <section>
            <Container fluid className="experience-section">
                <Particle />

                <h1 className="project-heading">
                    My <strong className="purple">Experiences</strong>
                </h1>

                <br />

                {/* ================= KEE TECHNOLOGIES ================= */}
                <Row className="experience-description m-2">
                    <Col md={4} className="myAvtar">
                        <img src={imge} className="img-fluid" alt="company-logo" />
                    </Col>

                    <Col md={8}>
                        <h1 className="company-heading">
                            Associate <strong className="purple">Software Engineer</strong>
                        </h1>

                        <h4 style={{ color: "white" }}>
                            <strong className="purple">KEE Technologies Group</strong>
                        </h4>

                        <h4 style={{ color: "white" }}>Jul 2024 – Present</h4>

                        <br /><br />

                        <h5 style={{ textAlign: "justify", color: "white" }}>
                            I worked on an internal enterprise platform that acted as a central system for managing and tracking tasks involving
                            both internal teams and external customers and partners, similar to how tools like Jira support workflow management.
                            The platform provided a structured process where requests from customers or partners were created as work items,
                            routed through defined workflows, and assigned to the appropriate internal teams. Each item moved through clear
                            stages such as intake, review, approval, execution, and closure, with status updates, comments, and ownership tracked
                            at every step. The system enabled teams to collaborate more effectively, maintain transparency with stakeholders,
                            and ensure accountability, while leadership gained visibility into workload, turnaround times, and bottlenecks through
                            centralized dashboards and reports. Overall, the platform replaced scattered communication and manual tracking with
                            a reliable, scalable workflow system that improved coordination, efficiency, and customer and partner engagement.<br /><br />
                            <strong className="purple">●</strong> Owned and delivered end-to-end full-stack features using React, Angular, Node.js, and REST APIs for
                            business-critical internal workflows and reporting systems.<br /><br />

                            <strong className="purple">●</strong> Improved frontend performance by 50% through optimized component rendering, memoization strategies, and
                            state management patterns.<br /><br />

                            <strong className="purple">●</strong>Designed and implemented backend services for authentication, authorization, reporting, and workflow
                            orchestration, improving system security and reliability.<br /><br />

                            <strong className="purple">●</strong> Established and maintained API contracts using Swagger/OpenAPI, enabling parallel frontend and backend
                            development.<br /><br />

                            <strong className="purple">●</strong> Built event-driven asynchronous workflows using Kafka and Azure Service Bus to improve fault tolerance
                            and scalability.<br /><br />

                            <strong className="purple">●</strong> Containerized applications using Docker and deployed them to Azure Kubernetes Service (AKS) with
                            rolling deployments.<br /><br />

                            <strong className="purple">●</strong> Developed CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment-related incidents.<br /><br />

                            <strong className="purple">●</strong> Implemented monitoring and alerting using Prometheus, Grafana, and Azure Application Insights.<br /><br />

                            <strong className="purple">●</strong> Collaborated cross-functionally with product managers, designers, and QA engineers to deliver features from
                            design to production.<br /><br />

                        </h5>
                    </Col>
                </Row>
                <br /><br />

                {/* ================= KEE INTERN ================= */}
                <Row className="experience-description m-2">
                    <Col md={4} className="myAvtar">
                        <img src={imge} className="img-fluid" alt="company-logo" />
                    </Col>

                    <Col md={8}>
                        <h1 className="company-heading">
                            Software Engineering <strong className="purple">Intern</strong>
                        </h1>

                        <h4 style={{ color: "white" }}>
                            <strong className="purple">KEE Technologies Group</strong>
                        </h4>

                        <h4 style={{ color: "white" }}>Dec 2023 – Jun 2024</h4>

                        <br /><br />

                        <h5 style={{ textAlign: "justify", color: "white" }}>
                            Worked as a Software Engineering Intern supporting the development of multiple internal and client-facing web applications. Assisted senior engineers on full-stack projects involving real-time collaboration, workflow management,
                            e-commerce functionality, and system monitoring. Gained hands-on experience working with modern web technolo-
                            gies, cloud platforms, and Agile development practices.<br /><br />
                            <strong className="purple">●</strong> Assisted in developing and enhancing full-stack web applications using React, Angular, and Node.js.<br /><br />

                            <strong className="purple">●</strong> Supported implementation of backend APIs and basic business logic for user management and workflows.<br /><br />

                            <strong className="purple">●</strong> Helped with building real-time features and interactive UI components under guidance from senior engineers.<br /><br />

                            <strong className="purple">●</strong> Contributed to testing, debugging, and bug fixes to improve application stability and reliability.<br /><br />

                            <strong className="purple">●</strong> Assisted with containerization and deployments using Docker and Kubernetes on AWS and Azure.<br /><br />

                            <strong className="purple">●</strong> Helped set up and review monitoring dashboards and logs for application health and performance.<br /><br />

                            <strong className="purple">●</strong> Participated in Agile ceremonies including daily stand-ups and sprint reviews.<br /><br />

                            <strong className="purple">●</strong> Collaborated with cross-functional team members to understand requirements and deliver assigned tasks on
                            time.<br /><br />
                        </h5>
                    </Col>
                </Row>

                <br /><br />

                {/* ================= CHUBB ================= */}
                <Row className="experience-description m-2">
                    <Col md={4} className="myAvtar">
                        <img src={myImg} className="img-fluid" alt="company-logo" />
                    </Col>

                    <Col md={8}>
                        <h1 className="company-heading">
                            Software <strong className="purple">Engineer</strong>
                        </h1>

                        <h4 style={{ color: "white" }}>
                            <strong className="purple">CHUBB (India)</strong>
                        </h4>

                        <h4 style={{ color: "white" }}>Sep 2020 – Jul 2023</h4>

                        <br /><br />

                        <h5 style={{ textAlign: "justify", color: "white" }}>
                            I worked on an enterprise insurance and claims management platform that supported end-to-end workflows including
                            policy creation and updates, claims intake, validation, approval, payout processing, and internal operational support. The system handled sensitive customer and financial data, enforced complex business rules, and supported
                            high transaction volumes while meeting strict security, compliance, and uptime requirements. A key focus of the
                            project was modernizing legacy functionality in an incremental and controlled manner to improve maintainability
                            and performance, while ensuring workflow continuity and uninterrupted business operations.
                            <strong className="purple">●</strong> Developed and maintained backend and full-stack features for large-scale enterprise insurance and claims man-
                            agement systems serving thousands of users.<br /><br />

                            <strong className="purple">●</strong> Designed and implemented secure RESTful APIs consumed by multiple frontend applications and internal
                            services.<br /><br />



                            <strong className="purple">●</strong> Improved application performance by optimizing database queries, caching layers, and service logic, significantly reducing API response times.<br /><br />

                            <strong className="purple">●</strong> Led migration of selected legacy components to containerized microservices deployed on Azure Kubernetes Service (AKS).<br /><br />

                            <strong className="purple">●</strong> Collaborated closely with business analysts and product owners to translate complex insurance workflows into
                            scalable technical solutions.<br /><br />

                            <strong className="purple">●</strong> Implemented role-based access control (RBAC) and authentication flows to ensure compliance with enter-
                            prise security standards.<br /><br />

                            <strong className="purple">●</strong> Contributed to frontend development using Angular, building reusable components and responsive UI workflows.<br /><br />

                            <strong className="purple">●</strong> Developed backend services using Python and Node.js, following clean architecture and SOLID principles.<br /><br />

                            <strong className="purple">●</strong> Participated in Agile ceremonies including sprint planning, backlog refinement, daily stand-ups, and retrospectives.<br /><br />

                            <strong className="purple">●</strong> Wrote comprehensive unit and integration tests, improving code coverage and reducing production defects.<br /><br />

                            <strong className="purple">●</strong> Reviewed peer code and provided constructive feedback to improve code quality, readability, and maintainability.<br /><br />

                            <strong className="purple">●</strong> Supported CI/CD pipelines by integrating automated testing and enforcing deployment best practices.<br /><br />

                            <strong className="purple">●</strong> Assisted with API testing, validation, and documentation using Postman and Swagger/OpenAPI.<br /><br />

                            <strong className="purple">●</strong> Investigated and resolved production issues by analyzing logs, monitoring metrics, and collaborating with cross-functional teams.<br /><br />

                            <strong className="purple">●</strong> Actively contributed to technical discussions and knowledge-sharing sessions, helping improve team-wide engineering standards.<br /><br />



                        </h5>
                    </Col>
                </Row>

            </Container>
        </section>
    );
}

export default Experience;
