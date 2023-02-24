import React from "react";
import { Wrapper, Container } from "./SignIn.styles";

const SignIn = () => {
  return (
    <Wrapper>
      <Container>
        <form autoComplete='off'>
          <label htmlFor='username'>Username : </label>
          <br />
          <input type='text' name='username' />
          <br />
          <label htmlFor='password'>Password : </label>
          <br />
          <input type='password' id="pwd" name='password' />
          <br />
          <p>Forget password ?</p>
          <input type='checkbox' id='checkme' name='rememberMe' />
          <label htmlFor='rememberMe'>Remember Me</label>
          <br />
          <button>Sign In</button>
        </form>
        <p>You dont have an account ? Register here</p>
      </Container>
    </Wrapper>
  );
};

export default SignIn;
