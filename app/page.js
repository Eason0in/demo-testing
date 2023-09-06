'use client'
import { useState } from 'react'
import styles from './page.module.css'

const inputInit = ''

export default function Home() {
  const [inputTxt, setInputTxt] = useState(inputInit)
  const [list, setList] = useState([
    { id: 1, content: 'abc' },
    { id: 2, content: 'bbb' },
  ])

  const handleItemSave = () => {
    if (inputTxt.trim() === '') return
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
      const newList = tempLast.splice(index, 1)
      return tempLast
    })
    setInputTxt(inputInit)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>ToDo List</h1>
        <div className={styles.left}>
          <input className={styles.input} type="text" value={inputTxt} onChange={(e) => setInputTxt(e.target.value)} />
          <button className={styles.btn} onClick={handleItemSave}>
            儲存
          </button>
        </div>

        <ul className={styles.right}>
          {list.map(({ id, content }, index) => (
            <li key={id} className={styles.li}>
              <p className={styles.content}>{content}</p>
              <button className={styles.removeBtn} onClick={() => handleItemDelete(index)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
