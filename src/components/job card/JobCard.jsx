import React from "react";

const JobCard = ({data}) => {


    
  return (
    <div className="flex my-5 border p-3 flex-col justify-between">
        <div className="flex justify-between my-3 w-full">
            <div className="flex">
                <div className="mx-3 flex items-center">
                <img
                    className="w-10"
                    src={data?.logo}
                    alt=""
                />
                </div>
                <div>
                    <h1 className="font-bold">{data?.title}</h1>
                    <p>{data?.location}</p>
                </div>
            </div>
            <div>
                <button className="bg-sky-500 py-1 px-5 border-2 rounded-full text-white hover:bg-sky-300">
                Apply
                </button>
            </div>
        </div>
        <div className="flex">
            {data?.skills?.split(',')?.map((item)=>{
                return <p key={item} className="border-2 rounded-full px-3 mr-2 cursor-pointer">{item}</p>           
            })}
            
        </div>
    </div>
  );
};

export default JobCard;
