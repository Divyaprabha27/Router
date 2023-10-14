import './cyber.css';
import Course from '../Course/course';
const Cyber = (props) => {
  const {course} = props;
  

    return (
      <div className="courseDetails">
        {course.filter(course => course.projectId === 3).map((course,index) => (
          <Course
          course={course}
          key = {index}
        />
        ))}
    </div>
    )
}

export default Cyber;