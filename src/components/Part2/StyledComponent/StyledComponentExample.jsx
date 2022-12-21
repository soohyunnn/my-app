import React, { useState } from "react";
import styled, {
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it (<Thing> 주변에 있는 <Thing>에 적용, 하지만 바로 옆에는 없을 수도 있습니다.)
  }

  & + & {
    background: lime; // <Thing> 옆에 <Thing>에 적용
  }

  &.something {
    background: orange; // <Thing> 의 className이 ".something"인거에 적용
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

// Define our button, but with the use of props.theme this time
const Button1 = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button1.defaultProps = {
  theme: {
    color: "red",
    borderColor: "blue",
  },
};

// Define what props.theme will look like
const defaultTheme = {
  color: "green",
  borderColor: "pink",
};

const redTheme = {
  color: "red",
  borderColor: "red",
};

const greenTheme = {
  color: "green",
  borderColor: "green",
};

const GlobalStyle = createGlobalStyle`
  button {
    background-color : pink
  }
`;

export default function StyledComponentExample() {
  const [theme, setTheme] = useState(defaultTheme);
  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <>
      <div>
        <GlobalStyle>
          <button onclick={() => setTheme(redTheme)}>red</button>
          <button onclick={() => setTheme(greenTheme)}>green</button>
        </GlobalStyle>
        <Button1>Normal</Button1>

        <ThemeProvider theme={theme}>
          <Button1>Themed</Button1>
        </ThemeProvider>
      </div>
      <hr />
      <br />
      <br />
      <Rotate>&lt; ❤️ &gt;</Rotate>
      <hr />
      <br />
      <br />
      <div>
        <Input placeholder="A bigger text input" size="2em" />
        <br />
        {/* Notice we can still use the size attr from Input */}
        <PasswordInput placeholder="A bigger password input" size="2em" />
      </div>
      <hr />
      <br />
      <br />
      <>
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid.</Thing>
        </div>
      </>
      <br />
      <hr />
      <br />
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <br />
      {/* as = 'a'는 Button 태그를 실제로 네이티브에 있는 a태그와 같게 동작하게 한다. */}
      <Button as="a" href="#">
        Link with Button styles
      </Button>
      <TomatoButton as="a" href="#">
        Link with Tomato Button styles
      </TomatoButton>
      <br />
      <Button as={ReversedButton}>
        Custom Button with Normal Button styles
      </Button>
    </>
  );
}
