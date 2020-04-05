import React, { useState } from "react";

import Course1 from "../ui/course-1.png";

export default function CoursePage() {
  const [course, setCourse] = useState({
    ID: 1,
    title:
      "Learning how to create beautiful scenes in illustrator in 60 minutes",
    detail:
      "In this course I'll teach you how to make your illustraion look really good. We're gonna study a lot of cases here, setting your work panel, making some awesome actions and presets for future. \nHope you'll get some really useful stuff out of this course. good luck to all",
    tutor: {
      ID: 1,
      name: "NHT",
      username: "@nht",
      dp: "http://placeimg.com/100/100/people?tutor-" + 1,
    },
    duration: "82 min",
    poster: Course1,

    videos: [
      {
        ID: 1,
        title: "Introduction",
        duration: "03 min 24 secs",
      },
      {
        ID: 2,
        title: "Getting Started",
        duration: "03 min 24 secs",
      },
      {
        ID: 3,
        title: "The Illustration",
        duration: "03 min 24 secs",
      },
    ],
  });

  const courseVideos = [];
  for (let i = 0; i < course.videos.length; i++) {
    courseVideos.push(
      <a href="#a" key={"course-video-" + i} className="noul aic rel flex">
        <div className="id s18 fontn cfff">{course.videos[i].ID}</div>
        <div className="meta rel">
          <h1 className="s15 lbl fontb c333">{course.videos[i].title}</h1>
          <h1 className="s13 dur fontb c777">{course.videos[i].duration}</h1>
        </div>
      </a>
    );
  }

  return (
    <div className="course-page rel flex">
      <div className="course-info rel">
        <div className="tutor rel aic flex">
          <div className="pic">
            <img alt="pic" src={course.tutor.dp} className="bl" />
          </div>
          <div className="meta rel">
            <h2 className="name s15 fontb c333">{course.tutor.name}</h2>
            <h2 className="uname s13 fontn c777">Course Tutor</h2>
          </div>
        </div>
        <div className="course-meta">
          <h2 className="s24 title fontb c333">{course.title}</h2>
          <p
            className="s18 fontn c777 detail"
            dangerouslySetInnerHTML={{ __html: course.detail }}
          ></p>

          <div className="section section-b rel">
            <h2 className="title s24 fontb">
              Course <span className="fontn">Achievement</span>
            </h2>
            <div className="course-stats aic flex">
              <div className="stats-box flex">
                <div className="ico ico-points s24 icon-shield" />
                <h2 className="val s15 c333 fontb">17</h2>
                <h2 className="lbl s13 c777">points</h2>
              </div>

              <div className="stats-box flex">
                <div className="ico ico-battery s24 icon-battery-90" />
                <h2 className="val s15 c333 fontb">45.3%</h2>
                <h2 className="lbl s13 c777">points</h2>
              </div>

              <div className="stats-box flex">
                <div className="ico ico-battery s24 icon-battery-90" />
                <h2 className="val s15 c333 fontb">+265</h2>
                <h2 className="lbl s13 c777">level</h2>
              </div>
            </div>
          </div>

          <div className="section section-b rel">
            <h2 className="title s24 fontb">
              Course <span className="fontn">Detail</span>
            </h2>
            <div className="course-videos aic flex">{courseVideos}</div>
          </div>
        </div>
      </div>

      <div className="course-preview rel">
        <div className="player rel">
          <video />
          <div className="ctrls abs aic flex">
            <button className="icon-pause s24 pp" />
            <div className="timer rel fontn s15 cfff">02:54 / 09:44</div>
            <div className="slider rel">
              <div className="prog rel">
                <div className="bar rel">
                  <div className="knob abs" />
                </div>
              </div>
            </div>
            <button className="icon-volume-100 vol s24" />
            <button className="icon-full-screen-enter2 fs s24" />
          </div>
        </div>
      </div>
    </div>
  );
}
