import React from 'react'
import { Input, Button, DatePicker } from 'antd'
import axios from 'axios'
import url from '../url'
import State from './State'
import styles from './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      surl: '',
      ip: '',
      start_datetime: '',
      end_datetime: '',
      state_list: []
    }
  }

  render() {
    const { surl, ip, start_datetime, end_datetime, state_list } = this.state
    return (
      <div className={styles.root}>
        <div className={styles.inputItem}>
          <span>surl:</span>
          <Input
            className={styles.input}
            type='text'
            onChange={e => this.setState({ surl: e.target.value })}
          />
        </div>
        <div className={styles.inputItem}>
          <span>ip:</span>
          <Input
            className={styles.input}
            type='text'
            onChange={e => this.setState({ ip: e.target.value })}
          />
        </div>
        <div className={styles.inputItem}>
          <span>range:</span>
          <DatePicker.RangePicker
            className={styles.input}
            showTime
            onOk={moments =>
              this.setState({
                start_datetime: moments[0].format('YYYY-MM-DD hh:mm'),
                end_datetime: moments[1].format('YYYY-MM-DD hh:mm')
              })
            }
          />
        </div>
        <Button
          className={styles.button}
          type='primary'
          onClick={() =>
            axios
              .post(`${url}/status`, {
                surl,
                ip,
                start_datetime,
                end_datetime
              })
              .then(res => this.setState({ state_list: res.data.state_list }))
          }
        >
          Query
        </Button>
        {state_list.map(({ time, data }) => (
          <State key={time} time={time} data={data} />
        ))}
      </div>
    )
  }
}

export default App
