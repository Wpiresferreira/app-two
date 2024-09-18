import './welcome.styles.css'

// Welcome.component.jsx: A functional component that takes "props" to display dynamic data.
const Welcome = (props) => {

    const { firstName, lastName } = props; // Destructure props object

    return (
      <div className='welcome'>
        <h1>Welcome, {firstName} {lastName} to react class!</h1> {/* Using props to make the component dynamic */}
        <p>This is a reusable component that can be used in any part of the app.</p>
      </div>
    );
  };
  
  export default Welcome;


// ##### This is another way to destructure and use the object props direct on parameter filed 
/*
  const Welcome = ({ firstName, lastName }) => {

    return (
      <div className='welcome'>
        <h1>Welcome, {firstName} {lastName}!</h1>
        <p>This is a reusable component that can be used in any part of the app.</p>
      </div>
    );
  };
  
  export default Welcome;
  */


// ##### This is another way to use the object props without destructure  
/*
  const Welcome = (props) => {

    return (
      <div>
        <h1>Welcome, {props.firstName} {props.lastName}!</h1>
        <p>This is a reusable component that can be used in any part of the app.</p>
      </div>
    );
  };
  
  export default Welcome;
*/


/*
Key Concepts:
Reusability: The Welcome component is used multiple times, but with different data passed via props.
Props in JSX: You can pass data to a component by setting attributes like <Welcome firstName="Hugo"  lastName="Camargo"/>.
*/

/*
Activity:
Modify the props to display your own name.
*/
  

