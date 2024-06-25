import ACNH from '../../assets/thumbnails/ACNG-Pocket.png'
import portfolio from '../../assets/thumbnails/portfolio-website.png'
import './Projects.css'
const Projects = () => {
    return(
        <div id="projects" className="container p-5">
        <div className='d-flex justify-content-evenly'>
            <div className='project p-2'>
                <img src={ACNH} alt="ACNH" className='projectImg'/>
                <h5 className='pt-3 ps-2'>ACNH - Pocket Guide (WIP)</h5>
                <div className='d-flex justify-content-evenly'>
                    <a type="button" href="#contact" className="btn btn-primary projectLink">GitHub</a>
                    <a type="button" href="#contact" className="btn btn-primary projectLink">View project</a> 
                </div>
            </div>
            <div className='project p-2'>
                <img src={portfolio} alt="portfolio" className='projectImg'/>
                <h5 className='pt-3 ps-2'>Portfolio Website</h5>
                <div className='d-flex justify-content-evenly'>
                    <a type="button" href="#contact" className="btn btn-primary projectLink">GitHub</a>
                    <a type="button" href="#contact" className="btn btn-primary projectLink">View project</a> 
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Projects;