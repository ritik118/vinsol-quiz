import React from 'react';
import SingleAnswer from './SingleAnswer';

interface Props{
    answ:Array<AnswerProp>;
}

interface AnswerProp {
        id: number;
      op1: number;
      op2: number;
      operator: string;
      userAns: any;
      correctAns: number;
}

const Answers = ({answ}:Props) => {
    return(
        <div className="mt-4">
            {answ.map((answer) => 
                <SingleAnswer key={answer.id} answer={answer} />
        )}
        </div>
    )

}

export default Answers;