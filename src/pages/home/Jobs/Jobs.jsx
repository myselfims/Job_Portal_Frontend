import React from 'react'
import JobCard from '../../../components/job card/JobCard'

const Jobs = ({data}) => {
    

  return (
    <div className='border overflow-x-auto h-screen p-4'>
        {data?.length===0?<h1 className='font-bold'>No jobs found!</h1>:null}

        {data?.map((item)=>{
            return (
                <JobCard key={item.id} data={item}/>
            )
        })}
    </div>
  )
}

export default Jobs
