import { useEffect, useState } from "react";

function useTrails(url) {
    const [trails, setTrails] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setTrails(data.trilhas))
    }, [])

    return [ trails, setTrails ]

}

export default useTrails;