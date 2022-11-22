import React from "react";

const Consultants =()=>{
     const consultants = [
         {
             image: "VEKUA.jpeg",
             name: "GABRIEL LOPES",
             position: "Financial Consultant",
             description: "An extensive experience of 35 years in banking with a strong knowledge of bank management and strategic organization"
         },
         {
             image: "VEKUA.jpeg",
             name: "KONSTANTINE VEKUA",
             position: "Strategic Thinker",
             description: "skilled in driving the complete Value Chain of Business, leveraging acquired skills across Top Management assignments"
         },
         {
             image: "MARCO.jpeg",
             name: "MARCO PREHN",
             position: "Senior Executive for Strategy",
             description: "Transformation & Change with 20+ years substantial track record and advanced sector know-how in various industries"
         },
         {
             image: "megan.jpeg",
             name: "MEGAN DEVINDER",
             position: "International Agri-business Expert",
             description: "An International Agri-business Expert, reliable, highly organized, detail orientated and blessed with an innate ability to read"
         }
     ];

     const team = [
         {
             image: "Njack.jpg",
             name: "GIANNI SARGENTI",
             position: "CFO & Administrator",
             description: "Senior Banking Executive in Commodity Trade Finance (CTF) with more than  thirty-year experience in Swiss, international and multicultural banking "
             
         },

         {
          image: "Njack.jpg",
          name: "GIANNI SARGENTI",
          position: "CTO & Administrator",
          description: "For nearly 25 years, as an engineer, consultant and then IS manager for multinational companies with a Swiss Federal Certificate of Competence ."

        },
         {
          image: "Njack.jpg",
          name: "PHANUEL ELI FIAMOR  ",
          position: "General Manager",
          description: "With about sixteen (16) years’ experience in the Banking sector with related expertise in the field of Credit risk administration and Banking operations."
          },

          {
           image: "Njack.jpg ",
           name: "GIANNI SARGENTI",
           position: "Executive Assistant",
           description: "Has served in several key Admin and HR roles responsible for leading teams in acquiring, developing, mobilizing and rewarding a company’s workforce  with over 7 years.."

         },

         {
          image: "simon.jpeg",
          name: "SIMEON NDAHIMANA",
          position: "Project Manager",
          description: "current Project Manager for the rice project. He pursued his passion for  Civil Engineering acquired at a young age and now holds a First-Class B.Sc."

        },
        {
          image: "gloria.jpeg" ,
          name: "GLORIA AGYARE",
          position: "Intern",
          description: "Environmentalist and aspiring food technologist with experience in youth  education and engagement, as well as cross-sectorial community-based projectmanagement."

        }
    ];

    return(
        <>
            <section className="" id="Consultant">
                <div style={{
                    background: "url(images/backgrounds/consultants.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                }}>
                    <div className={'bg-black/30'}>
                        <div className={'flex w-[70vw] m-auto'}>
                            <div className='w-1/2 m-auto text-white'>
                                <h5 className="mb-1 text-3xl font-medium mb-3">Consulting department</h5>

                                <p className="">
                                    Based on a pool of experienced and highly qualified “Senior Partner Consultants’’ acting
                                    at each segment of the value chains:
                                    Irrigation design and development, Agriculture production and harvest, Agriculture post-
                                    harvest at large, Food sourcing and distribution network. Collectively the team has proven
                                    expertise and experience both technical and financial within below key segments of the
                                    agriculture full value chain and ability to interact with all stakeholders.
                                </p>
                            </div>


                            <div className="grid grid-cols-2  justify-center m-auto gap-8 top-4 p-8 w-[70vw]" >
                                {
                                    consultants.map((consultant, index) => (
                                        <div key={index} className={'flex items-center justify-start gap-3 bg-white p-5 rounded-xl shadow:lg hover:shadow-xl'}>
                                            <img src={`images/${consultant.image}`} className={'object-cover h-[90px] w-[90px] rounded-lg'} alt={''}/>
                                            <div className={''}>
                                                <h2 className={'font-bold'}>{consultant.name}</h2>
                                                <p className={'text-sm text-gray-400 mb-2'}>{consultant.position}</p>

                                                {/*<p>{consultant.description}</p>*/}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'p-8 w-[70vw] m-auto'}>
                    <div className={'my-8'}>
                        <h5 className="mb-1 text-3xl font-medium text-black mb-3">Our Team</h5>
                    </div>
                    <div className={'grid grid-cols-4 gap-5 m-auto'}>
                        {
                            team.map((member, index) => (
                                <div key={index} className={'flex flex-col items-center justify-start gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-lg'}>
                                    <img src={`images/${member.image}`} className={'object-cover h-[180px] w-[180px] rounded-lg'} alt={''}/>
                                    <div className={''}>
                                        <h2 className={'font-bold'}>{member.name}</h2>
                                        <p className={'text-sm text-gray-400 mb-2'}>{member.position}</p>

                                        <p>{member.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

</section>
 
      </> 
       


);
};
export default Consultants;