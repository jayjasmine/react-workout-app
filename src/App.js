import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useTimer } from "react-timer-hook";

//Custom Components
import Workout from "./components/Workout";

const workoutData = [
  {
    _id: 1,
    workout_title: "Upper",
    exercises: [
      {
        exercise_id: 1,
        exercise_title: "Bench Press",
        sets: [
          { set: "Set 1", weight: 0, reps: 0 },
          { set: "Set 2", weight: 0, reps: 0 },
          { set: "Set 3", weight: 0, reps: 0 },
          { set: "Set 4", weight: 0, reps: 0 },
        ],
      },
    ],
  },
];

const MyTimer = ({ expiryTimestamp }) => {
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.log("Break's up!"),
  });

  return (
    <div>
      <Button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 180);
          restart(time);
        }}
      >
        <span>{minutes}</span>:<span>{seconds}</span>
      </Button>
    </div>
  );
};

function App() {
  let time = new Date();
  time.setSeconds(time.getSeconds() + 180);

  return (
    <>
      <Container className="container-sm">
        <h2>Choose Workout</h2>
        <Button>Upper 1</Button>
        <Workout workoutData={workoutData}></Workout>
        <MyTimer expiryTimestamp={time} />
      </Container>
    </>
  );
}

export default App;
