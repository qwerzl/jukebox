<template>
  <ion-page class="h-screen w-screen bg-neutral-400 font-sans flex flex-col">
    <ion-header class="shadow-none p-2">
      <div class="border font-bold">
        <div class="flex mt-12 font-grotesk items-center justify-start">
          <Icon name="material-symbols:arrow-back-ios-new" size="1.5em" class="text-black" @click="router.navigate('/settings', 'back')" />
          <div class="text-2xl text-black ml-1">
            Algorithm Settings
          </div>
        </div>
      </div>
    </ion-header>
    <ion-content>
      <div class="px-2">
        <div class="w-full flex justify-between mt-6 text-sm text-black items-center mx-1">
          <div>
            Scenarios
          </div>
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div class="flex items-center space-x-1">
              <div class="rounded text-sm bg-neutral-5/50 px-1">
                Home
              </div>
              <Icon name="material-symbols:arrow-right-alt" />
              <div>
                Use
              </div>
              <div class="rounded text-sm bg-neutral-5/50 px-1">
                Ambient
              </div>
              <div>
                to play from
              </div>
              <div class="rounded text-sm bg-neutral-5/50 px-1">
                Endel
              </div>
            </div>
            <Icon name="material-symbols:chevron-forward" class="text-black" />
          </div>
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div class="flex items-center space-x-1">
              <div class="rounded text-sm bg-neutral-5/50 px-1">
                Driving
              </div>
              <Icon name="material-symbols:arrow-right-alt" />
              <div>
                Use
              </div>
              <div class="rounded text-sm bg-neutral-5/50 px-1">
                Get Up!
              </div>
              <div>
                to play from
              </div>
              <div class="rounded text-sm bg-neutral-5/50 px-1">
                Spotify
              </div>
            </div>
            <Icon name="material-symbols:chevron-forward" class="text-black" />
          </div>
          <div class="h-6 flex items-center justify-center px-2 py-2">
            <Icon name="material-symbols:expand-more" class="text-black" />
          </div>
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20 transition ease-in-out delay-150 duration-300">
          <div class="h-10 flex items-center justify-between px-2 pt-2">
            <div>
              Presets you might like
            </div>
          </div>
          <div class="h-15 flex items-center justify-between px-2 py-2">
            <div class="items-center flex space-x-2">
              <img src="/jukebox.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="font-bold">
                  Jukebox Default
                </div>
                <div class="text-sm">
                  by Jukebox Team
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                GET
              </div>
            </div>
          </div>
          <div class="h-15 flex items-center justify-between px-2 py-2">
            <div class="items-center flex space-x-2">
              <img src="/adhd.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="font-bold">
                  ADHD Special
                </div>
                <div class="text-sm">
                  by qwerzl
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                GET
              </div>
            </div>
          </div>
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div>
              Get more in Marketplace
            </div>
            <Icon name="material-symbols:chevron-forward" class="text-black" />
          </div>
        </div>
        <div class="mt-6 text-black text-sm ml-1">
          Algorithm Management
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-15 flex items-center justify-between px-2 py-2">
            <div class="items-center flex space-x-2">
              <img src="/getup.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="font-bold">
                  Get Up!
                </div>
                <div class="text-sm">
                  by Jukebox Team
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <Icon name="material-symbols:more-horiz" size="1.5em"  />
            </div>
          </div>
          <div class="h-15 flex items-center justify-between px-2 py-2">
            <div class="items-center flex space-x-2">
              <img src="/calmdown.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="font-bold">
                  Calm Down
                </div>
                <div class="text-sm">
                  by Jukebox Team
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <Icon name="material-symbols:more-horiz" size="1.5em"  />
            </div>
          </div>
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div>
              More (63 Total)
            </div>
            <Icon name="material-symbols:chevron-forward" class="text-black" />
          </div>
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20 active:bg-[#00000020]">
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div @click="router.navigate('/marketplace', 'forward', 'replace')">
              Get more in Marketplace
            </div>
            <Icon name="material-symbols:chevron-forward" class="text-black" />
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