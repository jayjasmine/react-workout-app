import Form from "react-bootstrap/Form";


const WorkoutSet = (props) => {

  return (
    
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Weight" type="number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control  placeholder="Reps" type="number" />
        </Form.Group>
      </Form>
    </>
  );
};

export default WorkoutSet;
