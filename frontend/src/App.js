import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Components/Navbar';

function App() {
  const [ employees, setEmployees] = useState([])

  useEffect(() => {
    async function getAllEmployees(){
      try{
        const employees = await axios.get("http://127.0.0.1:8000/api/employee/")
        setEmployees(employees.data)
      }
      catch(error){
      }
    }
    getAllEmployees()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <br></br><br></br>
      <h1 className='hs1'>Displaying Employee Data by connecting Frontend in React to Backend in Django (DRF)</h1>
      <br></br><br></br>     
      {
        employees.map((employee, i) => {
          return (
            <h2 key={i}className='hs2' ><br></br>{employee.empName} &emsp;&emsp; {employee.empDesignation} &emsp;&emsp; {employee.empCTC} &emsp;&emsp; {employee.empAddress} &emsp;&emsp; {employee.empMobile} </h2>
          )
        })
      }
    </div>
  );
}

export default App;
