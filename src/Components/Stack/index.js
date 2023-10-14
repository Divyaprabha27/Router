import './stack.css';
import Course from '../Course/course';
const Stack = (props) => {
  const {course} = props;
  

    return (
      <div className="courseDetails">
        {course.filter(course => course.projectId === 1).map((course,index) => (
          <Course
          course={course}
          key = {index}
        />
        ))}
    </div>
    )
}

export default Stack;