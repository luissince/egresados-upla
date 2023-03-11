import { AiFillBell, AiOutlineMenu } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/authSlice";

type Props = {
    refBlock: React.RefObject<HTMLInputElement>,
    onEventMenu: React.MouseEventHandler,
}

const Nav = (props: Props) => {

    const dispatch = useDispatch();

    return (
        <nav
            className="
          bg-gray-200
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
                duration-700">
            </div>
            <button
                onClick={props.onEventMenu}
                className="flex items-center justify-center px-4 text-gray-700 hover:bg-gray-300">
                <AiOutlineMenu className='w-5 h-5' />
            </button>
            <ul className="flex items-center flex-1 justify-end pr-3">
                <li className="flex justify-center h-full">
                    <button className="px-4 text-gray-700 hover:bg-gray-300 ">
                        <AiFillBell className='w-5 h-5' />
                    </button>
                </li>
                <li className="flex justify-center h-full">
                    <button
                        onClick={() => {
                            dispatch(logout());
                        }}
                        className="px-4 text-gray-700 hover:bg-gray-300">
                        <BsPersonCircle className='w-5 h-5' />
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;