import { Bookmark, Clock } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const CompanionCard = () => {
  return (
    <article className="rounded-2xl bg-[#FFCCCC] border-black border-2 shadow-lg p-8 flex flex-col gap-2.5">
      <div className="flex items-center justify-between">
        <Badge className="p-1">Science</Badge>
        <Badge className="p-1">
          <Bookmark className="size-5" />
        </Badge>
      </div>

      <h3 className="font-bold text-2xl">Neura the Brainy Explorer</h3>
      <p className="text-lg">Topic: Neural Network of the Brain</p>
      <p className="flex items-center gap-2 text-gray-600">
        <Clock size={16} />
        45 mins duration
      </p>
      <Button className="pointer-events-auto pointer">Launch Lesson</Button>
    </article>
  );
};

export default CompanionCard;
