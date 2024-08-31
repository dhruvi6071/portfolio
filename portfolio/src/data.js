

export const Skills = [
  {
    // image: componentsImg,
    title: 'Java',
    description:
      'Solved plenty of coding problems using java',
  },
  {
    // image: jsxImg,
    title: 'React',
    description:
      'Used for front-end projects, done 20+ mini-projects',
  },
  {
    // image: propsImg,
    title: 'Firebase',
    description:
      'Used Firebase as a main backend in 4 mini-projects',
  },
  {
    // image: stateImg,
    title: 'Tailwind',
    description:
      'Used tailwind css and sass in many projects',
  },
];

export const Tools = [
  {
    // image: componentsImg,
    title: 'Github',
    description:
      'Used to handle projects and collaborative team-works',
  },
  {
    // image: jsxImg,
    title: 'Vite',
    description:
      'Used for fast build in react apps',
  },
  {
    // image: propsImg,
    title: 'Code-Sendbox',
    description:
      'Used for rapid learning and on browser sharing',
  },
  
];

export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};