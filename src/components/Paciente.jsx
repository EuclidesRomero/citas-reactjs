
const Paciente = ({paciente, setPaciente}) => {
    console.log(paciente)
  return (
    
     <div className=" m-3 bg-white shadow-md px-5 py-10 rounded-xld">
        <p className="font-bold mb3 text-gray-700">Nombre: {''}
            <span className="font-normal normal-case">
                {paciente.nombre}
            </span>
        </p>
        <p className="font-bold mb3 text-gray-700">Propietario: {''}
            <span className="font-normal normal-case">
                {paciente.propietario}
            </span>
        </p>
        <p className="font-bold mb3 text-gray-700">Email: {''}
            <span className="font-normal normal-case">
               {paciente.email}
            </span>
        </p>
        <p className="font-bold mb3 text-gray-700">Fecha Alta: {''}
            <span className="font-normal normal-case">
               {paciente.fecha} 
            </span>
        </p>
        <p className="font-bold mb3 text-gray-700">Ingreso: {''}
            <span className="font-normal normal-case">
                {paciente.sintomas}
            </span>
        </p>
        <div className="flex justify-between pt-6">
            <button
             type="button"
             className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase"
             onClick={() =>setPaciente(paciente)}
             > Editar
            </button>
            
            <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg uppercase"> Eliminar
            </button>
        </div>
        

      </div>

  )
}

export default Paciente
