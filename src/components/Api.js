import React,{useEffect,useState} from 'react'
import Weather from './wheather/Weather'

const Apikey = () => {
  
  
  const [city, setcity]=useState('bareilly')
  const [data,setdata]=useState('')
  const [deboucnedCity,stDebouncedCity]=useState(city)
  const url =`https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13?city=${city}`

    const options= {
        method: 'Get',
        headers:{
            'X-RapidAPI-Key': 'c4827e4663msh2a96541533dd25cp1ffa5bjsn787b6323df77',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    }
    const getapi= async()=>{
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setdata(result)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const handler=setTimeout(()=>{
        stDebouncedCity(city)
    },500)
  
    return () => {
      clearTimeout(handler)
    }
  }, [city])
  
    
  useEffect(()=>{
    if(deboucnedCity){
        getapi()
    }
  },[deboucnedCity])
  
  const handlechange=(e)=>{
       setcity(e.target.value)
      
  }
 
  return (
    <div>
        <Weather handlechange={handlechange} city={city} data={data}/>
    </div>
  )
}

export default Apikey