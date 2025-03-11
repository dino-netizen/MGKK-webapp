import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'

const About = () => {
  return (
    <div className="about-container"> 
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
            </div>
            
            <div className="about-right">
                <h3>Ang dinosaur</h3>
                <br />
                <p>Tyrannosaurus Rex, Velociraptor, Triceratops, Stegosaurus, Brachiosaurus, Spinosaurus, Allosaurus, Giganotosaurus, Carnotaurus, Deinonychus, Ankylosaurus, Parasaurolophus, Iguanodon, Diplodocus, Pachycephalosaurus, Pteranodon, Quetzalcoatlus, Mosasaurus, Plesiosaurus, Therizinosaurus, Megalosaurus, Argentinosaurus, Apatosaurus, Corythosaurus, Edmontosaurus, Euoplocephalus, Kentrosaurus, Maiasaura, Oviraptor, Protoceratops, Rajasaurus, Sauropelta, Shantungosaurus, Torosaurus, Utahraptor, Zuniceratops.</p>
            </div>
        </div>

        <div className="containerS">
            <button>CCNA</button>
            <button>CCNP</button>
            <button>SMART LABORATORY</button>  
            <button>IT INFRASTRUCTURE</button>
            <button>HANDS ON TRAINING</button>
        </div>
    </div>
);


}

export default About