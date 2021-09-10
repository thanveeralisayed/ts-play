import React from 'react';
import { Card} from 'react-bootstrap';
import Buttc from '../ButtonCom/Buttc';


type postProps = {
    post: {
        userId: Number,
        id: Number,
        title: String,
        body: String
    }
}

const Post = (props: postProps) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.post.title}</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                       {props.post.body}
                    </Card.Text>
                    <Buttc btnHandler={(event,id)=>{
                        console.log('btn clicked',event,id);
                    }} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post
