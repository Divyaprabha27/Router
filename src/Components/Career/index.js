import './career.css';
import Course from '../Course/course';
const Career = (props) => {
  const {course} = props;
  

    return (
      <div className="courseDetails">
        {course.filter(course => course.courseId === 1).map((course,index) => (
          <Course
          course={course}
          key = {index}
        />
        ))}
    </div>
    )
}

export default Career;