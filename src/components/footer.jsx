import React from "react";

const Footer = () => {
  const footerStyle = {
    padding: 15,
    marginTop: 50,
    textAlign: "center"
  };

  return (
    <div className="bg-secondary" style={footerStyle}>
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
