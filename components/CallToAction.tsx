import Image from "next/image";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="bg-[#2C2C2C] text-white rounded-4xl px-7 py-10 flex flex-col items-center text-center gap-5 max-w-[380px] h-full">
      <div className="bg-main rounded-4xl px-3 py-1.5 text-black">
        Start learning your way.
      </div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>
      <Image src="/icons/cta.svg" alt="cta" width={362} height={232} />
      <button className="bg-[#FE5933] text-white rounded-xl cursor-pointer px-4 py-2 flex items-center gap-2">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">
          <p>Build a New Companion</p>
        </Link>
      </button>
    </section>
  );
};

export default CallToAction;
