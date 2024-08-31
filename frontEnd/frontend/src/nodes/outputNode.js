// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import WrapperNode from './wrapperNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };  
  const controller  = [
    {fieldType: "text", data : { id:"head", text :"Output"} },
    {
      fieldType : "input",
      data:{
        type : "text" ,
        value : currName,
        onChange : handleNameChange,
      }, 
    },
    {
      fieldType:'select',
      data : {
        value:outputType ,
        onChange:handleTypeChange,
      },
      options : [
        {value : Text , placeholder : "Text"},
        {value : File , placeholder : "Image"}
      ],
    },
    {
      fieldType: 'handle',
      data:{
        id: `${id}-value`,
        type: "target",
        position: Position.Left,
      },
    },
  ]
  return <WrapperNode controller={controller} />

  // return (
  //   <div style={{width: 200, height: 80, border: '1px solid black'}}>
  //     <Handle
  //       type="target"
  //       position={Position.Left}
  //       id={`${id}-value`}
  //     />
  //     <div>
  //       <span>Output</span>
  //     </div>
  //     <div>
  //       <label>
  //         Name:
  //         <input 
  //           type="text" 
  //           value={currName} 
  //           onChange={handleNameChange} 
  //         />
  //       </label>
  //       <label>
  //         Type:
  //         <select value={outputType} onChange={handleTypeChange}>
  //           <option value="Text">Text</option>
  //           <option value="File">Image</option>
  //         </select>
  //       </label>
  //     </div>
  //   </div>
  // );
}
