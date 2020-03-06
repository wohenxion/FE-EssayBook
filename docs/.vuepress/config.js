module.exports= {
  title: "立峰的前端笔记",
  description: "跟着其他大佬的脚步一起瞎搞乱玩",
  head: [["link", { rel: "icon", href: "/book_img/logo.png" }]],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    nav: [
      {
        text: "前端笔记",
        link: "/front/"
      },
      {
        text: "Github",
        link: "https://github.com/wohenxion/FE-EssayBook"
      }
    ],
    sidebar: {
      "/front/": [
        ""
      ]
    }
  }
}