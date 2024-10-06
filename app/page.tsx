"use client";
//page.tsx
import React from "react";
import StudentCard from  "./components/card";

const students = [
  {
    name: "AUSAF ",
    age: 16,
    rollNumber: "00492664",
    className: "GIAIC",
    imageUrl: "/images/ausaf.jpg",

  },
  {
    name: "AFAQ",
    age: 17,
    rollNumber: "00267197",
    className: "GIAIC",
    imageUrl: "/images/afaq.jpg",

  },
  {
    name: "IMAD",
    age: 18,
    rollNumber: "00266960",
    className: "GIAIC",
    imageUrl: "/images/imad.jpg",
  },
];

export default function Home() {
  return (
    <div className="home">
      <h1 className="title text-center text-bold text-5xl text-transform: capitalize ">Student ID Cards</h1>
      <div className="student-cards">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>

      <style jsx>{`
        .home {
          text-align: center;
          padding: 30px;
        }
        .student-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
      `}</style><br />
      <div>
        <h2 className="text-center text-3xl font-bold text-b text-transform: capitalize text-black-800">
        Built With <span className="text-red-600" >❤</span> By AFAQ UL ISLAM
        </h2>
      </div>
    </div>
    
  );
}