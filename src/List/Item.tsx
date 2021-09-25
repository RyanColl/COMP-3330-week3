import React from "react";
import { Course } from "../App/App";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import store from "../Redux/customizedStore";
import * as actions from "../Redux/actions";

const Item = (props: any) => {
    let path = useLocation().pathname.substr(6);
    let courses: Course[] = props.courses
    const onBack = () => {
        store.dispatch(actions.removeCourse(courses.filter(course => course.course === path)[0]))
        console.log(store.getState())
    }
    return (
        <>
            <div className='item'>
                {courses.filter((course: Course) => {
                    return course.course === path
                }).map((course, i) => {
                    return (
                        <div key={i}>
                            <h1>{course.course}</h1>
                            <span>{course.description}</span>
                        </div>
                    )
                })}
            </div>
            {(<span style={{marginTop: 50}}>Current Redux state: {store.getState() === undefined ? 'undefined' : store.getState().map((course: any, i: number) => {
                return course.course
            })}</span>)}
            <Link onClick={onBack} className='back-button' to='/list'>
                <span><ArrowBackIcon fontSize='large' style={{color: 'white'}}/></span>
            </Link>
            
        </>
    )
}
export default Item;