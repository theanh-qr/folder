import React, { useState } from "react";
import File from "./File";

const Folder = ({ name, contents, onFileSelect, selectedFile, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="folder" style={{ paddingLeft: `${level * 15}px` }}>
      <div className="folder-name" onClick={() => setIsOpen(!isOpen)}>
        <span className="arrow">{isOpen ? "▼" : "▶"}</span>
        <span className="folder-icon">📁</span> {name}
      </div>
      {isOpen && (
        <div className="folder-contents">
          {contents.map((item) =>
            item.type === "folder" ? (
              <Folder
                key={item.name}
                name={item.name}
                contents={item.children}
                onFileSelect={onFileSelect}
                selectedFile={selectedFile}
                level={level + 1}
              />
            ) : (
              <File
                key={item.name}
                name={item.name}
                onFileSelect={onFileSelect}
                selectedFile={selectedFile}
                level={level + 1}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Folder;
