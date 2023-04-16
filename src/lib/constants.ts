import {IconProp} from "@fortawesome/fontawesome-svg-core"
import {faGithub} from "@fortawesome/pro-brands-svg-icons"
import {faCodeBranch, faEnvelope} from "@fortawesome/pro-solid-svg-icons"

type Metadata = {
  blogName: string
  author: string
  description: string

  navigation: {
    branding: {
      icon: string
    }
    icons: Array<{
      name: string
      url: string
      icon: IconProp
    }>
  }

  footer: {
    copyright: string
    legalNotice: string
  }
}

export const metadata: Metadata = {
  blogName: "Lumière",
  author: "DongHoon Yoo",
  description: "소프트웨어, 개발, 서버, 그리고 네트워크에 관한 블로그",

  navigation: {
    branding: {
      icon: "L"
    },
    icons: [
      {
        name: "E-Mail",
        url: "mailto://blog@donghoonyoo.com",
        icon: faEnvelope,
      },
      {
        name: "GitHub",
        url: "https://github.com/donghoon-yoo",
        icon: faGithub,
      },
      {
        name: "Blog Source Tree",
        url: "https://github.com/donghoon-yoo/donghoon-yoo.github.io",
        icon: faCodeBranch,
      },
    ],
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} DongHoon Yoo. All rights reserved.`,
    legalNotice: "본 사이트에 포함된 상표 등의 모든 권리는 각 저작권자에게 있습니다."
  },
}
