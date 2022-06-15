const EventsList = ({ events }) => {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <span className=" text-4xl font-bold shrink ">Calendar</span>
      <div className="flex flex-col  divide-y  text-base border-t first:border-t last:border-b">
        {events &&
          events.map((event) => (
            <div key={event.id} className="h-14 flex flex-row  items-center  ">
              <div className="grow font-medium cursor-pointer">
                {event.title}
              </div>
              <div className="text-sm text-primary font-medium ">{`${event.date.getDate()}/${
                event.date.getMonth() + 1
              }/${event.date.getFullYear()}`}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventsList;
