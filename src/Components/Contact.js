import React from "react";

const Contact =()=>{
    return(
        <>
        <section className="" id="Contact">
            <h1 class="text-red-900 text-4xl font-bold h-20 text-center">Contact</h1>

<div>
    <h1 class="text-black text-md h-20 text-center">GENERAL INFORMATION</h1>
          <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400 gap-8">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
               
                <th scope="col" class="py-3 px-6">
                Name
                </th>
                <th scope="col" class="py-3 px-6">
                INTERVALLE GENEVE SA
                </th>
              
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Subsidiary
                </th>
                <td class="py-4 px-6">
                Intervalle Genève-Ghana branch
                </td>
              
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Address
                </th>
                <td class="py-4 px-6">
                Rue du Mont-de Sion 8 – 1206
P.O.Box 5159 – 1204 GenevaSwitzerland
                </td>
              
              
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Telephone
                </th>
                <td class="py-4 px-6">
                +41 22 552 1112
                </td>
             
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Type of organization
                </th>
                <td class="py-4 px-6">
                Limited liability company
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Type of business
                </th>
                <td class="py-4 px-6">
                Advisory Services
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Year Incorporated & Taken over
                </th>
                <td class="py-4 px-6">
                1984 / 2014
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Summary of main business
Activities
                </th>
                <td class="py-4 px-6">
                 Technical Operator in agriculture value chain
 Consultancy for agricultural projects  Advisory services
 Public & private relationship facilitator
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
<footer class="text-center bg-red-900 text-white">
  <div class="container px-6 pt-6">
    <div class="grid lg:grid-cols-2 md:grid-cols-2">
      <div class="mb-6">
        <h5 class="uppercase font-bold mb-2.5">Contact</h5>
        <ul class="list-none mb-0">
          <li>
            <a href="#!" class="text-white">+41 22 552 1112</a>
          </li>
        </ul>
      </div>
      <div class="mb-6 float-right">
        <h5 class="uppercase font-bold mb-2.5">Location</h5>
        <ul class="list-none mb-0">
          <li>
            <a href="#!" class="text-white">Rue du Mont-de Sion 8 – 1206
P.O.Box 5159 – 1204
Geneva, Switzerland
</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</section>

        </>
               );
            };
            export default Contact;