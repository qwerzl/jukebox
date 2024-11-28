<template>
  <ion-page class="h-screen w-screen bg-neutral-400 font-sans flex flex-col">
    <ion-header class="shadow-none p-2">
      <div class="border font-bold">
        <div class="flex mt-12 font-grotesk items-center justify-start">
          <Icon name="material-symbols:arrow-back-ios-new" size="1.5em" class="text-black" @click="router.navigate('/', 'back')" />
          <div class="text-2xl text-black ml-1">
            Friends
          </div>
        </div>
      </div>
    </ion-header>
    <ion-content>
      <div class="px-2">
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20 active:bg-[#00000020]" @click="router.navigate('/social-qwerzl', 'forward')">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/qwerzl.jpg" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  qwerzl
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Last seen 2 hours ago
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <Icon name="material-symbols:chevron-forward" class="text-black" />
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/lzz.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  .
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Last seen 4 hours ago
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <Icon name="material-symbols:chevron-forward" class="text-black" />
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/sjt.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Robin
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Online
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <Icon name="material-symbols:chevron-forward" class="text-black" />
            </div>
          </div>
        </div>
        <div class="mt-6 text-black text-sm ml-1">
          Recommended Friends
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/colin.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Colin
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  You both listen to: Billie Eilish
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <Icon name="material-symbols:chevron-forward" class="text-black" />
            </div>
          </div>
        </div>
      </div>
    </ion-content>
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