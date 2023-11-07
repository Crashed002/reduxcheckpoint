import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
const [dataa,setdataa]=useState()
  useEffect(()=>{
    // fetch("https://api.publicapis.org/entries")
    // .then(res=>res.json())
    // .then(res=>setdata(res.entries));

    axios.get("https://api.publicapis.org/entries")
    .then(res=>setdataa(res))
    .then(console.log(dataa.data.count))
  }
     
  ,[])
  // const tasks=useSelector(state=>state.taskReducer)
  return (
    <div>
        {
        }
    </div>
    // <div>{tasks[0].id}</div>
  )
}

export default App
