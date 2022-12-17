import React from "react";

function UserGreeting(props) {
  return (
    <h1>
      {/*name이 있을때만 name을 출력하게 하는 연산 , count가 0일때는 falsy 한 값이므로 문제가 있어 조건문 식을 Boolean으로 해주어야 한다. 
      또는 {props.count && `It's ${props.count} times : null`} 로 해주면 된다.*/}
      {props.name && `${props.name},`} Welcome{" "}
      {Boolean(props.count) && `It's ${props.count} times`}
    </h1>
  );
}

function GuestGreeting(props) {
  return <h1>Please Sign up</h1>;
}

function Greeting(props) {
  // if (props.isLoggedIn) {
  //   return <UserGreeting name="pia" count={0} />;
  // }
  return props.isLoggedIn ? (
    <UserGreeting name="pia" count={0} />
  ) : (
    // <UserGreeting count={0} />
    <GuestGreeting />
  );
}

export default function Condition() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
