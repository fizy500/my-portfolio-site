import { Link } from "react-router-dom";
import CssLogo from "../assets/cssLogo.svg";
import HtmlLogo from "../assets/htmlLogo.svg";
import JavascriptLogo from "../assets/javascriptLogo.svg";
import ReactLogo from "../assets/reactLogo.svg";

import { useForm } from "@formspree/react";
function MyForm() {
  const [state, handleSubmit] = useForm("{your-form-id}");
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <label htmlFor='email'>Email</label>{" "}
      <input id='email' type='email' name='email' />{" "}
      <button type='submit' disabled={state.submitting}>
        Sign up
      </button>{" "}
    </form>
  );
}
