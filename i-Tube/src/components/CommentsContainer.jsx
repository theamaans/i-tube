import { comment } from "postcss";
import React from "react";

export const CommentsContainer = () => {
  const commentsData = [
    {
      name: "User",
      text: "lorem ipsim kjbdiam kjbi",
      replies: [],
    },
    {
      name: "User",
      text: "lorem ipsim kjbdiam kjbi",
      replies: [
        {
          name: "User",
          text: "lorem ipsim kjbdiam kjbi",
          replies: [],
        },
        {
          name: "User",
          text: "lorem ipsim kjbdiam kjbi",
          replies: [],
        },
      ],
    },
    {
      name: "User",
      text: "lorem ipsim kjbdiam kjbi",
      replies: [
        {
          name: "User",
          text: "lorem ipsim kjbdiam kjbi",
          replies: [],
        },
        {
          name: "User",
          text: "lorem ipsim kjbdiam kjbi",
          replies: [],
        },
        {
          name: "User",
          text: "lorem ipsim kjbdiam kjbi",
          replies: [],
        },
      ],
    },
    {
      name: "User",
      text: "lorem ipsim kjbdiam kjbi",
      replies: [],
    },
    {
      name: "User",
      text: "lorem ipsim kjbdiam kjbi",
      replies: [],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
          className="w-11 h-11"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOm2LuId_WkIuaCpuGYldjjC1c_Zi134yRg&usqp=CAU"
          alt="user"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div>
        <Comment key={index} data={comment} />
        <div className="pl-5 border border-l-black ml-5">
       <CommentsList comments={comment.replies}/>
        </div>
      </div>
    ));
  };
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};
