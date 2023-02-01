import React, { useEffect } from "react";

export default function WeeklyPage(){

    let slider;
    let cardWidth=0;
    useEffect(()=>{
        let sliderContainer=document.getElementById('sliderContainer');
        slider=document.getElementsByTagName('ul')[0];
        let cards=slider.getElementsByTagName('li');

        let sliderContainerWidth = sliderContainer.clientWidth;
        let elementsToShow=3;

        cardWidth = sliderContainerWidth/elementsToShow;

        slider.style.width= 7 * cardWidth +'px';

        for(let index=0;index<7;index++){
            const element=cards[index];
            element.style.width = cardWidth+1+ 'px';
        }
    })

    let count=0;

    function next(){
        if(count<4){
            slider.style.marginLeft= ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px';
            count+=1;
            console.log(count)
    }}

    function prev(){
        if(count>0){
        slider.style.marginLeft= ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+'px';
            count-=1;
            console.log(count)
    }}

    function textChange(){
        // this.style.textDecoration=linethrough;
    }
    return(
        <>
            <div className="flex bg-gradient-to-r from-violet-800 to-fuchsia-500">
                {/* Previous button */}
                <div className="w-1/12 flex items-center">
                    <div className="w-full text-right">
                        <button onClick={prev} className="p-3 rounded-full bg-white border-gray-100 shadow-lg mr-5">
                            <svg className="animate-bounce w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div id="sliderContainer" className="overflow-hidden h-screen w-10/12">
                    <div className="mt-10 text-center mb-5 text-5xl font-serif text-white animate-pulse">Weekly TO-DO LIST</div>
                    <ul id="slider" className="flex w-full">
                        {/* Monday */}
                        <li className="w-2/6 p-5">
                           <div className="bg-[url('/img/2.png')] rounded-lg p-5" style={{borderTopLeftRadius: "200px"}}>
                                <img className="h-50 w-auto w-full object-cover" src="" alt=""/>
                                <h2 className="font-mono mt-36 mb-5 text-4xl text-center font-bold text-black underline" style={{fontFamily:"'Gloria Hallelujah', cursive"}}> MOVING MONDAY</h2>
                                <div className="mt-10 mx-5 h-96 text-gray-500 backdrop-blur-lg">
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" onChange={textChange}type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-3xl font-medium text-gray-700" style={{fontFamily:"'Pacifico', cursive"}}>Food</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Site</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Default checkbox</label>
                                    </div>
                                </div>
                                <button className="mt-16 mb-20 mx-48 px-10 py-3 rounded-md text-xl font-bold transition ease-in-out delay-150 bg-fuchsia-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">SAVE</button>
                            </div>
                        </li>

                        {/* Tuesday */}
                        <li className="w-2/6 p-5">
                           <div className="bg-[url('/img/8.png')] rounded-lg p-5" style={{borderTopLeftRadius: "200px"}}>
                                <img className="h-50 w-full object-cover" src="" alt=""/>
                                <h2 className="font-mono mt-36 mb-5 text-4xl text-center font-bold text-black underline" style={{fontFamily:"'Gloria Hallelujah', cursive"}}> TIDY TUESDAY</h2>
                                <div className="mt-10 mx-5 h-96 text-gray-500 backdrop-blur-lg">
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-700">Food</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Site</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Default checkbox</label>
                                    </div>
                                </div>
                                <button className="mt-16 mb-20 mx-48 px-10 py-3 rounded-md text-xl font-bold transition ease-in-out delay-150 bg-fuchsia-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">SAVE</button>
                            </div>
                        </li>

                        {/* Wednesday */}
                        <li className="w-2/6 p-5">
                           <div className="bg-[url('/img/3.png')] rounded-lg p-5" style={{borderTopLeftRadius: "200px"}}>
                                <img className="h-50 w-full object-cover" src="" alt=""/>
                                <h2 className="font-mono mt-36 mb-5 text-4xl text-center font-bold text-black underline " style={{fontFamily:"'Gloria Hallelujah', cursive"}}> WORKING WEDNESDAY</h2>
                                <div className="mt-10 mx-5 h-96 text-gray-500 backdrop-blur-lg">
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-700">Food</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Site</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Default checkbox</label>
                                    </div>
                                </div>
                                <button className="mt-16 mb-20 mx-48 px-10 py-3 rounded-md text-xl font-bold transition ease-in-out delay-150 bg-fuchsia-500  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">SAVE</button>
                            </div>
                        </li>

                        {/* Thursday */}
                        <li className="w-2/6 p-5">
                           <div className="bg-[url('/img/5.png')] rounded-lg p-5" style={{borderTopLeftRadius: "200px"}}>
                                <img className="h-50 w-full object-cover" src="" alt=""/>
                                <h2 className="font-mono mt-36 mb-5 text-4xl text-center font-bold text-black underline" style={{fontFamily:"'Gloria Hallelujah', cursive"}}> THANKFUL THURSDAY</h2>
                                <div className="mt-10 mx-5 h-96 text-gray-500">
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-700">Food</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Site</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Default checkbox</label>
                                    </div>
                                </div>
                                <button className="mt-16 mb-20 mx-48 px-6 py-3 rounded-md bg-blue-500 text-xl font-bold ">SAVE</button>
                            </div>
                        </li>

                        {/* Friday */}
                        <li className="w-2/6 p-5">
                           <div className="bg-[url('/img/1.png')] rounded-lg p-5" style={{borderTopLeftRadius: "200px"}}>
                                <img className="h-50 w-full object-cover" src="" alt=""/>
                                <h2 className="font-mono mt-36 mb-5 text-4xl text-center font-bold text-black underline" style={{fontFamily:"'Gloria Hallelujah', cursive"}}> FOCUS FRIDAY</h2>
                                <div className="mt-10 mx-5 h-96 text-gray-500">
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-700">Food</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Site</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Default checkbox</label>
                                    </div>
                                </div>
                                <button className="mt-16 mb-20 mx-48 px-6 py-3 rounded-md bg-fuchsia-500 text-xl font-bold ">SAVE</button>
                            </div>
                        </li>

                        {/* Saturday */}
                        <li className="w-2/6 p-5">
                           <div className="bg-[url('/img/2.png')] rounded-lg p-5" style={{borderTopLeftRadius: "200px"}}>
                                <img className="h-50 w-full object-cover" src="" alt=""/>
                                <h2 className="font-mono mt-36 mb-5 text-4xl text-center font-bold text-black underline" style={{fontFamily:"'Gloria Hallelujah', cursive"}}> SOCIAL SATURDAY</h2>
                                <div className="mt-10 mx-5 h-96 text-gray-500">
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-700">Food</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Site</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Default checkbox</label>
                                    </div>
                                </div>
                                <button className="mt-16 mb-20 mx-48 px-6 py-3 rounded-md bg-blue-500 text-xl font-bold ">SAVE</button>
                            </div>
                        </li>

                        {/* Sunday */}
                        <li className="w-2/6 p-5">
                           <div className="bg-[url('/img/3.png')] rounded-lg p-5" style={{borderTopLeftRadius: "200px"}}>
                                <img className="h-50 w-full object-cover" src="" alt=""/>
                                <h2 className="font-mono mt-36 mb-5 text-4xl text-center font-bold text-black underline" style={{fontFamily:"'Gloria Hallelujah', cursive"}}> SELF-LOVE SUNDAY</h2>
                                <div className="mt-10 mx-5 h-96 text-gray-500 backdrop-blur-lg">
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-700">Food</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Site</label>
                                    </div>
                                    <div className="flex items-center mb-8 mx-10">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-2xl font-medium text-gray-900">Default checkbox</label>
                                    </div>
                                </div>
                                <button className="mt-16 mb-20 mx-48 px-6 py-3 rounded-md bg-fuchsia-500 text-xl font-bold ">SAVE</button>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Next button */}
                <div className="w-1/12 flex items-center">
                    <div className="w-full">
                        <button onClick={next} className="p-3 rounded-full bg-white border-gray-100 shadow-lg ml-5">
                            <svg className="animate-bounce w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>  
        </>
    )
 }