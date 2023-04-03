import ListarConsulta from "./listarconsulta.model.interfaces";

export default interface Responde {
    resultado : ListarConsulta[],
    total: number
}