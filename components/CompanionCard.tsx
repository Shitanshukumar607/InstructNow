import { Bookmark, Clock } from "lucide-react";
import { Button } from "./ui/button";

const CompanionCard = () => {
  return (
    <article className="rounded-4xl bg-[#FFCCCC] border-black border-2 shadow-lg p-8 flex flex-col gap-2 w-full min-w-[300px] max-w-[400px] ">
      <div className="flex items-center justify-between">
        <div className="bg-main flex items-center rounded-xl justify-center border-2 p-1 min-w-20">
          Science
        </div>
        <div className="bg-main flex items-center rounded-xl justify-center border-2 p-1">
          <Bookmark className="size-5" />
        </div>
      </div>

      <h3 className="font-bold text-2xl">Neura the Brainy Explorer</h3>
      <p className="text-lg">Topic: Neural Network of the Brain</p>
      <p className="flex items-center gap-2 text-gray-600">
        <Clock size={16} />
        45 mins duration
      </p>
      <Button className="pointer-events-auto cursor-pointer">
        Launch Lesson
      </Button>
    </article>
  );
};

export default CompanionCard;
