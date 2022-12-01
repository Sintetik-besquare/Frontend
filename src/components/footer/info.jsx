import Logo from "../../assets/logo-sintetik.png";

function Info() {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="logo" style={{ width: "20%" }} />
        <div style={{textAlign:"start"}}>
          <h1 style={{fontWeight: "bolder", margin:"0"}}>SINTETIK</h1>
          <p style={{color:"rgba(245, 220, 12, 1)", margin:"0"}}>The Right Way of Trading</p>
        </div>
      </div>
      <p style={{ textAlign: "justify", color: "dimgrey" }}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for askdjhksa aksjhdkj jsahdjk sa spiece of gumball fell on my
        head for no reason cant’ tell wh
      </p>
    </div>
  );
}

export default Info;
