import React from "react";
import {motion} from "framer-motion";
import { useRef,useEffect,useState } from 'react';

const Home =()=>{
    return(
        <>
            <section className="w-full h-full" id="Home">
              
                    <div className="relative flex flex-col items-center justify-center w-full h-screen " id="home-rapper">
                        <div className="bottom-0 w-full px-2 text-xl lg:text-3xl text-white ">
                        <h3 className=" text-xl lg:text-8xl text-white  ">
                            Establish Bankable and Sustainable Full Value Chain Projects
                        </h3>
                            <button className="text-white bg-red-400 p-3  w-fit " >THE GOOD GROWTH PLAN</button>
                            

                        </div>

                       
                     </div>

                     <section className={' flex flex-col items-center justify-center py-12'} id={'Project'}>
                    <div className={'w-[70vw] '}>
                        <motion.h5 animate={{}}className="mb-1 text-3xl font-medium text-black">Overview</motion.h5>
                        <p>
                        Intervalle Genève SA incorporated in Geneva in 1984 taken over in 2014.
                                and has its subsidiary in Ghana as Intervalle Genève-Ghana branch. It is
                                located at No. 2B Plot 48, 6th Avenue, North Ridge Accra – Ghana and was
                                incorporated in March 8, 2019.With the continuous increase in the demand
                                for rice coupled with a decreasing rice self-sufficiency ratio in Ghana and other
                                countries in the sub region, Intervalle Ghana sees a significant opportunity to
                                contribute to boost local rice production and fill the demand gap and improve rice
                                self-sufficiency ratio in West Africa. To be able to do this effectively and efficiently,
                                the company would need to overcome existing bottlenecks in the sector and also work closely
                                with the authorities to see to its fruition.
                        </p>

                    </div>
                </section>
                
            </section>
        </>
        );
    };
    export default Home;