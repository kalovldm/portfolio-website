/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/cyber_bg.jpg";

const imageAltText = "A cyber security themed background image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a student studying at St. George International School. I am interested in networks, security, and software engineering.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python",
  "Linux",
  "Networks",
  "Problem solving",
  "Software engineering",
  "DevOps",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving real life problems. Learning new technologies and applying them to real life scenarios is what I enjoy the most.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(46, 47, 53, 0.95), rgba(30, 32, 38, 0.9))",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "25px",
          width: "80%",
          maxWidth: "900px",
          padding: "3rem 2.5rem",
          margin: "4rem auto",
          textAlign: "center",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6 0%, #1e40af 100%)",
          }}
        />
        
        <h2
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            letterSpacing: "1px",
          }}
        >
          About Myself
        </h2>
        
        <p
          className="large"
          style={{
            color: "#e2e8f0",
            fontSize: "1.3rem",
            lineHeight: "1.8",
            marginBottom: "2.5rem",
            fontWeight: "400",
          }}
        >
          {description}
        </p>
        
        <div
          style={{
            width: "60px",
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6 0%, #1e40af 100%)",
            margin: "2rem auto",
            borderRadius: "2px",
          }}
        />
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            margin: "2.5rem 0",
            padding: "0 1rem",
          }}
        >
          {skillsList.map((skill) => (
            <div
              key={skill}
              style={{
                background:
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(30, 64, 175, 0.2))",
                border: "2px solid rgba(59, 130, 246, 0.3)",
                borderRadius: "15px",
                padding: "1rem 1.5rem",
                color: "#e2e8f0",
                fontWeight: "500",
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "0 15px 30px rgba(59, 130, 246, 0.5)";
                e.target.style.borderColor = "rgba(59, 130, 246, 0.7)";
                e.target.style.background =
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(30, 64, 175, 0.3))";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
                e.target.style.borderColor = "rgba(59, 130, 246, 0.3)";
                e.target.style.background =
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(30, 64, 175, 0.2))";
              }}
            >
              {skill}
            </div>
          ))}
        </div>
        
        <div
          style={{
            width: "60px",
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6 0%, #1e40af 100%)",
            margin: "2.5rem auto",
            borderRadius: "2px",
          }}
        />
        
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(30, 64, 175, 0.1))",
            borderRadius: "20px",
            padding: "2rem",
            margin: "1rem 0",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          }}
        >
          <p
            style={{
              color: "#e2e8f0",
              fontSize: "1.2rem",
              lineHeight: "1.7",
              fontStyle: "italic",
              fontWeight: "400",
              margin: 0,
            }}
          >
            &ldquo;{detailOrQuote}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
