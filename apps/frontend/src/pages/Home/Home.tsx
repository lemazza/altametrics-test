import * as React from "react";
import { Button, Container, Row } from "reactstrap";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import Login from "./Login";
import { RootState } from "../../store/store";
import { logout } from "../../store/auth/auth.slice";

const Home: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Row className="px-5">
        <h1>Welcome</h1>
        {isAuthenticated ? (
          <>
            <p>you're logged in</p>
            <p>
              <Button color="dark" onClick={() => dispatch(logout())}>
                Log out
              </Button>
            </p>
          </>
        ) : (
          <>
            <p>log in below</p>
            <Login />
          </>
        )}
      </Row>
    </Container>
  );
};

export default Home;
