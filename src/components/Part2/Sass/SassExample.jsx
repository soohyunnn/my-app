import React from "react";
import "./SassExample.scss";

export default function SassExample() {
  return (
    <div>
      <p>Example</p>
      <p className="font">Example</p>
      <nav>
        <ul>
          <li>pia 공부중</li>
        </ul>
      </nav>
      <p className="base">Hello, Pia</p>
      <p className="inverse">Hello, Pia</p>
      <p className="info">Hello, Pia</p>
      <p className="alert">Hello, Pia</p>
      <p className="success">Hello, Pia</p>

      <p className="message">message</p>
      <p className="success2">success2</p>
      <p className="error">error</p>
      <p className="warning">warning</p>

      <p className="gray">Grays</p>
      <p className="button">button</p>
      <p className="pulse">pulse</p>
    </div>
  );
}
