import React from "react"
import url from "../url"
import styles from "./App.scss"
import axios from "axios"

axios.get(`${url}/1`).then(res => console.log(res.data))
const App = () => <div className={styles.title}>Hello World!</div>

export default App
