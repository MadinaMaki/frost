import './Comment.css';

function Comment(props) {
    return (
        <div>
            {props.data.map((item, index) => {
                // console.log('----', item)
                return (
                    <div className="comment-box" key={index}>
                        <div className="user-name">{item.user.firstName}</div>
                        <span className="review">{item.review}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Comment;