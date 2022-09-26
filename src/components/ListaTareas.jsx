import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ propsArregloTareas }) => {
  return (
    <ListGroup>
        {
            propsArregloTareas.map((tarea, posicion)=> <ItemTarea key={posicion} propsTarea={tarea}></ItemTarea>)
        }
    </ListGroup>
  );
};

export default ListaTareas;
