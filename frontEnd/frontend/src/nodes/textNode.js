// textNode.js

import { useEffect, useState } from "react";
import { Handle, Position } from "reactflow";
import WrapperNode from "./wrapperNode";

const getController = (id, currText, handleTextChange) => {
  console.log("TCL: getController -> currText", currText);
  return [
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
};

export const TextNode = ({ id, data }) => {
  const [controller, setController] = useState([]);
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const checkForVariable = (data) => {
    console.log("data", data);
    const len = data.length;
    if (len > 4) {
      if (
        data[0] == "{" &&
        data[1] == "{" &&
        data[len - 1] == "}" &&
        data[len - 2] == "}"
      ) {
        const variable = data.slice(2, len - 2);
        console.log(variable);
        return [true, variable];
      }
      return [false, null];
    }
  };
  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    const defaultController = getController(id, currText, handleTextChange);
    const [isVariable, variable] = checkForVariable(currText);
    if (isVariable) {
      setController([
        ...defaultController,
        {
          fieldType: "handle",
          data: {
            id: `${id}-output`,
            type: "source",
            position: Position.Left,
          },
        },
      ]);
    } else {
      setController(defaultController);
    }
  }, [currText]);

  return <WrapperNode controller={controller} />;
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
