import React from 'react'
import './Programs.css'
import box_1 from '../../assets/program-1.png'
import box_2 from '../../assets/program-2.png'
import box_3 from '../../assets/program-3.png'

const GetStarted = () => {
  return (
    <div className='programs'>
        <div className="program">
        <img src={box_1} alt="" />
        <div className='caption1'>
          <h1>10 Thousand</h1><br></br>
          <p>Students since our start in 2014</p>
        </div>
        </div>

        <div className="program">
        <img src={box_2} alt="" />
        <div className='caption2'>
          <h1>92%</h1><br></br>
          <p>of Students recommend our training program</p>
        </div>
        </div>

        <div className="program">
        <img src={box_3} alt="" />
        <div className='caption3'>
        <h1>100%</h1><br></br>
          <p>of Students pass the Exam
        </p>  
        </div>
        </div>
    </div>
  )
}

export default GetStarted