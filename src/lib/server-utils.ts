import "server-only";
import prisma from "./db";
import { notFound } from "next/navigation";
import { capitalize } from "./utils";
import { unstable_cache } from "next/cache";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  // );
  // const events: TEventoEvent[] = await response.json();
  const events = await prisma.eventoEvent.findMany({
    where: { city: city === "all" ? undefined : capitalize(city) },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: 6 * (page - 1),
  });
  let totalCount: number;
  if (city === "all") totalCount = await prisma.eventoEvent.count({});
  else
    totalCount = await prisma.eventoEvent.count({
      where: { city: capitalize(city) },
    });
  return { events, totalCount };
});
export const getEvent = unstable_cache(async (slug: string) => {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );
  // const event: TEventoEvent = await response.json();

  const event = await prisma.eventoEvent.findUnique({ where: { slug } });
  if (!event) return notFound();
  return event;
});
