import { Comments } from '../data2'

function IComment() {
    const CommentList = Comments.map((Comments) => 
        <div>
            {Comments.commentId}. {' '}
            {Comments.commentContent}
        </div>
    )
    return (
        <div>
             <h1>Comments</h1>
            <ul>
                <p>{CommentList}</p>
            </ul>
        </div>
    )
}

export default IComment
