"use client";

import React from "react";

const page = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searched");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`Post ${id} has been deleted!!`);
  };

  return (
    <div className="eventExample">
      <form>
        <input
          type="text"
          placeholder="Search for anything..."
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </form>

      <form className="post">
        <h1>Lorem ipsum dolor sit amet - 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          blanditiis error officiis vel, perferendis autem laboriosam aspernatur
          vero itaque sunt? Cupiditate asperiores maiores rerum aut quia!
          Cupiditate vel incidunt quae tenetur libero perferendis sequi saepe
          iure veritatis, tempora aliquam necessitatibus minima repudiandae
          aperiam, fugit qui illo impedit aut delectus aliquid?
        </p>
        <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
      </form>

      <form className="post">
        <h1>Lorem ipsum dolor sit amet - 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          blanditiis error officiis vel, perferendis autem laboriosam aspernatur
          vero itaque sunt? Cupiditate asperiores maiores rerum aut quia!
          Cupiditate vel incidunt quae tenetur libero perferendis sequi saepe
          iure veritatis, tempora aliquam necessitatibus minima repudiandae
          aperiam, fugit qui illo impedit aut delectus aliquid?
        </p>
        <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
      </form>
    </div>
  );
};

export default page;