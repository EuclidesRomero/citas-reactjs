import { useState } from "react";
import Error from "./Error";

   const Formulario = ({pacientes, setPacientes}) => {
        const [nombre, setNombre] = useState('');
        const [propietario, setPropietario] = useState('');
        const [email, setEmail] = useState('');
        const [fecha, setFecha] = useState('');
        const [sintomas, setSintomas] = useState('');  //this
        const [error, setError] = useState(false);

        const generarId = () => {
            const random = Math.random().toString(36).substr(2);
            const fecha = Date.now().toString(36);

            return random + fecha;
        }
    
 

       const handleSubmit = (e) => {
           e.preventDefault();

           if ([nombre, propietario, email, fecha, sintomas].includes('')) {
               setError(true);
               return;
           } else {
               setError(false);

               const ObjetoPaciente = {
                   nombre,
                   propietario,
                   email,
                   fecha,
                   sintomas,
                   id : generarId()
               }
               setPacientes([...pacientes, ObjetoPaciente])
               //Reiniciamos el propietario
               setNombre('');
               setPropietario('');
               setEmail('');
               setFecha('');
               setSintomas('');
           }

       }


    return (
        <div className="md:w-1/2 lg:w-2/5  mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                añade pacientes y {''}
                <span className="text-indigo-600 font-bold text-lg"> administralos</span>
            </p>
            <form onSubmit={handleSubmit}
               className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                 { error && <Error Mensaje = {'Faltan campos'} /> }
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold ml-1">Nombre mascota</label>
                    <input id="mascota" type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder:via-gray-300 rounded-md"
                        value={nombre}
                        onChange={(e) => {
                            setNombre(e.target.value);
                        }} />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold ml-1">Nombre propietario</label>
                    <input id="propietario" type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder:via-gray-300 rounded-md"
                        value={propietario}
                        onChange={(e) => {
                            setPropietario(e.target.value);
                        }} />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold ml-1">Email de conta</label>
                    <input id="email" type="email"
                        placeholder="Correo electrónico"
                        className="border-2 w-full p-2 mt-2 placeholder:via-gray-300 rounded-md"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold ml-1">Fecha ingreso</label>
                    <input id="alta" type="date"
                        className="border-2 w-full p-2 mt-2 placeholder:via-gray-300 rounded-md"
                        value={fecha}
                        onChange={(e) => {
                            setFecha(e.target.value);
                        }} />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold ml-1">
                        Nota Ingreso</label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder:via-gray-300 rounded-md"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={(e) => {
                            setSintomas(e.target.value);
                        }} />
                </div>
                <input type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value="Registrar"
                />

            </form>
        </div>
    )


}

export default Formulario;
