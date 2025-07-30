import CompanionCard from "@/components/CompanionCard";

const Page = () => {
  return (
    <main className="flex gap-5 max-w-8xl py-10 px-5 items-center md:items-start">
      <p className="text-3xl font-semibold">Dashboard</p>
      <section className="home-section">
        <CompanionCard />
        <CompanionCard />
        <CompanionCard />
      </section>
    </main>
  );
};

export default Page;
