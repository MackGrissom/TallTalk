import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Heart, InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({activeCourse, points, hearts, hasActiveSubscription}: Props) => {
  return (
   <div className="flex items-center justify-between gap-x-2 w-full mt-6">
    <Link href='/courses'>
      <Button variant='ghost'>
      <Image 
      className="rounded-md border"
      src={activeCourse.imageSrc} 
      alt={activeCourse.title}
      width={32}
      height={32}
      />
      </Button>
    </Link>
    <Link href='/shop'>
      <Button variant='ghost' className="text-orange-500">
    <Image src='/leaderboard.svg' alt='points' height={28} width={28} className="mr-2" />
    {points}
      </Button>
    </Link>

    <Link href='/shop'>
      <Button variant='ghost' className="text-rose-500">
    <Image src='/heart.svg' alt='hearts' height={28} width={28} className="mr-2" />
    {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-3"/> : hearts }
      </Button>
    </Link>


  </div>
  );
};
