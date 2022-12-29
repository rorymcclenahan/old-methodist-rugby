export default function HomePage() {
  return (
    <div>
      <div className="relative">
        <img
          src="/wesleyan-rugby-team-photo.png"
          alt="Wesleyan Logo"
          className=""
        />
        <div className="absolute text-5xl stroke-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-sm">
          <h1 className="font-DIN text-center md:text-3xl lg:text-5xl">WESLEYAN MEN’S RUGBY CLUB</h1>
        </div>
      </div>
    </div>
  );
}
