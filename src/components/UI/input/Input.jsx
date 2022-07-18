import React from 'react'
import styles from './Input.module.css'
const input = ({ placeholder, ...props }) => {
	return <input {...props} className={styles.input} placeholder={placeholder} />
}

export default input
