import "./LessonsStyles.css";

function LessonsData(props) {
  return (
    <div className="l-card">
        <div className="l-image">
       
      </div>
 
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default LessonsData;