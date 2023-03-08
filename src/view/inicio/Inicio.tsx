
import { useSelector } from 'react-redux';
import { Link, NavLink, Redirect, RouteComponentProps } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { BsFillPersonFill, BsPersonCircle } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import { TbDeviceAnalytics } from "react-icons/tb"
import { FiLogOut } from "react-icons/fi"
import { AiFillAppstore, AiFillBell, AiFillCaretLeft, AiFillSmile, AiOutlineBehance, AiOutlineMenu, AiOutlineMinus } from "react-icons/ai";
import { RootState } from '../../store/store';
import { images } from '../../helper';

const Inicio = (props: RouteComponentProps<{}>) => {

    const authentication = useSelector((state: RootState) => state.authentication.authentication)

    if (!authentication) {
        return <Redirect to="/login" />
    }

    return (
        <div className="flex w-full ">

            {/* Aside */}
            <aside
                id="Aside"
                className="z-50 overflow-auto lg:overflow-auto  fixed  ml-0  hidden md:block w-64 bg-gray-50 h-screen font-mont "
                aria-label="Sidebar"
            >
                <div className=" overflow-y-auto py-4 px-3 bg-gray-50 rounded">

                    <Link to="" className="hidden md:flex flex-col items-start pl-2.5 mb-5 ">
                        <div className="flex items-center">
                            <img src={images.logo_only} className="w-[45px] h-[28px] mr-0 sm:h-12" alt="Flowbite Logo" />
                            <div className="flex flex-col justify-center text-left ml-1">
                                <span className="font-mont text-xl text-upla-100 font-black">
                                    U P L A
                                </span>
                                <span className="text-xs">
                                    UNIVERSIDAD PERUANA LO ANDES
                                </span>
                            </div>
                        </div>
                        <small className="font-bold my-1">Seguimiento del Graduado</small>
                    </Link>

                    <div className="mt-6 md:mt-0">
                        <img
                            className=" p-1 m-auto w-32 h-32 rounded-full ring-2 ring-gray-300 hover:scale-110 ease-in duration-300"
                            src={`https://academico.upla.edu.pe/PhotD/76423388.jpg`}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = `https://avatars.dicebear.com/api/initials/76423388.svg?b=%23007cbc&bold=true`;
                            }}
                            alt="Rounded avatar"
                        />
                        <div className=" pt-3 flex justify-center items-center">
                            <h1 className=" text-center font-bold mr-3">
                                Datos de la persona
                            </h1>
                        </div>
                        <p className="text-center">76423388</p>
                    </div>
                    <ul className="space-y-2 ">
                        {/*  */}
                        <li data-tip data-for={""}>
                            <NavLink
                                to={""}
                                className="flex 
                            items-center 
                            p-2 text-sm 
                            font-normal 
                            text-gray-900 
                            rounded-lg                             
                             hover:bg-gray-100 
                             "
                            >
                                <AiFillAppstore className={`hover:bg-gray-100  flex justify-center items-center w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900`} />
                                <span className="ml-1">Nombre</span>
                            </NavLink>
                        </li>
                        {/*  */}
                        <li>
                            <button
                                data-tip data-for={"asd"}
                                // onClick={() => setEstado(!estado)}
                                type="button"
                                className={`bg-gray-100  flex items-center p-2 w-full text-sm font-normal text-gray-900 rounded-lg 
                                transition duration-75 group hover:bg-gray-100 `}
                                aria-controls="dropdown-example"
                                data-collapse-toggle="dropdown-example"
                            >
                                <AiFillSmile className={`hover:bg-gray-100  flex justify-center items-center w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900`} />
                                <span
                                    className="flex-1 ml-1 text-left whitespace-nowrap overflow-hidden"
                                    sidebar-toggle-item="true"
                                >
                                    Lista
                                </span>
                                <IoIosArrowDown className={` w-5 h-5`} />
                            </button>
                            <ul
                                id='dropdown-example'
                                className={`
                            block py-2
                            space-y-2 
                            border-l-2 
                            border-gray-300 
                            transition-opacity 
                            duration-1000 ease-in-out`}
                            >
                                <li data-tip data-for={""}>
                                    <NavLink
                                        to={""}
                                        className="flex 
                                    items-center 
                                    p-2 text-sm 
                                    font-normal 
                                    text-gray-900 
                                    rounded-lg             
                                    hover:bg-gray-100"
                                    >
                                        <AiOutlineMinus className={`hover:bg-gray-100 flex justify-center items-center w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 `} />
                                        <span className="ml-1">sub menu 1</span>
                                    </NavLink>
                                </li>

                                <li data-tip data-for={""}>
                                    <NavLink
                                        to={""}
                                        className="flex 
                                    items-center 
                                    p-2 text-sm 
                                    font-normal 
                                    text-gray-900 
                                    rounded-lg 
                                    hover:bg-gray-100 "
                                    >
                                        <AiOutlineMinus className={`hover:bg-gray-100 flex justify-center items-center w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900  `} />
                                        <span className="ml-1">sub menu 2</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/*  */}
                        <li data-tip data-for={""}>
                            <NavLink
                                to={""}
                                className="flex 
                            items-center 
                            p-2 text-sm 
                            font-normal 
                            text-gray-900 
                            rounded-lg 
                             hover:bg-gray-100 "
                            >
                                <AiOutlineBehance className={`hover:bg-gray-100  flex justify-center items-center w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900`} />
                                <span className="ml-1">Nombre</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="flex flex-col w-full items-center mx-0  md:w-[calc(100%_-_256px)] md:ml-[256px] break-words flex-wrap">
                {/* Navbar */}
                <nav className="bg-gray-50 left-0 md:left-[265px] fixed px-2 w-[100vw] md:w-[calc(100%_-_280px)] font-mont border-gray-200 md:rounded ">
                    <div className="flex flex-wrap justify-between md:justify-end items-center mx-auto">
                        {/* <Link to="" className="flex md:hidden justify-start items-center">
                            <img src={images.logo} className="w-[32px] h-[28px] sm:h-9" alt="Upla" />
                            <div className="flex flex-col ml-2">
                                <span className="text-sm leading-3 text-upla-100 font-semibold whitespace-nowrap">
                                    UPLA
                                </span>
                                <small className="font-bold">Seguimiento Estudiantil</small>
                            </div>
                        </Link> */}
                        {/* <button  className="md:hidden block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-upla-100 md:p-0"> <MdOutlineLightMode className="text-base rounded-full w-7 h-7 p-1 text-white hover:text-yellow-300" /> </button> */}
                        {/* <button  data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                        </button> */}
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex items-center flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0    ">
                                <li>
                                    <button className="flex items-center text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0    ">
                                        <AiOutlineMenu className='w-5 h-5' />
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0    ">
                                        <AiFillBell className='w-5 h-5' />
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0    ">
                                        <BsPersonCircle className='w-5 h-5' />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/*  */}
                <div className="mt-8 md:mt-20 w-full px-2 font-mont">
                    {/*INICIO NAVEGACION */}
                    <div className="content-wrapper my-4 flex-wrap">

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
                                    className="w-full my-1 md:w-1/5 mx-2 flex flex-col items-center bg-green-500 rounded-lg border border-green-500 shadow-md md:flex-row  hover:bg-green-400"
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
                                    className="w-full my-1 md:w-1/5 mx-2 flex flex-col items-center bg-blue-500 rounded-lg border border-blue-500 shadow-md md:flex-row  hover:bg-blue-400"
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
                                    className="w-full my-1 md:w-1/5 mx-2 flex flex-col items-center bg-yellow-400 rounded-lg border border-yellow-400 shadow-md md:flex-row  hover:bg-yellow-500"
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
                                    className="w-full my-1 md:w-1/5 mx-2 flex flex-col items-center bg-red-500 rounded-lg border border-red-500 shadow-md md:flex-row  hover:bg-red-400"
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

                                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
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

                    </div>
                    {/* FIN NAVEGACION  */}
                </div>
                {/*  */}
            </div>
        </div>
    );
}

export default Inicio;
