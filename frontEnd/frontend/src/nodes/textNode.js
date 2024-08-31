// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import WrapperNode from "./wrapperNode";

export const TextNode = ({ id, data }) => {
  
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  // const [ controller , setController] = useState([]);
  const checkForVariable =(data)=>{
    console.log("data",data);
    const len = data.length;
    if(len>4){
      if(data[0]=='{' && data[1] == '{'  && data[len-1]=='}' && data[len-2]=='}'){
        const variable = data.slice(2,len-2);
        console.log(variable,"varable");
        return [true , variable];
      }
      return [ false ,null];
    }
  }
  const handleTextChange = (e) => {
    const [ isVariable ,variable ] = checkForVariable(e.target.value);
    if(isVariable)
    {
      console.log("check")
      controller.push(
        {
          fieldType: "handle",
          data: {
            id: `${id}-output`,
            type: "source",
            position: Position.Left,
          },
        }
      )

    }
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
