import styles from "./style.module.scss"
import Container from "@/components/layout/container"
import {Merriweather} from "next/font/google"
import {metadata} from "@/lib/constants"

const merriWeather = Merriweather({
  weight: "900",
  subsets: ["latin"]
})

export default function Footer() {
  return (
    <>
      <Container>
        <footer className={styles.footer}>
          <div className={styles.copyright}>
            <div className={`${styles.branding} ${merriWeather.className}`}>{metadata.blogName}</div>
            <div className={styles.content}>
              <div className={styles.text}>{metadata.footer.copyright}</div>
              <div className={styles.legalNotices}>{metadata.footer.legalNotices}</div>
            </div>
          </div>
        </footer>
      </Container>
    </>
  )
}
