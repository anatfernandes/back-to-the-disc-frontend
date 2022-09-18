import { putLogout } from "../../services/backtothedisc";


export default function Logout ({ setMessage }) {

    const promise = putLogout();

    promise.catch(() => {
        setMessage({
            type: "alert",
            message: {
                text: "Erro ao sair. Tente novamente.",
                type: "error",
            },
        });
    });

    promise.then(() => {
        setMessage({
            type: "alert",
            message: {
                text: "Sessão encerrada.",
                type: "warning",
            },
            style: {
                top:'60px'
            }
        });

        localStorage.removeItem('backtothedisc');
    });
}
