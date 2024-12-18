import React, { useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import InputSection from "./InputSection";
import TeamsDisplay from "./TeamsDisplay";

const TeamDivider = () => {
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
            <InputSection
              names={names}
              setNames={setNames}
              numTeams={numTeams}
              setNumTeams={setNumTeams}
              handleGenerateTeams={handleGenerateTeams}
            />
            <TeamsDisplay teams={teams} />
          </Row>
        </Card.Body>

        <Card.Footer className="bg-light text-center text-muted">
          <small>© {currentYear} Phạm Tùng</small>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default TeamDivider;
