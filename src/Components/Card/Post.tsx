import React from 'react';
import { Card} from 'react-bootstrap';
import Buttc from '../ButtonCom/Buttc';
import { postProps } from '../Props/postProps.type';

const Post = ({ post }: postProps) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                       {post.body}
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
