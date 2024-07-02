import ACNH from '../../assets/thumbnails/ACNG-Pocket.png'
import portfolio from '../../assets/thumbnails/portfolio-website.png'
import Expectancy from '../../assets/thumbnails/Expectancy.png'
import COOKFOOD from '../../assets/thumbnails/COOKFOOD.png'
import './Projects.css'
const Projects = () => {
    return(
        <div id="projects" className="container d-flex flex-column justify-content-center p-5 mt-5">
            <div className='row d-flex justify-content-evenly'>
                <h1>Personal Projects</h1>
                <p>Projects I've coded and designed</p>
                    <div className='col project p-2 mb-3 me-3'>
                        <img src={ACNH} alt="ACNH" className='projectImg img-fluid p-2 '/>
                        <h5 className='pt-3 ps-2'>ACNH - Pocket Guide (WIP)</h5>
                        <div className='d-flex justify-content-evenly pt-3'>
                            <a type="button" href="https://github.com/nicola-mcgarry/acnh-pocket-guide" target="_blank" rel="noopener noreferrer" className="btn btn-primary projectLink me-2">GitHub</a>
                            <a type="button" href="#contact" className="btn btn-primary projectLink me-2">View project</a>
                            <a type="button" href="#contact" className="btn btn-primary projectLink me-2">Case Study</a>  
                        </div>
                    </div>
                    <div className='col project p-2 mb-3 me-3'>
                        <img src={portfolio} alt="portfolio" className='projectImg img-fluid p-2'/>
                        <h5 className='pt-3 ps-2'>Portfolio Website</h5>
                        <div className='d-flex justify-content-evenly pt-3'>
                            <a type="button" href="https://github.com/nicola-mcgarry/Portfolio" target="_blank" rel="noopener noreferrer" className="btn btn-primary projectLink me-2">GitHub</a>
                            <a type="button" href="#contact" className="btn btn-primary projectLink me-2">View project</a>
                            <a type="button" href="#contact" className="btn btn-primary projectLink me-2">Case Study</a>  
                        </div>
            
                    </div>            
            </div>
            <div className='row d-flex justify-content-evenly'>
                <h1>Comerical Experiance</h1>
                <p>Projects and features i have worked on while being employed by the company's mentioned that i am proud of. <br/> All rights reserved to company's mentioned.</p>
                <div className='col project p-2 mb-3 me-3'>
                    <img src={Expectancy} alt="Expectancy" className='projectImg img-fluid p-2'/>
                    <div>
                        <p className='pt-3 ps-2'>Project: New Design</p>
                        <p className='ps-2'>Company: <a href="https://happensoftware.com/" rel="noopener noreferrer" target="_blank" className='Link'>Happen Software</a></p>
                    </div>
                   
                    <div className='d-flex justify-content-evenly pt-3'>
                        <a type="button" href="https://www.expectancy.co.uk/" target="_blank" rel="noopener noreferrer"  className="btn btn-primary projectLink">Website</a>
                        <a type="button" href="#contact" className="btn btn-primary projectLink">Find out More</a> 
                    </div>
                </div>
                <div className='col project p-2 me-3'>
                    <img src={COOKFOOD} alt="cookfood" className='projectImg img-fluid p-2'/>
                    <div>
                        <p className='pt-3 ps-2'>Project: New Hero for Landing Page</p>
                        <p className='ps-2'>Company: <a href="https://www.cookfood.net/" rel="noopener noreferrer" target="_blank" className='Link'> COOKFOOD Trading Ltd</a></p>
                    </div>
                    <div className='d-flex justify-content-evenly pt-3'>
                        <a  href="https://www.cookfood.net/" target="_blank" rel="noopener noreferrer" className="btn btn-primary projectLink">Website</a>
                        <a href="#contact" className="btn btn-primary projectLink">Find out More</a> 
                    </div>
        
                </div>            
            </div>
        </div>
    );
};

export default Projects;