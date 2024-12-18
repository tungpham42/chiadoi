import { useState, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";

const InputSection = ({
  names,
  setNames,
  numTeams,
  setNumTeams,
  handleGenerateTeams,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Col md={5} className={isSmallScreen ? "" : "border-end"}>
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
  );
};

export default InputSection;
