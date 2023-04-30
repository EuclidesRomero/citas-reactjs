import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setpaciente] = useState({});
  return (
  <div className="container mx-auto mt-20">
    <Header />

    <div className="mt-12 md:flex"> 
      <Formulario
       pacientes = { pacientes }
       setPacientes = {setPacientes}  
      />
      <ListadoPacientes
      pacientes = { pacientes }
      setPaciente = {setpaciente}/>
    </div>
    <Footer />
   </div>
  )
}

export default App
