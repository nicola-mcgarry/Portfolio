import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaCodepen } from "react-icons/fa";
import MailTo from '../contact/MailTo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <>
           <div className='pod-contact d-flex justify-content-evenly'>
                <div className='mt-3'>
                    <h3>Socials</h3>
                    <div className='d-flex justify-content-center'>
                        <a href="https://www.linkedin.com/in/nicola-mcgarry-b198118a/" 
                            rel="noopener noreferrer" 
                            target='_blank' 
                            className='social me-2'
                            title="linkedIn">
                            <LinkedInIcon className='icon'/>
                        </a>
                        <a href="https://github.com/nicola-mcgarry" 
                            rel="noopener noreferrer" 
                            target='_blank' 
                            className='social'
                            title="gitHub">
                            <GitHubIcon className='icon' />
                        </a>
                        <a href="https://codepen.io/NMcGarry" 
                            rel="noopener noreferrer" 
                            target='_blank' 
                            className='social'
                            title="codePen">
                            <FaCodepen  className='icon' />
                        </a>
                    </div>
                </div>   
                <div className='vr'></div>
                <div className='mt-3'>
                    <h3>Contact</h3>
                    <div className='d-flex justify-content-center'>
                    <MailTo label="Email me"mailto="mailto:nicolaemcgarry@gmail.com"/>
                    </div>
                </div>
            </div>    
                <footer className='footer d-flex justify-content-end pe-5'>        
                    <div>
                        <p className='copyright'>&copy; {currentYear} Nicola McGarry. </p>
                    </div>   
            
                </footer>
        </>
       
    );
};

export default Footer;