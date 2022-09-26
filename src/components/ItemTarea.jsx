import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ propsTarea, propsBorrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {propsTarea}
      <Button variant="success" onClick={()=> propsBorrarTarea(propsTarea)}> Borrar </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
