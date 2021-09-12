import React, { useState } from 'react'
import Post from '../Card/Post'
import InputC from '../InputCom/InputC'
import { TestProps } from '../Props/postProps.type'


const Test = (props: TestProps) => {

    const [val, setVal] = useState('');
    console.log(val);
    

    return (

        <div style={{marginTop:5}}>
            <InputC handleChange={(event)=>{
                setVal(event.target.value)
            }} />
            {props.posts.map((post, index) => <Post key={index} post={post} />)}
        </div>
    )
}

export default Test
