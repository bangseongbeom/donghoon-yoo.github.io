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
    notices: string[]
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
    notices: [
      "The rights of all registered trademarks belong to copyright owners.",
      "This website does not collect all personal information.",
    ],
  },
}
