import React from "react"
import styles from "./style.module.scss"
import Children from "@/components/Children";

interface ContainerProps {
  flex?: boolean
  fill?: boolean
  wide?: boolean
}

export default function Container({flex, fill, wide, children}: ContainerProps & Children) {
  return (
    <div className={`
      ${styles.container} 
      ${flex && styles.gap} 
      ${fill && styles.fill} 
      ${wide && styles.wide}`}>
      {children}
    </div>
  )
}
