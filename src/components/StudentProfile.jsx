import ProfileDetails from "./ProfileDetails";
import ProfileHeader from "./ProfileHeader";

export default function StudentProfile(props){

    return (
        <div className="flex  bg-white p-4 border-solid rounded-md m-3 border-gray-300 border-2">
        <ProfileHeader name={props.name} url={props.url}/>
        <ProfileDetails age={props.age} department={props.department} hobby={props.hobby} />
        </div>
    )
}