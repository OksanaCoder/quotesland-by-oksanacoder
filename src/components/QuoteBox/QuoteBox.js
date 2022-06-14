import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const QuoteBox = () => {
  const [quotes, setQuotes] = useState("");
  useEffect(() => {
    axios
      .get(`https://quotesland-apis.herokuapp.com/v1/quotes/quote-of-the-day`)
      .then((res) => {
        const quotes = res.data;
        setQuotes(quotes);
      });
    console.log(quotes, "quotes");
  }, []);

  return (
    <>
      <Container className="text-center">
        <h2 className="my-5 font-italic">Quote of the day</h2>
        <div className="quote-box font-italic">
          <h3 className="my-5">{quotes.text}</h3>
          <h4 className="my-5">{quotes.author}</h4>
        </div>
        <h4 className="my-5 primary-color">More Quotes</h4>
      </Container>
    </>
  );
};

export default QuoteBox;
