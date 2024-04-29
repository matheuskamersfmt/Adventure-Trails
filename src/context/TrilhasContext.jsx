/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {

    const [ dados, loading ] = useFetch("./trilhas.json");
    const [ trilhas, setTrilhas ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!!dados && !loading) {
            setTrilhas(dados.trilhas);
        }
    }, [dados, loading])

    const addTrilha = (trilha) => {
        setTrilhas([...trilhas, trilha]);
        navigate("/lista");
    };

    return (
        <TrilhasContext.Provider value={{ trilhas, addTrilha }}>
            {children}
        </TrilhasContext.Provider>
    );
};