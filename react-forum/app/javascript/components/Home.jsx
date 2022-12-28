import React , { useState } from "react";
import { Link } from "react-router-dom";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count+1);
    const decrease = () => setCount(count-1);
    return (
        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
            <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
                <h1 className="display-4">Food Recipes</h1>
                <p className="lead">
                A curated list of recipes for the best homemade meal and delicacies.
                </p>
                <hr className="my-4" />
                <Link
                to="/discussions"
                className="btn btn-lg custom-button"
                role="button"
                >
                View Discussions
                </Link>
                <br />
                <br />
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