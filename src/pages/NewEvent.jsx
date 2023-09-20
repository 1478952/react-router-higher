import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export async function newEventAction({ request, params }) {
  const data = await request.formData();

  const title = data.get("title");

  fetch("http://localhost:8080/events", {
    method: "POST",
    body: "",
  });
}
