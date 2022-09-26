import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArregloTareas] = useState([]);

  const funcionSubmit = (e) => {
    e.preventDefault();
    setArregloTareas([...arregloTareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (posicion)=>{
    let arregloModificado = arregloTareas.filter((item)=> item !== posicion)
    setArregloTareas(arregloModificado);
  }

  return (
    <>
      <Form onSubmit={funcionSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicTarea">
          <Form.Control
            type="text"
            placeholder="Añadir tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="warning" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas propsArregloTareas={arregloTareas} propsBorrarTarea={borrarTarea}></ListaTareas>
    </>
  );
};

export default FormularioTareas;
