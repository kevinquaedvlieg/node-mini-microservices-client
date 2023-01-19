import {useState} from "react";
import axios from "axios";

function PostCreate() {
    const [title, setTitle] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (title === "")
            return;

        await axios.post('http://posts.com/posts/create', {
            title
        })

        setTitle("");
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">

                <label>Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} className="form-control"/>
            </div>

            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
}

export default PostCreate;