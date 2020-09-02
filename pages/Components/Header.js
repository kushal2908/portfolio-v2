import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


function Header() {
    return (

        <div className="header" id="header">

            <head>
                 <link rel="icon" href="../../public/img/favico.jpg" />
                <title>Safa Bin Salam</title>
                
            </head>
            
            <div class="nav-menu">          
                    <nav role="navigation">
                        <div id="menuToggle">

                            <input type="checkbox" />

                            <span></span>
                            <span></span>
                            <span></span>

                            <ul id="menu"> 
                                <Link href="/#home"> 
                                    <a><li>Home</li></a>
                                </Link> 
                                <Link href="/#about"> 
                                    <a><li>About Me</li></a>
                                </Link>
                                <Link href="/works"> 
                                    <a><li>My Works</li></a>
                                </Link>
                                <Link href="/contact"> 
                                    <a><li>Contact Me</li></a>
                                </Link>                               
                                                         
                            </ul>
                        </div>
                    </nav>


            </div>

        </div>
    )
}

export default Header


// <a href="/#home"><li>Home</li></a>
// <a href="/#about"><li>About</li></a>
// <a href="/works"><li>My Works</li></a>
// <a href="#"><li>Contact</li></a> 