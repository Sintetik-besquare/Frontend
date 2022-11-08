import React from "react";

const Component = () => {
  return (
    <div>
      <div className="flex-block">
        <div>
          <h1>MY REUSABLE SASS COMPONENTS</h1>
        </div>
        <div>
          <ul className="navbar">
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
            <li>LINK</li>
          </ul>
        </div>
      </div>

      <div className="flex-block">
        <div>
          <button className="button-black">SIGN UP</button>
          <button className="button_green_dark">SIGN IN</button>
          <button className="button_red_dark">SIGN OUT</button>
          <button className="button_green_dark">BUY</button>
          <button className="button_red_dark">SELL</button>
        </div>

        <div className="input">
          <input type="text" placeholder="INPUT" />
          <b>eye</b>
        </div>
      </div>

      <div className="cards-container">
        <div className="card">
          <img
            src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
            alt="N/A"
          />
          <div>
            <b>CARD TITLE</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              veniam laboriosam velit et a corporis quae totam ipsa numquam
              pariatur!
            </p>
            <ul className="tags">
              <li>FE</li>
              <li>BI</li>
              <li>Cybersec</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <img
            src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
            alt="N/A"
          />
          <div>
            <b>CARD TITLE</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              veniam laboriosam velit et a corporis quae totam ipsa numquam
              pariatur!
            </p>
            <ul className="tags">
              <li>Devops</li>
              <li>Trading</li>
              <li>Mobile</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <img
            src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
            alt="N/A"
          />
          <div>
            <b>CARD TITLE</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              veniam laboriosam velit et a corporis quae totam ipsa numquam
              pariatur!
            </p>
            <ul className="tags">
              <li>QA</li>
              <li>PD</li>
              <li>BI</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card-horizontal">
        <img
          src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
          alt="N/A"
        />
        <div>
          <b>CARD TITLE</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            veniam laboriosam velit et a corporis quae totam ipsa numquam
            pariatur!
          </p>
          <ul className="tags">
            <li>Devops</li>
            <li>Trading</li>
            <li>Mobile</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Component;
