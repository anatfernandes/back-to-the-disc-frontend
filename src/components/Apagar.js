import { useContext } from "react";
import MessageContext from "../contexts/MessageContext";


export default function Apagar() {
    const { setMessage } = useContext(MessageContext);

    function click () {
        setMessage({
            type:'alert',
            message: {
                text:'olha o pergio',
                type:'warning'
            }
        });
    }

    return <button onClick={click}>clica ae ó</button>
}