const Paciente = ({paciente, setPaciente, elimarPaciente}) => {
    const { nombre, propietario, email, alta, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm("¿Deseas eliminar al paciente " + nombre + "?")
        if ( respuesta ) {
            elimarPaciente(id)
        }
    }

    return (
        <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-md my-5">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case">{nombre}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{propietario}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: <span className="font-normal normal-case">{alta}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>

            <div className="flex lg:justify-end justify-center">
                <button 
                    type="button" 
                    className="bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-bold px-5 py-2 cursor-pointer transition-all mr-5" 
                    onClick={() => setPaciente(paciente)}>Editar</button>
                <button 
                    type="button" 
                    className="bg-red-600 hover:bg-red-700 rounded-md text-white font-bold px-5 py-2 cursor-pointer transition-all" 
                    onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
