# # front-vue-nuxt

### $ 개요
nuxt로 만든 vue.js 샘플 프로젝트입니다. <br>
프로젝트 상황에 맞게 알맞은 브랜치를 선택해서 사용하세요. main 브랜치는 모든 기능이 구현된 형태입니다.

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
2. Vuetify 적용 : 웹 스타일의 기본을 vuetify로 설정 
   1. Vuetify 기본 예시 및 메뉴 적용  [Vuetify 공식홈](https://vuetifyjs.com)
3. 기타 오픈소스 적용 : nuxt3에서 사용할 만한 오픈소스 적용. 자신에게 적합한 것 사용하고 삭제할것
   1. titpap 적용 및 예시 소스  [Tiptap 공식홈](https://tiptap.dev/)
   2. auto animate 적용 및 예시 소스 [AutoAnimate 공식홈](https://auto-animate.formkit.com/)
   3. Ecahrt 적용 및 예시 소스 [Ecahrt 공식홈](https://echarts.apache.org/en/index.html)
   4. Vue3 DatePicker 적용 및 예시 소스 [Vue Datepicker 공식홈](https://vue3datepicker.com/)
   5. Ag Grid 적용 및 예시 소스 [AG Grid 공식홈](https://www.ag-grid.com/)
   6. Full Calendar 적용 및 예시 소스 [Full Calendar 공식홈](https://fullcalendar.io/)
   7. Prime Vue 적용 및 예시소스 [Full Calendar 공식홈](https://primevue.org/)
<hr>

### $ 사용방법
1. 소스를 다운로드 받습니다.
2. 다운로드 받은 소스를 열고 package.json에 있는 라이브러리를 다운받아야 합니다. <br>
터미널을 열고 아래처럼 설치를 입력하세요. node.js는 사전에 설치가 되어 있어야 합니다.
```text
npm install
```
3. 프로젝트를 실행합니다. 3000번 포트가 기본 포트입니다.
```text
npm run dev
```
### $ 주의점
node 버전에 따라 정상적으로 설치가 안될 수 있다.
개발시 20.10.0 버전을 사용하고 있었다.

### $ 팁
1. 인텔리J를 사용할 경우 eslint를 자동으로 설정하려면 setting < Languages & Frameworks < Javascript < Code Quality Tools < ESLint에서
설정을 해줘야 합니다. Automatic Eslint를 선택하고 아래에 Run eslint --fix on save를 선택하면 통상적으로 적용되지만 잘 안된다면  Menual Eslint configuration을 선택해
elsintrc.js를 선택해 주면 적용이 됩니다.
![intellij_lint_setting.png](static%2Fimages%2Fguide%2Fintellij_lint_setting.png)
