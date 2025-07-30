import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const CompanionList = ({
  recentCompanions,
}: {
  recentCompanions: Companion[];
}) => {
  return (
    <section className="rounded-4xl mt-5 bg-[#f7e5e5] border-black border-2 shadow-lg p-4 md:p-8 flex flex-col gap-5">
      <p className="text-xl md:text-3xl font-semibold">
        Recently completed lessons
      </p>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="md:text-lg w-2/3">Lessons</TableHead>
            <TableHead className="md:text-lg">Subject</TableHead>
            <TableHead className="md:text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentCompanions.map(({ id, name, topic, subject, duration }) => (
            <TableRow key={id} className="hover:bg-[#e8d5d5]">
              <TableCell className="font-medium">
                <Link href={`/companions/${id}`}>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <div
                      className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                      style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold md:text-2xl">{name}</p>
                      <p className="md:text-lg">{topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="bg-main flex items-center rounded-xl justify-center border-2 p-1 text-sm md:text-md">
                  {" "}
                  {subject}{" "}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 w-full justify-end">
                  <p className="md:text-2xl">
                    {duration} <span className="max-md:hidden">mins</span>
                  </p>
                  <Image
                    src="/icons/clock.svg"
                    alt="minutes"
                    width={14}
                    height={14}
                    className="hidden md:block"
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default CompanionList;
