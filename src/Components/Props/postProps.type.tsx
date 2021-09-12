type post = {
    userId: Number,
    id: Number,
    title: String,
    body: String
}

export type TestProps = {
    posts: post[]
}


export type postProps = {
    post: post
}