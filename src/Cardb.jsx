import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardBody(props) {
  return (
    <span className="Jamaica-card">
      <Card style={{ width: "20rem", height: "35rem" }}>
        <Card.Img variant="top" src={props.img} height="200px" />
        <Card.Body>
          <Card.Title>
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/color/48/marker--v1.png"
              alt="marker--v1"
            />
            {props.name}
          </Card.Title>
          <Card.Text className="destination-details">{props.details}</Card.Text>
          <Button variant="primary">
            <img
              className="bell-icon"
              width="25"
              height="25"
              src="https://img.icons8.com/sf-ultralight/25/000000/alarm.png"
              alt="alarm"
            />
            {props.agent}
          </Button>
        </Card.Body>
      </Card>
    </span>
  );
}
