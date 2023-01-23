import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

const NewDiscussion = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const userId = ReactSession.get("user_id");
    const userName = ReactSession.get("user_name");

    const stripHtmlEntities = (str) => {
        return String(str)
            .replace(/\n/g, "<br> <br>")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    };

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const url = 'api/v1/discussions/create';

        if (title.length == 0 || body.length == 0) {
            return;
        }

        const jsonBody = userName.length > 0 ? 
        {
            title,
            author: userName,
            body: stripHtmlEntities(body),
            user_id: userId,
        } :
        {
            title,
            body: stripHtmlEntities(body),
        };

        // const token = document.head.querySelector('meta[name="csrf-token"]').textContent;
        // leads to an error
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
            
            navigate(`/discussion/${res.id}`);
        }).catch((error) => {
            console.log(error.message);
        });
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6 offset-lg-3">
                    <h1 className="font-weight-normal mb-5">
                        Add a new discussion
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="discussionTitle">Discussion title</label>
                            <input
                                type="text"
                                name="title"
                                id="discussionTitle"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setTitle)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="discussionAuthor">Discussion author</label>
                            <input
                                type="text"
                                name="author"
                                id="discussionAuthor"
                                className="form-control"
                                placeholder={userName}
                                disabled />
                        </div>
                        
                        <label htmlFor="discussionBody">Discussion body</label>
                        <textarea
                            name="title"
                            id="discussionBody"
                            rows="10"
                            className="form-control"
                            required
                            onChange={(event) => onChange(event, setBody)} />
                        <button type="submit" className="btn custom-button mt-3">Create discussion</button>
                        <Link to="/discussions" className="btn btn-link mt-3">Back to discussions</Link>
                    </form>
                </div>
            </div>
        </div>
    )

};

export default NewDiscussion