---
sidebar_position: 1
---
# 기본적인 정보
 현재 문서화 진행 중에서는 아래에 존재하는 기본 문서의 튜토리얼 및 마크다운 파일들은 기본 템플릿 설치 상태 그대로입니다. 순서만 변경해 주었으며 그 이유는 작성해가면서 해당 파일들을 뜯어보면서 작성하기 위함입니다.

# 설치하기

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
