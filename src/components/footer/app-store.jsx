import Apple from "../../assets/app-store.png";
import Google from "../../assets/google-play-badge.png";
import Huawei from "../../assets/app-gallery.png"
import { size } from "mathjs";

function App_Store() {
  return (
    <div className="app-stores-container">
        <b style={{textDecoration: "underline yellow", fontSize:"1.5rem"}}>Download Our App Now</b>
      <div className="app-stores-list">
          <a href="https://apps.apple.com/us/app/among-us/id1351168404" target="_blank">
          <img src={Apple} alt="N/A" className="apple-image-card"/>
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img src={Google} alt="N/A" className="google-image-card"/>
          </a>
          <a href="https://media.tenor.com/yEqIPzZ6QrIAAAAC/trump-china-chynah.gif" target="_blank">
          <img src={Huawei} alt="N/A" className="huawei-image-card"/>
          </a>
      </div>
    </div>
  );
}

export default App_Store;
