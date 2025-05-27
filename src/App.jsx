import React from 'react'
import './App.css'
import Header from './components/Header'
import ActivityFeed from './components/ActivityFeed'
import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/DashboardMainContent'
import CalenderView from './components/CalenderView'
import { calendarData } from './data/calendarData'

const App = () => {
  return (
    <div className='app'>
      <div className="wrapper">
        <Header/>
        <div className="main-content-seperator">
          <Sidebar/>  
          <DashboardMainContent/>
          <CalenderView calendarData={calendarData}/>
        </div>
      </div>
    </div>
  )
}

export default App