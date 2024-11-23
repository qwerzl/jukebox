<script lang="ts" setup>
</script>

<template>
  <div class="h-screen w-screen bg-neutral-400 font-sans flex flex-col p-2">
    <div class="h-2/3 border">
      Speaker
      <Visualizer class="w-full h-[100px]"/>
    </div>
    <div class="text-xl flex justify-between">
      <div>
        01:12
      </div>
      <div class="text-[#FFFFFF80]">
        03:14
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
              <div class="w-16 h-16 rounded-full bg-white "/>
            </div>
          </div>
          <div class="h-full w-full col-start-1 row-start-1 flex justify-end flex-col px-2 py-0.5">
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
