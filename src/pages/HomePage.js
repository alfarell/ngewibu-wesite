import React from 'react';
import DocumentTitle from 'react-document-title';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/actions/counter';
import { Paper } from '@material-ui/core';

const HomePage = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <DocumentTitle title="Home Page">
      <div>
        <h2>Home Page</h2>
        <p>{counter}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <Paper style={{ height: '200vh' }}>

        </Paper>
      </div>
    </DocumentTitle>
  )
}

export default HomePage;