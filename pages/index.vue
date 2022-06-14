<template>
  <div
    class="min-h-screen bg-gray-50 p-10 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10"
  >
    <div class="mb-5 flex flex-col space-y-10">
      <h1 class="font-serif text-8xl font-extrabold">
        漢字<br />凝集<br />解析
      </h1>
      <div class="flex flex-col gap-y-6">
        <p>
          漢字凝集解析では，<a
            class="bg-blue-100"
            href="https://ja.wikipedia.org/wiki/K平均法"
            >k-平均法</a
          >にゟクラスタリングされた漢字群に基づき，あなたが入力した漢字に類似する漢字を表示することができます。
        </p>

        <h3 class="font-serif text-3xl font-extrabold -mb-2">概要</h3>
        <p>
          k-平均法でJIS第一水準の漢字のクラスタリングを行い，適合推定器を作成しました。
        </p>

        <h3 class="font-serif text-3xl font-extrabold -mb-2">広告</h3>
        <p>
          漢字検定を勉強されている方向けの<NuxtLink
            class="bg-blue-100"
            to="/advertisement"
            >他のサービス</NuxtLink
          >も提供しています。
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <div>
        <SearchResult></SearchResult>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import KanjiCard from "~/components/KanjiCard.vue";
import SearchResult from "~/components/SearchResult.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { KanjiCard, SearchResult },
});
</script>
