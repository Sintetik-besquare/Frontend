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
                <div
                  className="card-horizontal small-card-horizontal"
                  data-aos="fade-left"
                  style={{ marginRight: "0" }}
                >
                  <img src={p.photo} alt="N/A" id="team-card-images-small" />
                  <div
                    style={{
                      textAlign: "left",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                    }}
                  >
                    <h3
                      className="member-name"
                      style={{
                        color: "black",
                      }}
                    >
                      {p.name} <br></br> 00{p.id}
                    </h3>
                    <p className="member-name" style={{ color: "black" }}>
                      {p.role}
                    </p>
                    <ul
                      className="tags"
                      style={{
                        paddingLeft: "0",
                        float: "center",
                        display: "inline",
                      }}
                    >
                      {p.interest.map((i, index) => (
                        <span key={index} style={{ margin: "0.5rem" }}>
                          <li style={{ textAlign: "center" }}>{i}</li>
                        </span>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div
                  className="card-horizontal small-card-horizontal"
                  data-aos="fade-right"
                  style={{ marginLeft: "0" }}
                >
                  <img
                    src={p.photo}
                    alt="N/A"
                    className="hide-when-big"
                    id="team-card-images-small"
                  />
                  <div
                    style={{
                      textAlign: "right",
                      paddingRight: "1rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    <h3 className="member-name" style={{ color: "black" }}>
                      {p.name} <br></br> 00{p.id}
                    </h3>
                    <p className="member-name" style={{ color: "black" }}>
                      {p.role}
                    </p>
                    <ul
                      className="tags"
                      style={{
                        float: "center",
                        display: "inline",
                      }}
                    >
                      {p.interest.map((i, index) => (
                        <span key={index} style={{ margin: "0.5rem" }}>
                          <li style={{ textAlign: "center" }}>{i}</li>
                        </span>
                      ))}
                    </ul>
                  </div>
                  <img src={p.photo} alt="N/A" className="hide-when-small" />
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