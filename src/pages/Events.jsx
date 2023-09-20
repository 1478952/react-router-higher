import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  return (
    <>
      <EventsList events={data.events} />
    </>
  );
}

export default EventsPage;

export async function eventLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return json(
      {
        message: "Could not fetch events.",
      },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
