import React from 'react';

interface Props {
    answer:AnswerProp;
}
interface AnswerProp {
    id: number;
  op1: number;
  op2: number;
  operator: string;
  userAns: any;
  correctAns: number;
}
const SingleAnswer = ({answer}:Props) => {
    return (
        <div className={answer.userAns == answer.correctAns ? 'hover:bg-green-200 p-5 rounded-md' : 'hover:bg-red-200 p-5 rounded-md'}>
            <p className=" ml-5 mb-2 font-mono font-bold text-lg">
            Question {answer.id}) Calculate {answer.op1} {answer.operator} {answer.op2}
          </p>
            <div className="ml-5 flex flex-col lg:flex-row">
                <div>User Answer : &nbsp;</div>
                <div className={answer.userAns == answer.correctAns ? 'text-green-900 font-bold' : 'text-red-900 font-bold'}> { answer.userAns} &nbsp;</div>
                {answer.userAns == answer.correctAns ? (<div className="text-green-900 font-bold"> (It is correct)</div>) : (<div className="text-red-900 font-bold"> (It is incorrect)</div>)}
            </div>
            {answer.userAns != answer.correctAns && (<div className="ml-5 flex flex-col lg:flex-row">
                <div>Correct Answer : </div>
                <div className='text-green-900 font-bold'>{answer.correctAns}</div>
                </div>)}
        </div>
    )

}

export default SingleAnswer;