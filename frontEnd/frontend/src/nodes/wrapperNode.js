import React from 'react'
import { Handle ,Position} from 'reactflow';
import './index.css';
const WrapperNode = ({handle, name , description}) => {
  return (
    <div className='base-node-style'>   
        <div class="button-wrapper">
            <div className='button'>
                {
                    handle?.map((items)=>{
                        return(
                            <Handle 
                                type={items.type}
                                position={Position[items.position]}
                                id={items.id}
                                style={{ top: items.style }}
                            />
                        )
                    })
                }
                <div>
                    { name && <span>{name}</span>}
                </div>
                <div>
                   {description && <span>{description}</span>}
                </div>
            </div>            
            <div class="button-bg"></div>
        
        </div>
    </div>
  )
}

export default WrapperNode;
