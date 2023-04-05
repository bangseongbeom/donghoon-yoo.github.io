import styles from './style.module.scss'
import ReactMarkdown from "react-markdown"
import Editor from "@monaco-editor/react"

interface PostMarkdownProps {
  content: string
}

export default function PostMarkdown({content}: PostMarkdownProps) {
  return (
    <ReactMarkdown
      className={styles.markdown}
      children={content}
      components={{
        code({inline, children, ...props}) {
          if (inline)
            return (
              <code className={styles.inlineCode} {...props}>{children}</code>
            )

          const content = String(children).replace(/\n$/, "")
          return (
            <div className={styles.monaco}>
              <Editor
                height={`${content.split("\n").length * 21}px`}
                defaultLanguage={props.className.split(" ").find((e) => e.startsWith("language-"))?.replace("language-", "") || "plaintext"}
                defaultValue={content}
                options={{
                  fontFamily: "inherit",
                  fontLigatures: true,
                  lineHeight: 1.5,
                  readOnly: true,
                  minimap: {
                    enabled: false,
                  },
                  scrollbar: {
                    vertical: "hidden",
                    handleMouseWheel: false,
                  },
                }}
              />
            </div>
          )
        }
      }}
    />
  )
}
