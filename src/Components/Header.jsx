/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  const headerStyle = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
    background: "rgba(46, 47, 53, 0.95)",
    backdropFilter: "blur(25px)",
    WebkitBackdropFilter: "blur(25px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "0.75rem 3rem",
    top: 0,
    width: "100%",
    zIndex: 1000,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    transition: "all 0.4s ease",
  };

  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: "400",
    letterSpacing: "1px",
    padding: "0.6rem 1.8rem",
    borderRadius: "30px",
    transition: "all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    position: "relative",
    overflow: "hidden",
    textTransform: "capitalize",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    border: "1px solid transparent",
  };

  const handleMouseEnter = (e) => {
    e.target.style.background = "rgba(255, 255, 255, 0.95)";
    e.target.style.color = "#2c2c2c";
    e.target.style.transform = "translateY(-1px)";
    e.target.style.boxShadow = "0 8px 25px rgba(255, 255, 255, 0.2)";
    e.target.style.border = "1px solid rgba(255, 255, 255, 0.3)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.background = "transparent";
    e.target.style.color = "#ffffff";
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "none";
    e.target.style.border = "1px solid transparent";
  };

  return (
    <div style={headerStyle}>
      <a
        href="#home"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Home
      </a>
      <a
        href="#about"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        About
      </a>
      <a
        href="#portfolio"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Portfolio
      </a>
      <a
        href="#footer"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Contact
      </a>
    </div>
  );
};

export default Header;
