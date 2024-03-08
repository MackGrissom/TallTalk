'use client'
import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { Button } from '@/components/ui/button';

const AboutPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const lottieContainerRef = useRef<HTMLDivElement>(null);

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
            path: '/humans.json', // Path to your Lottie JSON file
          });
        }
      };

      loadLottieAnimation();
    }
  }, [isClient]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed mb-4 w-3/4 md:w-full">
  Our mission is to educate, empower, and connect the world, aiming to foster better understanding among us all. We believe in the power of knowledge to transform lives, and we strive to make learning accessible to everyone, regardless of background or circumstance.

  Through our platform, we hope to bridge cultural divides, promote stepping out of your comfort zone, and create a more connected global community.
</p>


<p className="text-sm leading-relaxed mb-4 w-3/4 md:w-full text-muted-foreground text-center">
  Join our sponsorship program and make a difference in a student&apos;s life. For every membership purchased, we will provide a lifetime membership to a less fortunate student, giving them access to the same educational opportunities as everyone else. Together, we can empower future generations and create a more equitable world.
</p>
<Button variant='super' size='lg'>Sponsor A Student</Button>
      </div>
      {isClient && (
        <div className="w-1/6" ref={lottieContainerRef}></div>
      )}
    </div>
  );
};

export default AboutPage;