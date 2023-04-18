import { useEffect, useState } from "react";

export type EventResponse = {
    id: number
    message: string
    title: string
}

export default function useEventSource(url: string) : EventResponse | undefined{
    console.log(url)
    const [message, setMessage] = useState<EventResponse>();

    useEffect(() => {
        const source = new EventSource(url);

        source.onmessage = (event: MessageEvent) => {
            if (event.data !== "Connected") {
                const data = JSON.parse(event.data);
                const eventData:EventResponse = {
                    id: data.id,
                    message: data.message,
                    title: data.title,
                }
                setMessage(eventData);
            }
        }


        // source.addEventListener("saludar",(event)=>{
        //     const data = JSON.parse(event.data);
        //     setMessage(data); 
        // });
        // source.addEventListener("notify",(event)=>{
        //     const data = JSON.parse(event.data);
        //     setMessage(data); 
        // });

        return () => source.close();
    }, [url]);

    return message;
}