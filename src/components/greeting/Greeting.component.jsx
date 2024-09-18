import './greeting.style.css'

// Greeting.component.jsx: This is a functional component using JSX to return UI elements.
const Greeting = () => {

    const name = "Wagner"; // JavaScript expression inside JSX

    return (
      <div className="default greeting">
        <h1>Hello, {name}!</h1> {/* Embedding JavaScript inside JSX, that is a react element */}
        <p>Welcome to learning React with JSX. This is static component</p>
      </div>
    );
  };
  
  export default Greeting;
  
/*
Key Concepts:
- JSX allows you to embed JavaScript expressions (like {name}) inside HTML-like syntax.
- All JSX elements must be wrapped in a single parent element (like <div></div>, or <></>).
*/

/*
Activity:
Modify the name variable to display your own name inside the JSX.
*/