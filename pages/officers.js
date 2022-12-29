export default function Officers() {
  const officers = [
    {
      title: "President",
      name: "Reed Schwartz",
      image: "./officer-images/reed.jpg",
    },
    {
      title: "Captain",
      name: "Eamon Hicks",
      image: "./officer-images/eamon.jpg",
    },
    {
      title: "Interim Captain",
      name: "Griffin Dorman",
      image: "./officer-images/griffin.jpg",
    },
    {
      title: "Treasurer",
      name: "Simon Shwartz",
      image: "./officer-images/simon.jpg",
    },
    {
      title: "Match Secretary",
      name: "Joe Deluca",
      image: "./officer-images/joe.jpg",
    },
    {
      title: "Social Chair",
      name: "Guillermo Arellano",
      image: "./officer-images/guillermo.jpg",
    },
  ];

  return (
    <div id="updates" className="font-DIN border-b-2">
      <div className="bg-zinc-900 p-10">
        <div>
          <h1 className="text-5xl pt-5 pb-10 text-center">2022 CLUB OFFICERS</h1>
        </div>
        <div>
          <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 mx-20 max-h-sm">
            {officers.map((officer) => (
              <div className="">
                <img src={officer.image} alt={officer.name} />
                <h1 className="text-2xl pt-2">{officer.title}</h1>
                <h1 className="text-2xl">{officer.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}