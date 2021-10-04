import React from "react";
import {Link} from 'react-router-dom';
import { Course } from "../App/App";
import store from "../Redux/customizedStore";
import * as actions from "../Redux/actions";

const List = (props: any) => {
  //redux
  const linkPress = (course: string) => {
      store.dispatch(actions.addCourse(course));
      console.log(store.getState())
  }
  
  
  let courses: Course[] = props.courses;
  return (     
        <div className="list">
          <div className="courses">
            {courses.map((course: Course, i: number) => {
              return (
                <div key={i}>
                  <Link 
                  onClick={() => {linkPress(course.course)}} 
                  key={course.id} 
                  to={`/list/${course.course}`}>
                    <h3>{course.course}</h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
  );
};
export default List;