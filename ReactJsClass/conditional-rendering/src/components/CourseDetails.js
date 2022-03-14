import React from "react";

function CourseDetails() {
  let course = {
    courseName: "HTML",
    rating: 4,
    takeAways: [
      "Have A fundamental",
      "Have a  Skills",
      "ACquire the Pre_requisites",
    ],
    noOfHours: " 6 Hours",
    subCourses: [],
    CourseContent: [
      {
        topicName: "Getting Started",
        subTopics: ["Lists", "Immutable Objects"],
      },
      {
        topicName: "Dictionaries And Sets",

        subTopics: ["Lists", "Immutable Objects"],
      },
    ],
  };

  return (
    <>
      <p>{course.courseName}</p>
      <small>{course.rating}</small>
      <p>{course.noOfHours}</p>

      <ul>
        {course.takeAways.map((item) => {
          <li>{item}</li>;
        })}
      </ul>

      {course.subCourses.length === 0 ? (
        <p>No SubCourses</p>
      ) : (
        course.subCourses.map((sub) => {
          <li>{sub}</li>;
        })
      )}
    </>
  );
}

export default CourseDetails;
