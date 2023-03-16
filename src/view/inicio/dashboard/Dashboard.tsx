import { BsFillPersonFill } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import { TbDeviceAnalytics } from "react-icons/tb";
import { images } from "../../../helper";
import { RouteComponentProps } from "react-router-dom";

const Dashboard = (props: RouteComponentProps<{}>) => {

    return (
        <div className="">
            <h1 className="font-mont text-4xl text-center font-medium pt-5">
                Tablero de Control de Estudiantes Trica
            </h1>
            <h5 className="font-mont text-4xl text-center font-medium pb-5">
                DATOS USUARIO
            </h5>
            {/*  */}
            <div className=" flex justify-around flex-wrap">
                <a
                    href="#"
                    className="w-full my-1 md:w-2/4 lg:w-1/5 mx-2 flex flex-col items-center bg-green-500 rounded-lg border border-green-500 shadow-md md:flex-row  hover:bg-green-400"
                >
                    <div className="flex justify-between w-full p-4 leading-normal ">
                        <div className="w-2/3">
                            <h5
                                className="mb-2 text-2xl font-bold tracking-tight text-gray-100">
                                Nº
                            </h5>
                            <p className="mb-3 font-normal text-gray-100">Estudiantes Trica</p>
                        </div>
                        <div className="w-1/3 flex justify-center items-center">
                            <BsFillPersonFill className="text-6xl text-sombra" />
                        </div>
                    </div>
                </a>

                <a
                    href="#"
                    className="w-full my-1 md:w-2/4 lg:w-1/5 mx-2 flex flex-col items-center bg-blue-500 rounded-lg border border-blue-500 shadow-md md:flex-row  hover:bg-blue-400"
                >
                    <div className="flex justify-between w-full p-4 leading-normal ">
                        <div className="w-2/3">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">
                                Nº
                            </h5>
                            <p className="mb-3 font-normal text-gray-100">Seg. Estudiante</p>
                        </div>
                        <div className="w-1/3 flex justify-center items-center">
                            <GrAnalytics className="text-6xl text-sombra" />
                        </div>
                    </div>
                </a>

                <a
                    href="#"
                    className="w-full my-1 md:w-2/4 lg:w-1/5 mx-2 flex flex-col items-center bg-yellow-400 rounded-lg border border-yellow-400 shadow-md md:flex-row  hover:bg-yellow-500"
                >
                    <div className="flex justify-between w-full p-4 leading-normal ">
                        <div className="w-2/3">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">
                                Nº
                            </h5>
                            <p className="mb-3 font-normal text-gray-100">Seg. Asignados</p>
                        </div>
                        <div className="w-1/3 flex justify-center items-center">
                            <SiGoogleanalytics className="text-6xl text-sombra" />
                        </div>
                    </div>
                </a>

                <a
                    href="#"
                    className="w-full my-1 md:w-2/4 lg:w-1/5 mx-2 flex flex-col items-center bg-red-500 rounded-lg border border-red-500 shadow-md md:flex-row  hover:bg-red-400"
                >
                    <div className="flex justify-between w-full p-4 leading-normal ">
                        <div className="w-2/3">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">
                                Nº
                            </h5>
                            <p className="mb-3 font-normal text-gray-100">Total</p>
                        </div>
                        <div className="w-1/3 flex justify-center items-center">
                            <TbDeviceAnalytics className="text-6xl text-sombra" />
                        </div>
                    </div>
                </a>
            </div>
            {/*  */}

            {/*  */}
            <div>

                <div className="overflow-auto relative shadow-md sm:rounded-lg">
                    <h3 className="font-mont text-4xl text-center font-medium pt-10">Mis Estudiantes Tricas </h3>
                    <div className="flex justify-between items-center pb-4 bg-white ">


                    </div>
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Codigo
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Estudiante
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Asignatura
                                </th>
                                <th scope="col" className="py-3 px-6 text-center">
                                    Nivel - Seccion
                                </th>
                                <th scope="col" className="py-3 px-6 text-center">
                                    Tipo
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td className="py-4 px-6">
                                    asd
                                </td>
                                <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap ">
                                    <img className="w-10 h-10 rounded-full hover:scale-[5] scale transition duration-500 ease-in-out" src={images.logo_only} alt="Jese image" />
                                    <div className="pl-3">
                                        <div className="text-base font-semibold">wer</div>

                                        <div className="font-normal text-gray-500">wer</div>
                                    </div>
                                </th>
                                <td className="py-4 px-6">
                                    wer
                                </td>
                                <td className="py-4 px-6 text-center">
                                    wer
                                </td>
                                <td className="py-4 px-6 text-center">
                                    wer
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
            {/*  */}
        </div>
    );
}

export default Dashboard;