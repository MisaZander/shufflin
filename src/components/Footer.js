import React from "react";

const Footer = props => {
  const { score, highScore } = props;
  return (
    <p className="lead text-center display-3">
      Score: {score}
      {" - "}
      High Score: {highScore}
    </p>
  );
};

export default Footer;
