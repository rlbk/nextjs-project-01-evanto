import H1 from "@/components/h1";
import { TEventoEvent } from "@/lib/types";
import EventsList from "@/components/events-list";

type EventsPageProps = {
  params: {
    city: string;
  };
};

const EventsPage = async ({ params }: EventsPageProps) => {
  const { city } = params;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: TEventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px]  min-h-[120vh]">
      <H1 className="mb-10">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>
      <EventsList events={events} />
    </main>
  );
};

export default EventsPage;
