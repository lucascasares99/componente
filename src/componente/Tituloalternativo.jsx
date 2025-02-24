import { Titulo } from "./Titulo"

export const Tituloalternativo = ({condicion}) => {

if (condicion) {
return <>
<Titulo titulo={"Titulo alterno"}/>
</>
}
return <>
<Titulo titulo={"Titulo original"}/>
</>
}