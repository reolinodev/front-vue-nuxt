# # front-vue-nuxt

### $ 개요
nuxt로 만든 vue.js 샘플 프로젝트. 상황에 맞게 Branch를 작성함으로써  코딩을 최소화 하는 것을 목표로 한다.

<hr>

### $ 개발내용
1. 프로젝트 기본 설정
   1. vue.js, nuxt, typescript 설치 
   2. eslint, prettier 설정
   3. pinia 설정 
   4. vuetify 설정
   5. dev, prod 분기 처리
   6. 기본 라우팅 처리
   7. 간단한 로그인 화면과 헤더 화면 구현
<hr>

### $ 사용방법
1. 소스를 다운로드 받는다. 
2. 다운로드 받은 소스를 열고 package.json에 있는 라이브러리를 다운받는다. 터미널을 열고 아래처럼 설치를 입력하면 된다. node.js는 사전에 설치가 되어 있어야 한다.
```text
npm install
```
3. 프로젝트를 실행한다. 3000번 포트에서 확인해보면 된다.
```text
npm run dev
```

### $ 팁
1. 인텔리J를 사용할 경우 eslint를 자동으로 설정하려면 setting < Languages & Frameworks < Javascript < Code Quality Tools < ESLint에서
설정을 해줘야 한다. Automatic Eslint를 선택하고 아래에 Run eslint --fix on save를 선택하면 통상적으로 적용되지만 잘 안된다면  Menual Eslint configuration을 선택해
elsintrc.js를 선택해주면 적용이 된다.
![intellij_lint_setting.png](static%2Fimages%2Fguide%2Fintellij_lint_setting.png)
