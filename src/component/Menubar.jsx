import React from 'react'
import "../styles/menubar.css"
import logo from "../assets/logo.svg"
import basket from "../assets/basket.svg"
import compass from "../assets/compass.svg"
import { ChevronDown, ChevronDownCircle } from 'lucide-react';
function Menubar() {
  return (
    <>
    <div className='menubar justify-center '>
        <div className='row  gap  mt-5 item-center searchbar-row'>
           <div>  <img src={logo} height={50} width={200} ></img></div>
      
            <input className='search-box'/>
            <div className='padding-5 location-button row  '>
            <img src={compass} height={20}></img>
                Select Location
            </div>
            <div className='login-signup'>
                Login/signup
            </div>
            <div className='bucket'>
                <img src={basket} height={25}></img>
            </div>
            
        </div><div className='row justify-center gap searchbar-row item-center '>
            <div className='category-btn '>
                <div className='text-1'>
                Shop by
                </div>
                <div className='text-2' >
                    <div>Category</div> <ChevronDownCircle />
                </div>
               
             

            </div>
            <div className='navbar' >
                    <div className='tab'>Exotic Fruits</div>
                    <div className='tab'>Exotic Fruits</div>
                    <div className='tab'>Exotic Fruits</div>
                    <div className='tab'>Exotic Fruits</div>
                    <div className='tab'>Exotic Fruits</div>
                    <div className='tab'>Exotic Fruits</div>
                    
                </div>
        </div>

        
        
            

        
        
        </div></>
  )
}

export default Menubar