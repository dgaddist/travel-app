import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Body() {
  return (
    <div>
      <div className="about-us">
        <div className="slogan">Your Passport to Wanderlust</div>
        <div className="details">
          Step into the world of Wanderlust Compass, where we take the stress
          out of travel planning for you! Just share your preferred activities,
          budget, and travel dates, and our dedicated Travel Agent will curate a
          personalized itinerary, complete with suggested destinations,
          accommodations, and activities.
        </div>
        <div>
          <div>
            <span className="travel-agent">
              Meet Angie, your committed Travel Agent with more than 5 years of
              expertise! Renowned for crafting unforgettable journeys, providing
              reassurance, and adeptly handling intricate travel details.
            </span>
            <img
              className="headshot"
              src="./headshot.jpg.jpg"
              width="150px"
              height="100px"
            />
            <div className="travel-recom">
              Destinations recommended by your Travel Agent
            </div>
          </div>
          <span className="Travel-cards">
            <span className="Jamaica-card">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./Jamaica.jpg" height="200px" />
                <Card.Body>
                  <Card.Title>
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/color/48/marker--v1.png"
                      alt="marker--v1"
                    />
                    Jamaica
                  </Card.Title>
                  <Card.Text>
                    An emerald island in the Caribbean often known as the
                    birthplace of reggae music and a hotspot for pure tropical
                    fun. Jamaica is packed full of surprises: miles of
                    breathtaking beaches, hidden blue lagoons, lost waterfalls,
                    an endless list of paradise resorts, and so much more!
                  </Card.Text>
                  <Button variant="primary">
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/sf-ultralight/25/000000/alarm.png"
                      alt="alarm"
                    />
                    Notify my Travel Agent
                  </Button>
                </Card.Body>
              </Card>
            </span>
            <span className="Japan-card">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./Japan.jpg" height="200px" />
                <Card.Body>
                  <Card.Title>
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/color/48/marker--v1.png"
                      alt="marker--v1"
                    />
                    Japan
                  </Card.Title>
                  <Card.Text>
                    Japan is undoubtedly one of the most distinctive places to
                    visit and offers experiences that are hard to find anywhere
                    else in the world. The unique Japanese culture integrates
                    Eastern traditions and Western modernity that will leave you
                    fascinated.
                  </Card.Text>
                  <Button variant="primary">
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/sf-ultralight/25/000000/alarm.png"
                      alt="alarm"
                    />
                    Notify my Travel Agent
                  </Button>
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
                  <Card.Title>
                    {" "}
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/color/48/marker--v1.png"
                      alt="marker--v1"
                    />
                    Maldives
                  </Card.Title>
                  <Card.Text>
                    With its stunning islands, mesmerizing beaches, and
                    turquoise waters, Maldives is famous for its exciting water
                    activities. If you are an adventure enthusiast, the variety
                    of water sports will make you want to stay here forever.
                    <br />
                    <br />
                  </Card.Text>
                  <Button variant="primary">
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/sf-ultralight/25/000000/alarm.png"
                      alt="alarm"
                    />
                    Notify my Travel Agent
                  </Button>
                </Card.Body>
              </Card>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
