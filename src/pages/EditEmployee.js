import axios from "axios";
import { useEffect, useRef,useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Card,  CardHeader,  CardBody,CardFooter,Typography,} from "@material-tailwind/react";

import { Box } from '@mantine/core';
const EditEmployee = () => {
  const name = useRef("");
  const role = useRef("");
  const managerId = useRef("");
  const description = useRef("");
  const[employee,setEmployee]=useState([])
  const experience = useRef("");
  const { id } = useParams("id");
  const navigate = useNavigate();
 //getUserById
  useEffect( async () => {
   await axios.get(`http://localhost:5000/users/getUserById/${id}`).then((response) => {
      name.current.value = response.data.name;
      role.current.value = response.data.role;
      managerId.current.value = response.data.managerId;
      description.current.value = response.data.description;
      
    });
  });
 
 
  const updateEmployeeHandler = () => {
    var payload = {
      name: name.current.value,
      role: role.current.value,
      managerId: managerId.current.value,
      description: description.current.value,
      
    };
    axios.put(`http://localhost:5000/users/updateUserById/${id}`,payload)
    .then(() => {
        navigate("/");
    })
  };
 
  return (
    <>
   
<Card className="w-full ml-20 rounded-lg bg-sky-300 resize">
      <Container className="mt-2">
       
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Update Emplyee Details</legend>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Job Role</Form.Label>
              <Form.Control type="text" ref={role} />
            </Form.Group>
             <Form.Group className="mb-3" controlId="formExperience">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" ref={description} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExperience">
              <Form.Label>ManagerId</Form.Label>
              <Form.Control type="number" required ref={managerId} />
            </Form.Group>
            <Button type="button" variant="primary" onClick={updateEmployeeHandler}>
              Edit
            </Button>
          </Col>
        </Row>
        
      </Container>
      </Card>
    </>
  );
};
 
export default EditEmployee;
