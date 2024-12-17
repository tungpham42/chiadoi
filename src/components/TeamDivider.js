import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function TeamDivider() {
  const [names, setNames] = useState(""); // Store input names
  const [numTeams, setNumTeams] = useState(2); // Default team count
  const [teams, setTeams] = useState([]); // Store generated teams

  // Function to generate random teams
  const handleGenerateTeams = () => {
    const nameArray = names.split("\n").filter((name) => name.trim() !== ""); // Clean names
    const shuffledNames = nameArray.sort(() => 0.5 - Math.random()); // Shuffle names
    const resultTeams = Array.from({ length: numTeams }, () => []); // Create empty teams

    // Distribute names into teams
    shuffledNames.forEach((name, index) => {
      resultTeams[index % numTeams].push(name.trim());
    });

    setTeams(resultTeams); // Update state
  };
  const currentYear = new Date().getFullYear();
  return (
    <Container
      fluid
      className="min-vh-100 d-flex align-items-center justify-content-center bg-light"
    >
      <Card className="shadow-lg" style={{ width: "90%", maxWidth: "1100px" }}>
        <Card.Header className="bg-primary text-white text-center">
          <h2 className="my-2">Ứng dụng chia đội</h2>
        </Card.Header>

        <Card.Body>
          <Row>
            {/* Input Section */}
            <Col md={5} className="border-end">
              <h4 className="mb-4 text-primary">Chi tiết</h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <strong>Tên thành viên (mỗi hàng một người)</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={8}
                    placeholder="Nguyễn Văn A&#10;Trần Thị B&#10;Phạm Văn C"
                    value={names}
                    onChange={(e) => setNames(e.target.value)}
                    className="border-primary"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    <strong>Số lượng đội</strong>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    min="2"
                    value={numTeams}
                    onChange={(e) => setNumTeams(Number(e.target.value))}
                    className="border-primary"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" onClick={handleGenerateTeams}>
                    Bắt đầu chia đội
                  </Button>
                </div>
              </Form>
            </Col>

            {/* Output Section */}
            <Col md={7}>
              <h4 className="mb-4 text-success">Kết quả</h4>
              {teams.length > 0 ? (
                teams.map((team, index) => (
                  <Card
                    key={index}
                    className="mb-3 border-0 shadow-sm"
                    style={{
                      background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
                    }}
                  >
                    <Card.Body>
                      <Card.Title className="text-primary">
                        Đội {index + 1}
                      </Card.Title>
                      <ul className="mb-0">
                        {team.map((member, i) => (
                          <li key={i} className="text-dark">
                            {member}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p className="text-muted">Không có kết quả.</p>
              )}
            </Col>
          </Row>
        </Card.Body>

        <Card.Footer className="bg-light text-center text-muted">
          <small>© {currentYear} Ứng dụng Chia đội.</small>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default TeamDivider;
