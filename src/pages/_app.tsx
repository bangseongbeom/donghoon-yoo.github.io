import {AppProps} from "next/app"
import "./global.scss"
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css"
import {RecoilRoot} from "recoil"

export default function BlogNextApplication({Component, pageProps}: AppProps) {
  return (
    <RecoilRoot>
      <Component key={"component"} {...pageProps} />
    </RecoilRoot>
  )
}
