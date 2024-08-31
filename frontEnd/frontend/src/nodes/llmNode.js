// llmNode.js

import { Handle, Position } from "reactflow";
import WrapperNode from "./wrapperNode";

// const data = (currName, handleNameChange) => [
//   {
//     fieldType: "handle",
//     data: {
//       id: `${id}-system`,
//       type: "target",
//       position: Position.Left,
//       style: `${100 / 3}%`,
//     },
//   },
//   {
//     fieldType: "handle",
//     data: {
//       id: `${id}-system`,
//       type: "target",
//       position: Position.Left,
//       style: `${100 / 3}%`,
//     },
//   },
//   {
//     fieldType: "input",
//     data: {
//       id: `${id}-system`,
//       type: "text",
//       value: { currName },
//       onChange: { handleNameChange },
//     },
//   },
// ];

export const LLMNode = ({ id, data }) => {
  const controller = [
    { fieldType: "text", data: { id: "head", text: "LLM" } },
    { fieldType: "text", data: { id: "description", text: "This is a LLM." } },
    {
      fieldType: "handle",
      data: {
        type: "target",
        id: `${id}-system`,
        position: Position.Left,
        style: { top: `${100 / 3}%` },
      },
    },
    {
      fieldType: "handle",
      data: {
        type: "target",
        id: `${id}-prompt`,
        position: Position.Left,
        style: { top: `${200 / 3}%` },
      },
    },
    {
      fieldType: "handle",
      data: {
        type: "source",
        id: `${id}-response`,
        position: Position.Right,
        style: { top: `${100 / 3}%` },
      },
    },
  ];

  return (
    <WrapperNode controller={controller} />
    // <div style={{width: 200, height: 80, border: '1px solid black'}}>
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-system`}
    //     style={{top: `${100/3}%`}}
    //   />
    // <Handle
    //   type="target"
    //   position={Position.Left}
    //   id={`${id}-prompt`}
    //   style={{top: `${200/3}%`}}
    // />
    //   <div>
    //     <span>LLM</span>
    //   </div>
    //   <div>
    //     <span>This is a LLM.</span>
    //   </div>
    //   <Handle
    //     type="source"
    //     position={Position.Right}
    //     id={`${id}-response`}
    //   />
    // </div>
  );
};
