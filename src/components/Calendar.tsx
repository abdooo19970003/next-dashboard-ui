"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { eventsData } from "@/lib/data";

const EventCalendar = () => {
  const [value, setValue] = useState<Value>(new Date());
  return (
    <div className=" bg-[#555] rounded-2xl p-3 shadow max-w-96 m-auto overflow-y-scroll max-h-screen">
      <Calendar onChange={setValue} value={value} />
      <hr />
      <div className="flex flex-col gap-4 mt-2 ">
        <h2 className="font-bold ">Events</h2>
        {eventsData.map((e) => (
          <div key={e.id}>
            <div className="flex justify-between items-center border-b hover:bg-primary hover:text-white rounded p-2 cursor-pointer ">
              <h1>{e.title}</h1>
              <span>
                {e.date}|{e.startTime} - {e.endTime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
