import Image from "next/image";
import mapImage from "../../../assets/images/Clip path group.png";

export default function ContactMap() {
  return (
    <div className="mt-10 sm:mt-20 overflow-hidden rounded-[20px] w-full max-w-420 mx-auto">
      <div className="relative w-full h-62.5 sm:h-89.5">
        <Image
          src={mapImage}
          alt="map"
          fill
          priority
          sizes="(max-width: 1680px) 100vw, 1680px"
          className="object-cover sm:object-fill"
        />
      </div>
    </div>
  );
}
