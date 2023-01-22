import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Discussion = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [discussion, setDiscussion] = useState({ body: ""});
    const [comments, setComment] = useState([]);
    const [text, setText] = useState("");
    const [userId, setUserId] = useState("");


    useEffect(() => {
        const url = `/api/v1/discussions/show/${params.id}`;
        fetch(url)
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error("Network response not ok!");
            })
            .then((res) => setDiscussion(res))
            .catch(() => navigate("/discussions"));
    }, [params.id]);

    const fetchComments = () => useEffect(() => {
        const url = `/api/v1/comments/show/${params.id}`;
        fetch(url)
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error("Network response not ok!");
            })
            .then((res) => setComment(res))
            .catch(() => navigate("/"));
    }, [params.id]);
    fetchComments();
    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const url = '/api/v1/comments/create';

        if (text.length == 0) {
            return
        }

        const jsonBody =
        {
            discussion_id: params.id,
            user_id: userId,
            text: addHtmlEntities(text),
        } 
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonBody),
        }).then((res) => {
            console.log("raw response");
            console.log(res);
            if (res.ok) {
                return res.json();
            }
            throw new Error("Network response was not ok.");
        }).then((res) => {
            console.log("Json res");
            console.log(res);
            console.log(res.id);
            
            // fetchComments();
            window.location.reload(false);
            // navigate(`/discussion/${params.id}`);
        }).catch((error) => {
            console.log(error.message);
        });
    };
    const addHtmlEntities = (str) => {
        return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\n/g, "<br> <br>");
    };

    const deleteDiscussion = () => {
        const url = `/api/v1/discussions/destroy/${params.id}`;
        
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error("Network response was not ok");
        })
        .then(() => navigate("/discussions"))
        .catch((err) => console.log(err.message));

    }

    const commentsList = () => {
        let noComments = "There are no comments";
        
        const allComments = comments.map((comment) => (
            <li key={comment.id} className="list-group-item">
               {comment.text} 
            </li>
        )) 
        commentsListRes = comments.length >= 0 ? allComments : noComments;

        return commentsListRes;
    }

    const discussionBody = addHtmlEntities(discussion.body);

    return (
        <div className="">
            <div className="hero position-relative d-flex align-item-center justify-content-center">
                <img src={discussion.image} alt={`${discussion.title} image`} className="img-fluid position-absolute" />
                <div className="overlay bg-dark position-absolute" />
                <div className="grid">
                    <div className="row">
                        <h1 className="display-4 position-relative text-white">
                            {discussion.title}
                        </h1>
                    </div>
                    <div className="row">
                        <h1 className="display-6 position-relative text-center text-white">
                            by {discussion.author}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-8">
                        <div dangerouslySetInnerHTML={{
                            __html:`${discussionBody}`,
                            }} />
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={deleteDiscussion}
                            >Delete Discussion</button>
                            
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <ul className="list-group">
                        <h5 className="mb-2">Comments</h5>
                        {commentsList()}
                        <li key={0} className="list-group-item">
                            <h5 className="mb-2">Leave a comment...</h5>
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="commentUserId">User ID</label>
                                    <input
                                        type="text"
                                        name="userID"
                                        id="commentUserId"
                                        className="form-control"
                                        required
                                        onChange={(event) => onChange(event, setUserId)} />
                                </div>
                                <label htmlFor="commentText">Your comment here</label>
                                <textarea
                                    type="text"
                                    name="text"
                                    id="commentText"
                                    rows="3"
                                    className="form-control"
                                    required
                                    onChange={(event) => onChange(event, setText)} />
                                <button type="submit" className="btn custom-button mt-2">Comment!</button>
                            </form>
                        </li>
                        </ul>
                    </div>
                </div>
                <Link to="/discussions" className="btn btn-link">Back to discussions</Link>
            </div>
        </div>
    )

};

export default Discussion