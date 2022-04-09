import React from 'react'

const Questions = ({questions}) => {
    console.log(questions);
    
  return (
    <div className='question'>
        <div className='question_container'>
            {
                questions && questions.map((item,index)=>{
                    const {question,correct_answer,incorrect_answer}= item;
                    const answers = [...incorrect_answer,correct_answer];
                    return (
                        <div key={index}>
                            <h2>Q:({index+1}) {question}</h2>
                            {/* {
                                answers && answers.map((answer,answerIndex)=>{
                                    return (
                                        <div key={answerIndex}>
                                            <button className='btn btn-success'>{answer}</button>
                                        </div>
                                    )
                                })
                            } */}
                            <div>
                                <button className='btn btn-success m-1'>a) {answers[0]}</button>
                                <button className='btn btn-success m-1'>b) {answers[1]}</button>
                                <button className='btn btn-success m-1'>c) {answers[2]}</button>
                                <button className='btn btn-success m-1'>d) {answers[3]}</button>
                            </div>
                            <input className='form-control m-2' type="text" placeholder='write ans here' />
                        </div>
                    )
                })
            }
            <div>
                <h3>Upload a file:</h3>
                <input type="file"/>
            </div>
        </div>
    </div>
  )
}

export default Questions