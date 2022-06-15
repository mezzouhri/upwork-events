import Head from "next/head";
import { useState, useEffect } from "react";
import Calendar from "../src/components/Calendar";
import EventsList from "../src/components/EventsList";
import { getEventByDate } from "../src/db/eventsDB";
import { textToUrl } from "../src/utils/functions";

export default function Home() {
  const [selectedDate, setSelectedtDate] = useState(new Date());
  const [eventsToShow, setEventsToShow] = useState([]);

  useEffect(() => {
    setEventsToShow(getEventByDate(selectedDate));
  }, [selectedDate]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col ">
        <div className="max-w-7xl mx-auto h-full w-full px-2 flex-grow mt-16 space-x-10">
          <div className="flex flex-row-reverse sm:flex-row justify-items-end">
            <div className="sm:grow ">
              <EventsList events={eventsToShow} />
            </div>
            <div className=" sm:shrink p-6">
              <Calendar {...{ selectedDate, setSelectedtDate }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
