import React from "react";

const Consultants =()=>{
     const consultants = [
         {
             image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
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
             name: "NJACK KANE",
             position: "CEO Chairman",
             description: "Entrepreneur with extensive experience (over 20 years) in rice trading with very strong connection with the African continent; as current CEO of Intervalle, he initiated and co-lead multi-stakeholder PPP agricultural programs in West Africa. An active board member of organizations involved in poverty reduction in Africa including the “John A. Kufuor Foundation” and the “International " +
                 "Federation of Red Cross” (IFRC) steering committee for the 1BC and “Wings of Hope”"
             
         },

         {
          image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
          name: "GIANNI SARGENTI",
          position: "CTO & Administrator",
          description: "Senior Banking Executive in Commodity Trade Finance (CTF) with more than thirty-year experience in Swiss, international and multicultural banking environment; former Head CTF of Credit Suisse, Geneva."

        },
         {
             image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
          name: "KEVIN MONAY ",
          position: "CTO & Administrator",
          description: "With about sixteen (16) years’ experience in the Banking sector with related expertise in the field of Credit risk administration and Banking operations."
          },

          {
              image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
              name: "PHANUEL ELI FIAMOR",
              position: "General Manager",
              description: "With about sixteen years’ experience in the Banking sector with related expertise in the field of Credit risk administration and Banking operations. He has had the opportunity to work at the head office functions and has had branch expertise as well. Phanuel has sat at the highest decision making body of the Bank being Executive Committee as well as the Second highest decision making body being Assets and Liabilities Committee.\n" +
                  "He is very knowledgeable in the field of banking and brings his expertise to bear on matters outside the banking space. He is married with 3 children and has a Postgraduate university in Marketing from the University of Nottingham."

         },

         {
             image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
              name: "MARYSE TAY",
              position: "Executive Assistant",
              description: "Maryse has served in several key Admin and HR roles responsible for leading teams in acquiring, developing, mobilizing and rewarding a company’s workforce with over 7 years’ experience in General Administration, HR and management expertise.\n" +
                  "Reliable, highly organized, detail-orientated and blessed with an innate ability to read, understand and connect with people are just some of the professional qualities she exudes. Maryse speaks both French and English fluently and has a BA in Political Science & Sociology from the University of Ghana, Legon."

        },
         {
             image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
             name: "SIMEON NDAHIMANA",
             position: "Project Manager",
             description: "Simeon is the current Project Manager for the rice project. He pursued his passion for Civil Engineering and holds a First-Class B.Sc. in Civil Engineering from Leeds Beckett University in the United Kingdom. Since joining the company in 2019, he has been trained and mentored by experts in the rice industry including the seed segment with NAFASO, the irrigation development and management with GIDA, and project finance with skilled in-house experts.\n" +
                 "He supported the development of financial projections, budgets, and operational models for various company’s projects. His skills suit his role as project manager allowing him to go beyond his field of expertise for the sake of the project’s success."

         },
        {
          image: "gloria.jpeg" ,
          name: "GLORIA AGYARE",
          position: "Intern",
          description: "Gloria is an environmentalist and aspiring food technologist, with experience in youth education and engagement, as well as cross-sectorial community-based project management in the areas of Water, Sanitation and Hygiene and climate change. She speaks widely on issues related to agriculture and climate change, with an interest in women and youth inclusion in decision making concerning the environment and food systems.\n" +
              "She currently works as an intern on collaborative regional projects for Intervalle Geneva. Gloria is a Fellow of the YALI, West Africa and holds a degree in Agriculture from the KNUST."

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
                        <div className={'flex p-5 xl:p-0 xl:w-[70vw] m-auto'}>
                            <div className='w-1/2 m-auto text-white'>
                                <h5 className="mb-1 text-3xl font-medium mb-3">Consulting Department</h5>

                                <p className="">
                                    Based on a pool of experienced and highly qualified “Senior Partner Consultants’’ acting
                                    at each segment of the value chains:
                                    Irrigation design and development, Agriculture production and harvest, Agriculture post-
                                    harvest at large, Food sourcing and distribution network. Collectively the team has proven
                                    expertise and experience both technical and financial within below key segments of the
                                    agriculture full value chain and ability to interact with all stakeholders.
                                </p>
                            </div>


                            <div className="grid grid-cols-2 justify-center m-auto gap-8 top-4 p-8 xl:w-[70vw]" >
                                {
                                    consultants.map((consultant, index) => (
                                        <div key={index} className={'flex items-center justify-start gap-3 bg-white p-5 rounded-xl shadow:lg hover:shadow-xl'}>
                                            {
                                                consultant.image.startsWith('http') ?
                                                    <img src={`${consultant.image}`} className={'object-cover h-[90px] w-[90px] rounded-lg'} alt={''}/>
                                                    :  <img src={`images/${consultant.image}`} className={'object-cover h-[90px] w-[90px] rounded-lg'} alt={''}/>
                                            }
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

                <div className={'p-8 xl:w-[70vw] m-auto'}>
                    <div className={'my-8'}>
                        <h5 className="mb-1 text-3xl font-bold text-black mb-3">Our Team</h5>
                    </div>
                    <div className={'grid xl:grid-cols-3 grid-cols-3 gap-5 m-auto'}>
                        {
                            team.map((member, index) => (
                                <div key={index} className={'group relative flex flex-col items-center justify-start gap-3 border-b-8 border-green-600 bg-white rounded-xl overflow-clip shadow-sm hover:shadow-lg'}>
                                    {
                                        member.image.startsWith('http') ?
                                            <img src={`${member.image}`} className={'object-cover h-[460px] w-full rounded-lg'} alt={''}/>
                                            : <img src={`images/${member.image}`} className={'object-cover h-[460px] w-full rounded-lg'} alt={''}/>
                                    }

                                    <div className={'absolute bottom-[-500px] transition-[all_0.8s] group-hover:bottom-0 rounded-lg bg-green-800/60 h-auto p-5 text-white'}>
                                        <h2 className={'font-bold'}>{member.name}</h2>
                                        <p className={'text-sm text-gray-200 mb-2'}>{member.position}</p>

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