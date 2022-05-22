import React from "react";
import { Container } from "react-bootstrap";

const QuoteBox = () => {
  return (
    <>
      <Container className="text-center">
        <h2 className="my-5 font-italic">Quote of the day</h2>
        <div className="quote-box font-italic">
          <h3 className="my-5">Be yourself; everyone else is already taken.</h3>
          <h4 className="my-5">Oskar Wilde</h4>
        </div>
        <h4 className="my-5 primary-color">More Quotes</h4>
      </Container>
    </>
  );
};

export default QuoteBox;
