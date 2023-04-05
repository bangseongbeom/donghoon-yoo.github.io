import React, {useState} from "react"
import Meta from "@/components/Meta"
import Navigation, {NavigationProps} from "@/components/layout/navigation"
import styles from "./style.module.scss"
import Children from "@/components/Children";
import Footer from "@/components/layout/footer";

export interface LayoutProps extends NavigationProps {
}

export default function Layout({children, ...props}: LayoutProps & Children) {
  const openState = useState(false)
  const [open] = openState

  return (
    <>
      <Meta/>
      <div className={`${styles.navigation} ${styles.navigationSizing} ${open ? styles.open : ""}`}>
        <Navigation {...props} openState={openState}/>
      </div>
      <div className={styles.layout}>
        <div className={`${styles.navigationSizing} ${styles.dummy}`}/>
        <main className={styles.main}>
          {children}
          <Footer/>
        </main>
      </div>
    </>
  )
}
