<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">News</g-link>
        <!-- gridsome link 必须在url最后加上斜杠因为 -->
        <!-- Because the HTML file for the page is a index.html file in a directory. Paths generated for nodes already include a trailing slash -->
        <g-link class="nav__link" to="/repos/">Repos</g-link>
        <g-link class="nav__link" to="/blogs/">Blog</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
* {
  box-sizing: border-box;
}
h1,
h2,
h3 {
  color: rgb(50, 50, 50);
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
li {
  position: relative;
  list-style: none;
  background-color: rgb(250, 250, 250);
  box-shadow: 0 0 8px rgb(215, 215, 215);
  border-radius: 3px;
  margin: 10px;
  padding: 10px 15px;
  min-height: 100px;
  min-width: 200px;
  transition: 0.3s all ease-in-out;
}
li:hover {
  transform: scale(1.05);
}
p span {
  font-size: 12px;
}
button {
  margin: 20px 0;
}
</style>
