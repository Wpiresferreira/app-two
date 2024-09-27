import './App.css';
// import Greeting from './components/greeting/Greeting.component'
import StudentProfile from './components/StudentProfile';
// import Welcome from './components/welcome-class/WelcomeClass.component';

function App() {

  const people = [{name: "Wagner Ferreira",
     url: "https://i.pravatar.cc/150?img=4",
     age: "8",
     department: "Grade 3",
     hobby: "Soccer"},

     {name: "Ana Clara",
      url: "https://i.pravatar.cc/150?img=5",
      age: "18",
      department: "Health",
      hobby: "Swim"},

      {name: "Nick Martin",
        url: "https://i.pravatar.cc/150?img=7",
        age: "16",
        department: "Arts & Design",
        hobby: "Songwriter"},

        {name: "Amanda Torn",
          url: "https://i.pravatar.cc/150?img=9",
          age: "21",
          department: "Fashion",
          hobby: "Hairstylist"}


  ]
  return (

    <div className='flex flex-col bg-green-100 w-fit p-6 m-6 rounded-md border-solid border-4' >
    <h1 className='font-bold text-center text-lg p-2'>Students</h1>
    {people.map((person, index) =>(
      <StudentProfile key={index} name={person.name} url={person.url} age={person.age} department={person.department} hobby={person.hobby} />
     ))
  }
    </div>
  );
}

export default App;


/*
Learning Activity: Engagement 2
Create 3 components:
- ProfileHeader: Responsible for displaying the name and profile image of the student.
- ProfileDetails: Responsible for displaying the age, department, and hobby of the student.
- StudentProfile: The parent component that will combine ProfileHeader and ProfileDetails. It will pass the necessary data (props) down to the child components.
*/