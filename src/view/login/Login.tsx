import React, { useRef, useState } from "react";
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import { images } from "../../helper";
import { AcedemicCapSvg } from "../../component/svg/Svg";
import { login } from "../../store/authSlice"; 
import Button from "./widget/Button";
import InputPassword from "./widget/InputPassword";
import InputClave from "./widget/InputClave";
import Checked from "./widget/Checked";

const Login = (props: RouteComponentProps<{}>) => {

    const dispatch = useDispatch();
    const authentication = useSelector((state: RootState) => state.authentication.authentication)

    const [codigo, setCodigo] = useState<string>('');
    const [clave, setClave] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [process, setProcess] = useState<boolean>(false);

    const [see, setSee] = useState<boolean>(false);

    const [codigoMessage, setCodigoMessage] = useState<string>('');
    const [claveMessage, setClaveMessage] = useState<string>('');

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
                            <InputClave
                                refCodigo={refCodigo}
                                codigo={codigo}
                                codigoMessage={codigoMessage}
                                setCodigoMessage={setCodigoMessage}
                                setCodigo={setCodigo}
                            />

                            <InputPassword
                                see={see}
                                refClave={refClave}
                                clave={clave}
                                setClaveMessage={setClaveMessage}
                                setClave={setClave}
                                onEvenSeePassword={onEvenSeePassword}
                                claveMessage={claveMessage}
                            />

                            <Checked />

                            <Button process={process} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Login;