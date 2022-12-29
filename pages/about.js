export default function About() {
  return (
    <div id="about" className="font-DIN border-b-2 border-slate-300 bg-zinc-900">
      <div className="sm:p-10 max-sm:p-1 mx-auto">
        <div className="flex relative md:flex-row max-md:flex-col">
          <div className="lg:w-5/12 m-10 max-w-lg justify-center">
            <div className="md:p-5 max-md:p-0"></div>
            <img
              src="/wesleyan-logo.png"
              alt="Wesleyan Logo"
              className="flex-4 "
            />
          </div>
          <div className="flex-6 w-7/12 mx-auto">
            <div className="max-w-lg">
              <h1 className="sm:text-5xl max-sm:text-3xl pt-5">MISSION STATEMENT</h1>
              <br></br>
              <p className="sm:text-base max-sm:text-xs">
                Wesleyan Men’s Rugby Club is Wesleyan University’s Men’s Rugby
                team. Established in 1962, the club plays both fifteens and
                sevens, practicing four times a week during the Fall and Spring
                on the Long Lane Rugby Pitch.
              </p>
              <br></br>
              <p className="sm:text-base max-sm:text-xs">
                In addition to our love of the sport, the club is characterised
                by the brotherhood among its members. We trust and respect one
                another, creating a community of engaged and thoughtful leaders.
                At the same time, we take responsibility for ourselves and push
                each member to fulfil this potential on and off the pitch. While
                we are always exceptionally driven to win, we recognise even
                greater value in the camaraderie and maturity that rugby bestows
                upon us.
              </p>
              <br></br>
              <p className="sm:text-base max-sm:text-xs">
                We welcome all members who have a passion for rugby and are
                willing to embrace the values that our members collectively
                demonstrate. We aspire to be great and we hope that anyone who
                reads this will help us on our mission to do so.
              </p>
              <br></br>
              <p className="sm:text-base max-sm:text-xs">Redeem thyself!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
