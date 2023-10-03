import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function ParticlesBg (){
  async function loadParticles(main){
    await loadFull(main)
  }
  return (
    <Particles 
      id="tsparticles"
      init={loadParticles}
      options={{
        'preset': "triangles",
        "fullScreen": {
            "enable": false,
            "zIndex": -1
        },
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#5B4F95"
            },
            "shape": {
                "type": "lines",
                "options": {
                    "sides": 50
                }
            },
            "opacity": {
                "value": 0.8,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 90,
                    "size_min": 0.8,
                    "sync": false
                }
            },
            "rotate": {
                "value": 100,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 60,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 600,
                "color": "#0B0721",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": ["repulse"]
                },
                "onclick": {
                    "enable": false,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 100
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": false,
        "background": {
            "color": "",
            "image": "",
            "position": "",
            "repeat": "no-repeat",
            "size": ""
        }
      }}
    />
  )
}

export default ParticlesBg