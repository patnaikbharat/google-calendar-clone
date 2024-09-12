import React from 'react'
import {useState} from 'react'
import './App.css';
import {getMonth} from './util.js'
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Month from './components/Month.js'

function App() {
  const [currentMonth, updateCurrentMonth] = useState(getMonth())
  
  return (
    <React.Fragment>
      <div className="h-screen flex flex-columns">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
