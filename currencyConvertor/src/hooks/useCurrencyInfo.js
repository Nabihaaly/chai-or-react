import { useState } from "react";
import { useEffect } from "react";


function useCurrencyInfo(currency) {
    const [data,setData] = useState({})

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/b74630b6335429527541f1e8/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                // console.log("Full API Response:", res);
                setData(res.conversion_rates)
            })
    },[currency])
    
    console.log(data);
    return data;
}

export default useCurrencyInfo;