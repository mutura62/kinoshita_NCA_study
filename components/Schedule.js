import React, { useEffect } from "react";
import styles from "./Schedule.module.css";
import ScheduleDetail from "../components/ScheduleDetail";


const Schedule = () => {
  return (
    <>
      <div className="Schedule">
        <h1>Schedule</h1>
        <ScheduleDetail/>

      </div>
    </>
  );
};

export default Schedule;
