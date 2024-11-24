<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import Lottie, { type AnimationItem } from 'lottie-web'
import { useTemplateRef } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import { useMusicStore } from '~/store/music'

enum UserStatus {
  Walking,
  Idle,
  Vehicle
}

const music = useMusicStore()
const playbackTime = ref(0)
const playbackDuration = ref(0)
const userStatus = ref(UserStatus.Walking)
const lottieContainer = useTemplateRef('lottieContainer')

useIntervalFn(() => {
  playbackTime.value = music.howlInstance?.seek() ?? 0
  playbackDuration.value = music.howlInstance?.duration() ?? 0
}, 100)

const lottieContainerStyle = ref()

const lottieAnimation = ref<AnimationItem>()
onMounted(() => {
  if (!lottieContainer.value) return

  watch(() => userStatus.value, async () => {
    lottieAnimation.value?.destroy()
    if (!lottieContainer.value) return
    const animationData = await (async () => {
      let path = ''
      switch (userStatus.value) {
        case UserStatus.Walking:
          path = '/walking.json'
          break
        case UserStatus.Idle:
          path = '/sitting.json'
          break
      }
      return await fetch(path)
        .then(res => res.json())
    })()
    lottieAnimation.value = Lottie.loadAnimation({
      container: lottieContainer.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    })
    lottieContainerStyle.value = [
      {
        marginTop: '-150px',
        marginRight: '-80px',
        width: '300px',
        height: '300px'
      },
      {
        marginTop: '100px',
        marginRight: '-80px',
        width: '250px',
        height: '250px',
      }
    ][userStatus.value as number]
  }, { immediate: true })

  watch(() => music.bpm, () => {
    switch (userStatus.value) {
      case UserStatus.Walking:
        lottieAnimation.value?.setSpeed(0.8 / (60 / music.bpm))
    }
  }, { immediate: true })
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
        <div class="w-full aspect-square overflow-hidden">
          <div class="w-full rounded bg-[#FFFFFF20] grid transition-all ease-in-out duration-300 origin-bottom-left" :class="{'aspect-square': userStatus === UserStatus.Walking, 'aspect-[2/1] mb-1': userStatus === UserStatus.Idle}" @click="userStatus = userStatus === UserStatus.Walking ? UserStatus.Idle : UserStatus.Walking">
            <div class="w-full h-full flex items-center justify-center col-start-1 row-start-1 overflow-hidden">
              <div ref="lottieContainer" :style="lottieContainerStyle" class="w-[300px] h-[300px]" />
            </div>
            <div class="h-full w-full col-start-1 row-start-1 flex justify-end flex-col px-2 py-0.5">
              <div class="flex justify-between flex-col-reverse items-start h-full">
                <div class="text-black text-lg">
                  {{ userStatus === UserStatus.Walking ? 'Walking' : 'Idle' }}
                </div>
                <div class="text-neutral-600 transition-all ease-in-out duration-300" :class="{'opacity-0': userStatus === UserStatus.Idle, 'opacity-100': userStatus === UserStatus.Walking}">
                  {{ music.bpm }} BPM
                </div>
              </div>
            </div>
          </div>
          <div class="w-full pt-1 bg-[#FFFFFF20] transition-all ease-in-out duration-300 overflow-hidden aspect-[2/1] rounded grid" :class="{'h-0': userStatus === UserStatus.Walking, 'aspect-[1/2]': userStatus === UserStatus.Idle}">
            <Vue3Lottie
              animation-link="/house.json"
              :height="150"
              :width="150"
              style="margin-top: 0px; margin-right: -50px;"
              class="col-start-1 row-start-1"
            />
            <div class="col-start-1 row-start-1 w-full h-full flex flex-col justify-between px-2">
              <div class="text-black text-lg">
                At home
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
