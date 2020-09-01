import React from 'react'
import Head from 'next/head'


function Header() {
    return (

        <div className="header" id="header">

            <head>
                 <link rel="icon" href="../../public/img/favico.jpg" />
                <title>Safa Bin Salam</title>
                
            </head>
            
            <div class="nav-menu">
                <input id="toggle" type="checkbox"/>
                    <label class="toggle-container" for="toggle">            
                        <span class="button button-toggle"></span>
                    </label>
                    <nav class="nav">
                        <a class="nav-item" href="#home">Home</a>
                        <a class="nav-item" href="#about">About</a>
                        <a class="nav-item" href="">Contact</a>                       
                    </nav>
            </div>

        </div>
    )
}

export default Header




//  {/* <a class="logo" href="/">Kushal</a> */}
//  <input className="menu-btn" type="checkbox" id="menu-btn" />
//  <label className="menu-icon" for="menu-btn"><span class="navicon"></span></label>
//  <ul class="menu">
//      <li><a href="#home" className="link link-theme link-arrow">Home</a></li>
//      <li><a href="#about" className="link link-theme link-arrow">About</a></li>
//      <li><a href="#three" className="link link-theme link-arrow">Contact</a></li>
//      <li><a href="#four" className="link link-theme link-arrow">Works</a></li>
//  </ul>





// a {
//     color: rgb(24, 24, 24);
//     text-decoration: none;
   
//   }
  
//   /* - link under - */
//   .link-arrow:after {
//     content: '';
//     background-size: 100% 100%;
//     width: 16px;
//     height: 12px;
//     position: absolute;
//     top: 5px;
//     right: -28px;
//     -webkit-transition: all .4s cubic-bezier(.35, 1, .33, 1);
//     transition: all .4s cubic-bezier(.35, 1, .33, 1)
//   }
  
//   .link-arrow:hover:after {
//     right: -35px
//   }
  
//   .link-arrow.link-arrow-white:after {
//     background-size: 100% 100%
//   }
  
//   .link-arrow-hover:after {
//     right: -35px
//   }
  
//   .link {
//     display: inline-block;
//     position: relative;
//     border: none;
//     padding-bottom: 4px;
//     text-transform: uppercase;
//      font-weight: 500;
//   }
  
//   .link:active,
//   .link:focus,
//   .link:hover {
//     outline: 0
//   }
  
//   .link:before {
//     content: '';
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     background: #000;
//     width: 0;
//     height: 2px;
//     -webkit-transition: all .4s cubic-bezier(.35, 1, .33, 1);
//     transition: all .4s cubic-bezier(.35, 1, .33, 1)
//   }
  
//   .link:hover {
//     color: #000
//   }
  
//   .link:hover:before {
//     width: 100%
//   }
  
//   .link-theme:before {
//     background: #000000
//   }
  
  
  
//   /* header   box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1); */
  
//   .header {
//     background-color:#050505;
//     position: fixed;
//     width: 100%;
//     z-index: 3;
//     /* margin-left: 10%;
//     margin-right: 10%; */
//     padding: 10px 0;
   
//   }
  
//   .header ul {
//     margin: 0;
//     padding: 0;
//     list-style: none;
//     overflow: hidden;
//     background-color: transparent;
  
//   }
  
//   .header li a {
//     display: block;
//     padding: 20px 20px 20px 20px;
//     text-decoration: none;
//     color: #f4f4f4f4;
    
  
//   }
  
//   .header li a:hover,
//   .header .menu-btn:hover {
//     background-color: transparent; 
//     color: #464646;
//   }
  
//   .header .logo {
//     color: #f4f4f4f4;
//     display: block;
//     float: left;
//     font-size: 2em;
//     padding: 2px 0px;
//     text-decoration: none;
//   }
  
//   /* menu */
  
//   .header .menu {
//     clear: both;
//     max-height: 0;
//     transition: max-height .2s ease-out;  
    
    
//   }
  
//   /* menu icon */
  
//   .header .menu-icon {
//     cursor: pointer;
//     display: inline-block;
//     float: right;
//     padding: 28px 20px;
//     position: relative;
//     user-select: none;
//   }
  
//   .header .menu-icon .navicon {
//     background: #f6f6f6;
//     display: block;
//     height: 2px;
//     position: relative;
//     transition: background .2s ease-out;
//     width: 18px;
//   }
  
//   .header .menu-icon .navicon:before,
//   .header .menu-icon .navicon:after {
//     background: #f6f6f6;
//     content: '';
//     display: block;
//     height: 100%;
//     position: absolute;
//     transition: all .2s ease-out;
//     width: 100%;
//   }
  
//   .header .menu-icon .navicon:before {
//     top: 5px;
//   }
  
//   .header .menu-icon .navicon:after {
//     top: -5px;
//   }
  
//   /* menu btn */
  
//   .header .menu-btn {
//     display: none;
//   }
  
//   .header .menu-btn:checked ~ .menu {
//     max-height: 240px;
//   }
  
//   .header .menu-btn:checked ~ .menu-icon .navicon {
//     background: transparent;
//   }
  
//   .header .menu-btn:checked ~ .menu-icon .navicon:before {
//     transform: rotate(-45deg);
//   }
  
//   .header .menu-btn:checked ~ .menu-icon .navicon:after {
//     transform: rotate(45deg);
//   }
  
//   .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
//   .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
//     top: 0;
//   }
  
//   /* 48em = 768px */
  
//   @media (min-width: 875px) {
//     .header li {
//       float: left;
  
//     }
    
//     .header .menu {
//       /* clear: none;
//       float: right; */
//       max-height: none;
//     }
//     .header .menu-icon {
//       display: none;
//     }
//   }
  