import React, { useCallback } from "react";
import CommentItem from "./CommentItem";

/*
useCallback을 사용하지 않으면 Comments 컴포넌트 자체가 onClick으로 인해 매번 새로 생성되어 CommentItem에서 memo를 사용해도 리렌더링될때마다
매번 처음부터 새로 리렌더링 된다.
*/
export default function Comments({ commentList }) {
  // console.log("commentList :: ", commentList);
  const handleClick = useCallback(() => {
    console.log("눌림");
  }, []);
  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
