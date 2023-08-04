import React from "react";

const Sorter = ({ setFilter, filter }) => {

  return (
    <div className="sort p-4 border justify-between flex rounded-full my-4 w-full bg-white">
      <button 
        disabled={filter==="recommended" ? true:false} 
        onClick={() => setFilter("recommended")}
        className={`${filter == "recommended" ? "bg-sky-400" : null}
      text-black py-1 px-5 border-2 rounded-full hover:bg-sky-300 first-letter first-letter`}
      >
        Recommended
      </button>

      <button 
        disabled={filter==="fresher" ? true:false}
        onClick={() => setFilter("fresher")}
        className={`${filter == "fresher" ? "bg-sky-400" : null}
      text-black py-1 px-5 border-2 rounded-full hover:bg-sky-300 first-letter first-letter`}
      >
        Fresher
      </button>

      <button 
        disabled={filter==="wfo" ? true:false} 
        onClick={() => setFilter("wfo")}
        className={`${filter == "wfo" ? "bg-sky-400" : null}
      text-black py-1 px-5 border-2 rounded-full hover:bg-sky-300 first-letter first-letter`}
      >
        WFO
      </button>

      <button 
        disabled={filter? false:true} 
        onClick={() => setFilter("clear")}
        className={`${filter ? "bg-red-400" : null}
      text-black py-1 px-5 border-2 rounded-full hover:bg-red-300 first-letter first-letter`}
      >
        Clear
      </button>

    </div>
  );
};

export default Sorter;
