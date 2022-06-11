<template>
  <div class="min-h-screen bg-gray-50 p-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
    <div class="mb-5">
      <h1 class="font-serif text-9xl font-extrabold mb-10">
        漢字
        <br>
        凝集
        <br>
        解析
      </h1>
      <p>
        漢字凝集解析では，<a class="text-blue-600 after:content-['_↗']" href="https://ja.wikipedia.org/wiki/K平均法">k-平均法</a>にゟクラスタリングされた漢字群に基づき，あなたが入力した漢字に類似する漢字を表示することができます．
      </p>
    </div>
    <div>
      <div>
        <label class="relative block">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg>
          </span>
          <input 
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
            placeholder="Search for anything..." 
            type="text" 
            name="search"
          >
        </label>    
      </div>
      <div>
        <div class="grid grid-cols-3 gap-10 place-content-center p-6">
          <KanjiCard glyph="㒤" reading="おなじ・くりかえし・のま" ucs="U+3006"></KanjiCard>
          <KanjiCard glyph="㒲" reading="おなじ・くりかえし・のま" ucs="U+3006"></KanjiCard>
          <KanjiCard glyph="㓉" reading="おなじ・くりかえし・のま" ucs="U+3006"></KanjiCard>
          <KanjiCard glyph="㓤" reading="おなじ・くりかえし・のま" ucs="U+3006"></KanjiCard>
          <KanjiCard glyph="㓷" reading="おなじ・くりかえし・のま" ucs="U+3006"></KanjiCard>
          <KanjiCard glyph="㔌" reading="おなじ・くりかえし・のま" ucs="U+3006"></KanjiCard>
          <KanjiCard glyph="㔟" reading="おなじ・くりかえし・のま" ucs="U+3006"></KanjiCard>
          <KanjiCard glyph="㔦" reading="おなじ・くりかえし・のま" ucs="U+3006"></KanjiCard>
          <KanjiCard glyph="㔺󠄂" reading="おなじ・くりかえし・のま" ucs="U+3006"></KanjiCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import KanjiCard from '~/components/KanjiCard.vue'

const serviceName = "漢字凝集解析";

export default Vue.extend({
    name: "IndexPage",
    components: { KanjiCard }
})
</script>
