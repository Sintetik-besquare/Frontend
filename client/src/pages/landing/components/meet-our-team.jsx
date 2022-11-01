import people from "../../../data/team.json";

function MeetOurTeam() {
  return (
    <div id="about">
      <h1>Meet The Team</h1>
      {people.map((e) => {
        return (
          <span key={e.i}>
            <div>
              {e.id % 2 === 0 ? (
                <div>
                  <img src={e.photo} alt="unavailable"/>
                </div>
              ) : (
                <></>
              )}
              <div>
                <b>{e.name}</b>
                <p>{e.role}</p>
                <div>
                  {e.interest.map((int, index) => (
                    <span key={index}>
                      <li>{int}</li>
                    </span>
                  ))}
                </div>
              </div>
              {e.id % 2 !== 0 ? (
                <div>
                  <img src={e.photo} alt="unavailable"/>
                </div>
              ) : (
                <></>
              )}
            </div>
          </span>
        );
      })}
    </div>
  );
}

export default MeetOurTeam;
