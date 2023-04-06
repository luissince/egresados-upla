import Respuesta from "./respuesta.model.interface";
import ListarConsulta from "./listarconsulta.model.interfaces";

export default interface Responde {
    resultado : ListarConsulta[] | Respuesta[],
    total: number
}