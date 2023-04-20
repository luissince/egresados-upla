import { useEffect, useState } from "react";

export type EventResponse = {
    codigo: string
    titulo: string
    mensaje: string
}

export default function useEventSource(url: string) : EventResponse | undefined{
    const [message, setMessage] = useState<EventResponse>();

    useEffect(() => {
        const source = new EventSource(url);
        source.onopen = () => {
            console.log("onopen")
        }

        source.onmessage = (event: MessageEvent) => {           
            if (event.data !== "Connected") {
                const data = JSON.parse(event.data);
                const eventData:EventResponse = {
                    codigo: data.codigo,
                    titulo: data.titulo,
                    mensaje: data.mensaje,
                }
                setMessage(eventData);
            }
        }

        // source.addEventListener("saludar",(event)=>{
        //     // const data = JSON.parse(event.data);
        //     console.log(event.data)

        //     const eventData:EventResponse = {
        //         id: 1212,
        //         message: "message",
        //         title: "title",
        //     }
        //     setMessage(eventData);
        // });

        // source.addEventListener("notify",(event)=>{
        //     const data = JSON.parse(event.data);
        //     setMessage(data); 
        // });

        return () => source.close();
    }, [url]);

    return message;
}