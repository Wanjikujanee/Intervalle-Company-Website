import React from "react";
import {GoCheck} from "react-icons/go";


            const About =()=>{
                const data = [
                    {
                        title: 'Mission',
                        description: "At Intervalle we strive to be an industry standard in service to customers by using our leverage on high negotiation and deal" +
                            "structuring skills to deliver value to all stakeholders along the different Agricultural value chains by maintaining integrity  with our partners."
                    },
                    {
                        title: 'Vision',
                        description: "Intervalle has a vision to participate to the game changer of the Agricultural sector in West Africa by providing agricultural related " +
                            "innovative solutions with first classname coalition strategic and technical partners in an integrated value chain approach."
                    },
                    {
                        title: 'Objective',
                        description: "Our objectives are to assist clients with the execution of their projects in a timeous manner in an efficient manner. As a company we have the track record and confidence in our ability to generate the consensus and commitments necessary to succeed. We are prepared to stand by our recommendations and to assist our clients obtain the necessary " +
                            "appropriate approvals."
                    }
                ];


                const values = [
                    {
                        title: 'Commitment',
                        description: 'We display traits of sincerity focused on staying true to a course of action.'
                    },
                    {
                        title: 'Integrity',
                        description: 'Acting ethically is a priority for everyone representing the company, this shapes our behavior as a whole.'
                    },
                    {
                        title: 'Customer Appreciation',
                        description: 'We exhibit a joy not just for the work but also the people around us to foster boldness, innovativeness, and by creating a great customer experience with staying true to the words we speak and the bonds we make.'
                    },
                    {
                        title: 'Teamwork',
                        description: 'We pride ourselves as a people centered organization hence we encourage working together to deliver superior services to our clients.'
                    },
                    {
                        title: 'Professionalism',
                        description: 'We exhibit professionalism through reliability, consistency and honesty whilst holding ourselves accountable for our actions.'
                    },
                    {
                        title: 'Accountability',
                        description: 'We accept responsibility for our actions and inactions, it defines our ultimate way to build trust.'
                    }
                ]

               

                return(

                    <>

                    <section className="w-full" id="About">

                        <div style={{
                            background: "url(images/VALUE.jpg)",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }} className="flex p-40 bg-cover bg-no-repeat">
                             <div className={'w-[70vw] bg-black/40 p-10 '}>
                        <h5 className="text-xl lg:text-3xl font-medium mb-3 text-white ">About</h5>
                        <p className="text-white mb-3 text-1xl first-line:tracking-widest first-letter:text-5xl first-letter:font-bold  first-letter:mr-3 tracking-wide  ">
                        Consulting & Agricultural Value Chain Company. Registered
                                    in Geneva in 1984, Intervalle Genève SA is active in the
                                    structuring of soft commodities value chain programs and
                                    is the promoter of<r className="text-red-400">“West African Rice Corridor Project”</r>  and
                                    related full value chain food programs within the sub region.
                                    Our approach is to establish bankable and sustainable full
                                    value chain projects through Private Public Partnerships.

                                    Intervalle has a <b className="font-bold">vision</b>  to revolutionize the rice sector in West
                                    Africa by leading the production of high-quality milled rice
                                    through an integrated value chain approach.

                                    Intervalle is also working on other value chains <em class="font-italic font-bold">such as tomato
                                    value chain and poultry value chain project.</em>
                                    Intervalle Genève S.A in July 2018, contracted with the Ministry
                                    of Food and Agriculture(MOFA) to co-execute the Rice Chapter
                                    of Planting for Food and Jobs in Ghana and lead the current
                                    Public Private Partnership (PPP) Rice Project.

                                    
                                    Intervalle Genève S.A in July 2018, contracted with the Ministry
                                    of Food and Agriculture(MOFA) to co-execute the Rice Chapter
                                    of Planting for Food and Jobs in Ghana and lead the current
                                    Public Private Partnership (PPP) Rice Project.
                                    <a href="https://www.northdata.com/Intervalle+Gen%C3%A8ve+SA,+Gen%C3%A8ve/CHE-103.241.397" target="_blank">
                                  <button className="font-medium text-red-600 dark:text-red-500 hover:underline"> Read More </button>
                                    </a> 
                        </p>
                        </div>
                        </div>

                </section>



            <section>
    
                <div className="flex items-center justify-center gap-8 h-[80vh] w-full">
                    <div className="w-[70vw] grid items-start justify-center md:grid-cols-[1fr_0.8fr_0.8fr] gap-8">
                        {
                            data.map((item, index) => (
                                <div key={index} className={`w-full  bg-white  ${index === 0 ? 'text-white p-5 px-8 bg-red-400' : ''}`}>
                                    <div className="flex flex-col items-start pt-4 pb-10">
                                        <h5 className=" text-3xl font-medium mb-3">{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="">

            <div className="flex items-center justify-center gap-8 bg-gray-50 py-12">
                <img className="w-1/3 object-cover md:float-none lg:float-none" src="/images/Group 32.png" alt={''}/>
                <div className={'p-8 w-1/2'}>
                    <div className="font-bold tracking-wide text-3xl mb-2">
                        <h2>Values</h2>
                    </div>
                    <p className="mb-8 ">The company upholds the following values as a guideline to its operation and business transactions:</p>
                    <div className={'grid grid-cols-2 gap-5'}>
                        {
                            values.map((item, index) => (
                                <div key={index} className={'flex gap-3 items-start justify-start my-5'}>
                                    <div className={'flex items-center justify-center p-[5px] rounded-full bg-red-400'}>
                                        <GoCheck size={18 } className={'text-white font-bold  animate-bounce '}/>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-medium mb-2">{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>

                                
                            ))
                        }
                    </div>
                </div>
            </div>
            </section>

  

                    </>
        );
    };
    export default About;