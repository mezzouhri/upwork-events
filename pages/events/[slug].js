import { getAllEvents, getEventById } from "../../src/db/eventsDB";
import { textToUrl } from "../../src/utils/functions";

const EventPage = ({ event }) => {
  return <div>{event?.title}</div>;
};

export default EventPage;

export const getStaticPaths = () => {
  const events = getAllEvents();

  const paths = events.map((event) => {
    return { params: { slug: textToUrl(event.title, event.id) } };
  });

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
};

export const getStaticProps = ({ params }) => {
  const id = params?.slug.split("-")?.slice(-1)?.[0];
  console.log("id", id);
  const event = getEventById(id);
  console.log("event", event);

  return {
    props: {
      event: JSON.parse(JSON.stringify(event)),
    },
  };
};
