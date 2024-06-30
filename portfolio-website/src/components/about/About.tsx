import './About.css'
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";


const About = () => {
    return(
        <div id="about"  className="container-fluid d-flex justify-content-end">
                    <div className="top-curve">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                    <div className='d-flex flex-column align-items-end float-end'>
                    <div className='intro d-flex  flex-column p-5 me-5'>                
                        <h1>I'm Nicola, a <span>Frontend Developer.</span></h1>
                        <h2>I code and design things. </h2>
                    </div>
                    <div className='intro d-flex align-items-end float-end flex-column p-5 me-5 mt-3'>
                        <p>I started my journey as a self taught developer using sites such as FreeCodeCamp to learn knowledge on coding languages.
                        In 2019 i landed an apprenticeship in which i succesfully acieved in 2021.   </p>

                        <p>I am currently working at building and maintaining features for the main website and other systems within the company I work for.    
                        I am also working towards a part time Open Universitry degree in Computing and IT. </p>
                    </div>
                   
                    </div>
                        <div className="bottom-curve">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                        </svg>
                    </div>
                   
          

        </div>
    );
};

export default About;