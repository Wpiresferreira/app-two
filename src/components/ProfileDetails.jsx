export default function ProfileDetails(props){

    return (
        <div className="p-3 flex flex-col justify-around">
        <div>Age: {props.age}</div>
        <div>Department: {props.department}</div>
        <div>Hobby: {props.hobby}</div>
        </div>
    )
}