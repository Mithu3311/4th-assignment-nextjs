import React from 'react'
import IdCard from './components/card/page'
import fProfile from './Mithu.png'
import sProfile from './lajpat.jpg'
import tProfile from './Anil.jpg'

const Main = () => {
  return (
    <>
    {/* first Stident Data */}
    <IdCard 
    name='Mithu'
    rollNo={340680}
    distanceLearning='Onsite'
    city='Karachi' center='Governor House Karachi'
    campus='Main Campus' days='Monday 2 to 5 PM'
    batch={1}
    profilePic={fProfile}
    />

    {/* Secont Student Data */}
    <IdCard 
    name='Varoon'
    rollNo={228450}
    distanceLearning='Onsite'
    city='Karachi'
    center='Governor House Karachi'
    campus='Main Campus'
    days='Sunday 2 to 5 PM'
    batch={1}
    profilePic={sProfile}
    />

    {/* Third Student Data */}
    <IdCard 
    name='Meer Manav'
    rollNo={190244}
    distanceLearning='Onsite'
    city='Karachi'
    center='Governor House Karachi'
    campus='Main Campus'
    days='Sunday 7 to 10 PM'
    batch={1}
    profilePic={tProfile}
    />

    <div>
      <h5 className='text-center items-center bg-slate-300 '>All Right Reserverd! Made by Mithu</h5>
    </div>
    </>
  )
}

export default Main