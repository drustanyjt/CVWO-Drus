import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Discussion = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [discussion, setDiscussion] = useState({ body: ""});

    useEffect(() => {
        const url = `/api/v1/show/${params.id}`;
        fetch(url)
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error("Network response not ok!");
            })
            .then((res) => setDiscussion(res))
            .catch(() => navigate("/discussions"));
    }, [params.id]);

    const addHtmlEntities = (str) => {
        return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    };

    const deleteDiscussion = () => {
        const url = `/api/v1/destroy/${params.id}`;
        
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
        let commentsListRes = "There are no comments";

        const demoComments = [
            (<li className="list-group-item"> 
            I really like Mathematics as well maybe one day when I am a 200
             year old tortoise with a broken back and a knack for eating
             pulled chicken everyday as if it was my last meal. I will strive
             to live for a hundered more years, whther you like it or not even 
             if you do not support me. I will be a master of improvisation, a skilled chef 
             at the  art of making nonsensical words come together as if they were poems, just 
             likt the michelin-starred chefs using rubbish to make treasures.</li>),
             (<li className="list-group-item"> 
             I really like Mathematics as well maybe one day when I am a 200
              year old tortoise with a broken back and a knack for eating
              pulled chicken everyday as if it was my last meal. I will strive
              to live for a hundered more years, whther you like it or not even 
              if you do not support me. I will be a master of improvisation, a skilled chef 
              at the  art of making nonsensical words come together as if they were poems, just 
              likt the michelin-starred chefs using rubbish to make treasures.</li>),
              (<li className="list-group-item"> 
              I really like Mathematics as well maybe one day when I am a 200
               year old tortoise with a broken back and a knack for eating
               pulled chicken everyday as if it was my last meal. I will strive
               to live for a hundered more years, whther you like it or not even 
               if you do not support me. I will be a master of improvisation, a skilled chef 
               at the  art of making nonsensical words come together as if they were poems, just 
               likt the michelin-starred chefs using rubbish to make treasures.</li>),
        ];

        const foundCommentsList = demoComments;
        
        if (foundCommentsList.length > 0) {
            commentsListRes = foundCommentsList;
        }

        return commentsListRes;
    }

    const discussionBody = addHtmlEntities(discussion.body);

    return (
        <div className="">
            <div className="hero position-relative d-flex align-item-center justify-content-center">
                <img src={discussion.image} alt={`${discussion.title} image`} className="img-fluid position-absolute" />
                <div className="overlay bg-dark position-absolute" />
                <div class="grid">
                    <div class="row">
                        <h1 className="display-4 position-relative text-white">
                            {discussion.title}
                        </h1>
                    </div>
                    <div class="row">
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
                        </ul>
                    </div>
                </div>
                <Link to="/discussions" className="btn btn-link">Back to discussions</Link>
            </div>
        </div>
    )

};

export default Discussion