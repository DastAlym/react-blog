import React from 'react'
import styles from './Input.module.css'
const input = ({ placeholder }) => {
	return <input className={styles.input} placeholder={placeholder} />
}

export default input
