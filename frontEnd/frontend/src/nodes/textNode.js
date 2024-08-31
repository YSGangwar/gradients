// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import WrapperNode from "./wrapperNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const controller = [
    { fieldType: "text", data: { id: "head", text: "Text" } },
    {
      fieldType: "input",
      data: {
        type: "text",
        value: currText,
        onChange: handleTextChange,
      },
    },
    {
      fieldType: "handle",
      data: {
        id: `${id}-output`,
        type: "source",
        position: Position.Right,
      },
    },
  ];

  return <WrapperNode controller={controller} />
  // return (
  //   <div style={{ width: 200, height: 80, border: "1px solid black" }}>
  //     <div>
  //       <span>Text</span>
  //     </div>
  //     <div>
  //       <label>
  //         Text:
  //         <input type="text" value={currText} onChange={handleTextChange} />
  //       </label>
  //     </div>
  //     <Handle type="source" position={Position.Right} id={`${id}-output`} />
  //   </div>
  // );
};
