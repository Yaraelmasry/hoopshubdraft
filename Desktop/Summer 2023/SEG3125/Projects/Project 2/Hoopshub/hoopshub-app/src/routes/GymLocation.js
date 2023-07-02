import HomePage from "../Components/HomePage";
import Location from "../Components/Location";
function GymLocation() {
    return (
      <>
      <HomePage
      cname="location"
      hoopsImg="https://images.unsplash.com/photo-1572454181157-0b40dd7667fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1501&q=80"
      title="View Our Gym Locations"
      text="Where Champions are Forged!"
      btnClass="show"
      buttonText="View Gyms"
      url="/"
     />
      <Location/>
      </>
    );
  }
  
  export default GymLocation;