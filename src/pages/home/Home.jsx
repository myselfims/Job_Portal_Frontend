
import React, { useEffect, useState } from 'react'
import Sorter from '../../components/sorter/Sorter'

import Jobs from './Jobs/Jobs'
import axios from 'axios'

const Home = () => {
    const [filter, setFilter] = useState(null)
    const [data, setData] = useState(null)

    const handleFilter = (filter)=>{
        let sorted = null

        if (filter == 'fresher'){
            sorted = data?.filter((item)=>String(item.title).toLowerCase().includes('fresher'))
            setData(sorted)
        }
        else if(filter == 'wfo'){
            sorted = data?.filter((item)=>item.wfo)
            setData(sorted)
        }
        else if(filter == 'recommended'){
            apiCall()
        } 
        else {
            apiCall()
            setFilter(null)
        }
        setFilter(filter)
    }

    const apiCall = async ()=>{
        let {data} = await axios.get('http://127.0.0.1:8000/apigetjob/')
        setData(data)
  
    }

    useEffect(()=>{
        apiCall()
    },[])
  return (
    <div className='home w-1/2 mt-8 h-screen'>
        <div className='border p-3 my-3'>
            <h1>Recommended jobs for you</h1>
            <Sorter setFilter={handleFilter} filter={filter}/>

        </div>
        <Jobs data={data}/>
    </div>
  )
}

export default Home
