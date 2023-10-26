import { useEffect, useState } from "react"

const useFetch = (url)=>{
    const [data,setDatta]= useState(null)
    useEffect(()=>{
        fetch(url).then(res=>{
            res.json().then(result=>{
                setDatta(result.products)
            })
        })
    },[url])
    return data
}
export default useFetch;