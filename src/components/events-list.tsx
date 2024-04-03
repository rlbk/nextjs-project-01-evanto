import { TEventoEvent } from "@/lib/types";
import EventCard from "@/components/event-card";

type EventListProps = {
  events: TEventoEvent[];
};

const EventsList = ({ events }: EventListProps) => {
  return (
    <section className="max-w-[1100px] px-[20px] flex flex-wrap gap-10 justify-center">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </section>
  );
};

export default EventsList;
