<template>
    <modal name="app-usage" height="auto" class="rounded shadow">
        <iframe 
        src="https://scribehow.com/embed/__oSB8UpncTSyyeFBOR4g6AA" 
        width="100%" 
        height="480" 
        allowfullscreen 
        frameborder="0"
        >
        </iframe>
        <button 
        @click="$modal.hide('app-usage')"
        class="p-4 w-full h-auto block hover:bg-gray-200 focus:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white transition ease-in-out"
        >
        閉じる
        </button>
    </modal>
</template>

<s