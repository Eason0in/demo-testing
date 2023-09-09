'use client'
import { useState } from 'react'
import styles from './page.module.css'
import InputAndBtn from './inputAndBtn'
import List from './list'

const inputInit = ''

export default function Home() {
  const [inputTxt, setInputTxt] = useState(inputInit)
  const [list, setList] = useState([
    { id: 1, content: 'do the laundry' },
    { id: 2, content: 'wash dishes' },
  ])

  const handleItemSave = () => {
    if (inputTxt.trim() === '') return

    const tasks = list.map(({ content }) => content)
    if (tasks.find((task) => task === inputTxt)) {
      window.alert('You have already added the same task')
      setInputTxt('')
      return
    }

    setList((last) => {
      const { id } = last[last.length - 1] || {}
      const lastId = id + 1 || 1
      last.push({ id: lastId, content: inputTxt })
      return last
    })

    setInputTxt(inputInit)
  }

  const handleItemDelete = (index) => {
    setList((last) => {
      const tempLast = Array.from(last)
      tempLast.splice(index, 1)
      return tempLast
    })
    setInputTxt(inputInit)
  }

  const handleInputTxtChange = (e) => setInputTxt(e.target.value)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>ToDo List</h1>

        <InputAndBtn inputTxt={inputTxt} handleItemSave={handleItemSave} handleInputTxtChange={handleInputTxtChange} />

        <List list={list} handleItemDelete={handleItemDelete} />
      </div>
    </main>
  )
}
