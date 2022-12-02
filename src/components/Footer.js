import "../styles/Footer.scss";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Pinterest,
  PlusOne,
  Twitter,
  YouTube,
} from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <Mogo />
          <Followers />
        </div>
        <RightSide />
      </div>
      <hr />
      <CopyRight />
    </div>
  );
}

const Mogo = () => {
  return (
    <div className="mogo">
      <h1>MoGo</h1>
      <p className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};

const Followers = () => {
  return (
    <div className="followers">
      <p className="followers-title">
        <b>15K</b> followers
      </p>
      <hr />
      <div className="follow-us">
        <h3>Follow Us: </h3>
        <div className="social-icons">
          <Facebook />
          <Twitter />
          <Instagram />
          <Pinterest />
          <PlusOne />
          <YouTube />
          {/* <Dribbble/> */}
          {/* <Tumblr/> */}
        </div>
      </div>
    </div>
  );
};

const RightSide = () => {
  return (
    <div className="right">
      <h3>INSTAGRAM</h3>
      <div className="images">
        <img src={require("../assets/img1.png")} alt="mountain" />
        <img src={require("../assets/img2.png")} alt="green mountain" />
        <img src={require("../assets/img3.png")} alt="street" />
        <img src={require("../assets/img4.png")} alt="night" />
        <img src={require("../assets/img5.png")} alt="wood" />
        <img src={require("../assets/img6.png")} alt="sky and mountain" />
        <img src={require("../assets/img7.png")} alt="nature" />
        <img src={require("../assets/img8.png")} alt="planet" />
        <img src={require("../assets/img9.png")} alt="sea" />
      </div>
      <Link to="#">View more photos</Link>
    </div>
  );
};

const CopyRight = () => {
  return (
    <div className="bottom">
      <Link to="#">
        © 2016 MoGo free PSD template by <span>Laaqiq</span>
      </Link>
    </div>
  );
};

export default Footer;
