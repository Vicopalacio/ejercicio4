import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ propsTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {propsTarea}
      <Button variant="success"> Borrar </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
