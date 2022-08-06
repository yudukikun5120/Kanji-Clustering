<template>
    <div class="mb-5 flex flex-col space-y-10">
        <h1 class="text-8xl font-extrabold">
            漢字<br />凝集<br />解析
        </h1>
        <div class="flex flex-col gap-y-6">
            <p>
                漢字凝集解析では，入力した漢字に類似する漢字を検知することができます。
            </p>
            <!-- <span v-headway v-headway-trigger></span> -->

            <button @click="show"
                class="text-left font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition ease-in-out p-5">このサイトの使い方を見る
                ＞
            </button>

            <hr class="border-gray-200 dark:border-gray-800">

            <h3 class="text-3xl font-extrabold -mb-2">概要</h3>
            <p>
                <a class="bg-blue-100 dark:bg-gray-600" href="https://ja.wikipedia.org/wiki/K平均法"><span
                        v-katex="'\k'"></span>-平均法</a>（<span v-katex="'\k=100'"></span>
                に設定）を用い，ＪＩＳ第１水準および第２水準に分類された6355字種をクラスタリングし，類似する漢字を検知します。
                <br />
                漢字凝集解析はＡＰＩを提供しています。<a href="https://kanji-clustering.herokuapp.com/docs"
                    class="bg-blue-100 dark:bg-gray-600">ドキュメント</a>をご覧ください。
            </p>

            <h3 class="text-3xl font-extrabold -mb-2">広告</h3>
            <p>
                漢字検定を勉強されている方向けに，<a class="bg-blue-100 dark:bg-gray-600"
                    href="https://yudukikun5120.notion.site/1f06cf758050421eadf9bb07a250f63b">クイズアプリや電子書籍</a>を提供しています。
            </p>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';

Vue.use(VueKatex, {
    globalOptions: {
        //... Define globally applied KaTeX options here
    }
});

export default Vue.extend({
    name: 'Sidebar',
    methods: {
        show() {
            this.$modal.show("app-usage");
        }
    }
});

</script>