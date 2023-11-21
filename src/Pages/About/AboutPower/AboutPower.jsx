import React from "react";
import "./AboutPower.scss";
import Container from "react-bootstrap/Container";
import img from "../../../Assets/Images/michler.webp";
const AboutPower = () => {
  return (
    <section id="power">
      <Container>
        <div className="power">
          <h5>
            Unleashing the power of authenticity and emotion, Michelle Fischer
            takes you on a transformative journey through her captivating
            performances and profound storytelling.
          </h5>
          <div className="counts">
            <div>
              <span>569</span>
              <h6>Movies</h6>
            </div>
            <div>
              <span>569</span>
              <h6>Movies</h6>
            </div>
            <div>
              <span>569</span>
              <h6>Movies</h6>
            </div>
            <div>
              <span>569</span>
              <h6>Movies</h6>
            </div>
          </div>
          <p>
            Welcome to the official website of Michelle Fischer, a versatile and
            captivating performer known for her authentic portrayals and
            emotional depth. Explore her remarkable body of work, from stage to
            screen, and immerse yourself in the power of her storytelling.
            Discover the passion, vulnerability, and artistic brilliance that
            defines Michelle’s journey as an artist. Engage with her
            thought-provoking performances and gain insight into her creative
            process. Join us as we celebrate Michelle Fischer’s talent,
            dedication, and unwavering commitment to the craft of acting.
          </p>
       <div className="img-side">
       <img src={img} alt="" />
       </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPower;
