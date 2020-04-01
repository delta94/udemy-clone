import React, { useState } from "react";

import Course1 from "../ui/course-1.png";

export default function HomePage() {
  const [popularCourse, setPopularCourse] = useState([
    {
      ID: 1,
      title:
        "Learning how to create beautiful scenes in illustrator in 60 minutes",
      tutor: {
        ID: 1,
        name: "NHT",
        username: "@nht",
        dp: "http://placeimg.com/100/100/people?tutor-" + 1
      },
      duration: "82 min",
      poster: Course1
    },
    {
      ID: 2,
      title:
        "Learning how to create beautiful scenes in illustrator in 60 minutes",
      tutor: {
        ID: 2,
        name: "NHT",
        username: "@nht",
        dp: "http://placeimg.com/100/100/people?tutor-" + 1
      },
      duration: "82 min",
      poster: Course1
    }
  ]);

  //Top Tutor
  const [topTutors, setTopTutors] = useState([
    {
      ID: 1,
      name: "NHT",
      username: "@nht",
      dp: "http://placeimg.com/100/100/people?tutor-" + 1
    },
    {
      ID: 2,
      name: "NHT",
      username: "@nht",
      dp: "http://placeimg.com/100/100/people?tutor-" + 2
    },
    {
      ID: 3,
      name: "NHT",
      username: "@nht",
      dp: "http://placeimg.com/100/100/people?tutor-" + 3
    },
    {
      ID: 4,
      name: "NHT",
      username: "@nht",
      dp: "http://placeimg.com/100/100/people?tutor-" + 4
    },
    {
      ID: 5,
      name: "NHT",
      username: "@nht",
      dp: "http://placeimg.com/100/100/people?tutor-" + 5
    },
    {
      ID: 6,
      name: "NHT",
      username: "@nht",
      dp: "http://placeimg.com/100/100/people?tutor-" + 6
    },
    {
      ID: 7,
      name: "NHT",
      username: "@nht",
      dp: "http://placeimg.com/100/100/people?tutor-" + 7
    }
  ]);
  //Live Tutor List
  const tutorList = [];
  for (let i = 0; i < 6; i++) {
    tutorList.push(
      <button className="tutor rel" key={"tutor-live-" + i}>
        <img
          alt="pic"
          src={"http://placeimg.com/100/100/people?" + i}
          className="bl"
        />
      </button>
    );
  }

  //Live Tutor List
  const courseList = [];
  for (let i = 0; i < popularCourse.length; i++) {
    courseList.push(
      <a href="#a" className="course rel" key={"popular-course-" + i}>
        <div
          className="block rel"
          style={{
            background:
              "#e2e2e2 url(" + popularCourse[i].poster + ") no-repeat center"
          }}
        >
          <div className="user abs aic flex">
            <div className="pic">
              <img alt="pic" src={popularCourse[i].tutor.dp} className="bl" />
            </div>
            <div className="meta rel">
              <h2 className="name s15 fontb cfff">
                {popularCourse[i].tutor.name}
              </h2>
              <h2 className="uname s13 fontn cfff">
                {popularCourse[i].tutor.username}
              </h2>
            </div>
          </div>

          <div className="dura abs">
            <h2 className="name s13 fontb cfff">{popularCourse[i].duration}</h2>
          </div>

          <div className="course-title abs">
            <h2 className="name s15 fontb cfff">{popularCourse[i].title}</h2>
          </div>
        </div>
      </a>
    );
  }

  //Top Tutor List
  const topTutorsList = [];
  for (let i = 0; i < topTutors.length; i++) {
    topTutorsList.push(
      <a href="#a" className="user-block rel noul" key={"top-tutor-" + i}>
        <div className="user aic flex">
          <div className="pic">
            <img alt="pic" src={topTutors[i].dp} className="bl" />
          </div>
          <div className="meta rel">
            <h2 className="name s15 fontb c333">{topTutors[i].name}</h2>
            <h2 className="uname s13 fontn c333">{topTutors[i].username}</h2>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="home-page rel">
      {/** Tutors Live Now **/}
      <div className="section rel">
        <h2 className="title s24 fontb">
          Streaming <span className="fontn">Now</span>
        </h2>
        <div className="tutors rel flex">{tutorList}</div>
      </div>

      {/** Popular Courses **/}
      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Popular <span className="fontn">This Week</span>
        </h2>
        <div className="courses rel flex">{courseList}</div>
      </div>

      {/** Top Tutors **/}
      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Top <span className="fontn">Tutors</span>
        </h2>
        <div className="top-tutors rel flex">{topTutorsList}</div>
      </div>
    </div>
  );
}
