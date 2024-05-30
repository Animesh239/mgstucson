// components/AttachmentPreview.js
import React from "react";

const AttachmentPreview = ({ attachment }) => {
  const { type, url, desc } = attachment;

  if (type === "youtube") {
    const videoId = url.split("v=")[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="attachment-preview">
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <span>{desc}</span>
      </div>
    );
  }

  if (type === "drive") {
    return (
      <div className="attachment-preview">
        <iframe
          src={url.replace("/view", "/preview")}
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </div>
    );
  }

  return null;
};

export default AttachmentPreview;
