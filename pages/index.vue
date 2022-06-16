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
          漢字凝集解析では，入力した漢字に類似する漢字を検知することができます。
        </p>

        <h3 class="font-serif text-3xl font-extrabold -mb-2">概要</h3>
        <p>
          <a
            class="bg-blue-100"
            href="https://ja.wikipedia.org/wiki/K平均法"
            ><span v-katex="'\k'"></span>-平均法</a
          >（<span v-katex="'\k=100'"></span> に設定）を用い，JIS第一水準に分類された2965字種をクラスタリングし，類似する漢字を検知します。
          <br>
          漢字凝集解析はAPIを提供しています。<a href="https://kanji-clustering.herokuapp.com/docs" class="bg-blue-100">ドキュメント</a>をご覧ください。
        </p>

        <h3 class="font-serif text-3xl font-extrabold -mb-2">広告</h3>
        <p>
          漢字検定を勉強されている方向けに，<a
            class="bg-blue-100"
            href="https://yudukikun5120.notion.site/1f06cf758050421eadf9bb07a250f63b"
            >クイズアプリや電子書籍</a
          >を提供しています。
        </p>

        <address>
          <p class="text-sm text-gray-700">
            Made with ❤️ by
            <a href="https://yudukikun5120.me" class="font-semibold"
              >@yudukikun5120</a
            >
          </p>
        </address>
      </div>
    </div>

    <div class="flex flex-col">
      <div>
        <SearchResult></SearchResult>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from "vue";
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';
import KanjiCard from "~/components/KanjiCard.vue";
import SearchResult from "~/components/SearchResult.vue";

Vue.use(VueKatex, {
  globalOptions: {
    //... Define globally applied KaTeX options here
  }
});

export default Vue.extend({
  name: "IndexPage",
  components: { KanjiCard, SearchResult },
});
</script>
