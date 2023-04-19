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
      <footer className={styles.footer}>
        <Container>
          <div className={styles.copyright}>
            <div className={`${styles.branding} ${merriWeather.className}`}>{metadata.blogName}</div>
            <div className={styles.content}>
              <div className={styles.text}>{metadata.footer.copyright}</div>
              <div className={styles.notices}>
                {metadata.footer.notices.map((notice, index) =>
                  <div key={index} className={styles.notice}>{notice}</div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}
