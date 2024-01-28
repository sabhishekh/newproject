
//className='fixed bg-white-600 shadow-md  z-50 w-full px-5 py-2 //

import {  Navbar } from 'flowbite-react';
import Bg1 from "../Component/imges/bg1.jpeg"
import "../Component/Navbar.css"

function Component() {
  return (
    <Navbar fluid rounded className='fixed bg-black-600 shadow-md  z-50 w-full px-5 py-2   ' style={{backgroundColor:'rgb(253, 251, 247)'}} >
      <Navbar.Brand href="" >
        <img src={Bg1} className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
      </Navbar.Brand>
  
       
        <Navbar.Toggle />
    
      <Navbar.Collapse >
        <Navbar.Link href="#" className='nav-section'  >
          Home
        </Navbar.Link>
        <Navbar.Link href="#"  className='nav-section' >About</Navbar.Link>
        <Navbar.Link href="#" className='nav-section'>Services</Navbar.Link>
        <Navbar.Link href="#" className='nav-section'>Pricing</Navbar.Link>
        <Navbar.Link href="#" className='nav-section' >Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
 export default Component;