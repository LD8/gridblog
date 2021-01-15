<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, GridBlog!</h1>

    <ul class="ul-visits">
      <g-link to="/repos/">
        <li><span>Visit My Repos</span></li>
      </g-link>
      <g-link to="/blogs/">
        <li><span>Visit My Blog</span></li>
      </g-link>
    </ul>

    <h3>使用 Gridsome 制作的静态网站</h3>
    <div>
      <p>Dependencies:</p>
      <p v-html="mdToHtml(mdContent)"></p>
    </div>

    <p>Gridsome是一个Jamstack框架。</p>
    <p>
      Jamstack使您可以通过预渲染文件并直接从CDN直接提供文件来构建快速安全的站点和应用程序，而无需管理或运行Web服务器。
    </p>

    <p class="home-links">
      <a href="https://github.com/LD8" target="_blank" rel="noopener">LD8</a>
      <a href="https://github.com/LD8/gridblog" target="_blank" rel="noopener">
        Project GitHub Repo
      </a>
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">
        Gridsome Docs
      </a>
    </p>
  </Layout>
</template>

<script>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

export default {
  metaInfo: {
    title: "News",
  },
  data() {
    return {
      mdContent: `
        - "axios": "^0.21.1",
        - "gridsome": "^0.7.0",
        - "markdown-it": "^12.0.4"
      `,
    };
  },
  methods: {
    mdToHtml(mdContent) {
      return md.render(mdContent);
    },
  },
};
</script>

<style>
.home-links {
  margin-top: 50px;
}
.home-links a {
  margin-right: 1rem;
}
.ul-visits{
  margin-top: 30px;
  margin-bottom: 50px;
}
.ul-visits li {
  margin: 0;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ul-visits a {
  width: 47%;
  margin-right: 20px;
  font-size: 20px;
  color: rgb(138, 138, 138);
  font-weight: 400;
}
.ul-visits a:hover {
  color: green;
  font-weight: 600;
  z-index: 1;
}
</style>
