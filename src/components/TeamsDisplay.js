import { Card, Col } from "react-bootstrap";

const TeamsDisplay = ({ teams }) => (
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
            <Card.Title className="text-primary">Đội {index + 1}</Card.Title>
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
);

export default TeamsDisplay;
