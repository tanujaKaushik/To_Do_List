import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Planner2023(){

    const[todoLists, settodoLists]=useState([]);

    useEffect(()=>{
        console.log("to do lists",todoLists);
        loadData();
        console.log("to do lists",todoLists);
    },[]);

    const loadData = async () => {
        const result = await axios.get("http://localhost:3001/lists");
        settodoLists(result.data);
        console.log("result",result.data)
    }

    const check= (l) =>{
        return l!="t"? <span className="material-symbols-rounded">double_arrow</span>:<span className="material-symbols-rounded text-green-300">done_all</span>
    }

    return(
        <>
         <div className=" h-screen bg-gradient-to-r from-violet-800 to-fuchsia-500">
         <div className="absolute mt-16 ml-36">
                <Link to="/">
                <button>
                    <div className="bg-white h-20 w-20 rounded-full hover:bg-fuchsia-500 ">
                    <span className="material-symbols-rounded text-6xl pt-2.5 text-violet-800 hover:text-white transition hover:-translate-y-1.5">
                        home
                    </span>
                    </div>
                </button>
                </Link>
        </div>
            <div className="pt-8 text-center text-5xl font-serif text-white animate-pulse">
                2023 PLANNER
            </div>
            <hr className="bg-gray-100 w-96 h-1 mx-auto my-1 border-0 rounded"/>

            <div className="bg-white overflow-auto" style={{margin:"5vh 15vw",padding:"5vh 5vw ",height:"80vh",width:"auto"}}>
            <div className="flex h-full">

                <div className=" w-full min-h-96 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                    {
                        todoLists.map((todo,indx)=>(
                                <div className="px-5 py-8 bg-blue-600 bg-gradient-to-b from-blue-600 to-blue-500 rounded-xl shadow-lg" key={indx}>
                                    <div className="flex justify-center">
                                        <div className="flex justify-center mt-3 p-4 bg-blue-500 ring-2 ring-blue-300 rounded-lg shadow-xl w-3/4" >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <div className="text-white ml-2 text-xl">
                                                {todo.list[0].date}
                                            </div>
                                        </div>
                                    </div>

                                   <div className="p-4 ">
                                        <table className="w-full">
                                            <tbody>                                    
                                            {todo.list.map((listitem, index)=>(
                                                <tr key={index} className="h-10">                                                
                                                    <td>
                                                        {check(listitem.done)}
                                                    </td>
                                                    <td className="text-gray-200 text-xl text-left font-semibold">{listitem.task}</td>
                                                    <td className="text-white" >{listitem.priority}</td>
                                                </tr>
                                            ))}
                                            </tbody> 
                                        </table>
                                    </div>
                                    <div className="flex justify-center mt-2">
                                        <Link to={`../edit/${todo.id}`}><button className="px-5 py-3 rounded-md text-l font-extrabold transition bg-gray-200 text-fuchsia-700 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-fuchsia-700 duration-300">EDIT</button></Link>
                                    </div>
                                </div>
                        ))
                    }          
                </div>

            </div>
            </div>
        </div>
        </>
    )
}