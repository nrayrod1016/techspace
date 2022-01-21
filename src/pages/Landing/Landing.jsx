import "./Landing.css"

const Landing = ({user}) => {
  return (
   <>
    


<section class=" 
  
    grid grid-cols-2 ml-1
    sm:grid grid-cols-1 
    md:grid-cols-2
    lg:grid grid-cols-2">
<article class="mt-36 p-3"> 
  <h1 class="text-left text-2xl m-2 text-indigo-800">

Hello, {user ? user.name : "new friend!"} !
   </h1>

<p class="m-2 text-gray-400">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati in labore minus, unde atque sequi itaque minima repudiandae, cupiditate quam quae corrupti et nemo perspiciatis accusamus modi facere reiciendis?
</p>

  <div class="m-2 text-left ">
     <button class="m-2 bg-gray-700 p-2 rounded text-gray-200  hover:bg-gray-800">Get Started</button>
     <button class="m-2 bg-gray-300 p-2 rounded text-gray-700 hover:bg-gray-200">Learn More</button>
  </div>
  </article>


  <article class="landing-right text-center h-full  "> 
  
  </article>


</section> 



  </>
  
  )
}
 
export default Landing