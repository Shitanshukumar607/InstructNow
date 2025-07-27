import CompanionCard from "@/components/CompanionCard";

const Page = () => {
  return (
    <main className="flex gap-5 max-w-8xl py-10">
      <p className="text-3xl font-semibold">Dashboard</p>
      <section className="flex justify-between">
        <CompanionCard />
        <CompanionCard />
        <CompanionCard />
      </section>
    </main>
  );
};

export default Page;
