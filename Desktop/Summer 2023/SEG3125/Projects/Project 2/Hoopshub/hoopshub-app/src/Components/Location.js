import React from "react";
import Court1 from "../assets/court1.jpg";
import Court2 from "../assets/court2.jpg";
import Court3 from "../assets/court3.jpg";
import Court4 from "../assets/court4.jpg";
import LocationData from "./LocationData";

const Location = () => {
  return (
    <>
      <div className="location">
        <h1>Gym Locations</h1>
        <p>HoopsHub uses the following courts for team practices, drop-ins, and home games.</p>
        <LocationData
          className="first-loc"
          heading="Saint Laurent Court"
          text="Open: Monday-Sunday"
          text2="10:00AM-4:00PM"
          text3="Phone Number: 613000444"
          text4="Email:saintlaurent@gmail.com"
          url= "www.google.com"
          img1={Court1}
          img2={Court2}
        />

        <LocationData
          className="first-loc-reverse"
          heading="Geegees Court"
          text="Open: Monday-Sunday"
          text2="10:00AM-9:00PM"
          text3="Phone Number: 613000333"
          text4="Email:geegees@gmail.com"
          img1={Court3}
          img2={Court4}
        />
      </div>
    </>
  );
};

export default Location;

// function Destination() {
//   return (
//     <>
//       <div className="destination">
//         <h1>Popular Destinations</h1>
//         <p>Tours give you the opportunity to see a lot, within a time frame.</p>
//         <div className="first-des">
//           <div className="des-text">
//             <h2>Taal Volcano, Batangas</h2>
//             <p>
//               One of the most iconic views in Luzon, Mt. Taal boasts a volcano
//               inside a lake inside an island. If you fancy a closer look, the
//               hike up to the crater is a mere 45 minutes, and is easy enough for
//               beginners. Guides will assist you most of the way, and you’ll see
//               the peculiar environment found on an active volcano, including
//               volcanic rocks and steam vents. The hike can be dusty and hot, so
//               plan for an early morning trip, and then unwind with some bulalo
//               before heading back home!
//             </p>
//           </div>
//           <div className="image">
//             <img src={Mountain1} alt="img" />
//             <img src={Mountain2} alt="img" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Destination;
