import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  site: 'https://xgyxss.github.io',
  base: '/astro',  //npm run dev后，会在生成的访问地址加上/astro，示例：http://localhost:3000/astro
  markdown: {
    // drafts: true  //在最终构建中包含所有的草稿
  }
});