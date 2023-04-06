import { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { LoaderSvg } from "../../../../component/Svg.component";
import Response from "../../../../model/class/response.model.class";
import RestError from "../../../../model/class/resterror.model.class";
import { Types } from "../../../../model/enum/types.model";
import Paginacion from "../../../../component/Paginacion.component";
import { ListarRespuestasPorIdConsultaRest, ObtenerConsultaPorIdConsultaRest } from "../../../../network/rest/index.network";
import Responde from "../../../../model/interfaces/soporte/responde.model.interface";
import Respuesta from "../../../../model/interfaces/soporte/respuesta.model.interface";
import { formatTime } from "../../../../helper/herramieta.helper";
import Consulta from "../../../../model/interfaces/soporte/consulta.model.interfaces";
import { images } from "../../../../helper/index.helper";
import CustomModal from "../../../../component/Modal.component";



const Responder = (props: RouteComponentProps<{}>) => {

    const [loadingConsulta, setLoadingConsulta] = useState<boolean>(true);
    const [consulta, setConsulta] = useState<Consulta>();

    const opcion = useRef<number>(0);
    const paginacion = useRef<number>(0);
    const restart = useRef<boolean>(false);
    const totalPaginacion = useRef<number>(0);
    const filasPorPagina = useRef<number>(10);
    const [loadingRespuesta, setLoadingRespuesta] = useState<boolean>(false);
    const [respuestas, setRespuestas] = useState<Respuesta[]>([]);

    const [isOpen, setIsOpen] = useState(false);

    const abortControllerCabecera = useRef(new AbortController());
    const abortControllerDetalle = useRef(new AbortController());

    const loadCabecera = async () => {
        console.log(props.location.state)
        const response = await ObtenerConsultaPorIdConsultaRest<Consulta>("CS0001", abortControllerCabecera.current);

        if (response instanceof Response) {
            setConsulta(response.data);
            setLoadingConsulta(false);
        }

        if (response instanceof RestError) {
            if (response.getType() === Types.CANCELED) return;


        }
    }

    const loadDetalle = async () => {
        if (loadingRespuesta) return;

        paginacion.current = 1;
        restart.current = true;
        fillTable();
        opcion.current = 0;
    }


    const paginacionTable = (listid: number) => {
        paginacion.current = listid;
        restart.current = false;
        onEventPaginacion();
    }

    const onEventPaginacion = () => {
        switch (opcion.current) {
            case 0:
                fillTable();
                break;

            default: fillTable();
        }
    }

    const fillTable = async () => {
        setLoadingRespuesta(true);
        setRespuestas([]);

        const data = {
            "idConsulta": "CS0001",
            "posPagina": ((paginacion.current - 1) * filasPorPagina.current),
            "filaPagina": filasPorPagina.current
        }

        const response = await ListarRespuestasPorIdConsultaRest<Responde>(data, abortControllerDetalle.current);

        if (response instanceof Response) {
            console.log(response);
            totalPaginacion.current = Math.ceil(response.data.total / filasPorPagina.current);
            setRespuestas(response.data.resultado as Respuesta[])
            setLoadingRespuesta(false);
        }

        if (response instanceof RestError) {
            if (response.getType() === Types.CANCELED) return;

            setRespuestas([]);
            setLoadingRespuesta(false);
        }
    }

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        loadCabecera();
        loadDetalle();

        () => {
            abortControllerCabecera.current.abort();
            abortControllerDetalle.current.abort();
        }
    }, []);

    return (
        <div className="flex flex-wrap -mx-3">
            <div className="w-full max-w-full px-3 flex-0">
                <div className=" relative flex flex-col visible w-full h-auto min-w-0 p-4 break-words bg-white opacity-100 border rounded-md bg-clip-border">

                    {loadingConsulta && <div className="absolute z-[500] left-0 top-0 right-0 bottom-0">
                        <div className=" w-full h-full bg-gray-900 opacity-80"></div>
                        <div className=" w-full h-full absolute left-0 top-0 text-white flex justify-center items-center flex-col">
                            <img src={images.logo} className="w-[10.5rem] mr-0 my-3" alt="Flowbite Logo" />
                            <div style={{ "borderTopColor": "transparent" }}
                                className="w-16 h-16 border-4 border-upla-100 border-solid rounded-full animate-spin">
                            </div>
                            <h1 className='m-3 text-center'>Cargando información...</h1>
                        </div>
                    </div>}

                    <CustomModal isOpen={isOpen} onClose={handleClose}>
                        <h1>Modal Title</h1>
                        <p>Modal Content</p>
                        <button onClick={handleClose}>Close Modal</button>
                    </CustomModal>

                    <div className="flex items-start justify-between flex-col lg:flex-row">
                        <div>
                            <h5 className="mb-0 font-bold text-lg">Registrar respuesta</h5>
                            <p className="">Se va listar todas las respuestas de la consulta realizada.</p>
                        </div>

                        <div className="my-3 flex items-center justify-start gap-x-3 gap-y-4 flex-col sm:flex-row">
                            <button
                                type="button"
                                aria-controls="address"
                                next-form-btn=""
                                className="w-full sm:w-auto text-sm font-semibold rounded-md bg-white text-gray-900 border px-3 py-2 hover:bg-upla-100 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-upla-100"
                                onClick={() => props.history.goBack()}>
                                <span className="mr-2">Regresar</span>
                                <i className="bi bi-arrow-left-circle"></i>
                            </button>
                            <button
                                type="button"
                                aria-controls="address"
                                next-form-btn=""
                                className="w-full sm:w-auto text-sm font-semibold rounded-md bg-white text-gray-900 border px-3 py-2 hover:bg-upla-100 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-upla-100"
                                onClick={() => {
                                    setLoadingConsulta(true);
                                    loadCabecera();
                                    loadDetalle();
                                }}>
                                <span className="mr-2">Recargar</span>
                                <i className="bi bi-arrow-clockwise"></i>
                            </button>
                            <button
                                type="button"
                                aria-controls="recargar"
                                next-form-btn=""
                                className="w-full sm:w-auto text-sm font-semibold rounded-md bg-upla-100 text-white border px-3 py-2 hover:bg-upla-200 hover:text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-upla-100"
                                onClick={handleOpen}
                           >
                                <span className="mr-2">Responder</span>
                                <i className="bi bi-lightbulb"></i>
                            </button>
                        </div>
                    </div>

                    <div className="flex-auto gap-y-4">

                        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                            <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal border-0 rounded-t-lg text-sm text-inherit">
                                <strong className="text-slate-700 dark:text-white">Ticket:</strong> &nbsp; {consulta?.ticket}
                            </li>
                            <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal border-0 rounded-t-lg text-sm text-inherit">
                                <strong className="text-slate-700 dark:text-white">Tipo:</strong> &nbsp; {consulta?.tipoConsultaDetalle}
                            </li>
                            <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal border-0 rounded-t-lg text-sm text-inherit">
                                <strong className="text-slate-700 dark:text-white">Estado:</strong> &nbsp; {consulta?.estado_descripcion}
                            </li>
                            <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal border-0 rounded-t-lg text-sm text-inherit">
                                <strong className="text-slate-700 dark:text-white">Asunto:</strong> &nbsp; {consulta?.asunto}
                            </li>
                            <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal border-0 rounded-t-lg text-sm text-inherit">
                                <strong className="text-slate-700 dark:text-white">Descripción:</strong> &nbsp; {consulta?.descripcion}
                            </li>
                        </ul>
                    </div>

                    <div className="relative overflow-auto rounded-md my-6">
                        <table className="w-full text-gray-700 bg-upla-100 border">
                            <thead className="align-bottom">
                                <tr>
                                    <th className="px-6 py-2 font-bold text-center uppercase align-middle text-white text-xs w-[5%]">#</th>
                                    <th className="px-6 py-2 font-bold text-center uppercase align-middle text-white text-xs w-[25%]">Fecha y Hora</th>
                                    <th className="px-6 py-2 font-bold text-center uppercase align-middle text-white text-xs w-[70%]">Descripción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loadingRespuesta ?
                                        <tr className="text-center bg-white border-b">
                                            <td colSpan={3} className="text-sm p-2 border-b border-solid">
                                                <div className="flex items-center justify-center">
                                                    <LoaderSvg /> <span>Cargando datos...</span>
                                                </div>
                                            </td>
                                        </tr>
                                        :
                                        respuestas.length == 0 ?
                                            (<tr className="text-center bg-white border-b">
                                                <td colSpan={3} className="text-sm p-2  border-b border-solid">No hay datos para mostrar.</td>
                                            </tr>)
                                            :
                                            respuestas.map((item, index) => {

                                                return (
                                                    <tr key={index} className="bg-white border-b">
                                                        <td className="text-sm p-2 text-center align-middle border-b border-solid whitespace-nowrap">{item.id}</td>
                                                        <td className="text-sm p-2 text-center align-middle border-b border-solid whitespace-nowrap">{item.fecha} <br />{formatTime(item.hora)}</td>
                                                        <td className="text-sm p-2 text-left align-middle border-b border-solid whitespace-nowrap">{item.detalle}</td>
                                                    </tr>
                                                );
                                            })
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-between flex-col md:flex-row gap-y-4">
                        <div>
                            <span className="text-sm font-normal text-gray-900 ">Mostrando <span className="font-semibold text-gray-900">{paginacion.current}-{totalPaginacion.current}</span> de <span className="font-semibold text-gray-900">{filasPorPagina.current} </span>filas </span>
                        </div>
                        <nav className="bg-white rounded-md">
                            <ul className="flex">
                                <Paginacion
                                    loading={loadingRespuesta}
                                    restart={restart.current}
                                    paginacion={paginacion.current}
                                    totalPaginacion={totalPaginacion.current}
                                    fillTable={paginacionTable}
                                />
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Responder;