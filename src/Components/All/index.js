import { Link } from 'react-router-dom';
import './all.css';
import Course from "../Course/course";

const All = (props) => {

    return (
        <div className="home-container">
        <div className="course-container">
          {props.course.map((course, index) => (
            <Course
              course={course}
              key = {index}
            />

          ))}
        </div>
      </div>
    )
}

export default All;