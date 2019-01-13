import React from "react";

const Image = props => {
  return <img src={props.src} alt="" onClick={() => props.onClick(props.id)} />;
};

export default Image;
