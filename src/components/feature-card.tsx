import { ImageProps, StaticImageData } from "next/image";
import Image from "next/image";

interface CardProps {
     
    image: StaticImageData | string;
    imageAlt: string;
    title: string;
    description: string;

}

export default function FeatureCard({ image, imageAlt, title, description }: CardProps) {
  return (
      <div className="shadow-xl rounded-md py-20 flex flex-col items-center px-6 space-y-10 justify-center">
          <Image src={image} alt={imageAlt} height="100" width="100"/>
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-center">{description}</p>
          
      </div>
  );
}
