import "./HomePageStyles.css";

function HomePage(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.hoopsImg} alt="hoopsImg" />
        <div className="hoops-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a className={props.btnClass} href={props.url}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;