import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Data = () => {
    const [allData, setallData] = useState([])
    const url = 'http://localhost:1337/api/humours?populate=*';

    useEffect(() => {
      getData()
    }, [])
    const getData = () =>{
        axios.get(url).then(res =>setallData(res.data.data)).catch(err =>{console.log(er);})
    }
    console.log(allData);
  return (
    <>
    

    </>
  )
}

export default Data