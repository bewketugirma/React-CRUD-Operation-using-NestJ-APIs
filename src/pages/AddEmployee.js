import axios from "axios";
import { useForm } from "react-hook-form";
import { useRef,useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Box,Input,Checkbox } from '@mantine/core';
import { Card,  CardHeader,  CardBody,CardFooter,Typography,} from "@material-tailwind/react";
const AddEmployee = () => {
  
  const name = useRef("");
  const role = useRef("");
  const experience = useRef("");
  const description = useRef("");
  const managerId = useRef("");
  const navigate = useNavigate();
 const [validated, setValidated] = useState(false);
  const msg=""
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
     setValidated(true);
    addEmployeeHandler();


   
  };
  const addEmployeeHandler = () => {
    
    
    var data = {
      name: name.current.value,
      role: role.current.value,
      experience: experience.current.value,
      description:description.current.value,
      managerId:managerId.current.value,

    };
    
    axios.post("http://localhost:5000/users/createUser", data).then(() => {
      alert("Employee Added successfully!")
    });
  };
 
  return (
    <>
   
     <Card className="w-full ml-20">
      <CardHeader
       className="mb-4 grid h-28 place-items-center bg-blue"
      >
        <Typography variant="h3" color="blue">
          Add New Emplyee Details
        </Typography>
      </CardHeader>
       
      <Container className="mt-1">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col className="col-md-8 offset-md-2">
            
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required ref={name} />
              <Form.Control.Feedback type="invalid">
            Please provide a valid input.
          </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Job Role</Form.Label>
              <Form.Control type="text" required ref={role} />
              <Form.Control.Feedback type="invalid">
            Please provide a valid input.
          </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control type="number" required ref={experience} />
              <Form.Control.Feedback type="invalid">
            Please provide a valid input.
          </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" required ref={description} />
              <Form.Control.Feedback type="invalid">
            Please provide a valid input.
          </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formManagerId">
              <Form.Label>ManagerId</Form.Label>
              <Form.Control type="number" required ref={managerId} />
              
            </Form.Group>
            <Button
              type="submit"
              variant="primary" fullWidth>
              Add
            </Button>
            <Form.Control.Feedback type="valid">
           {msg}
          </Form.Control.Feedback>
          </Col>
        </Row>
        </Form>
      </Container>
      </Card>
    </>
  );
};


export default AddEmployee;