import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormInput from "./Components/FormInput";
import QAist from "./Components/QAList";
import {Question} from './Data.js'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [data, setData]=useState(Question)

  const notify = (message, type) => {
    if (type === "Error")
      toast.error(message)
    else if (type === "Success")
      toast.success(message)
  };

  const AddItem =()=>{
    localStorage.setItem("items",JSON.stringify([...Question]))
    setData([...Question])
    notify("تم الاضافة بنجاح", "Success")
  }
  const deleteAllItems = () =>{
    localStorage.removeItem("items")
    Question.splice(0, Question.length);
    setData([])
    notify("تم حذف الكل بنجاح", "Success")

  }
  const deleteOneItem = (items) =>{
    localStorage.setItem("items",JSON.stringify([...items]))

    setData([...items])
    notify("تم حذف السوال بنجاح", "Success")
    if(items.length<=0){
      deleteAllItems();
    }
    

  }
  return (
    <div className="font text-center color-body">
      <Container className="p-5">

        <Row className="justify-content-center">

          <Col sm="4">

            <div className="fs-3 text-center py-2"> أسئله و اجوبه شائعه </div>
          
          </Col>

          <Col sm="8">

            <FormInput onAdd={AddItem} notify={notify}/>
            <QAist data={data} deleteOneItem={deleteOneItem}/>
            {
              localStorage.getItem("items")!=null ? (<button onClick={deleteAllItems} className="btn-color w-100 my-2">مسح الكل</button>) :null
            }

          </Col>

        </Row>
        <ToastContainer/>
      </Container>
    </div>
  );
}

export default App;
