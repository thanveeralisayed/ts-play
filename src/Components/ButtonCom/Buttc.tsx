import React from 'react';
import {Button} from 'react-bootstrap'


type ButtcProps = {
    btnHandler:(event : React.MouseEvent<HTMLButtonElement>,id:Number) => void
}

const Buttc = (props:ButtcProps) => {
    return (
        <div>
            <Button onClick={(event)=>props.btnHandler(event,1)} variant="primary" >Click me</Button>
        </div>
    )
}

export default Buttc
