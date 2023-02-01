import axios from "axios";
import React, { useEffect, useState } from "react";
import {Await, Link, useLoaderData} from 'react-router-dom';

export default function HomePage(){

    // const[lists, setLists]=useState([]);

    // useEffect(()=>{
    //     loadData();
    // },[]);

    // const loadData = async () => {
    //     const result = await axios.get("http://localhost:3001/lists");
    //     setLists(result.data);
    // }

    return(
        <>
            <div className="h-screen bg-gradient-to-r from-sky-500 to-indigo-800">
                <div className="pt-8 text-center text-5xl font-serif text-white animate-pulse">
                    TO-DO LIST
                </div>
                <hr className="bg-gray-100 w-96 h-1 mx-auto my-2 border-0 rounded"/>
                
                <div className="grid grid-cols-3 gap-4 mx-72">
                        <div className="col-start-1 col-span-2 flex items-center">
                            <video src="img/intro.mp4" autoPlay="{true}" loop muted/>
                        </div>
                        <div>
                            <img src="img/To-Do.png" alt=""className="overflow-hidden h-auto py-14"/>
                        </div>
                </div>

                    <div className="grid grid-cols-4 gap-4 mx-72">
                    
                        <div>
                            <Link to="/create"><div className="border border-black shadow-lg shadow-black rounded-3xl h-44 text-center text-5xl bg-[url('/img/2.png')]" style={{paddingTop:"60px",fontFamily:"'Pacifico', cursive"}}>
                                Create New
                            </div></Link>
                        </div>
                        <div>
                            <Link to="/weekly"><div className="border border-black shadow-lg shadow-black rounded-3xl h-44 text-center text-5xl bg-[url('/img/4.png')]" style={{paddingTop:"60px",fontFamily:"'Pacifico', cursive"}}>
                                Weekly Planner
                            </div></Link>
                        </div>
                        <div>
                        <Link to="/planner2023"><div className="border border-black shadow-lg shadow-black rounded-3xl h-44 text-center text-5xl bg-[url('/img/5.png')]" style={{paddingTop:"60px",fontFamily:"'Pacifico', cursive"}}>
                                2023 Planner
                            </div></Link>
                        </div>
                        <div>
                        <Link to="/"><div className="border border-black shadow-lg shadow-black rounded-3xl h-44 text-center text-5xl bg-[url('/img/6.png')]" style={{paddingTop:"60px",fontFamily:"'Pacifico', cursive"}}>
                                Stats
                            </div></Link>
                        </div>
                    </div>
            </div>
        </>
    )
}