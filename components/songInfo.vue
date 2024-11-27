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
    <div class="grid w-50 h-50">
      <img src="/albumcover.png" class="w-50 h-50 rounded drop-shadow-2xl shadow-xl border border-2 col-start-1 row-start-1 z-30" ref="albumImgContainer">
      <div class="flex items-center flex-col justify-center row-start-1 col-start-1 rounded w-50 h-50 border border-2 z-20 bg-neutral-500">
        <Icon name="material-symbols:music-cast" size="2em" class="text-black" />
      </div>
    </div>
    <div class="flex flex-row w-full font-grotesk z-50 mt-2">
      <div class="h-25 w-full grid">
        <div class="col-start-1 row-start-1 flex items-center text-black h-full w-full justify-center">
          <div class="flex items-center flex-col">
            <div class="text-3xl text-neutral-800">
              {{ music.playing ? 'CHIHIRO' : '--' }}
            </div>
            <div class="text-neutral-700 font-sans font-normal">
              {{ music.playing ? 'Billie Eilish - HIT ME HARD AND SOFT' : '--' }}
            </div>
          </div>
        </div>
        <!-- <div class="col-start-1 row-start-1 w-full h-full shadow-inner textured-bg z-100" /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { pop } from '@vueuse/motion'
import { useMusicStore } from '~/store/music';

const music = useMusicStore()

const albumImgContainer = useTemplateRef<HTMLElement>('albumImgContainer')

const { apply } = useMotion(albumImgContainer, pop)

watch(() => music.playing, async () => {
  if (music.playing) {
    // if (pop.initial)
    //   await apply(pop.initial)

    if (pop.visible)
      await apply(pop.visible)

    if (pop.visibleOnce)
      await apply(pop.visibleOnce)

    if (pop.enter)
      await apply(pop.enter)
  }

  if (!music.playing) {
    if (pop.initial)
      await apply(pop.initial)
  }
}, { immediate: true })

</script>

<style>
.textured-bg {
  background-color: #e5e5f7;
  opacity: 0.2;
  background-image: radial-gradient(circle at center center, #b7b7b7, #e5e5f7), repeating-radial-gradient(circle at center center, #b7b7b7, #b7b7b7, 8px, transparent 16px, transparent 8px);
  background-blend-mode: multiply;
}
</style>