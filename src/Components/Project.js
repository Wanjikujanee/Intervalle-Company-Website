import React from "react";

    const Project = () => {
        const projects = [
            {
                text: "Intervalle Geneve SA led “West Africa Rice Corridor” Project is targeting the following countries: Cote d’Ivoire, Ghana, Liberia, Senegal, Burkina Faso, and Sierra Leone. Intervalle as its initial phase, it has partnered in each country with the Government, Farmer Based Organizations, and local and international private sector to execute the agreed project. Intervalle has successfully invited selected global international, regional strategic and technical partners to execute in close collaboration with the ECOWAS Commission the regional program. "
            },
            {
                text: "Intervalle Genève S.A, partnered and signed an agreement with the Ministry of Food and Agriculture (MOFA) in July, 2018 to co-execute Planting for Food and Jobs- the Rice Chapter. Intervalle Ghana ltd leads the implementation of the in-growers schemes proof of concept with first classname coalition partners in two selected areas in Ghana ensuring the full value chain approach is successfully implemented which will allow scaling up and replication in Ghana and other ECOWAS countries.",
            },
            {
                text: "For that purpose, Intervalle has engaged with the Government to jointly secure with both development institutions and international private sector partners the most adapted funding mechanism to prepare to attract public and private resources to develop/improve infrastructure along the value chain (irrigation, processing facility, storage etc.) for commercial rice production through PPP."
            },
            {
                text: "Intervalle Genève SA has set up Intervalle Ghana as a wholly owned Ghanaian company which act as Technical Operator (TO), is in charge of the design and implementation of the project. Intervalle Ghana shall coordinate, monitor and report monthly all activities\n" +
                    "based on the key indicators of management team, coalition partners, funding, and financing parties."
            }
        ];
        const showDev = !false;

        if(showDev)
        return (
            <>
                <section className={'min-h-[80vh] flex flex-col items-center justify-center py-12'} id={'Project'}>
                    <div className={'w-[70vw]'}>
                        <h5 className="mb-1 text-3xl font-medium text-black">Flagship Projects</h5>
                        <p className={'text-gray-400 text-sm mb-8'}>INTERVALLE RICE FLAGSHIP PROJECT </p>

                        <p>
                            At Intervalle we strive to be an industry standard in service to customers by using our leverage
                            on high negotiation and deal structuring skills to deliver value to all stakeholders along the
                            different Agricultural value chains by maintaining integrity  with our partners.
                        </p>

                        <div className={'grid grid-cols-2 gap-8 my-8'}>
                            {
                                projects.map((project, index) => (
                                    <div key={index}>
                                        <p>{project.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </>
        );
        return(
            <>
    <section className="" id="Project">
            <div className=" text-center mx-4 space-y-2 ">
                <h1 className="text-red-900 text-4xl font-bold h-20">Project</h1>
                <h2 className="mb-2 text-1xl  text-center text-red-900 h-20">INTERVALLE RICE FLAGSHIP PROJECT  </h2>

            </div>
            <div className="relative h-60 bg-none">
            <img className="h-64 w-full"src="images/Rectangle 48.png"/>
            <div className="absolute bottom-2 text-left-20 bg-black text-white p-3">INTERGRATED PROJECTS</div>


            </div>

        <div className="container mx-auto h-30">
        <div className=' h-40 w-full p-20'>
            <p className="text-md text-center text-black leading-loose ">
    At Intervalle we strive to be an industry standard in service <br></br>to customers by using our leverage
    on high negotiation and<br></br> deal structuring skills to deliver value to all stakeholders along <br></br>the
    different Agricultural value chains by maintaining integrity  <br></br>with our partners.</p>
        </div> 
        </div> 
        <div className="bg-white h-10"></div>
        <div className="container mx-auto">
        <div className=' h-30 w-94 p-40'>
            <h1 className="mb-2 text-2xl font-bold text-center tracking-normal text-black h-14">Flagship Projects</h1>
            <p>
                <h1 className=" text-2xl leading-8 tracking-wide "></h1>
                <span className="font-bold text-5xl">.</span>Intervalle Geneve SA led “West Africa Rice Corridor” Project is targeting the following countries:  Cote d’Ivoire,
            Ghana, Liberia, Senegal, Burkina Faso, and Sierra Leone. 
            Intervalle as its initial  phase, it has partnered in each country with the Government, Farmer Based Organizations, and  local and international private sector
            to execute the agreed project. Intervalle has successfully  invited selected global international, regional strategic and technical partners to execute in close 
            collaboration with the ECOWAS Commission the regional program. </p>
    <p>

                <h1 className="text-2xl tracking-wide leading-8 "></h1>
                <span className="font-bold text-5xl">.</span>Intervalle Genève S.A, partnered and signed an agreement with the Ministry of Food and
    Agriculture (MOFA) in July, 2018 to co-execute Planting for Food and Jobs- the Rice Chapter.
    Intervalle Ghana ltd leads the implementation of the in-growers schemes proof of concept with
    first classname coalition partners in two selected areas in Ghana ensuring the full value chain approach
    is successfully implemented which will allow scaling up and replication in Ghana and other
    ECOWAS countries.</p>

    <p>
                <h1 className=" text-2xl tracking-wide leading-8 "></h1>
                <span className="font-bold text-5xl">.</span>For that purpose, Intervalle has engaged with the Government to jointly secure with both  development institutions 
    and international private sector partners the most adapted funding  mechanism 
    to prepare to attract public and private resources to develop/improve infrastructure  along the value chain (irrigation, processing facility, storage etc.) 
    for commercial rice production  through PPP.</p>

    <p>
                <h1 className=" text-2xl leading-8tracking-wide"></h1>
                <span className="font-bold text-5xl">.</span>Intervalle Genève SA has set up Intervalle Ghana as a wholly owned Ghanaian company which  act as Technical 
    Operator (TO), is in charge of the design and implementation of the project.  Intervalle Ghana shall coordinate, monitor and report monthly all activities<br></br> based on the key 
    indicators of management team, coalition partners, funding, and financing parties.</p>
        </div>
        </div>
        

        
        <div className="container mx-auto top-4">
        <div className=' h-30 w-full p-16'>
            <h1 className="mb-2 text-2xl font-bold text-left text-black">Activities</h1>
            <p className="text- text-left text-black leading-8"> 1.Intervalle is the promoter of the agricultural value chain projects, responsible for          the design and
        overall regional development coordination.<br></br>
     2.Develops relations with public sector and co-executes the program.<br></br>
     3.Supports Governments of Ghana, Senegal, Burkina Faso, Liberia and Sierra Leone for funding
        sources preparation to include feasibility studies and infrastructure realization.<br></br>
     4.Supports the partners within the key private national and international sector actors of the value
        chain.<br></br>
     5.Support with the farmers organizations and civil societies.<br></br>
     6.Submits the detailed technical and financial offers for private and public partners in line with
        Government debt policy.<br></br>
     7.Engages with Government to jointly secure the most adapted funding mechanism for the          
        Irrigation Infrastructure.<br></br>
     8.Seed production, foundation & certified seeds support Trade facilitation.</p>
        </div>
        </div>

        <div className="mx-4 bg-white w-94 ">
        <div className="p-20 border-black border-4 rounded-lg">
            <h2 className="mb-2 text-xl font-bold text-center text-black lg:text-2xl">GUIDING PRINCIPLES</h2>
            <p classname="text-md text-black"> <h1 className="font-bold">The five guiding principles driving the Intervalle PPP programme are:</h1><br></br>
    1 Local ownership and alignment with country goals.<br></br>
    2 Multi-stakeholder engagement with open and inclusive approaches in supporting
        small holders.<br></br>
    3.A market-driven approach led by the private sector and rooted in viable business
        cases for both public and private parties.<br></br>
    4. Global support by an international network providing solidarity and support.4. Global support by an international network providing solidarity and support.<br></br>
    5. Holistic promotion on best practices on land governance and integrating full 
        value chains that benefit all actors in the Food & Agriculture sector.</p>
        </div>
    </div>
        </section>

        </>
        );
    };
    export default Project;