import styles from "./style.module.scss"
import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {IconProp} from "@fortawesome/fontawesome-svg-core"

interface InfoProps {
  icon: IconProp
  title: string
  description: string
}

export default function Info({icon, title, description}: InfoProps) {
  return (
    <div className={styles.info}>
      <FontAwesomeIcon className={styles.icon} icon={icon}/>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
