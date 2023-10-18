<script setup lang="ts">
const route = useRoute()
const {page, configuration, mapping} = usePage('sandbox-sales02', 'xcui', route.fullPath);
</script>


<template>
  <div class="d-flex flex-column vh-100">
    <br-page :configuration="configuration" :mapping="mapping">
      <template v-slot="{ page }: { page: Page }">
        <template v-if="page">
          <header>
            <nav class="navbar navbar-expand-sm navbar-dark sticky-top bg-dark" role="navigation">
              <div class="container">
                <router-link :to="page.getUrl('/')" class="navbar-brand">
                  {{ page.getTitle() || 'Bloomreach Content + Nuxt3 = ♥' }}
                </router-link>
                <div class="collapse navbar-collapse">
                  <br-component component="menu"/>
                </div>
              </div>
            </nav>
          </header>
          <section class="container flex-fill pt-3">
            <br-component component="main"/>
          </section>
          <footer class="bg-dark text-light py-3">
            <div class="container clearfix">
              <div class="float-left pr-3">&copy; Bloomreach</div>
              <div class="overflow-hidden">
                <br-component component="bottom"/>
              </div>
            </div>
          </footer>
        </template>
      </template>
    </br-page>
  </div>

</template>
<style>
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.has-edit-button {
  position: relative;
}
</style>