import "./Nav.css";

const NavTop = () => {
  return (
    <div className="navtop">
      <div className="location">
        <i className="fa-solid fa-location-dot"></i>
        <p>Accra, Weija Tatop</p>
      </div>
      <button className="contactBt">
        <i className="fa-solid fa-phone"></i>
      </button>
    </div>
  );
};

export default NavTop;
