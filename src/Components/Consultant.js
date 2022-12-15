import React from "react";
import { FaLinkedin} from 'react-icons/fa';


const Consultant = () => {
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
      name: "NJACK KANE  ",
      position: " CEO Chairman  ",
      description: "        Senior Banking Executive in Commodity Trade Finance (CTF) with more than  thirty-year experience in Swiss, international and multicultural banking "

    },

    {
      image: "KEVIN MONAY",
      name: "GIANNI SARGENTI",
      position: "CTO & Administrator",
      description: "   For nearly 25 years, as an engineer, consultant and then IS manager for multinational companies with a Swiss Federal Certificate of Competence ."

    },

    {
      image: "KEVIN MONAY",
      name: "GIANNI SARGENTI",
      position: "CTO & Administrator",
      description: "   For nearly 25 years, as an engineer, consultant and then IS manager for multinational companies with a Swiss Federal Certificate of Competence ."


    },

    {
      image: "Njack.jpg",
      name: "PHANUEL ELI FIAMOR  ",
      position: "   General Manager",
      description: "         With about sixteen (16) years’ experience in the Banking sector with related expertise in the field of Credit risk administration and Banking operations."
    },

    {
      image: "MARYSE TAY ",
      name: "GIANNI SARGENTI",
      position: "    Executive Assistant",
      description: "  Has served in several key Admin and HR roles responsible for leading teams in acquiring, developing, mobilizing and rewarding a company’s workforce  with over 7 years.."

    },

    {
      image: "simon.jpeg ",
      name: "SIMEON NDAHIMANA",
      position: "     Project Manager",
      description: "         current Project Manager for the rice project. He pursued his passion for  Civil Engineering acquired at a young age and now holds a First-className B.Sc."

    },
    {
      image: "gloria.jpeg",
      name: "GLORIA AGYARE",
      position: "  Intern   ",
      description: "                 Environmentalist and aspiring food technologist with experience in youth  education and engagement, as well as cross-sectorial community-based projectmanagement."

    }





  ]
  return (
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
                <h5 className="text-3xl font-medium mb-3">Consulting department</h5>

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
                      <img src={`images/${consultant.image}`} className={'object-cover h-[90px] w-[80px] rounded-lg'} alt={''} />
                      <div className={''}>
                        <h2 className={'font-bold'}>{consultant.name}</h2>
                        <p className={'text-sm text-red-600 mb-2'}>{consultant.position}</p>

                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section>
                  <div className="p-24  flex justify-center justify-evenly ">
                    <div className="group rounded-lg relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-red-500 transition-shadow ">
                      <div className="h-96 w-72">
                        <img className="h-full w-full object-cover group-hover group-hover:scale-125 "src="images/Njack.jpg"/>
                      </div>
                      <div className="absolute insent-0 bg gradient-to-b from from-transparent via-transparent to-red-600 "></div>
                      <div className="absolute inset-0 flex flex-col items-center justify center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all bg-black opacity-50" >

                      <h1 className="text-3xl font-bold  text-white">NJACK KANE </h1>
                      <h2 className="text-sm  text-white mb-3 duration-300">CEO Chairman</h2>
                      <p className="text-sm italic text-white mb-3 duration-300"> As current CEO of Intervalle, he
initiated and co-lead multi-stakeholder PPP agricultural programs in West Africa.An active board member of organizations involved in poverty reduction in Africa
including the “John A. Kufuor Foundation” and the “International Federation of
Red Cross” (IFRC) steering committee for the 1BC and “Wings of Hope”</p>
                      </div>
                    </div>

                    <div className="group  rounded-lg relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-red-500 transition-shadow ">
                      <div className="h-96 w-72">
                        <img className="h-full w-full object-cover group-hover group-hover:scale-125 "src="images/GIANNI.jpeg"/>
                      </div>
                      <div className="absolute insent-0 bg gradient-to-b from from-transparent via-transparent to-red-600 "></div>
                      <div className="absolute inset-0 flex flex-col items-center justify center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all bg-black opacity-50">

                      <h1 className="text-3xl font-bold  text-white">GIANNI SARGENTI  </h1>
                      <h2 className="text-sm  text-white mb-3 duration-300">CFO & Administrator </h2>
                      <p className="text-sm italic text-white mb-3 duration-300"> Senior Banking Executive in Commodity Trade Finance (CTF) with more than
thirty-year experience in Swiss, international and multicultural banking
environment; former Head CTF of Credit Suisse, Geneva. </p>
<a href="https://www.linkedin.com/in/giannisargenti19/" target="_blank">
                                  < FaLinkedin className="font-medium text-white dark:text-blue-900 hover:underline h-7 w-7 "/>
                                    </a>
                      </div>
                    </div>

                        <div className="group  rounded-lg relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-red-500 transition-shadow ">
                      <div className="h-96 w-72">
                        <img className="h-full w-full object-cover group-hover group-hover:scale-125 "src="images/monay.jpeg"/>
                      </div>
                      <div className="absolute insent-0 bg gradient-to-b from from-transparent via-transparent to-red-600 "></div>
                      <div className="absolute inset-0 flex flex-col items-center justify center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all bg-black opacity-50">

                      <h1 className="text-3xl font-bold  text-white">KEVIN MONAY  </h1>
                      <h2 className="text-sm  text-white mb-3 duration-300">CTO & Administrator </h2>
                      <p className="text-sm italic text-white mb-3 duration-300">  For nearly 25 years, as an engineer, consultant and then IS manager for
                multinational companies with a Swiss Federal Certificate of Competence ,the management and
compliance of applications, infrastructures and information systems departments
form the core of his past activities.
</p>
<a href="https://www.linkedin.com/in/kevin-monay-b46740214/" target="_blank">
                                  < FaLinkedin className="font-medium text-white dark:text-blue-900 hover:underline h-7 w-7 "/>
                                    </a>
                      </div>
                    </div>

                  </div> 


                  <div className="  flex justify-center justify-evenly ">
                    <div className="group  rounded-lg relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-red-500 transition-shadow gap-2">
                      <div className="h-96 w-72">
                        <img className="h-full w-full object-cover group-hover group-hover:scale-125 "src="images/jimmy.jpeg"/>
                      </div>
                      <div className="absolute insent-0 bg gradient-to-b from from-transparent via-transparent to-red-600 "></div>
                      <div className="absolute inset-0 flex flex-col items-center justify center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all bg-black opacity-50">

                      <h1 className="text-3xl font-bold  text-white">Jimmy Verdeil </h1>
                      <h2 className="text-sm  text-white mb-3 duration-300">Senior Trader</h2>
                      <p className="text-sm italic text-white mb-3 duration-300"> Current Project Manager for the rice project. He pursued his passion for  Civil Engineering acquired at a young age and now holds a First-className B.Sc.where he has been working since 2019.
                     
 </p>
 <a href="https://www.linkedin.com/in/jimmy-verdeil-050754239/" target="_blank">
                                  < FaLinkedin className="font-medium text-white dark:text-blue-900 hover:underline h-7 w-7 "/>
                                    </a>
                      </div>
                    </div>

                    <div className="group  rounded-lg relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-red-500 transition-shadow ">
                      <div className="h-96 w-72">
                        <img className="h-full w-full object-cover group-hover group-hover:scale-125 "src="images/simon.jpeg"/>
                      </div>
                      <div className="absolute insent-0 bg gradient-to-b from from-transparent via-transparent to-red-600 "></div>
                      <div className="absolute inset-0 flex flex-col items-center justify center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all bg-black opacity-50">

                      <h1 className="text-3xl font-bold  text-white">SIMEON NDAHIMANA  </h1>
                      <h2 className="text-sm  text-white mb-3 duration-300">GIANNI SARGENTI </h2>
                      <p className="text-sm italic text-white mb-3 duration-300"> Senior Banking Executive in Commodity Trade Finance (CTF) with more than  thirty-year experience in Swiss, international and multicultural banking .He applied his problem solving, critical thinking and research skills to support the
development of financial projections, budgets, and operational models for various
company’s projects.
</p>
<a href="https://www.linkedin.com/in/simeon-ndahimana-659998216/" target="_blank">
                                  < FaLinkedin className="font-medium text-white dark:text-blue-900 hover:underline h-7 w-7 "/>
                                    </a>
                      </div>
                    </div>

                        <div className="group  rounded-lg relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-red-500 transition-shadow ">
                      <div className="h-96 w-72">
                        <img className="h-full w-full object-cover group-hover group-hover:scale-125 "src="images/mary.jpeg"/>
                      </div>
                      <div className="absolute insent-0 bg gradient-to-b from from-transparent via-transparent to-red-600 "></div>
                      <div className="absolute inset-0 flex flex-col items-center justify center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all bg-black opacity-50">

                      <h1 className="text-3xl font-bold  text-white">MARYSE TAY   </h1>
                      <h2 className="text-sm  text-white mb-3 duration-300">Executive Assistant</h2>
                      <p className="text-sm italic text-white mb-3 duration-300"> HR roles responsible for leading
teams in acquiring, developing, mobilizing and rewarding a company’s workforce in General Administration, HR and management
expertise.
Reliable, highly organized, detail-orientated and blessed with an innate ability to
read, understand and connect with people are just some of the professional
qualities she exudes.
qualities she exudes.
</p>
<a href="https://www.linkedin.com/in/maryse-tay-640a40146/" target="_blank">
                                  < FaLinkedin className="font-medium text-white dark:text-blue-900 hover:underline h-7 w-7 "/>
                                    </a>
                      </div>
                    </div>

                  </div> 
                  </section> 

    </>


  );
};
export default Consultant;