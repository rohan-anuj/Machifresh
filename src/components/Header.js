import React, {useContext} from 'react'
import { datacontext } from '../App'
import { Link } from 'react-router-dom'

function Header() {
    const State=useContext(datacontext)
    
    const basket=State.state.basket
    
    

    return (
        <div className=" h-16 w-screen flex top-0 fixed z-10 bg-white  items-center  justify-between ">

        <svg viewBox="0 0 320 55.464746425412905"  className="w-96 cursor-pointer h-10 "><defs id="SvgjsDefs1475"></defs><g id="SvgjsG1476" featurekey="symbolFeature-0" transform="matrix(1.1225864160808585,0,0,1.1225864160808585,-6.129321874624761,-28.396945450172808)" fill="#222831"><g xmlns="http://www.w3.org/2000/svg"><g><path d="M45.438,30.166v39.668L11.083,50.001L45.438,30.166 M48.25,25.296L5.46,50.001l42.79,24.703V25.296L48.25,25.296z"></path></g><g><path d="M53.731,37.215l16.408,9.473l-1.419,0.82l-4.216,2.435l4.216,2.434l1.419,0.819l-16.408,9.473V37.215 M50.92,32.345    v35.194l24.843-14.343l-5.636-3.254l5.636-3.255L50.92,32.345L50.92,32.345z"></path></g><g><path d="M91.729,42.877v14.13l-12.237-7.064L91.729,42.877 M94.54,38.007L73.868,49.942L94.54,61.877V38.007L94.54,38.007z"></path></g></g></g><g id="SvgjsG1477" featurekey="nameFeature-0" transform="matrix(0.8464908655038439,0,0,0.8464908655038439,118.67735802265024,7.287430509630487)" fill="#222831"><path d="M1.5625 7.93 l15.352 21.055 l15.352 -21.055 l0 32.07 l-6.3086 0 l0 -12.988 l-9.043 12.48 l-9.043 -12.48 l0 12.988 l-6.3086 0 l0 -32.07 z M46.094125 29.59 l5.5664 0 l-2.7734 -6.543 z M43.515625 35.1562 l-0.078125 0.23438 l-2.0508 4.5313 l-1.0938 0 l-0.25391 0 l-4.1016 0 l-1.3477 0 l14.277 -31.992 l14.316 31.992 l-1.3477 0 l-4.1016 0 l-0.27344 0 l-1.0938 0 l-2.0313 -4.5508 l-0.097656 -0.21484 l-10.723 0 z M77.7346875 8.359000000000002 l-0.019531 0.078125 c2.1875 0 4.2383 0.41016 6.1719 1.25 s3.6328 1.9727 5.0977 3.3984 l-4.4922 4.4922 c-1.8945 -1.875 -4.1406 -2.8125 -6.7383 -2.8125 c-2.6367 0 -4.8828 0.9375 -6.7383 2.8125 s-2.793 4.1211 -2.793 6.7383 c0 2.6367 0.9375 4.8828 2.793 6.7383 s4.1016 2.793 6.7383 2.793 s4.8828 -0.9375 6.7578 -2.8125 l4.4922 4.4922 c-1.4648 1.4453 -3.1641 2.5781 -5.0977 3.418 s-3.9844 1.25 -6.1719 1.25 c-4.375 0 -8.125 -1.5625 -11.23 -4.668 s-4.668 -6.8555 -4.668 -11.23 s1.5625 -8.125 4.668 -11.25 s6.8555 -4.6875 11.23 -4.6875 z M91.328125 8.515999999999998 l6.3086 0 l0 12.598 l9.4336 0 l0 -12.598 l6.3086 0 l0 31.484 l-6.3086 0 l0 -12.598 l-9.4336 0 l0 12.598 l-6.3086 0 l0 -31.484 z M116.50390625 40 l0 -31.484 l6.3086 0 l0 31.484 l-6.3086 0 z M125.9375 8.515999999999998 l18.887 0 l0 6.2891 l-12.578 0 l0 6.3086 l9.4336 0 l0 6.2891 l-9.4336 0 l0 6.2891 l0 6.3086 l-6.3086 0 l0 -12.598 l0 -6.2891 l0 -12.598 z M147.16796875 40 l-0.019531 -31.523 l10.234 0 c3.0273 0 6.0156 1.0547 8.1836 3.2227 s3.0469 4.1992 3.0469 7.2266 l0 0.97656 c0 2.3438 -0.66406 4.0625 -1.9922 5.9375 s-2.4414 2.4219 -4.5117 3.2031 l7.1094 10.957 l-7.6953 0 l-8.0469 -12.305 l0 12.305 l-6.3086 0 z M153.45706875 23.633 l4.5117 0.019531 c1.3086 0 1.9727 -0.33203 2.8906 -1.25 s1.25 -1.9727 1.25 -3.2813 c0 -1.2891 -0.33203 -2.1484 -1.25 -3.0859 s-2.5586 -1.2695 -3.8672 -1.2695 l-3.5352 0 l0 8.8672 z M172.1484375 8.515999999999998 l18.887 0 l0 6.2891 l-12.578 0 l0 6.3086 l9.4336 0 l0 6.2891 l-9.4336 0 l0 6.2891 l12.578 0 l0 6.3086 l-12.578 0 l-6.3086 0 l0 -31.484 z M203.32034375 33.7891 l-0.019531 -0.039063 c1.7383 0 3.1836 -1.4453 3.1836 -3.1836 c0 -1.3477 -0.52734 -2.207 -1.6016 -2.5977 c-2.2656 -0.83984 -1.7188 -0.64453 -3.9258 -1.4063 c-2.3242 -0.80078 -4.4727 -2.3828 -5.918 -4.3555 c-0.85938 -1.1719 -1.2891 -2.6172 -1.2891 -4.3555 c0 -2.6172 0.9375 -4.8633 2.8125 -6.7383 s4.1211 -2.8125 6.7578 -2.8125 c2.6172 0 4.8633 0.9375 6.7383 2.8125 s2.8125 4.1211 2.8125 6.7383 l-6.3477 0 c0 -1.7188 -1.4453 -3.1641 -3.1641 -3.1641 c-1.7383 0 -3.1836 1.4453 -3.1836 3.1836 c0 1.1328 0.44922 1.9922 1.3672 2.5781 c1.875 1.2109 1.6602 0.97656 3.9063 1.6406 c2.4219 0.70313 4.6094 2.207 6.1133 4.1406 c0.87891 1.1328 1.3281 2.5977 1.3281 4.375 c0 2.6367 -0.9375 4.8828 -2.8125 6.7578 s-4.1211 2.8125 -6.7383 2.8125 c-2.6367 0 -4.8828 -0.9375 -6.7578 -2.8125 s-2.8125 -4.1211 -2.8125 -6.7578 l6.3672 0 c0 1.7578 1.4258 3.1836 3.1836 3.1836 z M215.78125 8.515999999999998 l6.3086 0 l0 12.598 l9.4336 0 l0 -12.598 l6.3086 0 l0 31.484 l-6.3086 0 l0 -12.598 l-9.4336 0 l0 12.598 l-6.3086 0 l0 -31.484 z"></path></g></svg>

        <div className="hidden sm:hidden  md:flex md:items-center md:justify-between lg:flex lg:items-center lg:justify-between xl:flex xl:items-center xl:justify-between 2xl:flex 2xl:items-center 2xl:justify-between">
        <Link to="/"><h3 className="font-bold text-xl mx-5 text-gray-900 cursor-pointer">Home</h3></Link>
           <Link to="/signup"> <h3 className="font-bold text-xl mx-5 text-gray-900 cursor-pointer">SignUP</h3></Link>
         <Link to="/signin">  <h3 className="font-bold text-xl mx-5 text-gray-900 cursor-pointer">SignIN</h3></Link>

            <div className="flex items-center justify-around mr-8 "><Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg"  className=" mx-8 h-6 cursor-pointer w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg></Link>
  <div className="text-white -ml-8 bg-black p-1 rounded-xl "><h3>{basket?basket.length:" "}</h3></div>
</div> 
       </div>
        
        

            
        </div>
    )
}

export default Header
