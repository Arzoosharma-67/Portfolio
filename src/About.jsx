import './About.css';
import pic1 from './assets/mypic.jpg';

function About(){
    return(
        <div className="About">
            <div className="AboutBox">
                <div className='AboutInnerBox'>
                    <div className='Text'>
                        <h1>Hi! I'm Arzoo</h1>
                        {/* <h4> — a passionate Computer Science Engineering student from CGC Landran.</h4> */}
                        <p>I enjoy building intuitive user experiences and solving 
                            real-world problems through code. Whether it's developing 
                            interactive web apps, exploring AI projects like gesture-controlled 
                            volume systems, or designing clean UI interfaces, I bring creativity 
                            and dedication to every project. I'm always eager to learn, collaborate, 
                            and grow in the ever-evolving tech world.</p>
                    </div>
                    <div className='photo'>
                        <img className='Img' src={pic1}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;