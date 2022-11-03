import Logo from "../../assets/logo-sintetik.jpg";

function Info() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="logo" style={{ width: "20%" }} />
        <div>
          <h1>SINTETIK</h1>
          <p>The Right Way of Trading</p>
        </div>
      </div>
      <p style={{textAlign:'justify'}}>
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
