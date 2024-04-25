/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {

    const [ dados, loading ] = useFetch("./trilhas.json");
    const [ trilhas, setTrilhas ] = useState([]);

    useEffect(() => {
        if (!!dados && !loading) {
            setTrilhas(dados.trilhas);
        }
    }, [dados, loading])

    console.log('dados', trilhas)

    return (
        <TrilhasContext.Provider value={{ trilhas, setTrilhas }}>
            {children}
        </TrilhasContext.Provider>
    );
};