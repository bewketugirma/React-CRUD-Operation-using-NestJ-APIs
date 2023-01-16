import { useEffect, useState } from "react";
//import { Container, Table, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 import DeleteConfirmation from "../components/shared/DeleteConfirmation";
 import {  ScrollArea,Table,Card,Container,Button,TextInput} from '@mantine/core';

 export default function AllEmployees(){
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(0);
 const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get('http://localhost:5000/users/getUsers');
        setEmployees(response.users);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);
  const openDeleteModalHandler = (id) => {
    setItemIdToDelete(id);
    setShowModal(true);
    
  };
 
  const closeDeleteModalHandler = () => {
    setItemIdToDelete(0);
    setShowModal(false);
  };
 

  const confirmDeleteHandler = () => {
    axios
      .delete(`http://localhost:5000/users/deleteuserById/${itemIdToDelete}`)
      .then(() => {
       setEmployees((existingData) => {
          return existingData.filter((_) => _.id !== itemIdToDelete);
        });
        setItemIdToDelete(0);
        setShowModal(false);
      });
  };
 
 
  return (
    
    <div>
     <DeleteConfirmation
        title="Delete Confimation!"
        body="Are sure to delete this item"
        showModal={showModal}
        closeDeleteModalHandler={closeDeleteModalHandler}
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>
      
       <ScrollArea
        style={{ width: 1080, height: 250 }}
        onScrollPositionChange={onScrollPositionChange}
      >
      <Container className="mt-5 rounded-lg bg-sky-50">
        
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
             <th>UserId</th>
              <th>Name</th>
              <th>Job Role</th>
              <th>Experience</th>
              <th>Description</th>
              <th>ManagerId</th>
               <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
              <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.experience}</td>
                <td>{emp.description}</td>
                <td>{emp.managerId}</td>
                <td class="bg-slate-300">
		  <Button
			variant="primary"
			type="button"
			onClick={() => {
			  navigate(`/edit-employee/${emp.id}`);
			}}
		  >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
			Edit
		  </Button>

		  <Button
                    color="red"
                    type="button"
                    onClick={() => {
                      openDeleteModalHandler(emp.id);

                    }}
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>Delete
                  </Button>
		</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      </ScrollArea>
    </div>
  );
};
 