import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

//Custom Components
import WorkoutSet from "./WorkoutSet";



const Workout = ({workoutData}) => {
  const workout = workoutData;
  const exercises = workout[0].exercises;
  const sets = exercises[0].sets;

  return (
    <>    
      <h2>{workout[0].workout_title}</h2>
      <Card>
        
        <Card.Body>
          <Card.Title>{exercises.exercise_title}</Card.Title>
          <Tabs defaultActiveKey={sets[0].set} className="mb-3">
            {sets.map(s => {
              return (
                <Tab eventKey={s.set} title={s.set}>
              <WorkoutSet></WorkoutSet>
            </Tab>
              )
            })}
            
          </Tabs>
        </Card.Body>
      </Card>
    </>
  );
};
export default Workout;
