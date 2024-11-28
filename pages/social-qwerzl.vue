<template>
  <ion-page class="h-screen w-screen bg-neutral-400 font-sans flex flex-col">
    <ion-header class="shadow-none p-2">
      <div class="border font-bold">
        <div class="flex mt-12 font-grotesk items-center justify-start">
          <Icon name="material-symbols:arrow-back-ios-new" size="1.5em" class="text-black" @click="router.navigate('/', 'back')" />
          <div class="text-2xl text-black ml-1">
            qwerzl
          </div>
        </div>
      </div>
    </ion-header>
    <ion-content>
      <div class="px-2 pt-2">
        <div class="text-sm text-black/70 text-xs w-full flex justify-end mr-6">
          This one is good 👍
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1  divide-black/20 flex-row-reverse">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans flex-row-reverse">
            <div class="items-center flex space-x-2 flex-row-reverse">
              <img src="/gnx.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="w-1" />
              <div class="flex flex-col mx-2">
                <div class="text-sm font-medium text-right">
                  wacced out murals
                </div>
                <div class="text-black/40 text-[0.6rem] text-right">
                  Kendrick Lamar - GNX
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                Listen
              </div>
            </div>
          </div>
        </div>
        <div class="-px-2 text-sm text-black/70 text-xs w-full flex justify-end mr-4">
          1 Hour Ago
        </div>
        <div class="text-sm text-black/70 text-xs w-full flex ml-2 mt-6">
          I just can't stop listening
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/albumcover.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  CHIHIRO
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Billie Eilish - HIT ME HARD AND SOFT
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-gray-4 rounded-full px-2 text-black font-sans text-xs py-0.5">
                Listened
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/albumcover.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  BIRDS OF A FEATHER
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Billie Eilish - HIT ME HARD AND SOFT
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-gray-4 rounded-full px-2 text-black font-sans text-xs py-0.5">
                Listened
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/albumcover.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  LUNCH
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Billie Eilish - HIT ME HARD AND SOFT
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-gray-4 rounded-full px-2 text-black font-sans text-xs py-0.5">
                Listened
              </div>
            </div>
          </div>
        </div>
        <div class="-px-2 text-sm text-black/70 text-xs ml-2">
          2 Days Ago
        </div>
        <div class="text-sm text-black/70 text-xs w-full flex justify-end mr-6 mt-6">
          I think these are interesting
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1  divide-black/20 flex-row-reverse">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans flex-row-reverse">
            <div class="items-center flex space-x-2 flex-row-reverse">
              <img src="/walkwithbeats.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="w-1" />
              <div class="flex flex-col mx-2">
                <div class="text-sm font-medium text-right">
                  Walk with the Beats
                </div>
                <div class="text-black/40 text-[0.6rem] text-right">
                  Algorithm | 4.9/5
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-gray-4 rounded-full px-2 text-black font-sans text-xs py-0.5">
                GOT
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1  divide-black/20 flex-row-reverse mt-1">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans flex-row-reverse">
            <div class="items-center flex space-x-2 flex-row-reverse">
              <img src="/mouse.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="w-1" />
              <div class="flex flex-col mx-2">
                <div class="text-sm font-medium text-right">
                  Tom's Algorithm Experiment #3
                </div>
                <div class="text-black/40 text-[0.6rem] text-right">
                  Algorithm | 4.6/5
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-gray-4 rounded-full px-2 text-black font-sans text-xs py-0.5">
                GOT
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1  divide-black/20 flex-row-reverse mt-1">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans flex-row-reverse">
            <div class="items-center flex space-x-2 flex-row-reverse">
              <img src="/recharge.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="w-1" />
              <div class="flex flex-col mx-2">
                <div class="text-sm font-medium text-right">
                  Recharge
                </div>
                <div class="text-black/40 text-[0.6rem] text-right">
                  Algorithm | 4.2/5
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-gray-4 rounded-full px-2 text-black font-sans text-xs py-0.5">
                GOT
              </div>
            </div>
          </div>
        </div>
        <div class="-px-2 text-sm text-black/70 text-xs w-full flex justify-end mr-4">
          7 Days Ago
        </div>
        <div class="text-sm text-black/70 text-xs w-full flex ml-2 mt-6">
          Classics!
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/2001.jpg" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Still D.R.E (feat. Snoop Dogg)
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Dr.Dre
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                Listen
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/2001.jpg" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  The Next Eposide (feat. Snoop Dogg)
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Dr.Dre
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                Listen
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
    <div class="mb-7 w-full h-15 rounded p-2">
      <div class="h-full w-full bg-black rounded-lg flex items-center justify-center shadow">
        <div class="space-x-2 flex items-center">
          <Icon name="material-symbols:arrow-upward" size="1.5em" class="text-white" />
          <div class="text-white">
            Share something new
          </div>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts" setup>
const router = useIonRouter()
</script>

<style>
ion-content {
  --background: #a3a3a3;
}
</style>