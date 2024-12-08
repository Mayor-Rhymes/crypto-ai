import XImage from "../../public/images/x.svg";
import Telegram from "../../public/images/telegram.svg";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="py-20 flex flex-col items-center space-y-6">
      <p className="text-5xl font-semibold text-center">
        Join the JusticeAI Community Today
      </p>

      <p className="text-center">
        Stay connected and get involved with the growing Justice AI community!
      </p>

      <div className="grid lg:grid-cols-2 p-5 gap-4">
        <div className="flex flex-col items-center justify-center gap-10 shadow-xl py-10 rounded-md">
          <Image src={XImage} alt="ximage" height="50" width="50" />
          <p className="text-center">
            Follow us for the latest news, updates, and announcements. We share
            insights on our AI-driven initiatives and highlight industry trends.
          </p>
          <Button>Follow us</Button>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 shadow-xl py-10 rounded-md">
          <Image src={Telegram} alt="telegram" height="50" width="50" />
          <p className="text-center">
            Join the conversation, engage with other Justice AI enthusiasts, and
            participate in discussions that drive the project forward. Our
            Telegram community is a hub for real-time updates, collaborative
            discussions, and support.
          </p>
          <Button>Join Us</Button>
        </div>
      </div>
    </div>
  );
}
