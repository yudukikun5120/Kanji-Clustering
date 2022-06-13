<template>
    <!-- <div class="bg-white aspect-square flex justify-center items-center shadow-md py-20"><span class="text-6xl">㒤</span></div> -->
    <div class="py-8 px-8 max-w-sm mx-auto border-2 rounded-xl space-y-2 xl:py-4 xl:flex xl:items-center xl:space-y-0 xl:space-x-14">
        <div class="flex flex-col">
            <span class="inline-block align-middle mx-auto sh-24 rounded-full text-7xl font-serif xl:mx-0 xl:shrink-0 text-center">
                {{ glyph }}
            </span>
        </div>
        <div class="text-center space-y-2 xl:text-left">
            <div class="space-y-1 mx-auto">
                <!-- <p class="leading-5 text-black font-serif">
                    {{reading}}
                </p> -->
                <p class="text-sm text-gray-500 font-medium font-mono">
                    {{ucs}}
                </p>
            </div>
        <!-- <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
        </button> -->
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