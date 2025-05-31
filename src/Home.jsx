import About from './About.jsx'
import Skill from './Skill.jsx';
import MoveTag from './MoveTag.jsx'
import Hobbies from './Hobbies.jsx';
import Hb1 from './Hb1.jsx';
import FlipCard from './FlipCard.jsx';

function Home(){
    return(
        <div>
            <About/>
            <MoveTag/>
            <Skill/>
            <Hb1/>
            <Hobbies/>
            <FlipCard/>
        </div>
    )
}

export default Home;