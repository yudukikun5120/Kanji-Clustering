<template>
    <!-- <div class="bg-white aspect-square flex justify-center items-center shadow-md py-20"><span class="text-6xl">㒤</span></div> -->
    <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <span class="block mx-auto h-24 rounded-full text-8xl font-serif mb-3 sm:mx-0 sm:shrink-0">
            {{ glyph }}
        </span>
        <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">
                {{reading}}
            </p>
            <p class="text-slate-500 font-medium">
            {{ucs}}
            </p>
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
        </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        glyph: String,
        reading: String,
        ucs: String,
    },
}
</script>