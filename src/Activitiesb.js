import Card from "react-bootstrap/Card";

export default function ActivityBody(props) {
  return (
    <div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={props.image}
            width="300px"
            height="300px"
          />
          <Card.Body>
            <Card.Title>
              <img className="star-icon" src={props.starIcon} width="15px" />{" "}
              <span className="rating">{props.rating} </span>
              <span className="reviews">({props.reviews})</span>
            </Card.Title>
            <Card.Text>
              <div> {props.activity}</div>
              <div className="price-list">
                From $<span>{props.price}</span> per group
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
