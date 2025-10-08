import axios from 'axios'
import React, { useEffect, useState } from 'react';

const UseApps = () => {

    const [apps, setApps] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios('/Data.json')
        .then(data=>setApps(data.data))
        .catch(err=>setError(err))
        .finally(() =>setLoading(false))
    }, [])
    return {apps, loading, error};
};

export default UseApps;