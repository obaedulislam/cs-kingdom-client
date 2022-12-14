import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';



const LeftSideBar = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-obaedulislam.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))

    }, []);

     return (
        <div className='text-center p-4 bg-slate-900 shadow-xl rounded-xl grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-3 grid-cols-1  gap-1'>

            {/* Course Title to Navigate Course Details Start*/}
                {
                courses.map((course, index) => {
                    return (<Link to={`/course/${course.id}`} className=' bg-[#9c6bf2] hover:bg-[#c3a6f7] duration-300 cursor-pointer lg:mb-2 md:mb-2 mb-1 last:mb-0 shadow-inner lg:block lg:text-[18px] md:text-[14px] text-[12px]  rounded px-3 py-1 text-black font-bold'
                        key={index}
                        course = {course}
                    ><span >{course.course_name}</span></Link>); 
                })
                }
            {/* Course Title to Navigate Course Details End*/}
           
        </div>
    );
};

export default LeftSideBar;