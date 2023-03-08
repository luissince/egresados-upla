import React, { useEffect } from 'react';
import '../../assets/css/loader.css';
import { useDispatch } from 'react-redux';
import { starting } from '../../store/authSlice';

const Load = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        valid();
    }, []);

    const valid = async () => {
        try {           
            dispatch(starting());
        } catch (error) {
            dispatch(starting());
        }
    }

    return (
        <>
            <div className="loader text-center">
                <div className="loader-inner">

                    <div className="lds-roller mb-3">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <h4 className="text-uppercase font-weight-bold">Cargando...</h4>
                    <p className="font-italic text-muted">Se está estableciendo conexión con el servidor...</p>
                </div>
            </div>
        </>
    );
}

export default Load;