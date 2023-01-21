import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Discussions = () => {
    const navigate = useNavigate();
    const [discussions, setDiscussions] = useState([]);
    useEffect(() => {
        const url = "/api/v1/discussions/index";
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((res) => setDiscussions(res))
            .catch(() => navigate("/"));
    }, []);
    const allDiscussions = discussions.map((discussion, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="card mb-4">
            <img
              src={discussion.image}
              className="card-img-top"
              alt={`${discussion.title} image`}
            />
            <div className="card-body">
              <h5 className="card-title">{discussion.title}</h5>
              <Link to={`/discussion/${discussion.id}`} className="btn custom-button">
                View Discussion
              </Link>
            </div>
          </div>
        </div>
      ));
      const noDiscussion = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
          <h4>
            No discussions yet. Why not <Link to="/discussion">create one</Link>
          </h4>
        </div>
      );
    
      return (
        <>
          <section className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
              <h1 className="display-4">Discussions for every occasion</h1>
              <p className="lead text-muted">
                We’ve pulled together our most popular discussion, our latest
                additions, and our editor’s picks, so there’s sure to be something
                tempting for you to try.
              </p>
            </div>
          </section>
          <div className="py-5">
            <main className="container">
              <div className="text-end mb-3">
                <Link to="/discussion" className="btn custom-button">
                  Create New Discussion
                </Link>
              </div>
              <div className="row">
                {discussions.length > 0 ? allDiscussions : noDiscussion}
              </div>
              <Link to="/" className="btn btn-link">
                Home
              </Link>
            </main>
          </div>
        </>
      );

};
  
export default Discussions;