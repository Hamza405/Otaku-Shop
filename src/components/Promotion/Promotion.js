import { Slide } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import {
  PromotionContainer,
  PromotionMessage,
} from "../../styles/PromotionStyles";

const messages = [
  "20% off on your first order!",
  "Summer sale starts now, visit any store.",
  "Please like and subscribe :)",
];

const Promotion = () => {
  const containerRef = useRef();
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromotionContainer ref={containerRef}>
      <Slide
        ref={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <PromotionMessage>{messages[messageIndex]}</PromotionMessage>
      </Slide>
    </PromotionContainer>
  );
};

export default Promotion;
