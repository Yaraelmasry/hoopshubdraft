import HomePage from "../Components/HomePage";
import About from "../Components/About";



function Home() {
  return (
    <>
     <HomePage
     cname="hoops"
     hoopsImg="https://images.unsplash.com/photo-1519766304817-4f37bda74a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
     title="Join the HoopsHub Legacy"
     text="Where Champions are Forged!"
     btnClass="show"
     buttonText="View Programs"
     url="/Program"
     />
     <About/>
    </>
  );
}

export default Home;
