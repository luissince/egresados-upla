import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../store/authSlice.store";
import useEventSource, { EventResponse } from "../../../../component/hooks/useEventSource";
import { useEffect } from "react";
import toast from 'react-hot-toast';
import { sound } from "../../../../helper/index.helper";
import { RootState } from "../../../../store/configureStore.store";

type Props = {
    refBlock: React.RefObject<HTMLInputElement>,
    onEventMenu: React.MouseEventHandler,
}

const Nav = (props: Props) => {

    const dispatch = useDispatch();

    const codigo = useSelector((state: RootState) => state.autenticacion.codigo)

    const message: EventResponse | undefined = useEventSource(`${import.meta.env.VITE_URL_SERVER_SEND_EVENT}notify?id=${codigo}`)
    // const message = useEventSource("http://172.16.2.10:9000/")
    // const message: EventResponse | undefined = useEventSource(import.meta.env.VITE_URL_SERVER_SEND_EVENT)

    useEffect(() => {
        const loadNotify = async () => {
            if (message != undefined && Object.keys(message).length !== 0) {
                console.log(message)
                toast((t) => (
                    <div className="flex gap-x-4">

                        <div className="flex items-center">
                            <div className="flex-shrink-0 pt-0.5">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                    alt=""
                                />
                            </div>

                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                    {message.titulo}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    {message.mensaje}
                                </p>
                            </div>
                        </div>

                        <div className="flex border-l border-gray-200">
                            <button
                                onClick={() => toast.dismiss(t.id)}
                                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-upla-100 hover:text-upla-200 focus:outline-none focus:ring-2 focus:ring-upla-100">
                                Cerrar
                            </button>
                        </div>
                    </div>
                ), {
                    position: "top-right"
                })

                const audio = new Audio(sound.mixkit); 
                if (audio !== undefined) {
                    const promise = audio.play();
                    if (promise !== undefined) { 
                        promise.then(_ => {
                        }).catch(error => {
                            console.log(error)
                        });
                    }
                }
            }
        }

        loadNotify();
    }, [message]);

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