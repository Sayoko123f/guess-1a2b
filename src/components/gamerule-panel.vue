<template>
    <div class="flex flex-col gap-y-1">
        <h2 class="font-bold">1A2B猜數字 玩法說明</h2>
        <hr class="pb-2" />
        <p class="py-2 indent-8">
            一個人設定一組四碼的數字作為謎底，另一方猜。每猜一個數，出數者就要根據這個數字給出提示，提示以XAYB形式呈現，直到猜中為止。其中X表示位置正確的數的個數，而Y表示數字正確而位置不對的數的個數。
        </p>
        <p class="indent-8">
            例如，當謎底為8123，而猜謎者猜1052時，出題者必須提示0A2B。
        </p>
        <p class="indent-8">
            例如，當謎底為5637，而猜謎者猜4931時，出題者必須提示1A0B。
        </p>
        <p class="text-center text-sky-600 hover:text-sky-400 hover:underline">
            <a
                href="https://zh.m.wikipedia.org/zh-tw/1A2B"
                target="_blank"
                rel="noreferrer noopener"
                >維基百科連結</a
            >
        </p>
    </div>
</template>
