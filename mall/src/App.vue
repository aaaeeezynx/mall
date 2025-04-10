<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-container>
          <el-container>
            <el-main>
              <Home />
            </el-main>
            <el-footer>
              <Footer />
            </el-footer>
          </el-container>
        </el-container>
      </el-container>

    </div>

    <!-- <Home /> -->
  </div>
</template>

<script setup lang="ts">
import Home from "./views/Home.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

</script>

<style lang="scss" scoped>
.el-header {
  height: 100%;
  width: 100%;
  background-color: #232526;
}

.el-main {
  background-color: #13d116;
}

.el-footer {
  background-color: #ce0404;
}
</style>