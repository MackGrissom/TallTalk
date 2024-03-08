'use client'
import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const loadLottieAnimation = () => {
        const container = lottieContainerRef.current;
        if (container) {
          lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/animation.json', // Path to your Lottie JSON file
          });
        }
      };

      loadLottieAnimation();
    }
  }, [isClient]);

  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2 relative">
      {isClient && (
        <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0" ref={lottieContainerRef}></div>
      )}
      {/* <Image
        src='/logo.svg'
        width={80}
        height={80}
        alt='logo'
        className="z-10 relative right-1/4 "
      /> */}
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Practice languages to help you speak with more confidence.
        </h1>
        <div className='flex flex-col items-center gap-y-3 max-w-[330px] w-full'>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                <Button variant="primary" size="lg" className="w-full">Get Started</Button>
              </SignUpButton>
              <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                <Button variant="primaryOutline" className="w-full">I already have an account</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button variant="primary" size='lg' className="w-full" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
