import Link from "next/link"
import Image from "next/image"
import styles from "./style.module.scss"
import DateFormatter from '../../DateFormatter'

type Props = {
  title: string
  coverImage?: string
  date: string
  description: string
  path: string[]
}

export default function PostPreview({title, coverImage, date, description, path}: Props) {
  return (
    <Link className={styles.link} as={`/${path.join("/")}`} href={"/[...path]"}>
      <div className={styles.postPreview}>
        <div className={styles.content}>
          <div className={styles.date}><DateFormatter dateString={date}/></div>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        {coverImage && <div>
          <Image src={coverImage} alt={title}/>
        </div>}
      </div>
    </Link>
  )
}
