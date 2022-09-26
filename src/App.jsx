import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import FormularioTareas from "./components/FormularioTareas";

function App() {
  return (
    <>
    <Container>
      <h1 className="display-5 text-center my-4">Lista de tareas</h1>
      <FormularioTareas></FormularioTareas>
    </Container>
    </>
  );
}

export default App;
