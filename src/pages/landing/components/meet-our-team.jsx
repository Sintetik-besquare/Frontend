import people from "../../../data/team.json";

function MeetOurTeam() {
  return (
    <div id="about">
      <h1 style={{ textAlign: "center" }}>Meet The Team</h1>
      <div className="container">
        {people.map((p) => {
          return (
            <span key={p.i}>
              {p.id % 2 === 0 ? ( 
                <div className="card-horizontal">
                  <img src={p.photo} alt="N/A" />
                  <div style={{ textAlign: "center" }}>
                    <h3>
                      {p.name} &nbsp; {p.id}
                    </h3>
                    <p>{p.role}</p>
                    <ul className="tags" style={{ paddingLeft: "0" }}>
                      {p.interest.map((i, index) => (
                        <span key={index}>
                          <li>{i}</li>
                        </span>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="card-horizontal">
                  <div style={{ textAlign: "right" }}>
                    <h3>
                      {p.name} &nbsp; {p.id}
                    </h3>
                    <p>{p.role}</p>
                    <ul className="tags" style={{ float: "right" }}>
                      {p.interest.map((i, index) => (
                        <span key={index}>
                          <li>{i}</li>
                        </span>
                      ))}
                    </ul>
                  </div>
                  <img src={p.photo} alt="N/A" />
                </div>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default MeetOurTeam;
