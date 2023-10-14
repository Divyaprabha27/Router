import './App.css';

import Header from './Components/Header';
import All from './Components/All';
import Stack from './Components/Stack';
import Data from './Components/Data';
import Cyber from './Components/Cyber';
import Career from './Components/Career';
import img1 from './Components/assets/img1.jpg';
import img2 from './Components/assets/img2.jpg';
import img3 from './Components/assets/img3.jpg';
import img4 from './Components/assets/img4.jpg';
import img5 from './Components/assets/img5.jpg';
import img6 from './Components/assets/img6.jpg';
import img7 from './Components/assets/img7.jpg';
import img8 from './Components/assets/img8.jpg';
import img9 from './Components/assets/img9.jpeg';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const course_list = [
  {
    id: 1,
    projectId: 2,
    imgUrl: img1,
    courseId: 1,
    name: "8 Excellent Product-based Companies for UI/UX Designing",
    description: "In today’s tech-driven world, the demand for exceptional user experiences has never been higher.",
    links: "Read More"
  },
  {
    id: 2,
    projectId: 3,
    imgUrl: img2,
    name: "Top 5 Product-Based Companies for Machine Learning Engineers",
    description: "Machine learning is what’s currently backing up most of our daily tech today, that’s how",
    
  },
  {
    id: 3,
    projectId: 2,
    courseId: 1,
    imgUrl: img3,
    name: "Essential Cloud Computing Skills for Cloud Engineers in 2023",
    description: "Cloud computing has become one of the most sought-after skills in the tech industry, ranking",
   
  },
  {
    id: 4,
    projectId: 1,
    imgUrl: img4,
    name: "Top 8 Strategies for Effective Tech Talent Sourcing",
    description: "In a talent hunt to find the ideal fit for your tech team? Fine. Let’s",
    
  },
  {
    id: 5,
    projectId: 3,
    imgUrl: img5,
    projectId: 1,
    name: "Roles and Responsibilities of a Cloud Engineer [2023]",
    description: "Why have As companies increasingly rely on cloud-based solutions, the demand for skilled cloud computing",
    
  },
  {
    id: 6,
    projectId: 3,
    imgUrl: img6,
    courseId: 1,
    name: "Top 7 Cloud Computing Tools of 2023",
    description: "Cloud computing has revolutionized the way businesses operate and manage their IT infrastructure. With its",
    
  },
  {
    id: 7,
    imgUrl: img7,
    projectId: 2,
    name: "Top Product-Based Companies for Data Scientists in 2023",
    description: "We all know about the kind of buzz surrounding data science right now, it is",
    
  },
  {
    id: 8,
    imgUrl: img8,
    projectId: 1,
    courseId: 1,
    name: "6 Best Career Opportunities in Cloud Computing Engineering",
    description: "n the ever-evolving landscape of technology, Cloud computing is a rapidly growing field with enormous",
    
  },
  {
    id: 9,
    projectId: 3,
    imgUrl: img9,
    name: "The 9 Stages of the Tech Hiring Process: A Comprehensive Overview",
    description: "The quality of its employees and their invaluable contributions are the foundation of any successful",
    
  },
];

function App() {
  const [course, setCourse] = useState(course_list);
  
    
  
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<All 
        course={course}
        />}/>
        <Route path='/full-stack' element={<Stack
          course = {course}
        />} />
        <Route path='/data' element={<Data
          course = {course}
        />} />


        <Route path='/cyber' element={<Cyber
          course = {course}
        />} />
        <Route path='/career' element={<Career 
          course = {course}
        />} />
      </Routes>

      
    </div>
  );
}

export default App;
