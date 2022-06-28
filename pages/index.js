import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import Calendar from "../src/components/Calendar";
import EventsList from "../src/components/EventsList";
import { getEventByDate } from "../src/db/eventsDB";
import { textToUrl } from "../src/utils/functions";

export default function Home() {
  const [selectedDate, setSelectedtDate] = useState(undefined);
  const [eventsToShow, setEventsToShow] = useState([]);

  useEffect(() => {
    setEventsToShow(getEventByDate(selectedDate));
    setSelectedtDate(selectedDate);
  }, [selectedDate]);

  return (
    <div>
      <Head>
        <title>Events show</title>
        <meta name="description" content="Events show" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col ">
        <div className="max-w-7xl mx-auto h-full w-full px-2 flex-grow  space-x-10">
          <div className="mt-16 flex flex-col-reverse space-x-6 sm:flex-row">
            <EventsList events={eventsToShow} />
            <Calendar {...{ selectedDate, setSelectedtDate }} />
          </div>
        </div>
      </div>
    </div>
  );
}
