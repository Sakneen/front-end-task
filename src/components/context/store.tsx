import { createContext, useState } from "react";


export let counterContext = createContext()

export default function CounterContextProvider(props: any) {
    const [photo, setphoto] = useState([]);


    function showItem(data: any) {
        const {photos} = data
        console.log(photos);
        setphoto(photos)
    }

    return <counterContext.Provider value={{ showItem, photo }}>
        {props.children}
    </counterContext.Provider>
}