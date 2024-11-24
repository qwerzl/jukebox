<script lang="ts" setup>
import { useMusicStore } from '~/store/music'

const music = useMusicStore()
const playPauseContainer = useTemplateRef<HTMLElement>('playPauseContainer')
</script>

<template>
  <div 
    class="transition ease-in-out duration-300 w-full rounded aspect-square grid active:shadow-2xl" 
    :class="{
      'bg-[#b1b1b1]': music.playing, 
      'bg-black': !music.playing
    }" 
    ref="playPauseContainer"
  >
    <div class="w-full h-full flex items-center justify-center col-start-1 row-start-1">
      <div class="w-28 h-28 rounded-full flex items-center justify-center transition ease-in-out duration-300" :class="{'bg-[#FFFFFF40]': music.playing, 'bg-white': !music.playing}">
        <div class="w-16 h-16 rounded-full bg-white ease-in-out duration-350 transition-all flex items-center justify-center" :class="{'w-16 h-16': music.playing, 'w-28 h-28': !music.playing}">
          <div class="rounded-full bg-orange-600 ease-in-out duration-350 transition-all" :class="{'w-0 h-0': music.playing, 'w-4 h-4': !music.playing}" />
        </div>  
      </div>
    </div>
    <div class="h-full w-full col-start-1 row-start-1 flex justify-end flex-col px-2 py-0.5" @click="music.playing ? music.pause() : music.play()">
      <div class="flex justify-between flex-row items-end">
        <div class="text-black text-lg">
          ON
        </div>
        <div class="text-[#FFFFFF80] flex items-end text-lg">
          OFF
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>