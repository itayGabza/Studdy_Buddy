import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Welcoming from './Welcoming';
import ForumCard from './ForumCard';
import Login from './Login';
import DropDown from './DropDown';
import Signup from './Signup';
import Person from './Person';
import Filters from './Filters';
import NewRequest from './NewRequest';
import Forming from './Forming';

//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './ForumCard.css';
import './jumbo.css';

/* const Majors = ["IEM", "Computer Science", "Biology"]
  const IEM = ["calculus", "Algebra", "IntroJava", "Economics", "physicis1B"];
  const CompScience = ["calculus", "Algebra", "IntroScience", "Logic", "Combi"];
  const Biology = ["Anatomy", "The cell", "Chemistry", "Calculus"]; */

const getAttributeName = (e, attributeName) => {
  return e.target.getAttribute(attributeName) || e.currentTarget.getAttribute(attributeName);
}

class Degree {
  constructor(name, courses) {
    // this.ref = "IEM" + (number + 1);
    this.name = name;
    this.courses = courses;
  }
}

export class FormCard {
  constructor(title, objective, gender, level, location, studyingTime, groupSize) {
    this.title = title;
    this.objective = objective;
    this.gender = gender;
    this.level = level;
    this.location = location;
    this.studyingTime = studyingTime;
    this.groupSize = groupSize;
  }
}


const degreesData = [
  new Degree("IEM1", ['Economy1', 'Economy2']),
  new Degree("CS", ['Math-For-Cs', 'Linear Algebra', 'Linear Algebra2']),
  new Degree("Physics", ['Math-For-Physicens', 'Linear Algebra ', 'Linear Algebra 2'])
];

//const degressList = ["IEM1", "IEM2", "IEM3", "IEM4"]


const formCardsData = [
  new FormCard("Home Assignment 3", "Home Work", "Male", "Good", "Zoom", "Morning", "4"),
  new FormCard("Home Assignment 6", "Home Work", "Good", "3"),
  new FormCard("Studying for final exam", "Exam preperation", "Good", "2")
];

const App = () => {
  const [selectedDegree, setSelectedDegree] = useState(degreesData[0])
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [degrees, setDegrees] = useState(degreesData);
  const [forumCards, setForumCards] = useState(formCardsData);

  console.log('current list', forumCards);


  useEffect(() => {
    // const selectedDegree = degreesData[0];
    // setSelectedDegree(degreesData[0]);
  }, [])

  const handleCourseSelectClick = (e) => {
    const name = e.target.text;
    if (name) {

      const selectedCourse = selectedDegree.courses.find(c => c === name);
      setSelectedCourse(selectedCourse);
    }
  };

  const handleDegreeSelectClick = (e) => {
    // const name = getAttributeName(e, 'text');
    const name = e.target.text;
    if (name) {

      const selectedDegree = degrees.find(c => c.name === name);
      setSelectedDegree(selectedDegree);
      setSelectedCourse(selectedDegree.courses[0]);

      // secondArray.title = secondArray.name;
      // setSecondArray(secondArray);
      // selectedDegree.title = name;
      // setSelectedDegree(selectedDegree);
    }
  };

  const compsToRender = forumCards.map(formCard =>
    <ForumCard {...formCard} />
  );

 



  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Home />
            <Login />
          </Route>
          <Route path="/Signup">
            <Home />
            <Signup />
          </Route>
          <Route path="/Forming">
            <Forming />
            <DropDown
              degrees={degrees}
              courses={selectedDegree && selectedDegree.courses}
              selectedDegree={selectedDegree}
              selectedCourse={selectedCourse}
              onDegreeSelectClick={handleDegreeSelectClick}
              onCourseSelectClick={handleCourseSelectClick}
            />

            <h4> select filters:</h4>
            <div class="bigjumbo">
              <Jumbotron >

                <p>
                  <div class="jumbo">
                    <Filters />
                  </div>
                </p>
              </Jumbotron>
            </div>
            <h4> results -
               number- found:</h4>

            {/* <ForumCard title="Home Assignment 3" objective="Home Work" gender="Male" level="good" location="zoom" studyingTime ="Morning" groupSize="5+"/>
            <ForumCard />
            <ForumCard />
            <ForumCard /> */}

            {compsToRender}
            {compsToRender}


          </Route>
          <Route path="/newRequest">
            <Home />
            <NewRequest addToList={forumCard => {
              setForumCards([...forumCards, forumCard]);
              // document.href = '/';
            }} />

          </Route>

          <Route path="/">
            <Home />
            <Welcoming />
            <Person name="IDO" hobbies="Dancing" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;