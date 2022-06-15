import Link from "next/link";
import { textToUrl } from "./../utils/functions";

const EventsList = ({ events }) => {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <span className=" text-4xl font-bold shrink ">Calendar</span>
      <div className="flex flex-col  divide-y  text-base border-t first:border-t last:border-b">
        {events &&
          events.map((event) => (
            <Link
              href={`/events/${textToUrl(event.title, event.id)}`}
              key={event.id}
            >
              <a>
                <div className="h-14 flex flex-row  items-center cursor-pointer  ">
                  <div className="grow font-medium ">{event.title}</div>
                  <div className="text-sm text-primary font-medium ">{`${event.date.getDate()}/${
                    event.date.getMonth() + 1
                  }/${event.date.getFullYear()}`}</div>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default EventsList;
