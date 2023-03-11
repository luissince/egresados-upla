import React, { useRef, useState } from "react";
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import { images } from "../../helper";
import { AcedemicCapSvg, ArrowRightOnCicleSvg, EyeSlashSvg, EyeSvg, LoaderSvg } from "../../component/svg/Svg";
import { login } from "../../store/authSlice";

const Login = (props: RouteComponentProps<{}>) => {

    const dispatch = useDispatch();
    const authentication = useSelector((state: RootState) => state.authentication.authentication)

    const [codigo, setCodigo] = useState('');
    const [clave, setClave] = useState('');
    const [message, setMessage] = useState('');
    const [process, setProcess] = useState(false);

    const [see, setSee] = useState(false);

    const [codigoMessage, setCodigoMessage] = useState('');
    const [claveMessage, setClaveMessage] = useState('');

    const refCodigo = useRef<HTMLInputElement>(null);
    const refClave = useRef<HTMLInputElement>(null);

    const onEventLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (process) return;

        setCodigoMessage("");
        setClaveMessage("");

        if (codigo == "") {
            refCodigo.current!.focus();
            setCodigoMessage("!El campo es oblogatorio¡");
            return;
        }

        if (clave == "") {
            refClave.current!.focus();
            setClaveMessage("!El campo es oblogatorio¡");
            return;
        }

        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }

        setProcess(true);

        await new Promise((resolve) => {
            setTimeout(resolve, 3000);
        });

        const data = {
            "codigo": codigo,
            "password": clave,
            "token": "qwe1qwe-266q6we2-wqweqw"
        };

        dispatch(login({ user: data }));

        setProcess(false);
    }

    const onEvenSeePassword = () => {
        setSee(!see);
        refClave.current?.focus();
    }

    if (authentication) {
        return <Redirect to="/inicio" />
    }

    return <>
        <div className="flex flex-wrap w-screen h-screen">
            <div className="bg-portada relative -z-20 bg-cover hidden md:flex md:w-1/2 xl:w-2/3">
                <div className="bg-sombra w-full  h-screen absolute -z-10"></div>
                <div className="m-auto text-white text-center">
                    <motion.p
                        className="text-lg md:text-xl lg:text-3xl font-mont font-thin"
                        initial={{ x: -1000, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}>Bienvenidos al Sistema</motion.p>
                    <motion.h1 className="text-2xl md:text-4xl lg:text-6xl font-mont font-bold"
                        initial={{ x: -1000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >SEGUIMIENTO DEL GRADUADO</motion.h1>
                    <motion.p
                        className="text-lg md:text-xl lg:text-2xl font-mont font-thin flex justify-center items-center"
                        initial={{ x: -1000, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}> <span className="px-1">(SGD)</span> <AcedemicCapSvg size={"w-8 h-8"} /></motion.p>
                </div>
            </div>
            <div className="px-6 md:px-12 sm:px-10 my-auto w-full md:w-1/2 xl:w-1/3">
                <div className="shadow-lg border">
                    <motion.img
                        className="m-auto w-32 pt-4"
                        animate={{
                            scale: [1, 1.5, 1.5, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        transition={{ duration: 2 }}
                        src={images.logo}
                        alt=""
                    />
                    <div className="flex flex-col items-center my-5">
                        <p className="font-mont text-center my-1">Por favor ingrese a su cuenta</p>
                        <p className="md:hidden text-center font-mont">SEGUIMIENTO DEL GRADUADO</p>
                        <p className="md:hidden text-center font-mont text-sm flex">
                            <span className="px-1">(SGD)</span> <AcedemicCapSvg />
                        </p>
                        <form className="w-full lg:px-12 md:px-8 px-4" onSubmit={onEventLogin}>
                            <div className="my-3">
                                <label
                                    htmlFor="codigo"
                                    className="font-mont block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Codigo
                                </label>
                                <input
                                    type="text"
                                    className="font-mont bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Dijite su código"
                                    ref={refCodigo}
                                    value={codigo}
                                    onChange={(changeevent: React.ChangeEvent<HTMLInputElement>) => {
                                        if (changeevent.target.value.length == 0) {
                                            setCodigoMessage("!El campo es oblogatorio¡");
                                            setCodigo(changeevent.target.value);
                                        } else {
                                            setCodigo(changeevent.target.value);
                                            setCodigoMessage("");
                                        }
                                    }}
                                    autoFocus
                                />
                                <span className="text-red-600 text-xs">{codigoMessage}</span>
                            </div>

                            <div className="my-3">
                                <label
                                    htmlFor="password"
                                    className="font-mont block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Contraseña
                                </label>
                                <div className="relative w-full">
                                    <input
                                        type={see ? "text" : "password"}
                                        placeholder="Dijite su contraseña"
                                        className="font-mont bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        ref={refClave}
                                        value={clave}
                                        onChange={(changeevent: React.ChangeEvent<HTMLInputElement>) => {
                                            if (changeevent.target.value.length == 0) {
                                                setClaveMessage("!El campo es oblogatorio¡");
                                                setClave(changeevent.target.value)
                                            } else {
                                                setClave(changeevent.target.value)
                                                setClaveMessage("");
                                            }
                                        }}
                                    />
                                    <button
                                        onClick={onEvenSeePassword}
                                        type="button"
                                        className="absolute 
                                        top-0 right-0 
                                        p-2.5
                                        text-sm 
                                        font-medium
                                        text-white
                                        bg-upla-100 
                                        rounded-r-lg 
                                        border
                                        border-blue-700
                                        hover:bg-upla-200 
                                        focus:ring-4 
                                        focus:outline-none
                                        focus:ring-blue-300">
                                        {
                                            see ?
                                                <EyeSvg />
                                                :
                                                <EyeSlashSvg />
                                        }

                                    </button>
                                </div>
                                <span className="text-red-600 text-xs">{claveMessage}</span>
                            </div>

                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                                    />
                                </div>
                                <label
                                    htmlFor="remember"
                                    className="font-mont ml-2 text-sm font-medium text-gray-900 "
                                >
                                    Recordarme
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="
                                font-mont
                                block 
                                m-auto 
                                md:w-full 
                                text-white 
                                bg-upla-100 
                                hover:bg-upla-200 
                                hover:transition-all 
                                focus:ring-4 
                                focus:outline-none 
                                focus:ring-blue-300 
                                font-medium 
                                rounded-lg 
                                text-sm w-full 
                                sm:w-auto px-5 
                                py-2.5 text-center">
                                <div className="flex justify-center items-center">
                                    {
                                        process ?
                                            <LoaderSvg />
                                            :
                                            <ArrowRightOnCicleSvg />
                                    }

                                    <span className="px-2">Ingresar</span>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login;