import React from "react";

export default function List() {
  // const numbers = [1, 2, 3, 4, 5];
  // return (
  //   <ul>
  //     {numbers.map((item) => (
  //       <li key={item.toString()}>{item}</li>
  //     ))}
  //   </ul>
  // );
  const todos = [
    { id: 1, text: "필라테스하기" },
    { id: 2, text: "집 청소하기" },
    { id: 3, text: "패스트캠퍼스 강의듣기" },
    { id: 4, text: "일정짜기" },
  ];

  const Item = (props) => {
    return <li>{props.text}</li>;
  };

  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);

  return <>{todoList}</>;
}
