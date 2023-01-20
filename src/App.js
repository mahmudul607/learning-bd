import logo from './logo.svg';
import './App.css';
import data1 from "./Data/data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import { useEffect, useState } from 'react';
import Course from './components/Course/Course';

function App() {

  const [course, setCourse] = useState([]);
  useEffect(() =>  {
      setCourse(data1)
      console.log(data1)
    
  },[])
  return (
    <div className='body-app'>
      <img id="uniqe" src="https://i.gifer.com/origin/aa/aa5165eb495c25971190bbaf72ad38fb_w200.gif" alt="" />
    <Carousel></Carousel>
     <Header></Header>
      <div className='courses'>
        {
          course.map((course) => <Course course={course} key={course.id}></Course>)
        }
      </div>
    </div>

  );
}

export default App;
