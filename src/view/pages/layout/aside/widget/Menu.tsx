import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

type Props = {
    Icon: JSX.Element,
    nombre: string,
    to: string,
}

const Menu = (props: Props) => {

    return (
        <li>
            <NavLink
                to={props.to}
                className="flex 
                items-center 
                p-2 text-sm 
                font-normal 
                text-gray-900 
                rounded-lg                             
                hover:bg-gray-100"
            >
                {props.Icon}
                <span className="ml-1">{props.nombre}</span>
            </NavLink>
        </li>
    );

}

export default Menu;