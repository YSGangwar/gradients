// llmNode.js

import { Handle, Position } from 'reactflow';
import WrapperNode from './wrapperNode';

export const LLMNode = ({ id, data }) => {
  const handles = [
    {
      type:"target" , id : `${id}-system` , position:Position.Left,style:`${100/3}%`
    },
    {
      type:"target" , id : `${id}-prompt` , position:Position.Left,style:`${200/3}%`
    },
    {
      type:"source" , id : `${id}-response` , position:Position.Right,style:`${100/3}%`
    },
    
  ]
  return (
    <WrapperNode handle={handles}  name="LLM"  description="this is a LLM"   />
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
}
