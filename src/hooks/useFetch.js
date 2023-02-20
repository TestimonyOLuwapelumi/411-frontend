import {useEffect, useState} from 'react'
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() =>{
        const fetchData = async ()=>{
            setloading(true)
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
                setloading(false)
            } catch (error) {
                seterror(error)
                setloading(false)
            }
        }
        fetchData()

    }, [url])




    // useEffect(() =>{
    //     const fetchData = async ()=>{
    //         setloading(true)
    //         try {
    //             const res = await fetch(url)
    //             const json = await res.json()
    //             setData(json)
    //             setloading(false)
    //         } catch (error) {
    //             seterror(error)
    //             setloading(false)
    //         }
    //     }
    //     fetchData()

    // }, [url])

    
  return {loading, error, data}
}

export default useFetch