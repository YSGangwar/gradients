// inputNode.js
import { useState } from "react";
import { Handle, Position } from "reactflow";
import { useFormInput } from "./useFormInput";
import WrapperNode from "./wrapperNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  // const currNameProps = useFormInput('');
  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const controller = [
    { fieldType: "text", data: { id: "head", text: "Input" } },
    {
      fieldType: "input",
      data: {
        type: "text",
        value: currName,
        onChange: handleNameChange,
      },
    },
    {
      fieldType:'select',
      data : {
        value:inputType ,
        onChange:handleTypeChange,
      },
      options : [
        {value : Text , placeholder : "Text"},
        {value : File , placeholder : "File"}
      ],
    },
    {
      fieldType: "handle",
      data: {
        id: `${id}-value`,
        type: "source",
        position: Position.Right,
      },
    },
  ];

  return <WrapperNode controller={controller} />;

  // return (
  //   <div style={{width: 200, height: 80, border: '1px solid black'}}>
  //     <div>
  //       <span>Input</span>
  //     </div>
  //     <div>
  //       <label>
  //         Name:
  //         {/* <input {...currNameProps} /> */}
  //         <input
  //           type="text"
  //           value={currName}
  //           onChange={handleNameChange}
  //         />
  //       </label>
  //       <label>
  //         Type:
  //         <select value={inputType} onChange={handleTypeChange}>
  //           <option value="Text">Text</option>
  //           <option value="File">File</option>
  //         </select>
  //       </label>
  //     </div>
  //     <Handle
  //       type="source"
  //       position={Position.Right}
  //       id={`${id}-value`}
  //     />
  //   </div>
  // );
};
