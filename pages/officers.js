// import reed from "../public/officer-images/reed.jpeg";
import eamon from "../public/officer-images/eamon.jpeg";
import griffin from "../public/officer-images/griffin.jpeg";
import simon from "../public/officer-images/simon.jpeg";
import joe from "../public/officer-images/joe.jpeg";
import guillermo from "../public/officer-images/guillermo.jpeg";

export default function Officers() {
  const officers = [
    {
      title: "President",
      name: "Reed Schwartz",
      image: "../public/officer-images/reed.jpg",
    },
    {
      title: "Captain",
      name: "Eamon Hicks",
      image: eamon,
    },
    {
      title: "Interim Captain",
      name: "Griffin Dorman",
      image: griffin,
    },
    {
      title: "Treasurer",
      name: "Simon Shwartz",
      image: simon,
    },
    {
      title: "Match Secretary",
      name: "Joe Deluca",
      image: joe,
    },
    {
      title: "Social Chair",
      name: "Guillermo Arellano",
      image: guillermo,
    },
  ];

  return (
    <div id="updates" className="font-DIN border-b-1">
      <div className="bg-zinc-900 p-10">
        <div>
          <h1 className="text-5xl pt-5 pb-10">2022 OFFICERS</h1>
        </div>
        <div>
          <div className="grid grid-flow-col grid-rows-2 grid-cols-4 gap-8">
            {officers.map((officer) => (
              <div className="flex flex-col">
                <img src={officer.image} alt={officer.name} />
                <h1 className="text-2xl">{officer.title}</h1>
                <h1 className="text-2xl">{officer.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<div className="flex md:flex-row max-md:flex-col">
          <div className="lg:w-5/12 max-w-lg justify-center">
            <h1 className="text-5xl pt-5">UPDATES</h1>
          </div>
          <div className="flex-6 lg:w-7/12">
            <div className="max-w-lg">
              <h1 className="text-5xl pb-2 pt-5">2022 FALL CALENDAR</h1>
              <ul>
                <li>
                  <p className="py-2">9/24 - ECSU, AWAY L, 25-14</p>
                </li>
                <li>
                  <p className="py-2">10/1 - BABSON, AWAY L, 60-3</p>
                </li>
                <li>
                  <p className="py-2">10/8 - TRINITY, HOME L, 27-17</p>
                </li>
                <li>
                  <p className="py-2">10/15 - AMHERST, HOME W, 43-0</p>
                </li>
                <li>
                  <p className="py-2">10/22 - WILLIAMS, AWAY W, 21-0</p>
                </li>
                <li>
                  <p className="py-2">10/29 - UNION, HOME W, 53-17</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
*/