import people from "../../../data/team.json";

function MeetOurTeam() {
  return (
    <div style={{ position: "relative" }}>
      {/* <div className="fog">
        <div id="foglayer_01" class="fog">
          <div class="image01"></div>
          <div class="image02"></div>
        </div>
        <div id="foglayer_02" class="fog">
          <div class="image01"></div>
          <div class="image02"></div>
        </div>
        <div id="foglayer_03" class="fog">
          <div class="image01"></div>
          <div class="image02"></div>
        </div>
      </div> */}
      <div id="about" style={{ backgroundColor: "black" }}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
        <h1
          className="valign-text-middle poppins-bold-white-40px2"
          data-aos="fade-left"
          style={{ color: "white" }}
        >
          Meet The Team
        </h1>
        <div className="container meet-the-team-page">
          {people.map((p) => {
            return (
              <span key={p.i}>
                {p.id % 2 === 0 ? (
                  <div
                    className="card-horizontal card-horizontal-right"
                    data-aos="fade-left"
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
                          color: "white",
                        }}
                      >
                        {p.name} <br></br> 00{p.id}
                      </h3>
                      <p className="member-name" style={{ color: "white" }}>
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
                    className="card-horizontal card-horizontal-left"
                    data-aos="fade-right"
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