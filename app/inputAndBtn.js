import React from 'react'
import styles from './page.module.css'

function InputAndBtn({ inputTxt, handleItemSave, handleInputTxtChange }) {
  return (
    <div className={styles.left}>
      <input className={styles.input} type="text" value={inputTxt} onChange={handleInputTxtChange} />
      <button className={styles.btn} onClick={handleItemSave}>
        儲存
      </button>
    </div>
  )
}

export default InputAndBtn
