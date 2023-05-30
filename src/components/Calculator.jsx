import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CalculatActions } from "../store/calculator/CalculatorSlice";

const Calculator = () => {
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(CalculatActions.addNumber(5));
  };
  const minushandler = () => {
    dispatch(CalculatActions.minus(5));
  };
  const multiplayHandler = () => {
    dispatch(CalculatActions.multiPlay(5));
  };

  const substrctHandler = () => {
    dispatch(CalculatActions.suntract(5));
  };
  return (
    <CalculatorStyle>
      <h1>Calculator</h1>
      <span>{result}</span>
      <div>
        <button onClick={addHandler}>+</button>
        <button onClick={minushandler}>-</button>
        <button onClick={multiplayHandler}>*</button>
        <button onClick={substrctHandler}>/</button>
      </div>
    </CalculatorStyle>
  );
};
export default Calculator;
const CalculatorStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
