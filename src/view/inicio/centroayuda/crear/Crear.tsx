import { RouteComponentProps } from "react-router-dom";

const Crear = (props: RouteComponentProps<{}>) => {

    return (
        <>
            <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
                    <form className="relative mb-32">
                        <div className="flex flex-col visible w-full h-auto min-w-0 p-4 break-words bg-white opacity-100 border rounded-md bg-clip-border">
                            <h5 className="mb-0 font-bold text-lg">Registrar consulta</h5>
                            <p className="mb-0 leading-normal text-sm">Completa los campos requeridos para continuar.</p>

                            <div className="flex flex-wrap mt-4 -mx-3">
                                <div className="w-full max-w-full px-3 flex-0 sm:w-6/12">
                                    <label className="mb-2 ml-1 font-bold text-xs text-slate-700 ">Asunto</label>
                                    <input type="text" name="First Name" placeholder="Asunto de la consutal." className=" text-sm block w-full appearance-none rounded-md border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                                </div>
                                <div className="w-full max-w-full px-3 mt-4 flex-0 sm:mt-0 sm:w-6/12">
                                    <label className="mb-2 ml-1 font-bold text-xs text-slate-700 ">Tipo de Consulta</label>
                                    <select className="  text-sm block w-full appearance-none rounded-md border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none">
                                        <option>Seleccion</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-wrap mt-4 -mx-3">
                                <div className="w-full max-w-full px-3 flex-0">
                                    <label className="mb-2 ml-1 font-bold text-xs text-slate-700 ">Alumno</label>
                                    <input type="text" name="Company" placeholder="Ingrese su información para consultar..." className="focus:shadow-soft-primary-outline  text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" />
                                </div>                                
                            </div>

                            <div className="flex flex-wrap mt-4 -mx-3">
                                <div className="w-full max-w-full px-3 flex-0">
                                    <label className="mb-2 ml-1 font-bold text-xs text-slate-700 ">Descripción</label>
                                    <textarea 
                                    placeholder="Descripción de la consulta."
                                    className="focus:shadow-soft-primary-outline  text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"></textarea>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-3 gap-y-4 flex-col sm:flex-row">
                                <button
                                    type="button"
                                    aria-controls="address"
                                    next-form-btn=""
                                    className="w-full sm:w-auto text-sm font-semibold rounded-md bg-white text-gray-900 border px-3 py-2 hover:bg-upla-100 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-upla-100">
                                    <span className="mr-2">Cancelar</span>
                                    <i className="bi bi-x-circle"></i>
                                </button>
                                <button
                                    type="button"
                                    aria-controls="address"
                                    next-form-btn=""
                                    className="w-full sm:w-auto text-sm font-semibold rounded-md bg-upla-100 text-white border px-3 py-2 hover:bg-upla-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-upla-100">
                                    <span className="mr-2">Guardar</span>
                                    <i className="bi bi-box-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Crear;