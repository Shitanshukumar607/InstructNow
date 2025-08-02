import CompanionForm from "./CompanionForm";

const page = () => {
  return (
    <main className="flex gap-5 max-w-3xl px-8 mb-8">
      <h1>Companion Builder</h1>
      <CompanionForm />
    </main>
  );
};

export default page;
