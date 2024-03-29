import * as React from "react";
import { Input, Form, Button, Label } from "reactstrap";
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/auth/auth.thunks";

const Login: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useAppDispatch();
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
      }}
    >
      <Label for="email">Email</Label>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Label for="password" className="mt-3">
        Password
      </Label>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button color="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
