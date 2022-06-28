import Link from "next/link";
import { useRouter } from "next/router";
import { textToUrl } from "../utils/functions";

const monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const EventsList = ({ events }) => {
  const router = useRouter();
  return (
    <section className="flex grow flex-col space-y-6 md:px-3">
      <span className=" shrink text-3xl font-medium ">Calendar</span>
      <div className=" scrollbar flex flex-col overflow-y-auto  sm:grow sm:basis-0">
        {events &&
          events.map((event) => (
            <Link
              href={`/events/${textToUrl(event.title, event.id)}`}
              key={event.id}
            >
              <a>
                <div className=" flex  h-16 cursor-pointer flex-row items-center px-1 first:border-t last:border-b sm:px-0 sm:font-medium">
                  <div className="mr-2 flex-1 truncate text-sm sm:text-xs mdplus:text-base">
                    {event.title} <span className="text-project-700">&gt;</span>
                  </div>
                  <div className=" mr-0 text-right text-xs text-project-700 sm:mr-2 md:mr-3 mdplus:text-sm">{`${event.date.getDate()} ${
                    monthNames[event.date.getMonth()]
                  } ${event.date.getFullYear()}`}</div>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default EventsList;
