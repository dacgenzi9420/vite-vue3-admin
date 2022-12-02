<template>
  <div class="index">
    <div class="content">
      <el-tabs type="border-card" stretch="true">
        <el-tab-pane label="账号登录" name="first">
          <div class="common account">
            <el-form label-width="100px" style="max-width: 460px" size="large">
              <el-form-item label="账号">
                <el-input v-model="formInlineAccount.account" />
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="formInlineAccount.password" />
              </el-form-item>
              <el-form-item label="验证码">
                <el-row :gutter="20">
                  <el-col :span="14"
                    ><el-input v-model="formInlineAccount.captcha"
                  /></el-col>
                  <el-col :span="7"><div class="captcha"></div></el-col>
                </el-row>
              </el-form-item>
            </el-form>
            <div class="handle">
                <el-button size="large">重置</el-button>
                <el-button size="large">登录</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="手机号码登录" name="second">
          <div class="common phone">phone</div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const formInlineAccount = ref({
  account: "",
  password: "",
  captcha: "",
});
</script>

<style scoped lang="scss">
.index {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 450px;
    height: 360px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 15px;
  }
}
.el-tabs--border-card {
  border: none !important;
}
.common {
  padding: 20px 0;
}
.captcha {
  width: 120px;
  height: 30px;
  border: 1px solid black;
  margin-top: 5px;
}
.handle{
    display: flex;
    justify-content: center;
    padding-top: 20px;
    align-items: center;
}
</style>
