import React, { useState } from "react";
import Answers from "./Answers";

interface Props {
  title: string;
}

interface AnswerProp {
  id: number;
op1: number;
op2: number;
operator: string;
userAns: any;
correctAns: number;
}

const QuizTemplate = ({ title }: Props) => {
  const operators = ["+", "-", "*", "/"];

  const [start, setStart] = useState<boolean>(false);
  const [operand1, setOperand1] = useState<number>(0);
  const [operand2, setOperand2] = useState<number>(0);
  const [operator, setOperator] = useState<string>("+");
  const [total, setTotal] = useState<number>(10);
  const [count, setCount] = useState<number>(1);
  const [answer, setAnswer] = useState<number>(0);
  const [operandRange, setOperandRange] = useState<number>(10);
  const [answers, setAnswers] = useState<Array<AnswerProp>>([]);
  const [submit, setSubmit] = useState<boolean>(false);

  const handleStart = () => {
    setOperand1(Math.floor(Math.random() * operandRange + 1));
    setOperand2(Math.floor(Math.random() * operandRange + 1));
    setOperator(operators[Math.floor(Math.random() * operators.length)]);
    setStart(true);
  };

  const handleTotal = (e: any) => {
    setTotal(e.target.value);
  };

  const handleAnswer = (e: any) => {
    setAnswer(e.target.value);
  };

  const handleOperandRange = (e: any) => {
    setOperandRange(e.target.value);
  };

  const handleNext = () => {
    let correctAns:number = 0;
    switch (operator) {
      case "+":
        correctAns = operand1 + operand2;
        break;
      case "-":
        correctAns = operand1 - operand2;
        break;
      case "*":
        correctAns = operand1 * operand2;
        break;
      case "/":
        correctAns = Math.floor(operand1/operand2)
        break;
    }
    const userAnswer = {
      id: count,
      op1: operand1,
      op2: operand2,
      operator: operator,
      userAns: answer,
      correctAns: correctAns,
    };
    console.log(userAnswer);
    setAnswers((oldAnswers) => [...oldAnswers, userAnswer]);
    setCount(count + 1);
    setOperand1(Math.floor(Math.random() * operandRange + 1));
    setOperand2(Math.floor(Math.random() * operandRange + 1));
    setOperator(operators[Math.floor(Math.random() * operators.length)]);
    setAnswer(0);
  };

  const handleSubmit = () => {
    handleNext();
    setSubmit(true);
  }

  return (
    <div className="flex flex-col border-solid border-2 border-grey shadow-md p-5 rounded-md">
      <h1 className="text-2xl font-bold text-center">{title}</h1>
      {submit ? (
        <Answers answ={answers} />
      ) : !start ? (
        <div className="flex flex-col p-10">
          <div className="flex flex-col lg:flex-row mb-10">
            <label htmlFor="count" className="font-sans font-medium">
              Total Questions :{" "}
            </label>
            <input
              type="number"
              placeholder=" Enter Total Questions"
              className="border-2 rounded-md pl-1 ml-1 border-gray-600"
              name="count"
              value={total}
              onChange={(e) => handleTotal(e)}
            />
          </div>
          <div className="flex flex-col lg:flex-row mb-10">
            <label htmlFor="range" className="font-sans font-medium">
              Operand Range :{" "}
            </label>
            <input
              type="number"
              placeholder=" Enter Operand Range"
              className="border-2 rounded-md pl-1 ml-1 border-gray-600"
              name="range"
              value={operandRange}
              onChange={(e) => handleOperandRange(e)}
            />
          </div>
          <button
            className="rounded-md w-40 mx-auto border-2 border-green-500 px-4 py-2 font-medium shadow-md hover:bg-green-500 hover:text-white"
            onClick={() => handleStart()}
          >
            Start Quiz !!
          </button>
        </div>
      ) : (
        <div>
          <p className="mt-12 ml-5 font-mono font-bold text-lg">
            Question {count}) Calculate {operand1} {operator} {operand2}
          </p>
          <div className="flex flex-col lg:flex-row mb-10 mt-8 ml-16">
            <label htmlFor="answer" className="font-sans font-medium text-xl">
              Answer :{" "}
            </label>
            <input
              type="number"
              placeholder="Answer(round off)"
              className="border-2 rounded-md pl-1 ml-1 border-gray-600"
              name="answer"
              value={answer}
              onChange={(e) => handleAnswer(e)}
            />
          </div>
          {total == count ? (
            <button
            className="rounded-md w-30 float-right mr-10 mb-5 border-2 border-green-500 px-4 py-2 font-bold shadow-md hover:bg-green-500 hover:text-white"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
          ) :(<button
            className="rounded-md w-30 float-right mr-10 mb-5 border-2 border-green-500 px-4 py-2 font-bold shadow-md hover:bg-green-500 hover:text-white"
            onClick={() => handleNext()}
          >
            Next -&gt;{" "}
          </button>)}
        </div>
      )}
    </div>
  );
};

export default QuizTemplate;
