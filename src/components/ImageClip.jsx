import React from "react";

const ImageClip = ({src , clipClass}) => (
    <div className="contact-clip-path-1">
      <img src={src}
      className = {clipClass}
      />
    </div>
  );

export default ImageClip;
