import { useDispatch } from "react-redux";
import { logout } from "../../../../store/authSlice.store";

type Props = {
    refBlock: React.RefObject<HTMLInputElement>,
    onEventMenu: React.MouseEventHandler,
}

const Nav = (props: Props) => {

    const dispatch = useDispatch();

    return (
        <nav
            className="
            drop-shadow
            bg-upla-100
            flex 
            left-0
            fixed  
            w-full 
            font-mont 
          border-gray-200
            z-20 
            h-[50px]">
            <div
                ref={props.refBlock}
                className="
                w-0
                md:w-64      
                bg-gray-50 
                transition-all
                duration-500">
            </div>
            <button
                onClick={props.onEventMenu}
                className="flex items-center justify-center px-4 text-white hover:bg-white hover:text-upla-100">
                <i className="bi bi-justify text-2xl"></i>
            </button>
            <ul className="flex items-center flex-1 justify-end pr-3">
                <li className="flex justify-center h-full">
                    <button className="px-4 text-white hover:bg-white hover:text-upla-100 ">
                        <i className="bi bi-bell text-xl"></i>
                    </button>
                </li>
                <li className="flex justify-center h-full">
                    <button
                        onClick={() => dispatch(logout())}
                        className="px-4 text-white hover:bg-white hover:text-upla-100">
                        <i className="bi bi-person-circle text-xl"></i>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;