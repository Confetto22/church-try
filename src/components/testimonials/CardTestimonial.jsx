import "./Testimonials.css";
const CardTestimonial = (props) => {
  return (
    <div className="card_testimonial">
      <i className="fa-solid fa-quote-right quote"></i>
      <p className="testimonial_heading">
        Spreading God&apos;s word, living the right way!
      </p>
      <p className="actual_testimonial">{props.text}</p>
      <div className="person">
        <img src={props.img} className="personPic" />
        <p className="person_name"> {props.name} </p>
      </div>
    </div>
  );
};

export default CardTestimonial;
