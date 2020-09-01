import React from 'react'
import Particles from 'react-particles-js';


function BgEffect() {
    return (
        <div>
            
            <Particles className="particle-js"
                    params={{
                        "particles": {
                            "number": {
                                "value": 100,
                                "density": {
                                    "enable": true,
                                    "value_area": 1500
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "opacity": 0.02
                            },
                            "move": {
                                "direction": "right",
                                "speed": 0.2
                            },
                            "size": {
                                "value": 1
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0.05
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "onhover": {
                                    "enable": true,
                                    "mode": "grab"
                                }
                            },
                            "modes": {
                                "push": {
                                    "particles_nb": 1
                                }
                            }
                        },
                        "retina_detect": false
                    }} 
    
    />




        </div>
    )
}

export default BgEffect
