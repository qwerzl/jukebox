<template>
  <div class="w-screen flex flex-col items-center" style="margin-left: -0.5rem;">
    <!-- <div class="text-4xl text-neutral-600">
      Now Playing
    </div>
    <div class="text-black text-4xl">
      Bad Guy
    </div>
    <div class="text-4xl text-neutral-600">
      by Billie Eilish
    </div> -->
    <img src="/Billie_Eilish_-_Hit_Me_Hard_and_Soft.png" class="w-50 h-50 rounded shadow-2xl">
    <div class="flex flex-row w-full font-grotesk bg-neutral-400 z-50 mt-8">
      <div class="h-25 w-full grid" style="box-shadow: inset 0 4px 6px 0 rgb(0 0 0 / 0.05);">
        <div class="col-start-1 row-start-1 flex items-center text-black h-full w-full justify-center">
          <div class="flex items-center flex-col">
            <div class="text-4xl font-bold">
              CHIHIRO
            </div>
            <div>
              Billie Eilish - HIT ME HARD AND SOFT
            </div>
          </div>
        </div>
        <div class="col-start-1 row-start-1 w-full h-full shadow-inner textured-bg z-100" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
.textured-bg {
  background-color: #e5e5f7;
  opacity: 0.2;
  background-image: radial-gradient(circle at center center, #b7b7b7, #e5e5f7), repeating-radial-gradient(circle at center center, #b7b7b7, #b7b7b7, 8px, transparent 16px, transparent 8px);
  background-blend-mode: multiply;
}
</style>