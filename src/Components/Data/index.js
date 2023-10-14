import { Link } from 'react-router-dom';
import './data.css';
import Course from '../Course/course';
const Data = (props) => {
  const {course} = props;
  

    return (
      <div className="courseDetails">
        {course.filter(course => course.projectId === 2).map((course,index) => (
          <Course
          course={course}
          key = {index}
        />
        ))}
    </div>
    )
}

export default Data;