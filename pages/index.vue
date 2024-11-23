<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import { useMusicStore  } from '~/store/music'

const music = useMusicStore()

const playbackTime = ref(0)
const playbackDuration = ref(0)

useIntervalFn(() => {
  playbackTime.value = music.howlInstance?.seek() ?? 0
  playbackDuration.value = music.howlInstance?.duration() ?? 0
}, 100)

function secondsToTime(e) {
    return `${Math.floor(e % 3600 / 60).toString().padStart(2,'0')}:${Math.floor(e % 60).toString().padStart(2,'0')}`;
}
</script>

<template>
  <div class="h-screen w-screen bg-neutral-400 font-sans flex flex-col p-2">
    <div class="h-2/3 border">
      Speaker
      <Visualizer class="w-full h-[100px]"/>
    </div>
    <div class="text-xl flex justify-between">
      <div>
        {{ secondsToTime(playbackTime) }}
      </div>
      <div class="text-[#FFFFFF80]">
        {{ secondsToTime(playbackDuration)}}
      </div>
    </div>
    <div class="pb-10 border">
      <div class="grid grid-cols-2 w-full h-full gap-2">
        <div class="w-full rounded aspect-square bg-[#FFFFFF20] grid">
          <div class="w-full h-full flex items-center justify-center col-start-1 row-start-1 overflow-hidden">
            <Vue3Lottie
              style="margin-top: -150px; margin-right: -80px;"
              animation-link="/walking.json"
              :height="300"
              :width="300"
            />
          </div>
          <div class="h-full w-full col-start-1 row-start-1 flex justify-end flex-col px-2 py-0.5">
            <div class="flex justify-between flex-row items-end">
              <div class="text-black text-lg">
                Walking
              </div>
            </div>
          </div>
        </div>
        <div class="w-full rounded aspect-square bg-[#FFFFFF20] grid">
          <div class="w-full h-full flex items-center justify-center col-start-1 row-start-1">
            <div class="w-28 h-28 rounded-full bg-[#FFFFFF40] flex items-center justify-center">
              <div class="w-16 h-16 rounded-full bg-white"/>
            </div>
          </div>
          <div class="h-full w-full col-start-1 row-start-1 flex justify-end flex-col px-2 py-0.5" @click="music.play()">
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
      </div>
    </div>
  </div>
</template>
