import { useState } from "react"

export default function ProfileDetails(props){

const [style, setStyle] = useState('')

    const handleMouseEnter = ()=>{
        // alert('text')
        setStyle('font-bold')
    }
    const handleMouseLeave = ()=>{
        setStyle('')
    }


    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${style} p-3 flex flex-col justify-around`}>
        <div>Age: {props.age}</div>
        <div>Department: {props.department}</div>
        <div>Hobby: {props.hobby}</div>
        </div>
    )
}