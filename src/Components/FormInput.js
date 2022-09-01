import React, { useState } from 'react'
import { Form , Row , Col  } from "react-bootstrap";
import {Question} from '../Data'


const FormInput = ({onAdd , notify}) => {
    const [qu,setQu]= useState('')
    const [an,setAn]= useState('')

    const addNewItem=()=>{
        if (qu==="" || an===""){
            notify("من فضلكك اكمل البيانات","Error")
            return
        }
        Question.push({id:Math.random(),q: qu , a: an });
        setQu('')
        setAn('')
        onAdd()
        
        console.log(Question)
    }
  return (
    <Row className='my-3'>
       <Col sm="5">
          <Form.Control value={qu} onChange={(e)=>setQu(e.target.value)} type="text" placeholder="أدخل سؤال" />
      </Col>
         
        <Col sm="5">
            <Form.Control value={an} onChange={(e)=>setAn(e.target.value)} type="text" placeholder="ادخل اجابة السؤال" />
        </Col>

        <Col sm="2">
      <button onClick={addNewItem} className="btn-color w-100" type="submit">
        اضافه
      </button>
      </Col>
    </Row>
  )
}

export default FormInput
