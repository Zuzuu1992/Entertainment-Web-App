import styled from "styled-components";
import Logo from "../assets/logo.svg";

function Login() {
  return (
    <LoginWrapper>
      <LogoBox>
        <img src={Logo} alt="Logo" />
      </LogoBox>
      <FillInBox>
        <Title>Login</Title>
        <Form>
          <InputBox>
            <Input placeholder="Email address" />
          </InputBox>
          <InputBox>
            <Input placeholder="Password" />
          </InputBox>
          <Button>Login to your account</Button>
        </Form>
        <SignUpSuggestion>
          <Question>Don’t have an account?</Question>
          <RedirectToSignUp>Sign Up</RedirectToSignUp>
        </SignUpSuggestion>
      </FillInBox>
    </LoginWrapper>
  );
}

export default Login;

const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 58px;
  width: 100%;
  padding: 48px 24px 170px 24px;
`;

const LogoBox = styled.div``;

const FillInBox = styled.div`
  background-color: var(--secondary);
  border-radius: 10px;
  padding: 24px 24px 32px 24px;
  width: 100%;
`;

const Title = styled.h1`
  color: var(--pureWhite);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const InputBox = styled.div`
  border-bottom: 1px solid #5a698f;
`;

const Input = styled.input`
  outline: none;
  border: none;
  background: none;
  padding-left: 16px;
  padding-bottom: 18px;
  width: 100%;
  color: var(--pureWhite);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Button = styled.button`
  border-radius: 6px;
  background-color: var(--red);
  color: var(--pureWhite);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-top: 16px;
  width: 100%;
  border: none;
`;

const SignUpSuggestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 9px;
  margin-top: 24px;
`;

const Question = styled.p`
  color: var(--pureWhite);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const RedirectToSignUp = styled.a`
  color: var(--red);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
