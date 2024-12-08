import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowBigRightDash, WaypointsIcon } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col space-y-10 items-center justify-center h-[400px]">
      <p className="text-5xl font-semibold text-center">
        Building a Decentralized Future with Purpose-Driven Tokenomics
      </p>

      <p>A Future Built on Trust and Transparency</p>
      <div className="flex justify-center space-x-4">
        <Button
          size="lg"
          className={cn(
            "hover:-translate-y-1.5 shadow-xl transition-all duration-150 delay-150"
          )}
        >
          Launch Demo
          <ArrowBigRightDash />
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className={cn(
            "hover:-translate-y-1.5 shadow-xl transition-all duration-150 delay-150"
          )}
        >
          Join Waitlist
          <WaypointsIcon />
        </Button>
      </div>
    </div>
  );
}
