import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/wesleyan-rugby-team-photo.png"
          alt="Wesleyan Logo"
          className=""
          width="1920"
          height="1080"
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 drop-shadow-sm">
          <h1 className="font-DIN text-center max-md:text-5xl md:text-6xl max-lg:text-6xl lg:text-7xl">
            WESLEYAN MEN’S RUGBY CLUB
          </h1>
        </div>
      </div>
    </div>
  );
}
