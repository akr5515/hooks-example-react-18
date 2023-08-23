import { useState } from "react";
import Form from "./bad-way/Form";
import NewForm from "./correct-way/NewForm";

export function BadForm() {
  const [inputText, setInputText] = useState("Not Clicked Button yet!!");

  const onClickHandler = () => {
    console.log("Clicked");

    const secondInputValue = document.getElementById(
      "agreement2"
    ) as HTMLInputElement;

    console.log("The value ", secondInputValue.value);
    setInputText(secondInputValue.value);
  };

  return (
    <div style={{ position: "absolute", top: "20px" }}>
      <h1>Form1</h1>
      <Form />
      <hr />
      <h1>Form2</h1>
      <Form />

      <button onClick={onClickHandler} style={{ marginTop: "10px" }}>
        Click to show something happen
      </button>

      <h4>The Input text is {inputText}</h4>
    </div>
  );
}

export function GoodForm() {
  return (
    <div style={{ position: "absolute", top: "20px" }}>
      <h1>Form1</h1>
      <NewForm />
      <hr />
      <h1>Form2</h1>
      <NewForm />
      <h4>All input field have unique id to remove conflict</h4>
    </div>
  );
}
