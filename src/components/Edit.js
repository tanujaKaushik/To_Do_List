import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate, useParams, Link} from 'react-router-dom';

export default function Create(){

    const navigate = useNavigate();
    const {id} = useParams();

    const[input,setInput]=useState({
            date:"",
            task:"",
            priority:"very low",
            done:""
    });

    const[inputList,setInputList]=useState([]);

    // const[todoLists, settodoLists]=useState([]);
    
    useEffect(()=>{
        loadData();
        console.log("to do lists",inputList);
    },[]);

    const loadData = async () => {
        const result = await axios.get(`http://localhost:3001/lists/${id}`);
        setInputList(result.data.list);
        setInput({date:result.data.list[0].date,task:"",priority:"",done:""});
    }

    const itemEvent=(event)=>{
        console.log("value changed");
        setInput({...input,[event.target.name]:event.target.value});
    };

    const AddItem=(e)=>{
        e.preventDefault();
        console.log("item added");
        setInputList((oldItems) => {
            return [...oldItems, input];
        });
        console.log(inputList);
        setInput({date:input.date,task:"",priority:input.priority,done:""});
    };

    const Delete = (itemindex) =>{
        setInputList((oldItems) => {
            return oldItems.filter((arrElem, index)=>{
                return index!=itemindex
            })
        })
    }

    const Done = (itemindex) =>{
        let tk,dt,pr,d;
        setInputList((oldItems) => {
            return oldItems.filter((arrElem, index)=>{
                if(index==itemindex){
                     tk=inputList[index].task;
                     dt=inputList[index].date;
                     pr=inputList[index].priority;
                     d="t";
                }
                return index!=itemindex
            })
        })
        setInputList((oldItems) =>{
            return[...oldItems,{date:dt,task:tk,priority:pr,done:d}]
        })
        
    }


    const DeleteList = async e =>{
        e.preventDefault();
        console.log("item deletion in process")
        await axios.delete(`http://localhost:3001/lists/${id}`);
        // loadData();
        navigate("/planner2023");
    }

    const submit= async e => {
        e.preventDefault();
        console.log("input :",inputList);
        await axios.put(`http://localhost:3001/lists/${id}`,{list :inputList})
        navigate("/planner2023");
        console.log("Date added 3");
    }

    return(
        <>
            <div className="min-w-min h-screen bg-gradient-to-r from-violet-800 to-fuchsia-800">
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
                <div className="pt-10 text-center pb-5 text-4xl font-serif text-white animate-pulse">TO-DO LIST</div>
                <hr className="bg-gray-100 w-96 h-1 mx-auto my-1 border-0 rounded"/>
            
            <div className="bg-white" style={{margin:"2vh 35vh",padding:"1vh 5vw",height:"85vh",width:"auto"}}>
                <div className="flex font-sans">
                {/* <div className="flex-none w-40 relative">
                    <img src="img/To-s.png" alt="image" className="absolute inset-0 w-full object-cover rounded-lg" />
                </div> */}
                <form className="flex-auto p-6">
                    <div className="flex flex-wrap max-w-96">
                        <h1 className="flex-auto text-3xl font-bold text-slate-900">
                            Edit List
                        </h1>
                        <input className="w-full flex mt-2 pt-4 pb-4 pl-10 text-xl font-bold text-violet-600 border-0 border-violet-600 border-b-3 shadow-lg shadow-violet" 
                            name="task" 
                            placeholder="Enter task" 
                            onChange={itemEvent} 
                            value={input.task}
                        />

                        <input className="w-full flex mt-2 pr-10 pt-4 pb-4 pl-10 text-xl font-bold text-violet-600 border-0 border-violet-600 border-b-3 shadow-lg shadow-violet" 
                            name="date" 
                            type="date"
                            placeholder="Enter date" 
                            onChange={itemEvent} 
                            value={input.date}
                        />

                    </div>

                    <div className="flex items-baseline mt-5 mb-6 pb-6 border-b-4 border-slate-400 place-content-between" >
                        <div className="space-x-2 flex text-sm font-bold">
                            <label>
                            <input className="sr-only peer" name="priority" type="radio" value="very low" onChange={itemEvent} />
                            <div className="w-14 h-14 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                V Low
                            </div>
                            </label>
                            <label>
                            <input className="sr-only peer" name="priority" type="radio" value="low"  onChange={itemEvent}/>
                            <div className="w-14 h-14 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                Low
                            </div>
                            </label>
                            <label>
                            <input className="sr-only peer" name="priority" type="radio" value="average" onChange={itemEvent} />
                            <div className="w-14 h-14 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                Avg
                            </div>
                            </label>
                            <label>
                            <input className="sr-only peer" name="priority" type="radio" value="high" onChange={itemEvent} />
                            <div className="w-14 h-14 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                High
                            </div>
                            </label>
                            <label>
                            <input className="sr-only peer" name="priority" type="radio" value="very high" onChange={itemEvent} />
                            <div className="w-14 h-14 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                V High
                            </div>
                            </label>
                            <div className="text-slate-500 pl-6">Priority</div>
                        </div>
                    
                    <button  
                       className="h-10 px-6 font-semibold rounded-full bg-violet-500 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-violet-800" 
                        type="submit"
                        onClick={AddItem}>
                        Add
                    </button>
                    </div>

                    <div className="mb-1 ">

                    {/* List */}
                    <div className="flex-auto flex space-x-4">     
                        <div className="w-full h-full mx-10 text-lg overflow-auto pt-5 px-10 border-2 rounded-lg shadow-lg" style={{height:"40vh"}}>
                            <div className="text-2xl text-center">Your List</div>

                            <hr className="bg-gray-200 w-full h-1 mx-auto my-1 border-0 rounded"/>
                            
                            {/* Record of list */}
                            {inputList.map( (inp,index) => {
                                return(
                                <div className="place-content-between flex my-6 w-full" key={index}>
                                <div className="flex tracking-wide text-2xl" style={{fontFamily:"'Pacifico', cursive"}}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                    </svg>
                                    {inp.task}
                                    <div className="h-6 px-5 ml-7 rounded-full border bg-gradient-to-r from-violet-800 to-fuchsia-800 text-white font-mono text-sm">
                                        {inp.priority}
                                    </div>
                                </div>
                                <div>
                                <button className="h-10 px-6 font-bold rounded-3xl border border-red-800 text-red-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-red-500 hover:text-white" onClick={()=>Delete(index)}type="button">
                                    Delete
                                </button>
                                <button className="ml-5 h-10 px-6 font-bold rounded-3xl border border-green-800 text-green-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-green-500 hover:text-white visited:bg-green-500 visited:text-white" onClick={()=>Done(index)}type="button">
                                    Done
                                </button>
                                </div>
                                </div> 
                            )})}
                            
                        </div>
                       
                        
                    </div>
                    <div className="flex justify-between">
                           <button onClick={ e => submit(e)}className=" mt-5 mb-3 px-10 py-3 rounded-md text-xl font-bold transition ease-in-out delay-150 bg-fuchsia-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                                SAVE
                            </button>
                            <button  onClick={DeleteList} className="mt-5 mb-3 px-10 py-3 rounded-md text-xl font-bold transition ease-in-out delay-150 bg-fuchsia-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                                Delete
                            </button>
                    </div>
                    </div> 
                    </form>
                    </div> 
                </div>           
            </div>
        </>
    )
}