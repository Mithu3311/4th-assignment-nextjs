import Image from 'next/image';
import logo from './logo.png';
import React from 'react';

interface TObj {
  name: string,
  rollNo: number,
  distanceLearning: string,
  city: string,
  center: string,
  campus: string,
  days: string,
  batch: number,
  profilePic: any
}

const IdCard = (props: TObj) => {
  return (
    <>
      <div className="bg-slate-300 py-4 h-screen">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-900">Student ID Card</h1>
        <div className="bg-teal-200 h-96 w-6/12 mx-auto flex flex-col p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <Image src={logo} width="60" height="70" placeholder="blur" alt="Logo" />
            <h3 className="text-3xl font-bold text-center text-blue-900">Governor Initiative AI, Web 3.0 & Metaverse</h3>
            <div className="absolute left-2/4 transform translate-x-1/2 translate-y-24 pl-14">
              <Image src={props.profilePic} width="150" height="200" placeholder="blur" alt="Profile Picture" />
            </div>

          </div>
          <br />
          <h5 className="text-blue-900"><b>Name: <span className="text-black">{props.name}</span></b></h5>
          <h5 className="text-blue-900"><b>Roll No: <span className="text-black">{props.rollNo}</span></b></h5>
          <h5 className="text-blue-900"><b>Distance Learning: <span className="text-black">{props.distanceLearning}</span></b></h5>
          <h5 className="text-blue-900"><b>City: <span className="text-black">{props.city}</span></b></h5>
          <h5 className="text-blue-900"><b>Center: <span className="text-black">{props.center}</span></b></h5>
          <h5 className="text-blue-900"><b>Campus: <span className="text-black">{props.campus}</span></b></h5>
          <h5 className="text-blue-900"><b>Days: <span className="text-black">{props.days}</span></b></h5>
          <h5 className="text-blue-900"><b>Batch: <span className="text-black">{props.batch}</span></b></h5>
          <div className='text-blue-900 text-right pt-10 pr-2'>Signature/Attested </div>
        </div>
      </div>
    </>
  );
};

export default IdCard;
