
import './App.css';
import { Route, Switch } from "react-router-dom";
// import { addBug, removeBug, resolveBug } from "../Redux/actions";
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import About from '../About/About';
import List from '../List/List';
import { useState } from 'react';
import Item from '../List/Item';




export interface Course {
  id: number;
  course: string;
  description: string;
}

function App() {
  
  const [courses, setCourses] = useState([
    {
        id: 1,
        course: 'COMP-3330',
        description: 'A breakdown of Javascript frameworks and NodeJS.'
    },
    {
        id: 2,
        course: 'MDIA-2106',
        description: 'A look at app design, layout, and guiding a user through a good user interaction.'
    },
    {
        id: 3,
        course: 'MKTG-1352',
        description: 'Marketing techniques and tools to excel at reaching a user base through content creation.'
    },
    {
        id: 4,
        course: 'IDSP-3380',
        description: 'An interdisciplinary project that involves both FSWD and D3 students.'
    },
    {
        id: 5,
        course: 'COMP-3514',
        description: 'An introduction to dotnet and creating dotnet applications.'
    },
    {
        id: 6,
        course: 'BUSA-3455',
        description: 'An introduction to e-commerce.'
    },
    {
        id: 7,
        course: 'BLAW-3205',
        description: 'Investigating internet and intellectual copyright laws in the Canadian Legal System.'
    }
  ])
  return (
    <div className="App">
      <div className="App-header">
          <Nav />
          <div className='content'>
          <Switch>
            <Route path='/' exact={true}>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/list' exact>
              <List courses={courses} />
            </Route>
            <Route path='/list/:course'>
              <Item courses={courses} />
            </Route>
          </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
