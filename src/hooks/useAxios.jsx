import { useState,useEffect } from 'react'
import axios from 'axios';

const useAxios = (param) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState('');

    axios.defaults.baseURL = "https://api.coingecko.com/api/v3"

    const fetchData = async () => {
        try {
            setLoading(true);
            const result = await axios(param)
            setResponse(result.data);
        }
        catch (err) {
            setError(err);
        }finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData(param)
    }, [])

    return {
        response,loading,err
    }
}

export default useAxios