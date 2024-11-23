<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import Lottie from 'lottie-web'
import { useTemplateRef } from 'vue'
import { useMusicStore } from '~/store/music'

enum UserStatus {
  Idle,
  Walking,
  Vehicle
}

const music = useMusicStore()
const playbackTime = ref(0)
const playbackDuration = ref(0)
const lottieContainer = useTemplateRef('lottieContainer')

useIntervalFn(() => {
  playbackTime.value = music.howlInstance?.seek() ?? 0
  playbackDuration.value = music.howlInstance?.duration() ?? 0
}, 100)

// watch(() => music.bpm, () => {
//   lottieReloadKey.value++
// })

const animationData = await fetch('/walking.json').then(res => res.json())
onMounted(() => {
  console.log(animationData)
  if (!lottieContainer.value) return
  const lottieAnimation = Lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData,
  })
  lottieAnimation.setSpeed(0.8 / (60 / music.bpm))

  watch(() => music.bpm, () => {
    lottieAnimation.setSpeed(0.8 / (60 / music.bpm))
  })
})

function secondsToTime(e: number) {
    return `${Math.floor(e % 3600 / 60).toString().padStart(2,'0')}:${Math.floor(e % 60).toString().padStart(2,'0')}`;
}
</script>

<template>
  <div class="h-screen w-screen bg-neutral-400 font-sans flex flex-col p-2">
    <div class="h-2/3 border font-bold">
      <div class="flex mt-14 font-grotesk items-center justify-between">
        <div class="text-2xl text-black">
          Jukebox
        </div>
        <div class="w-10 h-10 rounded bg-[#FFFFFF20] flex justify-center items-center">
          <Icon name="material-symbols:area-chart-outline-rounded" size="1.2em" class="text-black"/>
        </div>
      </div>
      <div class="mt-14">
        <div class="text-4xl text-neutral-600">
          Now Playing
        </div>
        <div class="text-black text-4xl">
          Bad Guy
        </div>
        <div class="text-4xl text-neutral-600">
          by Billie Eilish
        </div>
      </div>
    </div>
    <Visualizer class="w-full h-[200px] -mb-8"/>
    <div class="text-xl flex justify-between font-grostek font-medium">
      <div>
        {{ secondsToTime(playbackTime) }}
      </div>
      <div class="text-[#FFFFFF80]">
        {{ secondsToTime(playbackDuration)}}
      </div>
    </div>
    <div class="pb-10 border font-grotesk">
      <div class="grid grid-cols-2 w-full h-full gap-2">
        <div class="w-full rounded aspect-square bg-[#FFFFFF20] grid">
          <div class="w-full h-full flex items-center justify-center col-start-1 row-start-1 overflow-hidden">
            <div ref="lottieContainer" style="margin-top: -150px; margin-right: -80px;" class="w-[300px] h-[300px]" />
          </div>
          <div class="h-full w-full col-start-1 row-start-1 flex justify-end flex-col px-2 py-0.5">
            <div class="flex justify-between flex-col items-start h-full">
              <div class="text-neutral-600">
                {{ music.bpm }} BPM
              </div>
              <div class="text-black text-lg">
                Walking
              </div>
            </div>
          </div>
        </div>
        <div class="transition ease-in-out duration-300 w-full rounded aspect-square grid" :class="{'bg-[#FFFFFF20]': music.playing, 'bg-black': !music.playing}">
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
      </div>
    </div>
  </div>
</template>
