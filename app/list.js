import React from 'react'
import styles from './page.module.css'

function List({ list, handleItemDelete }) {
  return (
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
  )
}

export default List
