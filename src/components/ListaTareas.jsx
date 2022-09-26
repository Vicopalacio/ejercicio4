import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ propsArregloTareas, propsBorrarTarea }) => {
  return (
    <ListGroup>
        {
            propsArregloTareas.map((tarea, posicion)=> <ItemTarea key={posicion} propsTarea={tarea} propsBorrarTarea={propsBorrarTarea}></ItemTarea>)
        }
    </ListGroup>
  );
};

export default ListaTareas;
