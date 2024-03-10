import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { GraduationCapIcon, LibraryBigIcon, Loader, MessageCircleCodeIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo.svg" alt="logo" height={40} width={40} />
          <h1 className="text-2xl font-extrabold text-violet-600 tracking-wide">
            {" "}
            ProTalk
          </h1>
        </div>
        <nav className="w-full flex justify-center align-middle">
            <ul className="flex gap-6 p-2">
            <Button variant='default' className="text-muted-foreground gap-1">
              <LibraryBigIcon/>
              <Link href='/faq'>Learn</Link>
              </Button>
              <Button variant='default' className="text-muted-foreground gap-1">
                <UsersIcon/>
                 <Link href='/about'>About Us</Link>
              </Button>

              <Button variant='default' className="text-muted-foreground gap-1">
                <MessageCircleCodeIcon/>
              <Link href='/faq'>FAQ</Link>
              </Button>
              
              <Button variant='default' className="text-muted-foreground gap-1">
                <GraduationCapIcon/>
              <Link href='/faq'>Sponsorship Program</Link>
              </Button>
            </ul>
          </nav>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          {/* if the user is signed in - show user avatar */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          {/* if user is not signed in - show sign-up buttons */}

          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button variant="primary" size="lg">
                {" "}
                Login{" "}
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
        
      </div>
      
    </header>
  );
};
