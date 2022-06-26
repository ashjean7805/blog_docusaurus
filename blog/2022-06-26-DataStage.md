---
title: IBM Data Stage
description: Simple .
slug: datastage
authors:
  - name: geromeyoo
tags: [Data]
hide_table_of_contents: false
---

본 포스팅은 실제 사용을 위해 가볍게 훑어본 내용을 간단히 정리한 것이다. 

# DataStage 
DataStage는 IBM 사의 ETL JOB Designer이며 Data Integration Project Tool로서 사용된다. DW, DM 이나 시스템 마이그레이션에도 사용된다.

<!--truncate-->

- Import, Export, Create & Manage metadate for jobs
- Schedule, run & monitor jobs
- Administer DataStage development & Execution environments.

## Architecture
1. Client Tier
    - GUI 기반 client tool
2. Engine Tier
    - DS Engine + PX Engine
3. Service Tier
    - 통합 Web 환경 제공 : User 인증, 모니터링
    - Websphere Application Server Bundle 제공
4. Metadata Repository Tier
    - 통합메타데이터 : DataStage 뿐이 아니라 Information Server Suite를 구성하는 각 제품 메타데이터 포함
    - DB2, Oracle, MSSQL Support
      - DB2 Bundle 제공 - Metadata Repository(=Xmeta) 이외 용도로 사용 불가


## Server and Clients
- User Inerface 
- 관리 서비스 : 메타데이터 서비스, 통합 서비스 Deployment, 보안 서비스, 로깅 & 리포팅 서비스
  - DS Engine
    - Data Source
  - Integrated Meta Data
    - Design
    - Operational
    - DB2, Orcale, MSSQL

## Client Components


### Administrator
- Specify general server defaults : ex) server connection timeout
- Project Management 
  - add, delete, property setting
  - DataStage Repository, UI Access

#### Structure
- DataStage
  - Project
    - Jobs
      - Components
        - Built-in, pre-defined
        - User-defined by DS manger

### Designer

### Director
- Statistics
- Project Property : Global & Projectwise both can exist 
- Projects are self-contained
- Job : for 1 user at a time