import styles from "./style.module.scss"
import React from "react"
import Children from "@/components/Children"

export default function PostList({children}: Children) {
  return (
    <div className={styles.postList}>
      {children}
    </div>
  )
}
