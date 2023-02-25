import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function ForgotPw(props) {
  return (
    <>
      <h2 className="forgotpw-headertext">
        No hay problemo, let's locate your info
      </h2>
      <hr />
      <section>
        <p>Please enter your email or phone number below</p>
      </section>
      <div className="forgotPW-form-container">
        <InputGroup id="mb-3">
          <Form.Control
            placeholder="Recipient's Email"
            aria-label="Recipient's email"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Submit
          </Button>
        </InputGroup>
        <div>
          <p>
            <u>OR</u>
          </p>
        </div>
        <InputGroup id="mb-3">
          <Form.Control
            placeholder="Recipient's Phone #"
            aria-label="Recipient's phone #"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon3">
            Submit
          </Button>
        </InputGroup>
      </div>
    </>
  );
}

export default ForgotPw;
