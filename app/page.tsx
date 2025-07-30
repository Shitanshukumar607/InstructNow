import CallToAction from "@/components/CallToAction";
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main className="flex gap-5 max-w-8xl py-10 px-5 items-center md:items-start">
      <p className="text-3xl font-semibold">Dashboard</p>
      <section className="home-section">
        <CompanionCard />
        <CompanionCard />
        <CompanionCard />
      </section>

      <section className="flex flex-col md:flex-row gap-5 w-full">
        <CompanionList recentCompanions={recentSessions} />
        <CallToAction />
      </section>
    </main>
  );
};

export default Page;
