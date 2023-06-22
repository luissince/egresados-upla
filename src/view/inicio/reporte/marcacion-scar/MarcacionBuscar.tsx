import { RouteComponentProps } from "react-router-dom";

const MarcacionBuscar = (props: RouteComponentProps<{}>) => {

    return (
        <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 flex-0">
                <div className=" relative flex flex-col visible w-full h-auto min-w-0 p-4 break-words bg-white opacity-100 border rounded-md bg-clip-border">

                    <div className="flex items-start justify-between flex-col lg:flex-row">
                        <div>
                            <h5 className="mb-0 font-bold text-lg">Sistema de Control de Acceso</h5>
                            <p className="">Reporte de ingresos por fecha de estudiante, docente, no docente, visitante y vehículo.</p>
                        </div>

                        <div className="my-3 flex items-center justify-start gap-x-3 gap-y-4 flex-col sm:flex-row">
                            <button
                                type="button"
                                aria-controls="address"
                                next-form-btn=""
                                className="focus:outline-none  bg-white border hover:bg-gray-500 hover:text-white focus:ring-4 focus:ring-gray-300 rounded-md text-sm px-4 py-2"
                                onClick={() => {

                                }}>
                                <span className="mr-2">Recargar</span>
                                <i className="bi bi-arrow-clockwise"></i>
                            </button>
                            <button
                                type="button"
                                aria-controls="recargar"
                                next-form-btn=""
                                className="focus:outline-none  text-white  bg-upla-100  hover:bg-upla-200 hover:text-white focus:ring-4 focus:ring-upla-50 rounded-md text-sm px-4 py-2"
                                onClick={() => { }}
                            >
                                <span className="mr-2">Agregar</span>
                                <i className="bi bi-plus"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MarcacionBuscar;