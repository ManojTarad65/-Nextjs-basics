// import React from 'react'
// import Link from 'next/link';

// const Header = () => {
//   return (
//     <div className='flex justify-around bg-white text-2xl p-7  font-bold font-sans'>

//   <div className=''> FOOD REVIEW 

//     </div> 
//     <div className='flex gap-16 cursor-pointer'>
 

    
//       <div className='  hover:shadow-yellow-600 shadow-md cursor-pointer rounded-lg p-1'> HOME</div>
    

//     <Link href="/about" passHref>
//                     <div className='hover:shadow-yellow-600 shadow-md cursor-pointer rounded-lg p-1'>
//                         ABOUT</div>
//                         </Link>


//       <Link href="/contact" passHref>
//       <div className='  hover:shadow-yellow-600 shadow-md cursor-pointer rounded-lg p-1'> CONTACT</div>
//       </Link>

//       <Link href="/contact" passHref>
//       <div  className=' hover:shadow-yellow-600 shadow-md cursor-pointer rounded-lg p-1'> LOGIN</div>
//       </Link>

//       <Link href="/contact" passHref>
//       <div className=' hover:shadow-yellow-600 shadow-md cursor-pointer rounded-lg p-1'> SERVICE</div>
//       </Link>




// </div>


//   </div>
//   );
// };

// export default Header ;


/* <div className='flex font-bold p-7 justify-around bg-gray-900 text-2xl text-white '>
<div>Logo </div>
<div className='flex gap-10'>
    <div>Home</div>
    <div>Contact</div>
    <div>Login </div>
    <div>LogOut</div>
   </div>
</div> */


"use client";

import { useRouter } from "next/navigation";
import React from "react";
const Nav = () => {
  const router = useRouter();
  const handleContactClick = () => {
    router.push("/contact");
    // other task can be executed parallelly
  };
  return (
    <div className="navbar flex font-bold p-7 justify-around bg-white text-2xl text-black">
      <div className="logo">Logo</div>
      <div className="nav">
        <div className="nav-items  flex gap-10">
          <button onClick={() => router.push("/")}>Home</button>
          <button onClick={() => router.push("/colleges")}>colleges</button>
          <button onClick={() => router.push("/about")}>About</button>
          <button onClick={handleContactClick}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;