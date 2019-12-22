import React from "react"

export default function Dropdown(props){
    // console.log(props);
    const data = props.data;
    const courses = data.courses;
    const loading = props.loading;
    let display;
    console.log(courses);
    if(loading == false){
        return( 
            <div className="dropdown">
                <a className=" dropdown-toggle" data-toggle="dropdown">
                    {data.name}
                </a>
                    <div className="dropdown-menu">
                        {courses.map(course =>(
                            <a className="dropdown-item" key={course.id} href="#">{course.name}</a>
                        ))}
                    </div>
            </div>    
        )
    }
    else{
        return ( <span>....</span> );
    }
}