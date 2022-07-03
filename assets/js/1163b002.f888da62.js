"use strict";(self.webpackChunkblog_docusaurus=self.webpackChunkblog_docusaurus||[]).push([[8431],{2516:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"datastage","metadata":{"permalink":"/blog_docusaurus/blog/datastage","source":"@site/blog/2022-06-26-DataStage.md","title":"IBM Data Stage","description":"Simple .","date":"2022-06-26T00:00:00.000Z","formattedDate":"June 26, 2022","tags":[{"label":"Data","permalink":"/blog_docusaurus/blog/tags/data"}],"readingTime":1.62,"truncated":true,"authors":[{"name":"geromeyoo"}],"frontMatter":{"title":"IBM Data Stage","description":"Simple .","slug":"datastage","authors":[{"name":"geromeyoo"}],"tags":["Data"],"hide_table_of_contents":false},"nextItem":{"title":"Welcome Docusaurus v2","permalink":"/blog_docusaurus/blog/welcome-docusaurus-v2"}},"content":"\ubcf8 \ud3ec\uc2a4\ud305\uc740 \uc2e4\uc81c \uc0ac\uc6a9\uc744 \uc704\ud574 \uac00\ubccd\uac8c \ud6d1\uc5b4\ubcf8 \ub0b4\uc6a9\uc744 \uac04\ub2e8\ud788 \uc815\ub9ac\ud55c \uac83\uc774\ub2e4. \\n\\n# DataStage \\nDataStage\ub294 IBM \uc0ac\uc758 ETL JOB Designer\uc774\uba70 Data Integration Project Tool\ub85c\uc11c \uc0ac\uc6a9\ub41c\ub2e4. DW, DM \uc774\ub098 \uc2dc\uc2a4\ud15c \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc5d0\ub3c4 \uc0ac\uc6a9\ub41c\ub2e4.\\n\\n\x3c!--truncate--\x3e\\n\\n- Import, Export, Create & Manage metadate for jobs\\n- Schedule, run & monitor jobs\\n- Administer DataStage development & Execution environments.\\n\\n## Architecture\\n1. Client Tier\\n    - GUI \uae30\ubc18 client tool\\n2. Engine Tier\\n    - DS Engine + PX Engine\\n3. Service Tier\\n    - \ud1b5\ud569 Web \ud658\uacbd \uc81c\uacf5 : User \uc778\uc99d, \ubaa8\ub2c8\ud130\ub9c1\\n    - Websphere Application Server Bundle \uc81c\uacf5\\n4. Metadata Repository Tier\\n    - \ud1b5\ud569\uba54\ud0c0\ub370\uc774\ud130 : DataStage \ubfd0\uc774 \uc544\ub2c8\ub77c Information Server Suite\ub97c \uad6c\uc131\ud558\ub294 \uac01 \uc81c\ud488 \uba54\ud0c0\ub370\uc774\ud130 \ud3ec\ud568\\n    - DB2, Oracle, MSSQL Support\\n      - DB2 Bundle \uc81c\uacf5 - Metadata Repository(=Xmeta) \uc774\uc678 \uc6a9\ub3c4\ub85c \uc0ac\uc6a9 \ubd88\uac00\\n\\n\\n## Server and Clients\\n- User Inerface \\n- \uad00\ub9ac \uc11c\ube44\uc2a4 : \uba54\ud0c0\ub370\uc774\ud130 \uc11c\ube44\uc2a4, \ud1b5\ud569 \uc11c\ube44\uc2a4 Deployment, \ubcf4\uc548 \uc11c\ube44\uc2a4, \ub85c\uae45 & \ub9ac\ud3ec\ud305 \uc11c\ube44\uc2a4\\n  - DS Engine\\n    - Data Source\\n  - Integrated Meta Data\\n    - Design\\n    - Operational\\n    - DB2, Orcale, MSSQL\\n\\n## Client Components\\n\\n\\n### Administrator\\n- Specify general server defaults : ex) server connection timeout\\n- Project Management \\n  - add, delete, property setting\\n  - DataStage Repository, UI Access\\n\\n#### Structure\\n- DataStage\\n  - Project\\n    - Jobs\\n      - Components\\n        - Built-in, pre-defined\\n        - User-defined by DS manger\\n\\n### Designer\\n\\n### Director\\n- Statistics\\n- Project Property : Global & Projectwise both can exist \\n- Projects are self-contained\\n- Job : for 1 user at a time"},{"id":"welcome-docusaurus-v2","metadata":{"permalink":"/blog_docusaurus/blog/welcome-docusaurus-v2","source":"@site/blog/2022-06-16-hello-docusaurus-v2.md","title":"Welcome Docusaurus v2","description":"This is my first post on Docusaurus 2.","date":"2022-06-16T00:00:00.000Z","formattedDate":"June 16, 2022","tags":[{"label":"hello","permalink":"/blog_docusaurus/blog/tags/hello"},{"label":"docusaurus-v2","permalink":"/blog_docusaurus/blog/tags/docusaurus-v-2"}],"readingTime":0.135,"truncated":true,"authors":[{"name":"geromeyoo"}],"frontMatter":{"title":"Welcome Docusaurus v2","description":"This is my first post on Docusaurus 2.","slug":"welcome-docusaurus-v2","authors":[{"name":"geromeyoo"}],"tags":["hello","docusaurus-v2"],"hide_table_of_contents":false},"prevItem":{"title":"IBM Data Stage","permalink":"/blog_docusaurus/blog/datastage"}},"content":"Welcome to this blog. This blog is created with [**Docusaurus 2**](https://docusaurus.io/).\\n\\n\x3c!--truncate--\x3e\\n\\nThis is my first post on Docusaurus 2.\\n\\nA whole bunch of exploration to follow."}]}')}}]);