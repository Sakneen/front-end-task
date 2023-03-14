import { createContext, useState, useEffect } from "react";

export let counterContext = createContext<any | null>(null);

export default function CounterContextProvider(props: any) {
  const [photo, setphoto] = useState([]);

  function showItem(data: any) {
    const { photos } = data;
    setphoto(photos);
  }

  return (
    <counterContext.Provider value={{ showItem, photo }}>
      {props.children}
    </counterContext.Provider>
  );
}
