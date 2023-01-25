import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

const Discussions = () => {
    const navigate = useNavigate();
    const [discussions, setDiscussions] = useState([]);
    const userId = ReactSession.get("user_id");
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
    function deleteUserButton(props) {
        if (userId == 1) {
            return <></>;
        } else {
            return (
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={
                      () => {
                        const url = `/api/v1/users/destroy/${userId}`;
                            
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
                        .then(() => navigate("/"))
                        .catch((err) => console.log(err.message));

                      }
                    }
                    >Delete User</button>
            )
        } 
    }
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
                Pick a topic of discussion, or create one of your own!
                Note if you are not logged in you will not be able to
                delete your discussions or comments.
              </p>
            </div>
          </section>
          <div className="py-5">
            <main className="container">
              <div className="row mb-3">
                <div className="col-md-2 text-end">
                  <Link to="/discussion" className="btn custom-button">
                    Create New Discussion
                  </Link>
                </div>
                <div className="col-md-8"/>
                <div className="col-md-2 text-end">
                  {deleteUserButton()}
                </div>
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