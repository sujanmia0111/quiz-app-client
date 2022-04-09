import React, { Fragment } from 'react'
import Questions from '../../Components/Questions'
import {questions} from '../../constant/data'
const Home = () => {
  return (
    <Fragment>
        <div className='container'>
            <div className='col-lg-12'>
                <div className='home'>
                    <Questions questions={questions}/>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Home