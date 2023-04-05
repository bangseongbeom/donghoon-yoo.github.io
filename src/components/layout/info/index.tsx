import styles from "./style.module.scss"
import React from "react"

interface InfoProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

export default function Info({Icon, title, description}: InfoProps) {
  return (
    <div className={styles.info}>
      <Icon className={styles.icon}/>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
