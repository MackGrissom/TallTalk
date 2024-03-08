import { Button } from "@/components/ui/button";
import Flag from "react-world-flags";
export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <span className="flex gap-6 justify-center align-middle max-w-screen-lg mx-auto">
        <Button size='lg' variant='ghost' className="w-full gap-2" >
          <Flag code="us" className="h-8 w-8" />
          English (US)
        </Button>

        <Button size='lg'variant='ghost' className="w-full gap-2">
          <Flag code="es" className="h-8 w-8" />
          Spanish
        </Button>

        <Button size='lg' variant='ghost' className="w-full gap-2">
          <Flag code="fr" className="h-8 w-8" />{" "}
          French
        </Button>
        <Button size='lg' variant='ghost' className="w-full gap-2">
          {" "}
          <Flag code="it" className="h-8 w-8" />{" "}
          Italian
        </Button>
        <Button size='lg' variant='ghost' className="w-full gap-2">
          <Flag code="jp" className="h-8 w-8" />{" "}
          Japanese
        </Button >
        <Button size='lg' variant='ghost' className="w-full gap-2">
          <Flag code="in" className="h-8 w-8" />{" "}
          Hindi
        </Button>
        <Button size='lg' variant='ghost' className="w-full gap-2">
          <Flag code="" className="h-8 w-8" />{" "}
          And more..
        </Button>
      </span>
    </footer>
  );
};
