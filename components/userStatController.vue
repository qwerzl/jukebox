<template>
  <div class="w-full aspect-square overflow-hidden rounded">
    <div class="w-full rounded bg-[#b1b1b1] grid transition-all ease-in-out duration-300 origin-bottom-left z-30" :class="{'aspect-square': userStatus === UserStatus.Walking, 'aspect-[2/1] mb-1': userStatus === UserStatus.Idle}" @click="switchStatus()">
      <div class="w-full h-full flex items-center justify-center col-start-1 row-start-1 overflow-hidden z-30 rounded overflow-hidden">
        <div ref="lottieContainer" :style="lottieContainerStyle" />
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
    <div class="w-full pt-1 bg-[#b1b1b1] transition-all ease-in-out duration-300 overflow-hidden aspect-[2/1] rounded grid" :class="{'h-0': userStatus === UserStatus.Walking, 'aspect-[1/2]': userStatus === UserStatus.Idle}">
      <div ref="idleLottieContainer" :style="idleLottieContainerStyle" class="col-start-1 row-start-1" />
      <div class="col-start-1 row-start-1 w-full h-full flex flex-col justify-between px-2">
        <div class="text-black text-lg">
          {{ idleLocation === IdleLocation.Home ? 'At home' : idleLocation === IdleLocation.Work ? 'At work' : 'In Starbucks' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Lottie, { type AnimationItem } from 'lottie-web'
import { useMusicStore } from '~/store/music'

enum UserStatus {
  Walking,
  Idle,
  Vehicle
}

enum IdleLocation {
  Home,
  Work,
  Starbucks
}

const music = useMusicStore()
const userStatus = ref(UserStatus.Walking)
const idleLocation = ref(IdleLocation.Home)

const lottieContainer = useTemplateRef<HTMLElement>('lottieContainer')
const idleLottieContainer = useTemplateRef<HTMLElement>('idleLottieContainer')

const lottieContainerStyle = ref()
const lottieAnimation = ref<AnimationItem>()

const idleLottieContainerStyle = ref()
const idleLottieAnimation = ref<AnimationItem>()


function switchStatus() {
  switch (userStatus.value) {
    case UserStatus.Walking:
      userStatus.value = UserStatus.Idle
      break
    case UserStatus.Idle:
      switch (idleLocation.value) {
        case IdleLocation.Home:
          idleLocation.value = IdleLocation.Work
          break
        case IdleLocation.Work:
          idleLocation.value = IdleLocation.Starbucks
          break
        case IdleLocation.Starbucks:
          idleLocation.value = IdleLocation.Home
          userStatus.value = UserStatus.Walking
          break
      }
      break
  }
}

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
    switch (userStatus.value) {
      case UserStatus.Walking:
        lottieAnimation.value?.setSpeed(0.8 / (60 / music.bpm))
    }
  }, { immediate: true })

  watch(() => idleLocation.value, async () => {
    idleLottieAnimation.value?.destroy()
    if (!idleLottieContainer.value) return
    const animationData = await (async () => {
      let path = ''
      switch (idleLocation.value) {
        case IdleLocation.Home:
          path = '/house.json'
          break
        case IdleLocation.Work:
          path = '/office.json'
          break
        case IdleLocation.Starbucks:
          path = '/coffee.json'
          break
      }
      return await fetch(path)
        .then(res => res.json())
    })()
    idleLottieAnimation.value = Lottie.loadAnimation({
      container: idleLottieContainer.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    })
    idleLottieContainerStyle.value = [
      {
        marginTop: '0px',
        marginLeft: '120px',
        width: '150px',
        height: '150px'
      },
      {
        marginTop: '-150px',
        marginLeft: '-50px',
        width: '400px',
        height: '400px',
      },
      {
        marginTop: '-30px',
        marginLeft: '100px',
        width: '180px',
        height: '180px',
      }
    ][idleLocation.value as number]
  }, { immediate: true })

  watch(() => music.bpm, () => {
    switch (userStatus.value) {
      case UserStatus.Walking:
        lottieAnimation.value?.setSpeed(0.8 / (60 / music.bpm))
    }
  }, { immediate: true })
})
</script>

<style>

</style>