import React from 'react'
import styles from './State.scss'

const State = ({ time, data: { memory, cpu } }) => (
  <div className={styles.root}>
    <div>{`Time: ${time}`}</div>
    <div>{`Total Memory: ${memory.total}`}</div>
    <div>{`Free Memory: ${memory.free}`}</div>
    <div>{`CPU Usage: ${cpu}`}</div>
  </div>
)

export default State
