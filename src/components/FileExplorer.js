import React, { useState } from "react";
import initialData from "./data";
import Folder from "./Folder";
import File from "./File";
import "./FileExplorer.css";

const FileExplorer = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    return (
        <div className="file-explorer">
            <h3>File Explorer</h3>
            {initialData.map((item) =>
                item.type === "folder" ? (
                <Folder key={item.name} name={item.name} contents={item.children} onFileSelect={setSelectedFile} selectedFile={selectedFile} />
                ) : (
                <File key={item.name} name={item.name} onFileSelect={setSelectedFile} selectedFile={selectedFile} />
                )
            )}
            {selectedFile && <div className="file-content">File Content: {selectedFile}</div>}
        </div>
    );
  };

export default FileExplorer;
