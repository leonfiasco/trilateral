import { useState, useEffect } from "react";
import axios from "axios";

function useApi() {
    const [foreCast, setForecast] = useState();

    const d = new Date();
    const currentDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    function formatDate(date){
        var dd = date.getDate();
        var mm = date.getMonth()+1;
        var yyyy = date.getFullYear();
        if(dd<10) {dd='0'+dd}
        if(mm<10) {mm='0'+mm}
        date = `${mm}-${dd}-${yyyy}`;
        return date
     }
     
    function Last5Days () {
        var result = [];
        for (var i=0; i<6; i++) {
            var d = new Date();
            d.setDate(d.getDate() - i);
            result.push( formatDate(d) )
        }
    
        return(result[5])
     }
    
   const fiveDays = Last5Days();

    const requestApi = async () => {
        const baseUrl = `https://api.carbonintensity.org.uk/intensity/${fiveDays}/${currentDate}`;
        const result = await axios.get(baseUrl).then(res => setForecast(res.data));
        return result;
    }
    
    useEffect(() => {
        return requestApi();
    }, [])

    return [foreCast];
}

export default useApi;
