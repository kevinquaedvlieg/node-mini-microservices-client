import {useState} from "react";
import axios from "axios";

function CommentCreate({postId}) {
    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (content === "")
            return;

        await axios.post(`http://posts.com/posts/${postId}/comments`, {
            content
        })

        setContent("");
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>New Comment</label>
                <input
                    className="form-control"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
}

export default CommentCreate