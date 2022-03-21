import React from 'react';
import QuizTemplate from './QuizTemplate';


const QuizHome = () => {

    return (
        <div>
            <h1 className="text-2xl font-bold mt-8 mb-5 text-center">Welcome to Mathematical Quiz</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
  <div><QuizTemplate title = "Quiz 1" /></div>
  <div><QuizTemplate title = "Quiz 2" /></div>
</div>
            
        </div>
    )

}

export default QuizHome;