import React from "react";

const Home =()=>{
    return(
        <>
            <section className="" id="Home">
                <div className="">
                    <div className="relative md:text-base  mx-auto w-full">
                        <img src="images/IMAGE.jpg" />
                        <h2 className="absolute text-3xl text-white bottom-20 left-60 -translate-x-1/2  max-md: flex-justify">
                            <div className="text-white bg-lime-600 p-3 ">THE GOOD GROWTH PLAN</div>
                        </h2>
                        <h3 className="absolute text-8xl text-white bottom-40 left-5 ">
                            Establish Bankable and Sustainable Full Value Chain Projects
                        </h3>
                    </div>

                    <div className="flex items-center justify-center w-full mx-auto bg-white straight-lg min-h-[50vh]">
                        <div className="flex flex-col items-start p-5 md:w-2/3 lg:w-1/2">
                            <h5 className="mb-1 text-3xl font-medium text-black mb-3">Overview</h5>
                            <p className="text-md text-black">
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
                    </div>

                </div>
            </section>
        </>
        );
    };
    export default Home;