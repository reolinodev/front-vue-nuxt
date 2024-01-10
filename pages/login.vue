<template>
  <div class="login">
    <h1>로그인</h1>
    <v-responsive class="mx-auto" max-width="500">
      <v-text-field
        v-model="loginId"
        label="아이디"
        type="input"
        hint="아이디를 입력하세요."
      />
      <v-text-field
        v-model="userPw"
        label="비밀번호"
        type="password"
        hint="비밀번호를 입력하세요"
      />
    </v-responsive>
    <div class="login-error">{{ errorMessage }}</div>
    <v-btn
      class="login-btn"
      color="primary"
      size="large"
      @click="certification"
    >
      로그인
    </v-btn>

    <div class="login-description">
      * 아이디는 admin / 비밀번호는 1234를 입력해주세요.
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { loginStore } from '~/stores/login'
import { commonStore } from '~/stores/common'
import { getDeviceBrowser, getLoginDevice } from '~/utils/device'

export default defineComponent({
  name: 'Login',
  setup() {
    const login = loginStore()
    const common = commonStore()
    const router = useRouter()

    const loginId = ref('')
    const userPw = ref('')
    const loginDevice = ref('')
    const deviceBrowser = ref('')
    const errorMessage = ref('')

    // 인증하기
    const certification = () => {
      if (validate()) {
        const params = {
          loginId: loginId.value,
          userPw: userPw.value,
          loginDevice: loginDevice.value,
          deviceBrowser: deviceBrowser.value
        }

        login.loginPrc(params)

        if (login.resultCode === 'ok') {
          common.isLogin = true
          router.push('/')
        } else {
          errorMessage.value = login.message
        }
      }
    }

    const validate = () => {
      let chk = true
      if (loginId.value === '') {
        errorMessage.value = '아이디를 입력해주세요.'
        chk = false
      } else if (userPw.value === '') {
        errorMessage.value = '비밀번호를 입력해주세요.'
        chk = false
      }

      return chk
    }

    onMounted(() => {
      if (common.isLogin) {
        router.push('/')
      } else {
        deviceBrowser.value = getDeviceBrowser()
        loginDevice.value = getLoginDevice()
      }
    })

    return {
      loginId,
      userPw,
      errorMessage,
      certification
    }
  }
})
</script>
<style scoped>
.login {
  text-align: center;
  padding: 10px;
}
.login h1 {
  margin: 50px 0 50px;
}
.login-btn {
  margin-top: 30px;
  width: 250px;
}
.login-error {
  margin-top: 10px;
  color: #f5236e;
}
.login-description {
  margin-top: 20px;
}
</style>
