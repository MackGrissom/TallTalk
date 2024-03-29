/* eslint-disable react/jsx-no-comment-textnodes */
'use client'
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SidebarItem } from "./sidebar-item";
import Link from "next/link";
import {
  ClerkLoaded,
  ClerkLoading,
  RedirectToUserProfile,
  SignIn,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { BookHeartIcon, Loader } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  className?: string;
};
export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo.svg" alt="logo" height={40} width={40} />
          <h1 className="text-2xl font-extrabold text-violet-600 tracking-wide">
            {" "}
            ProTalk
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Home" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quest.svg" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
        <SidebarItem label="Sponsor" href="/sponsor" iconSrc="/sponsor.svg" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <div className="flex justify-center align-middle w-[100%]">
  
            <Button
              variant="primary"
              className="w-full mb-2 mt-2"
              //@ts-ignore
              onClick={() => window.Clerk.openUserProfile()}
            >
              My Account
            </Button>
          </div>
          <Button variant="secondary" className="w-full">
            <SignOutButton />
          </Button>
        </ClerkLoaded>
      </div>
    </div>
  );
};
