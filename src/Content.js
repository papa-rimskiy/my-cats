import React, { useState, useEffect } from "react";

const Content = () => {
  const [content, setContent] = useState([]);
  const [add, setAdd] = useState(1);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?format=json&limit=10")
      .then((responce) => responce.json())
      .then((json) =>
        setContent((prev) => {
          return [...prev, ...json];
        })
      );
  }, [add]);

  const likeCat = (index) => {
    const cats = [...content];
    cats[index].like = cats[index].like === undefined ? true : !cats[index].like;
    let items = JSON.parse(localStorage.getItem("item"));
    if (items === null) items = [];
    if ((items.find(el => el.id === cats[index].id)) === undefined ) {
    items.push(cats[index]);
    localStorage.setItem("item", JSON.stringify(items));
    setContent(cats);
    } else {
      checkCats(items, cats[index])
    }
  };

  const checkCats = (items, prevCars) => {
    const cats = [...content];
    for (let i = 0; i < items.length; i++) { 
      if (items[i].id === prevCars.id) { 
        items.splice(i, 1); 
        i--; 
      }
  }
  localStorage.setItem("item", JSON.stringify(items));
  setContent(cats)
}

  return (
    <>
      <div className="content">
        {content.map((el, index) => (
          <div
            className="content_form-img"
            key={el.id + index}
            style={{ backgroundImage: `url(${el.url})` }}
          >
            <div
              className={
                el.like === true
                  ? "content_form-img-likes-active"
                  : "content_form-img-likes-inert"
              }
              onClick={() => likeCat(index)}
            />
          </div>
        ))}
      </div>
      <div className="content__add" onClick={() => setAdd(add + 1)}>
        ... загружаем еще котиков ...
      </div>
    </>
  );
};

export default Content;