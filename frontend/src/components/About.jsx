import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we&apos;re serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to 0&apos;Kolkata House, a student-friendly restaurant located
              in Egra, Purbamedinipur, West Bengal (721422). At 0&apos;Kolkata House,
              we serve a blend of delicious, homestyle meals with a vibrant
              atmosphere that&apos;s perfect for students and young minds looking for
              a comfortable spot to unwind and enjoy good food. We pride
              ourselves on quality, affordability, and creating a community
              where everyone feels welcome. So come visit us at 0&apos;Kolkata House,
              and let us make your dining moments delightful and memorable. Your
              satisfaction is our priority—because at 0&apos;Kolkata House, it&apos;s not
              just about food; it’s about creating a connection.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
