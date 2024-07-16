import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeItem } from "../helpers/persistance-storage";
import { logoutUser } from "../reducers/reducer";

const Navbar = () => {
  const { isLogenIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <header className=" container mx-auto  d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to={"/"}
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Simple header</span>
        </Link>

        {isLogenIn ? (
          <>
            <div className="d-flex align-items-center ml-4 ">

            <Link to={"/create-article"} className="  nav-link  m-3" aria-current="page">
                  Create
                </Link>
              <p className="mt-3">{user.username}</p>
              <button onClick={handleLogout} className="btn btn-danger m-3">
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link " aria-current="page">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </>
        )}
      </header>
    </>
  );
};

export default Navbar;
