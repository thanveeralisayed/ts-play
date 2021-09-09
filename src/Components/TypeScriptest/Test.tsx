import React from 'react'
import Post from '../Card/Post'

type TestProps ={
    posts:{
        userId:Number,
        id:Number,
        title:String,
        body:String
    }[]
}

const Test = (props:TestProps) => {

    
    

    return (
        <div>
           ,{props.posts.map((post,index)=><Post post={post} />)} 
        </div>
    )
}

export default Test
