<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const { width } = useWindowSize()

const file = useTemplateRef('file')
const audio = useTemplateRef('audio')
const canvas = useTemplateRef('canvas')

onMounted(() => {
  canvas.value.width = width.value
  canvas.value.height = 70
  const ctx = canvas.value.getContext("2d")

  file.value.onchange = function() {
    let barHeight
    let x = 0

    const files = this.files
    audio.value.src = URL.createObjectURL(files[0])
    audio.value.load()
    audio.value.play()
    const context = new AudioContext();
    const src = context.createMediaElementSource(audio.value)
    const analyser = context.createAnalyser()

    // ctx.filter = 'url(#remove-alpha)';
    ctx.translate(0.5, 0.5);

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount

    const dataArray = new Uint8Array(bufferLength)

    const WIDTH = canvas.value.width
    const HEIGHT = canvas.value.height

    const barWidth = (WIDTH / bufferLength) * 2.5

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.beginPath()

      analyser.getByteFrequencyData(dataArray)

      for (let i = 0; i < bufferLength; i+=2) {
        barHeight = dataArray[i]/8

        ctx.fillStyle = "rgba(0, 0, 0, .15)";
        ctx.beginPath();
        ctx.roundRect(x, HEIGHT - barHeight - HEIGHT/2, barWidth, barHeight*2, 40)
        ctx.fill()

        ctx.fillStyle = "rgba(0, 0, 0, .2)";
        ctx.beginPath();
        ctx.roundRect(x, HEIGHT - barHeight/5*3 - HEIGHT/2, barWidth, barHeight/5*6, 40)
        ctx.fill()

        x += (barWidth + 1)*2
      }
    }

    audio.value.play()
    renderFrame()
  };
})
</script>

<template>
  <div id="content">
    <input type="file" id="thefile" ref="file" accept="audio/*">
    <div class="grid w-full h-full">
      <div class="col-start-1 row-start-1 z-0 flex flex-col justify-center pr-[2px]">
        <div class="flex justify-between z-0">
          <div v-for="i in 23" :key="i" class="w-2 h-[12px] rounded bg-neutral-600" />
        </div>
      </div>
      <canvas id="canvas" ref="canvas" class="col-start-1 row-start-1 w-full h-full" />
    </div>
    <audio id="audio" controls ref="audio" />
  </div>
</template>