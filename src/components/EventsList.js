import Link from "next/link";
import { textToUrl } from "./../utils/functions";

const EventsList = ({ events }) => {
  return (
    <section className="grow flex flex-col space-y-6 px-3">
      <span className=" text-4xl font-bold shrink ">Calendar</span>
      <div className="basis-0 grow overflow-y-auto flex flex-col text-base">
        {events &&
          events.map((event) => (
            <Link
              href={`/events/${textToUrl(event.title, event.id)}`}
              key={event.id}
            >
              <a>
                <div className="h-14 flex flex-row items-center cursor-pointer px-2 sm:px-0 first:border-t last:border-b font-medium">
                  <div className="grow ">{event.title}</div>
                  <div className="text-sm text-primary  ">{`${event.date.getDate()}/${
                    event.date.getMonth() + 1
                  }/${event.date.getFullYear()}`}</div>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default EventsList;
