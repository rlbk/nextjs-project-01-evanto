import EventCard from "@/components/event-card";
import { getEvents } from "@/lib/server-utils";
import PaginationControls from "./pagination-controls";

type EventListProps = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page = 1 }: EventListProps) => {
  const { events, totalCount } = await getEvents(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";
  return (
    <section className="max-w-[1100px] px-[20px] flex flex-wrap gap-10 justify-center">
      {events.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
};

export default EventsList;
