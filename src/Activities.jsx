import activitiesdata from "./activitiesdata";
import ActivityBody from "./Activitiesb";

export default function Activities() {
  // <Hero />
  const activitycards = activitiesdata.map((item) => {
    return (
      <ActivityBody
        image={item.image}
        activity={item.activity}
        rating={item.rating}
        reviews={item.reviews}
        price={item.price}
        starIcon={item.starIcon}
      />
    );
  });

  return (
    <div>
      <div className="Activity-title">Highly Rated Activities</div>
      <div className="Activity-cards">{activitycards}</div>
    </div>
  );
}
