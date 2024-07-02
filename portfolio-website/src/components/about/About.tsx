import './About.css'

const About = () => {
    return(
        <div id="about" className='container d-flex flex-column'>
            <div className='row'>
                <div className='col-md-12 d-flex justify-content-center'>
                    <div className='pod-about p-5 me-5 ms-5'>
                            <p>I have been a Developer since 2019. when I landed my Apprenticeship, which i completed in 2021. </p>
                            <p>As someone who has both a creative and logical side, I feel at home as a Frontend Developer.</p>
                            <p></p>
                    </div>
                </div>
            </div>
             <div className="row">
                <div className='col-md-12'>
                    <div className='pod-skills pt-5 ms-5 me-5' >
                        <div className='row '> 
                            <div className="col btn btn-disabled disabled me-3 mt-3">HTML</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">CSS/SASS</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">BootStrap</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">React</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">JavaScript</div>                 
                            <div className="col btn btn-disabled disabled me-3 mt-3">ASP.NET</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">MVC</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">SQL</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">C#</div>
                           
                        </div>
                            
                    </div>
                </div>      
            </div>
            
                    
        </div>
    );
};

export default About;