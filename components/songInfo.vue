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
    <img src="/albumcover.png" class="w-50 h-50 rounded drop-shadow-2xl shadow-xl border border-2">
    <div class="flex flex-row w-full font-grotesk z-50 mt-2">
      <div class="h-25 w-full grid">
        <div class="col-start-1 row-start-1 flex items-center text-black h-full w-full justify-center">
          <div class="flex items-center flex-col">
            <div class="text-3xl text-neutral-800">
              CHIHIRO
            </div>
            <div class="text-neutral-700 font-sans font-normal">
              Billie Eilish - HIT ME HARD AND SOFT
            </div>
          </div>
        </div>
        <!-- <div class="col-start-1 row-start-1 w-full h-full shadow-inner textured-bg z-100" /> -->
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