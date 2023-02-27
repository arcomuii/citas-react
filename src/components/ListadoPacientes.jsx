import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, elimarPaciente}) => {
    
    return (
        <>
            <div className="md:w-1/2 lg:w-3/5">
                {pacientes && pacientes.length ? 
                    <>
                        <h2 className="font-bla
                        text-3xl
                        text-center">Listado de Pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">Adminsitra tus<span className="text-indigo-600 font-bold"> Pacietnes y Citas</span></p>

                        <div className="md:h-screen md:overflow-y-scroll pb-10">
                            { 
                                pacientes.map( 
                                    paciente => ( 
                                        <Paciente 
                                            key={paciente.id}
                                            paciente={paciente}
                                            setPaciente={setPaciente}
                                            elimarPaciente={elimarPaciente}
                                        /> 
                                    ) 
                                ) 
                            }
                        </div>
                    </> :
                    <>
                        <h2 className="font-bla
                        text-3xl
                        text-center">No hay pacientes</h2>
                        <p className="text-xl mt-5 mb-10 text-center">Comienza agregando pacientes<span className="text-indigo-600 font-bold"> y aparecerán en este lugar</span></p>
                    </>
                }
            </div>
        </>
    )
}

export default ListadoPacientes