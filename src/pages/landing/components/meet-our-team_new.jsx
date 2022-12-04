import people from "../../../data/team.json";

function MeetOurTeam() {
  return (
    <div style={{ position: "relative" }}>
      <div id="about-the-team" style={{ backgroundColor: "black" }}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <h2
          className="homepage-headline-bottom-half"
          data-aos="fade-left"
          style={{ color: "$yellow" }}
        >
          Meet The Team
        </h2>
        <div className="container">
          {people.map((p, i) => {
            return (
              <span key={i}>
                {p.id % 2 === 0 ? (
                  <div className="card-horizontal-right" data-aos="fade-left">
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
                          color: "white",
                        }}
                      >
                        00{p.id}: {p.name}
                      </h3>
                      <p>{p.role}</p>
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
                  <div className="card-horizontal-left" data-aos="fade-right">
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
                      <h3 className="member-name" style={{ color: "white" }}>
                        {p.name} <br></br> 00{p.id}
                      </h3>
                      <p className="member-name" style={{ color: "white" }}>
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
    </div>
  );
}

export default MeetOurTeam;
