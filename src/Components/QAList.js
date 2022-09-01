import { Row, Accordion } from "react-bootstrap";

import React from "react";
import { Question } from "../Data";

const QAist = ({ data, deleteOneItem }) => {
  const dataLocal = JSON.parse(localStorage.getItem("items"));

  const onDeleteItem = (ID) => {
    if (localStorage.getItem("items") != null) {
      if (data.length >= 1) {
        const index = Question.findIndex((item) => item.id === ID);
        Question.splice(index, 1);
        deleteOneItem(Question);
      }
    }
  };
  return (
    <Row>
      <Accordion defaultActiveKey="0">
        {localStorage.getItem("items") != null ? (
          dataLocal.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className="m-auto">{item.q}</div>
                </Accordion.Header>
                <Accordion.Body className="text-end">
                  <div className="px-3 d-inline ">{item.a}</div>
                  <button
                    onClick={() => onDeleteItem(item.id)}
                    className="btn-color"
                  >
                    مسح السؤال
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5"> لا يوجد اسئله الان</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAist;
