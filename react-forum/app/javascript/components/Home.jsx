import React , { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const increase = () => setCount(count+1);
    const decrease = () => setCount(count-1);
    const storeUserInfo = () => {
        const url = `/api/v1/users/create`;
        const jsonBody = {
            name: userName,
        }
        console.log(userName);
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonBody),
        })
        .then(
            (res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("could not create user")
                }
            } 
        )
        .then((res) => {
            console.log(res.id);
            ReactSession.set("user_name",res.name);
            ReactSession.set("user_id", res.id);
            navigate(`/discussions`);
        })
    }
    return (
        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
                <h1 className="display-4">Not! Food Recipes</h1>
                <p className="lead">
                A BIG curated list of discussions for the best vim-made meals and react-delicacies.
                </p>
                <hr className="my-4" />
                
                <form>
                    <div className="form-group row">
                        <label htmlFor="inputUserName" className="col-sm-2 col-form-label">
                            Name:
                        </label>
                        <div className="col-sm-10">
                            <input type="string" name="userName" className="form-control" id="inputUserName"
                            onChange={(e) => setUserName(e.target.value)}/>
                        </div>
                    </div>
                </form>
                <br />

                <button
                className="btn btn-lg custom-button"
                role="button"
                onClick={storeUserInfo}
                >
                View Discussions
                </button>
                <br />
                <br />
            </div>
            <div className="container primary-color">
                <p className="lead">
                <button onClick={decrease} className="btn btn-lg counter-button">-</button>
                <span> {count} </span>
                <button onClick={increase} className="btn btn-lg counter-button">+</button>
                </p>
            </div>
            </div>
        </div>
    )
}
export default Counter;

// export default () => (
//   <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
//     <div className="jumbotron jumbotron-fluid bg-transparent">
//       <div className="container secondary-color">
//         <h1 className="display-4">Food Recipes</h1>
//         <p className="lead">
//           A curated list of recipes for the best homemade meal and delicacies.
//         </p>
//         <hr className="my-4" />
//         <Link
//           to="/recipes"
//           className="btn btn-lg custom-button"
//           role="button"
//         >
//           View Recipes
//         </Link>
//       </div>
//     </div>
//   </div>
// );