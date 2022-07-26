import React, { useEffect, useState } from "react";
import Header from "./Header";

const LikesCats = () => {
  const [cats, setCats] = useState([]);
  const likes = "likes";

  useEffect(() => {
    const content = JSON.parse(localStorage.getItem("item"));
    setCats(content);
  }, []);

  const deleteCats = (index) => {
    const content = [...cats];
    content[index].like = false;
    content.splice(index, 1);
    localStorage.setItem("item", JSON.stringify(content));
    setCats(content);
  };

  console.log(cats);

  return (
    <div className="LikesCats">
      <Header check={likes} />
      <div className="content">
        {cats.map((el, index) => (
          <div
            className="content_form-img"
            key={el.index}
            style={{ backgroundImage: `url(${el.url})` }}
          >
            <div
              className={
                el.like === true
                  ? "content_form-img-likes-active"
                  : "content_form-img-likes-inert"
              }
              onClick={() => deleteCats(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikesCats;