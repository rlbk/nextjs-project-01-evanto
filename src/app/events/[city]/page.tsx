import H1 from "@/components/h1";
import EventsList from "@/components/events-list";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type TProps = {
  params: {
    city: string;
  };
};

type TEventsPageProps = TProps & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: TProps): Metadata {
  const { city } = params;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberScherma = z.coerce.number().int().positive().optional();

const EventsPage = ({ params, searchParams }: TEventsPageProps) => {
  const { city } = params;
  const parsedPage = pageNumberScherma.safeParse(searchParams.page) ?? 1;
  if (!parsedPage.success) throw new Error("Invalid page Number");
  return (
    <main className="flex flex-col items-center py-24 px-[20px]  min-h-[120vh]">
      <H1 className="mb-10">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
