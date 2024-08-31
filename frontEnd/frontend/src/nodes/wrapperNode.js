import React from "react";
import { Handle } from "reactflow";
import "./index.css";

const WrapperNode = ({ controller }) => {
  return (
  <div className="base-node-style">
      <div class="button-wrapper">
        <div className="button">
          {controller.map((items) => {
            switch (items.fieldType) {
              case "handle":
                return <Handle {...items.data} />;

              case "input":
                return (
                  <div>
                    <label>
                      Name:
                      <input {...items.data} />
                    </label>
                  </div>
                );

              case "select":
                return (
                  <label>
                    Type:
                    <select {...items.data}>
                      {items.options.map((item) => (
                        <option value={item.value}>{item.placeholder}</option>
                      ))}
                    </select>
                  </label>
                );

              case "text":
                return (
                  <div key={items.data.id}>
                    <span>{items.data.text}</span>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
        <div class="button-bg"></div>
      </div>
    </div>
  );
  //   return (
  //     <div className='base-node-style'>
  //         <div class="button-wrapper">
  //             <div className='button'>
  //                 {
  //                     handle?.map((items)=>{
  //                         return(
  //                             <Handle
  //                                 type={items.type}
  //                                 position={Position[items.position]}
  //                                 id={items.id}
  //                                 style={{ top: items.style }}
  //                             />
  //                         )
  //                     })
  //                 }
  //                 <div>
  //                     { name && <span>{name}</span>}
  //                 </div>
  //                 <div>
  //                    {description && <span>{description}</span>}
  //                 </div>
  //             </div>
  //             <div class="button-bg"></div>

  //         </div>
  //     </div>
  //   )
};

export default WrapperNode;
