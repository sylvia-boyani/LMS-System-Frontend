import React from 'react'
import DashSummaryCard from './DashSummaryCard'
import { Link } from 'react-router-dom'

const InstructorDashSummary = () => {
  return (
    <div className='summarycontainer' style={{width: "25vw"}}>
        <div className='summaryheader' style={{display: "flex", flexDirection: "column"}}>
            <h3>Instructor</h3>
            <Link to="/instructors"><button>View all</button></Link>
        </div>
        <div className='summarycontent'>
            <DashSummaryCard/>
            
        </div>
    </div>
  )
}

export default InstructorDashSummary