import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Body() {
  return (
    <div>
      <div className="about-us">
        <div className="slogan">Your Passport to Wanderlust</div>
        <div className="details">
          We offer a unique feature where users input their favorite activities,
          budget, and travel dates, and the platform generates a tailored
          itinerary complete with recommended destinations, accommodations, and
          activities
        </div>
        <div>
          <span className="Travel-cards">
            <span className="Jamaica-card">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./Jamaica.jpg" height="200px" />
                <Card.Body>
                  <Card.Title>Jamaica</Card.Title>
                  <Card.Text>
                    An emerald island in the Caribbean often known as the
                    birthplace of reggae music and a hotspot for pure tropical
                    fun. Jamaica is packed full of surprises: miles of
                    breathtaking beaches, hidden blue lagoons, lost waterfalls,
                    an endless list of paradise resorts, and so much more!
                  </Card.Text>
                  <Button variant="primary">View on Google Maps</Button>
                </Card.Body>
              </Card>
            </span>
            <span className="Japan-card">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./Japan.jpg" height="200px" />
                <Card.Body>
                  <Card.Title>Japan</Card.Title>
                  <Card.Text>
                    Japan is undoubtedly one of the most distinctive places to
                    visit and offers experiences that are hard to find anywhere
                    else in the world. The unique Japanese culture integrates
                    Eastern traditions and Western modernity that will leave you
                    fascinated.
                  </Card.Text>
                  <Button variant="primary">View on Google Maps</Button>
                </Card.Body>
              </Card>
            </span>
            <span className="Maldives-card">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="Maldives.jpg"
                  height="200px"
                  width="200px"
                />
                <Card.Body>
                  <Card.Title>Maldives</Card.Title>
                  <Card.Text>
                    With its stunning islands, mesmerizing beaches, and
                    turquoise waters, Maldives is famous for its exciting water
                    activities. If you are an adventure enthusiast, the variety
                    of water sports will make you want to stay here forever.
                    <br />
                    <br />
                  </Card.Text>
                  <Button variant="primary">View on Google Maps</Button>
                </Card.Body>
              </Card>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
