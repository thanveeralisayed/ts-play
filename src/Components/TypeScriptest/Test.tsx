import React from 'react'

type TestProps ={
    posts:{
        userId:Number,
        id:Number,
        title:String,
        body:String
    }[]
}

const Test = (props:TestProps) => {

    console.log(props.posts);
    

    return (
        <div>
            
        </div>
    )
}

export default Test
