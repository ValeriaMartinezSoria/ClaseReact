export default function Contador() {

let contador: number = 0
const incrementar = ():void => {
    contador++;
}
return <button onClick={incrementar}>contador: {contador}</button>
}