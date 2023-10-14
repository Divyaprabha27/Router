import "./course.css";

const Course = (props) => {
  const { course } = props;

 
  return (
    <a href="#"><div className="product-container">
       {course.imgUrl && (
        <div>
          <img
            className="product-image"
            src={course.imgUrl}
            alt={course.name}
          />
        </div>
      )}
      <h4>{course.name} </h4>
      <p>{course.description}</p>
      <div className="button-container">
          <a>read more</a>
      </div>
    </div></a>
  );
};

export default Course;

// var result = 5 > 10 ? "5 is greater" : "10 is greater";
