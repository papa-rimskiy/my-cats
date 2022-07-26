import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ check }) => {
  const navigate = useNavigate();

  const distributionMain = () => {
    navigate(`/`);
  };

  const distributionLikes = () => {
    navigate(`/likes`);
  };
  return (
    <header>
      <div className="header">
        <div
          className={check === "main" ? "all_cats-active" : "all_cats-inert"}
          onClick={distributionMain}
        >
          <h6
            className={
              check === "main" ? "header_text-active" : "header_text-inert"
            }
          >
            Все котики
          </h6>
        </div>
        <div
          className={
            check === "likes" ? "favorite_cats-active" : "favorite_cats-inert"
          }
          onClick={distributionLikes}
        >
          <h6
            className={
              check === "likes" ? "header_text-active" : "header_text-inert"
            }
          >
            Любимые котики
          </h6>
        </div>
      </div>
    </header>
  );
};

export default Header;
