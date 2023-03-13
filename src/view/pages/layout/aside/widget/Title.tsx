import { Link } from "react-router-dom";
import { images } from "../../../../../helper";

const Title = () =>{
return (
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
);
}

export default Title;