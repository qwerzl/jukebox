<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
import { useTemplateRef } from 'vue'
import { useMusicStore  } from '~/store/music'

const music = useMusicStore()

const { width } = useWindowSize()
const canvas = useTemplateRef<HTMLCanvasElement>('canvas')
const progressIndicator = useTemplateRef<HTMLDivElement[]>('progressIndicator')
const ctx = shallowRef()
const HEIGHT = 150

const barWidth = computed(() => {
  if (!music.analyser) return 0
  return width.value / music.analyser?.frequencyBinCount * 2.5
})

onMounted(() => {

  if (canvas.value) {
    canvas.value.width = width.value
    canvas.value.height = HEIGHT
    ctx.value = canvas.value.getContext("2d")
  }

  let barHeight
  let x = 0

  // ctx.filter = 'url(#remove-alpha)';
  ctx.value.translate(0.5, 0.5)

  useIntervalFn(() => {
    if (!music.howlInstance || !progressIndicator.value) {
      return
    }

    const durationPerSection = music.howlInstance.duration() / 23
    let tmpTime = 0

    for (const i of progressIndicator.value) {
      if (tmpTime > music.howlInstance.seek()) {
        i.style.backgroundColor = '#525252'
      } 
      else if (tmpTime + durationPerSection > music.howlInstance.seek()) {
        const prog = Math.trunc((music.howlInstance.seek() - tmpTime) / durationPerSection * 100) 
        i.style.background = `linear-gradient(90deg, #262626 ${prog}%, #525252 ${prog}%)`
      }
      else {
        i.style.backgroundColor = '#262626'
      }
      tmpTime += durationPerSection
    }
  }, 100)

  function renderFrame() {
    requestAnimationFrame(renderFrame)

    if (!music.analyser) {
      return
    }

    x = 0;

    ctx.value.clearRect(0, 0, width.value, HEIGHT);
    ctx.value.beginPath()

    const dataArray = new Uint8Array(music.analyser.frequencyBinCount)

    music.analyser?.getByteFrequencyData(dataArray)

    for (let i = 0; i < music.analyser.frequencyBinCount; i+=2) {
      barHeight = dataArray[i]/4

      ctx.value.fillStyle = "rgba(0, 0, 0, .15)";
      ctx.value.beginPath();
      ctx.value.roundRect(x, HEIGHT - barHeight - HEIGHT/2, barWidth.value, barHeight*2, 40)
      ctx.value.fill()

      ctx.value.fillStyle = "rgba(0, 0, 0, .2)";
      ctx.value.beginPath();
      ctx.value.roundRect(x, HEIGHT - barHeight/5*3 - HEIGHT/2, barWidth.value, barHeight/5*6, 40)
      ctx.value.fill()

      x += (barWidth.value + 1)*2
    }
  }
  renderFrame()
})
</script>

<template>
  <div id="content">
    <div class="grid w-full h-full">
      <div class="col-start-1 row-start-1 flex flex-col justify-center pr-[2px]">
        <div class="flex justify-between">
          <div v-for="i in 23" :key="i" class="rounded w-2 h-[15px] z-10" ref="progressIndicator" />
        </div>
      </div>
      <canvas id="canvas" ref="canvas" class="col-start-1 row-start-1 w-full h-full z-0" />
    </div>
  </div>
</template>