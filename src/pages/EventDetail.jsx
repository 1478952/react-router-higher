import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export async function eventDetailLoader({ request, params }) {
  const { eventId } = params;

  const response = await fetch(`http://localhost:8080/events/${eventId}`);
  console.log(response);
  if (!response.ok) {
    return json({ message: "데이터 잘못됐어!" }, { status: 500 });
  } else {
    return response;
  }
}
