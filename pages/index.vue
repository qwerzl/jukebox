<script setup lang="ts">
import { useIntervalFn , onLongPress } from '@vueuse/core'
import { useTemplateRef } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import { useMusicStore } from '~/store/music'

const music = useMusicStore()
const playbackTime = ref(0)
const playbackDuration = ref(0)
const songLiked = ref(false)

const playPauseContainer = useTemplateRef<HTMLElement>('playPauseContainer')

useIntervalFn(() => {
  playbackTime.value = music.howlInstance?.seek() ?? 0
  playbackDuration.value = music.howlInstance?.duration() ?? 0
}, 100)

function secondsToTime(e: number) {
    return `${Math.floor(e % 3600 / 60).toString().padStart(2,'0')}:${Math.floor(e % 60).toString().padStart(2,'0')}`;
}
</script>

<template>
  <ion-page class="h-screen w-screen bg-neutral-400 font-sans flex flex-col p-2">
    <div class="border font-bold">
      <div class="flex mt-12 font-grotesk items-center justify-between">
        <div class="text-2xl text-black">
          Jukebox
        </div>
        <div class="flex flex-row space-x-2">
          <div class="w-10 h-10 rounded bg-[#FFFFFF20] flex justify-center items-center">
            <Icon name="material-symbols:area-chart-outline-rounded" size="1.2em" class="text-black"/>
          </div>
          <div class="w-10 h-10 rounded bg-black flex justify-center items-center">
            <Icon name="material-symbols:account-circle" size="1.2em" class="text-white"/>
          </div>
        </div>
      </div>
      <SongInfo class="mt-8 z-18" />
    </div>
    <Visualizer class="w-full h-[150px] z-10" style="margin-top: -10px;"/>
    <div class="text-xl flex justify-between font-grostek font-medium -mt-10 z-20">
      <div>
        {{ secondsToTime(playbackTime) }}
      </div>
      <div class="text-[#FFFFFF80]">
        {{ secondsToTime(playbackDuration)}}
      </div>
    </div>
    <div class="pb-2 border font-grotesk">
      <div class="grid grid-cols-2 w-full h-full gap-2">
        <UserStatController class="z-30" />
        <PlayPauseController />
      </div>
    </div>
    <div class="pb-12 font-grotesk flex flex-row space-x-2 justify-between">
      <div class="text-4xl text-black flex-1 bg-[#FFFFFF20] rounded flex items-center justify-center py-2">
        <Icon name=material-symbols:settings size="0.4em" />
      </div>
      <div class="text-4xl text-black flex-1 bg-[#FFFFFF20] rounded flex items-center justify-center">
        <Icon name=mdi:skip-previous size="0.5em" />
      </div>
      <div class="text-4xl text-black flex-1 bg-[#FFFFFF20] rounded flex items-center justify-center">
        <Icon name=material-symbols:skip-next size="0.5em" />
      </div>
      <div 
        class="text-4xl text-black flex-1 bg-[#FFFFFF20] rounded flex items-center justify-center transition-all duration-300 ease-in-out"
        :class="{
          'bg-red-600 text-white': songLiked,
        }"
        @click="songLiked = !songLiked"
      >
        <Icon name=material-symbols:favorite size="0.4em" />
      </div>
    </div>
  </ion-page>
</template>
