import Card from "react-bootstrap/Card";

export default function Activities() {
  return (
    <div>
      <div className="Activity-title">Highly Rated Activities</div>
      <div className="Activity-cards">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="hiking.jpg" />
            <Card.Body>
              <Card.Title>
                <span className="raiting">4.9 </span>
                <span className="reviews">(500)</span>
              </Card.Title>
              <Card.Text>
                <div> Hiking Adventure in Rocky Mountain National Park</div>
                <div>
                  From $<span>139</span> per group
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="zipline.jpg" />
            <Card.Body>
              <Card.Title>
                <span className="raiting">4.7 </span>
                <span className="reviews">(480)</span>
              </Card.Title>
              <Card.Text>
                <div> Canopy Zipline in Puerto Vallarta</div>
                <div>
                  From $<span>139</span> per group
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="boat.jpg" />
            <Card.Body>
              <Card.Title>
                <span className="raiting">4.8 </span>
                <span className="reviews">(350)</span>
              </Card.Title>
              <Card.Text>
                <div> Sunset Dinner Cruise in Nassau</div>
                <div>
                  From $<span>116</span> per group
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="ski.jpg" />
            <Card.Body>
              <Card.Title>
                <span className="raiting">4.9 </span>
                <span className="reviews">(520)</span>
              </Card.Title>
              <Card.Text>
                <div> Group Jet Ski Rentals in Miami </div>
                <div>
                  From $<span>145</span> per group
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
