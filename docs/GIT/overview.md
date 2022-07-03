---
sidebar_position: 1
---
# Git, Version Control
버전 관리 시스템(Version Control System:VCS)
사용자 프로젝트에 포함된 파일의 변경 사항을 추적할 수 있도록 돕는 방법론(Methodology)이나 도구


파일 복사본_날짜, 시간 형태의 관리는 번거로워 자동화를 시도


VCS : 프로젝트에 포함된 모든 변경사항을 복사하여 관리함으로서 변경 사항 추적

## 설치하기

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at `http://localhost:3000/my-react-page`.

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```
