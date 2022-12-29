export default function Updates() {
  const matches = [
    // list of matches for the season
    {
      date: "9/24",
      opponent: "ECSU",
      location: "AWAY",
      result: "L",
      score: "25-14",
    },
    {
      date: "10/1",
      opponent: "BABSON",
      location: "AWAY",
      result: "L",
      score: "60-3",
    },
    {
      date: "10/8",
      opponent: "TRINITY",
      location: "HOME",
      result: "L",
      score: "27-17",
    },
    {
      date: "10/15",
      opponent: "AMHERST",
      location: "HOME",
      result: "W",
      score: "43-0",
    },
    {
      date: "10/22",
      opponent: "WILLIAMS",
      location: "AWAY",
      result: "W",
      score: "21-0",
    },
    {
      date: "10/29",
      opponent: "UNION",
      location: "HOME",
      result: "W",
      score: "53-17",
    },
  ];

  return (
    <div id="updates" className="font-DIN border-b-2">
      <div className="bg-zinc-900 p-10">
        <div className="flex md:flex-row max-md:flex-col">
          <div className="lg:w-5/12 max-w-lg justify-center">
            <h1 className="text-5xl pt-5">UPDATES</h1>
          </div>
          <div className="flex-6 lg:w-7/12">
            <div className="max-w-lg">
              <h1 className="text-5xl pb-2 pt-5">2022 FALL CALENDAR</h1>
              <ul>
                {matches.map((match) => (
                  <li>
                    <p className="py-2">
                      {match.date} - {match.opponent}, {match.location}{" "}
                      {match.result}, {match.score}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
