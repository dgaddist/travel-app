import Card from "react-bootstrap/Card";
import activitiesdata from "./activitiesdata";
import ActivityBody from "./Activitiesb";

export default function Activities() {
  // <Hero />

  return (
    <div>
      <ActivityBody
        image="./hiking.jpg"
        rating="4.9"
        reviews="500 "
        activity="Hiking Adventure in Rocky Mountain National Park"
        starIcon="./icon-star.png"
        price="139"
      />
    </div>
  );
}

// const activtiycards = activitiesdata.map((item) => {
//   return (
//     <ActivityBody />
//       img={item.image}
//       activity={item.name}
//       rating={item.rating}
//       reviews={item.reviews}
//       price={item.price}
//       icon={item.starIcon}
//     />
//   );
// });
// {activtiycards}
