import { useRef, useState } from "react";
import Menu from "./Menu";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { css } from "../../../../../helper";

type Props = {
    Icon: JSX.Element,
    nombre: string,
}

const ListMenu = (props: Props) => {

    const refUl = useRef<HTMLUListElement>(null);

    const [dropdown, setDropdown] = useState<boolean>(false);

    return (
        <li>
            <button
                data-tip
                data-for={"lis1"}
                onClick={() => {
                    setDropdown(!dropdown)
                    refUl.current?.classList.toggle("hidden");

                }}
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
            >
                {props.Icon}
                <span
                    className="flex-1 
                    ml-1 
                    text-left 
                    whitespace-nowrap 
                    overflow-hidden"
                    sidebar-toggle-item="true"
                >
                    {props.nombre}
                </span>
                <IoIosArrowDown className={`${!dropdown && 'rotate-[-90deg]'} w-5 h-5`} />
            </button>
            <ul
                ref={refUl}
                className={` 
                            hidden
                            py-2
                            space-y-2 
                            border-l-2 
                            border-gray-300`}
            >
                <Menu
                    Icon={<AiOutlineMinus className={css.IconMenu} />}
                    nombre="sub menu 1"
                    to="#"
                />

                <Menu
                    Icon={<AiOutlineMinus className={css.IconMenu} />}
                    nombre="sub menu 2"
                    to="#"
                />
            </ul>
        </li>
    );

}

export default ListMenu;