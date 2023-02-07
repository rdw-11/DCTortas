import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function SignUp(props) {
  // const [firstname, setFirstName] = useState("FN");
  // const [lastname, setLastName] = useState("LN");
  // const [phoneNum, setPhoneNum] = useState("PN");
  // const [email, setSetEmail] = useState("Email");
  // const [password, setEmail] = useState("PW");
  // const [birthday, setSetBirthday] = useState("Bday");

  //   HandleChange method to update the states
  //   const handleChange = () => ();

  return (
    <>
      <div className="sign-up-header">
        <p>Welcome to the Best Tortas in Town!</p>
        <p>Sign Up Here!</p>
      </div>

      <Form className="signup-form">
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            First Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="First Name" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Last Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" text placeholder="Last Name" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Phone Number
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Phone Number" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Birthday
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="date" placeholder="Birthday (Day/Month)" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign Up!</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}

export default SignUp;
