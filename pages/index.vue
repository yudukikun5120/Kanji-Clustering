<template>
  <div>
    <Tutorial></Tutorial>
    <div
      class="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white p-10 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <Sidebar></Sidebar>
      <div class="flex flex-col">
        <div>
          <SearchResult></SearchResult>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="js">
import Vue from "vue";
import KanjiCard from "~/components/KanjiCard.vue";
import SearchResult from "~/components/SearchResult.vue";
import Tutorial from "../components/Tutorial.vue";
import Footer from "~/components/Footer.vue";
import Sidebar from "../components/Sidebar.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { KanjiCard, SearchResult, Tutorial, Tutorial, Footer, Sidebar },
});
</script>
