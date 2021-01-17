import React from "react";

const Footer = () => {
  const footerStyle = {
    background: "#fff",
    padding: 15,
    marginTop: 50,
    textAlign: "center"
  };

  return (
    <div style={footerStyle}>
      Copyright &copy;{" "}
      <a
        href="http://github.com/kayodefad/"
        target="_blank"
        rel="noopener noreferrer"
      >
        kayodefad
      </a>{" "}
      2020
    </div>
  );
};

export default Footer;
