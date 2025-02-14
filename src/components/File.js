import React from "react";

const File = ({ name, onFileSelect, selectedFile, level }) => {
  return (
    <div
      className="file"
      style={{
        paddingLeft: `${level * 15}px`,
        backgroundColor: selectedFile === name ? "lightblue" : "transparent",
      }}
      onClick={() => onFileSelect(name)}
    >
      <span className="file-icon">📄</span> {name}
    </div>
  );
};

export default File;
