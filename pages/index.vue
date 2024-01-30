<script setup lang="ts">
import { commonStore } from '~/stores/common'
import { navStore } from '~/stores/nav'

const common = commonStore()
const nav = navStore()

const router = useRouter()
if (!common.isLogin) {
  router.push('login')
} else if (common.currentUrl !== '') {
  router.push(common.currentUrl)
} else {
  nav.getMenuData()
  common.currentUrl = nav.mainMenuUrl
  common.currentMenuNm = nav.mainMenuNm
  router.push(common.currentUrl)
}
</script>
