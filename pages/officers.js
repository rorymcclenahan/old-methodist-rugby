import Image from "next/image";

export default function Officers() {
  const officers = [
    {
      title: "Captain",
      name: "Eamon Hicks",
      class: "2024",
      image: "/./officer-images/eamon.jpg",
    },
    {
      title: "President",
      name: "Reed Schwartz",
      class: "2024",
      image: "/./officer-images/reed.jpg",
    },
    {
      title: "Interim Captain",
      name: "Griffin Dorman",
      class: "2023",
      image: "/./officer-images/griffin.jpg",
    },
    {
      title: "Treasurer",
      name: "Simon Shwartz",
      class: "2025",
      image: "/./officer-images/simon.jpg",
    },
    {
      title: "Match Secretary",
      name: "Joe Deluca",
      class: "2025",
      image: "/./officer-images/joe.jpg",
    },
    {
      title: "Social Chair",
      name: "Guillermo Arellano",
      class: "2026",
      image: "/./officer-images/guillermo.jpg",
    },
  ];

  return (
    <div id="officers" className="font-DIN border-b-2">
      <div className="bg-zinc-900 p-10">
        <div>
          <h1 className="text-5xl pt-5 pb-10 text-center">2022 CLUB OFFICERS</h1>
        </div>
        <div>
          <div className="grid grid-flow-row grid-rows-2 grid-cols-3 gap-8 mx-20 max-h-sm">
            {officers.map((officer) => (
              <div className="">
                <Image width="300" height="300" src={officer.image} alt={officer.name} />
                <h1 className="text-2xl pt-2">{officer.title}</h1>
                <h1 className="text-2xl">{officer.name}, {officer.class}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}