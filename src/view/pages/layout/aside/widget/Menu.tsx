import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

type Props = {
    pathname: string,
    Icon: JSX.Element,
    nombre: string,
    to: string,
}

const Menu = (props: Props) => {
    return (
        <li>
            <NavLink
                to={props.to}
                className={`${props.to === props.pathname ? "bg-upla-100 text-white" : ""}
                flex 
                items-center 
                p-4 
                text-sm 
                font-normal 
                text-gray-900   
                hover:text-gray-900                       
                hover:bg-gray-300             
                transition-all 
                duration-200`}
            >
                {props.Icon}
                <span className="ml-1">{props.nombre}</span>
            </NavLink>
        </li>
    );

}

export default Menu;