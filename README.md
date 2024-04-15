## 🤖 AI Jarvis
- 링크 : [AI-Jarvis](https://ai-jarvis-sable.vercel.app/dashboard)
- 프로젝트 설명: AI 도구를 제공해주는 SaaS 기반 구독 서비스
  ![image](https://github.com/Develsopher/ai-jarvis/assets/78126381/bd5ac7f1-a8fa-40dd-a36a-0f90cf5b86c9)
## Features
- 제공되는 기능
  - 챗봇
    ![image](https://github.com/Develsopher/ai-jarvis/assets/78126381/cdd40c8a-377b-4059-b2fc-86b1ae19ec8b)
    - Open AI 3.5 turbo api 사용중
  - 코드 생성기
    ![image](https://github.com/Develsopher/ai-jarvis/assets/78126381/d975b5ba-5200-4ccb-9c45-2de4b4a9ed25)
    - Open AI 3.5 turbo api (code 생성 및 코드설명)
  - 이미지 생성기
    ![image](https://github.com/Develsopher/ai-jarvis/assets/78126381/90b40447-70f1-428e-8f5c-8e68847f61bb)
    - Open AI DALL·E 2
    - 이미지 갯수 및 크기설정 + 이미지 다운로드
  - 영상 생성기
    ![image](https://github.com/Develsopher/ai-jarvis/assets/78126381/090c88f5-a755-4da1-8acf-c1d0bd1bba9d)
    - replicate api 사용중
    - [cog-text2video github](https://github.com/anotherjesse/cog-text2video) (text -> video)
  - 음악 생성기
    ![image](https://github.com/Develsopher/ai-jarvis/assets/78126381/83f99462-0571-4b1b-874b-eb4234951ada)
    - replicate api 사용중 
    - [riffusion github](https://github.com/riffusion/riffusion) (text -> sound)

## Details
### 로그인 및 회원관리
- [Clerk](https://clerk.com)
### 채팅 CS관리
- [Crisp](https://crisp.chat/en)
### 데이터 베이스
- Prism ORM (유저별 Free API count, 구독정보관리)
- [Aiven](https://crisp.chat/en/)
### 결제 구독관리 (테스트 모드, 실제 결제안됨)
- [Stripe](https://stripe.com/)
