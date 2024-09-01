import './App.css';
import { Navbar } from './components/Introduction/Navbar';
import Intro from './components/Introduction/Intro';
import {SkillMain} from './components/Skills/SkillMain';
import { Skills } from './data.js';
import { Tools } from './data.js';
import Main from './components/Projects/Main.js';
import Verbal from './components/Education/Verbal.js';

function ToolItem({ image,title, description }) {
  return (
    <li>
      <img>{image}</img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      
      <section id="skill">
          <h2>Skills</h2>
          <ul>
            {Skills.map((conceptItem) => (
              <SkillMain key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        {/* <section id="tools">
          <h2>Tools</h2>
          <ul>
            {Tools.map((conceptItem) => (
              <ToolItem key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section> */}
        <Main></Main>
        <Verbal />
    </div>
  );
}

export default App;
