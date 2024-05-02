import "./Hero.css";
import ContactBt from "./ContactBt";
import Card from "./Card";
import Reach from "./Reach";

const reachDetails = [
  {
    id: 1,
    icon: "fa-solid fa-church",
    reachHeading: "Visit Our Church",
    reachInfo: "323 Valley Lane, Austin",
  },
  {
    id: 2,
    icon: "fa-solid fa-phone",
    reachHeading: "Call Us Now",
    reachInfo: "+1 (234) 567 890 00",
  },
  {
    id: 3,
    icon: "fa-solid fa-envelope",
    reachHeading: "Send a Message",
    reachInfo: "agrace.church@gmail.com",
  },
];

function createReachDetail(singleReach) {
  return (
    <Reach
      icon={singleReach.icon}
      reachHead={singleReach.reachHeading}
      reachInfo={singleReach.reachInfo}
    />
  );
}

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_text">
        <p className="hero_subheading">welcome to agrace</p>
        <p className="mainheading">Embracing All with redeeming love</p>
        <p className="hero_info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nam,
          consequuntur et debitis ea in quae deserunt modi architecto est ipsa.
        </p>
        <div className="hero_buttons">
          <button className="getStartedd">Get Started</button>
          <ContactBt />
        </div>
      </div>
      <Card />
      <div className="reach">{reachDetails.map(createReachDetail)}</div>
    </section>
  );
};

export default Hero;
