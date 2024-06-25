import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink } from "react-router-dom";
import './Contact.css'

const Contact = () => {
    return(
        <div id="contact"  className="container" >
            <h1>My Socials</h1>
            <div>
                <a type="button" href="https://www.linkedin.com/in/nicola-mcgarry-b198118a/">
                    <LinkedInIcon className='icon'/>
                </a>
                <a type="button" href="https://github.com/nicola-mcgarry">
                    <GitHubIcon className='icon' />
                </a>
            </div>
            
            
        </div>
    );
};

export default Contact;