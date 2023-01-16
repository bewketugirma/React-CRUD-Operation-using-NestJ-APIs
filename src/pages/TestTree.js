import { useTree,CellTree } from '@table-library/react-table-library/tree';
import { Table, Header,Body,Row,Cell } from '@table-library/react-table-library/table';
import {React,useEffect,useState} from 'react'
import axios from 'axios'

export default function TestTree(){
    
   
      const [employees, setEmployees] = useState([]);
   
  
  useEffect(() => {
    const fetchData = async () =>{
      //getHierarchy
      try {
        const {data: response} = await axios.get('http://localhost:5000/users/getHierarchy');
        
        setEmployees(response);
         console.log(response)
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);
  
      const data = { nodes: employees };
      const tree = useTree(data, {
        onChange: onTreeChange,
      });
    
      function onTreeChange(action, state) {
        console.log(action, state);
      }
    
    
      return (
        <Table data={data} tree={tree}>
      {(tableList) => (
        <>
          <Header>
            ...
          </Header>

          <Body>

            {tableList.map((item) => (
                <Row key={item.id} item={item}>

                <CellTree item={item}>
                 <Cell> {item.role}</Cell>

                </CellTree>
                
                ...
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
      );
}