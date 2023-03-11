import { Link, NavLink } from "react-router-dom";
import { images } from '../../../helper';
import { useState } from "react";
import { AiFillAppstore, AiFillSmile, AiOutlineBehance, AiOutlineMinus } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
    refAside: React.RefObject<HTMLInputElement>,
    refOverlay: React.RefObject<HTMLInputElement>,
    onEventOverlay: React.MouseEventHandler,
    // () => void
}

const Aside = (props: Props) => {

    const [dropdown, setDropdown] = useState(false);

    return (
        <aside
            id="Aside"
            ref={props.refAside}
            className="
            w-[256px] 
            ml-[-256px]
            md:ml-[0px]
            transition-all
            duration-700
            z-50                
            overflow-auto 
            fixed 
            block 
          bg-gray-50 
            h-screen 
            font-mont"
            aria-label="Sidebar"
        >
            <div className="relative z-30 h-full overflow-y-auto py-4 px-3 bg-gray-50">
                <Link to="#" className="flex flex-col items-center pl-2.5 mb-5 ">
                    <div className="flex items-center">
                        <img src={images.logo_only} className="w-14 mr-0" alt="Flowbite Logo" />
                        <div className="flex flex-col justify-center text-left ml-1">
                            <span className="font-mont text-xl text-upla-100 font-black">
                                U P L A
                            </span>
                            <span className="text-[7px]">
                                UNIVERSIDAD PERUANA LO ANDES
                            </span>
                        </div>
                    </div>
                    <small className="font-bold my-2">Seguimiento del Graduado</small>
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
                    <div
                        className="pt-3 
                            flex 
                            justify-center 
                            items-center">
                        <h1 className="text-center font-bold mr-3">
                            Datos de la persona
                        </h1>
                    </div>
                    <p className="text-center">76423388</p>
                </div>

                <ul className="space-y-2 ">
                    {/*  */}
                    <li data-tip data-for={""}>
                        <NavLink
                            to={"#"}
                            className="flex 
                                items-center 
                                p-2 text-sm 
                                font-normal 
                                text-gray-900 
                                rounded-lg                             
                                hover:bg-gray-100"
                        >
                            <AiFillAppstore className={`hover:bg-gray-100  flex justify-center items-center w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900`} />
                            <span className="ml-1">Nombre</span>
                        </NavLink>
                    </li>
                    {/*  */}
                    <li>
                        <button
                            data-tip
                            data-for={"lis1"}
                            onClick={() => setDropdown(!dropdown)}
                            type="button"
                            className={`bg-gray-100  
                                flex 
                                items-center 
                                p-2 
                                w-full 
                                text-sm 
                                font-normal 
                                text-gray-900 
                                rounded-lg 
                                transition 
                                duration-75 
                                group 
                                hover:bg-gray-100 `}
                            aria-controls="dropdown-example"
                            data-collapse-toggle="dropdown-example"
                        >
                            <AiFillSmile
                                className={`hover:bg-gray-100  
                                    flex 
                                    justify-center 
                                    items-center 
                                    w-6 
                                    h-6 
                                    text-gray-500 
                                    transition 
                                    duration-75 
                                    group-hover:text-gray-900`} />
                            <span
                                className="flex-1 
                                    ml-1 
                                    text-left 
                                    whitespace-nowrap 
                                    overflow-hidden"
                                sidebar-toggle-item="true"
                            >
                                Lista 1
                            </span>
                            <IoIosArrowDown className={`${!dropdown && 'rotate-[-90deg]'} w-5 h-5`} />
                        </button>
                        <ul
                            id='dropdown-example'
                            className={`                                
                                ${!dropdown && 'hidden'} 
                                py-2
                                space-y-2 
                                border-l-2 
                                border-gray-300 
                                transition-all
                                duration-700`}
                        >
                            <li data-tip data-for={""}>
                                <NavLink
                                    to={"#"}
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
                                    to={"#"}
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
                            to={"#"}
                            className="flex 
                                items-center 
                                p-2 text-sm 
                                font-normal 
                                text-gray-900 
                                rounded-lg 
                                hover:bg-gray-100"
                        >
                            <AiOutlineBehance
                                className={`hover:bg-gray-100  
                                    flex 
                                    justify-center 
                                    items-center 
                                    w-6 
                                    h-6 
                                    text-gray-500 
                                    transition 
                                    duration-75 
                                    group-hover:text-gray-900`} />
                            <span className="ml-1">Nombre</span>
                        </NavLink>
                    </li>
                    {/*  */}
                    <li>
                        <button
                            data-tip
                            data-for={"lis2"}
                            onClick={() => setDropdown(dropdown)}
                            type="button"
                            className={`bg-gray-100  
                                flex 
                                items-center 
                                p-2 
                                w-full 
                                text-sm 
                                font-normal 
                                text-gray-900 
                                rounded-lg 
                                transition 
                                duration-75 
                                group 
                                hover:bg-gray-100`}
                            aria-controls="dropdown-example"
                            data-collapse-toggle="dropdown-example"
                        >
                            <AiFillSmile
                                className={`hover:bg-gray-100  
                                    flex 
                                    justify-center 
                                    items-center 
                                    w-6 
                                    h-6 
                                    text-gray-500 
                                    transition 
                                    duration-75 
                                    group-hover:text-gray-900`} />
                            <span
                                className="flex-1 ml-1 text-left whitespace-nowrap overflow-hidden"
                                sidebar-toggle-item="true"
                            >
                                Lista 2
                            </span>
                            <IoIosArrowDown className={`${!dropdown && 'rotate-[-90deg]'} w-5 h-5`} />
                        </button>
                        <ul
                            id='dropdown-example'
                            className={`                                
                                ${!dropdown && 'hidden'} 
                                py-2
                                space-y-2 
                                border-l-2 
                                border-gray-300 
                                transition-all
                                duration-700`}
                        >
                            <li data-tip data-for={""}>
                                <NavLink
                                    to={"#"}
                                    className="flex 
                                        items-center 
                                        p-2 text-sm 
                                        font-normal 
                                        text-gray-900 
                                        rounded-lg             
                                        hover:bg-gray-100">
                                    <AiOutlineMinus className={`hover:bg-gray-100 flex justify-center items-center w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 `} />
                                    <span className="ml-1">sub menu 1</span>
                                </NavLink>
                            </li>

                            <li data-tip data-for={""}>
                                <NavLink
                                    to={"#"}
                                    className="flex 
                                        items-center 
                                        p-2 text-sm 
                                        font-normal 
                                        text-gray-900 
                                        rounded-lg 
                                        hover:bg-gray-100">
                                    <AiOutlineMinus className={`hover:bg-gray-100 flex justify-center items-center w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900  `} />
                                    <span className="ml-1">sub menu 2</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div
                ref={props.refOverlay}
                onClick={props.onEventOverlay}
                className="
                hidden
                md:hidden
              bg-[rgba(0,0,0,.3)]
                fixed
                left-0
                top-0
                right-0
                bottom-0
                z-20"
                role="button"
                tabIndex={0}
                aria-label='overlay'>
            </div>
        </aside>
    );
}

export default Aside;