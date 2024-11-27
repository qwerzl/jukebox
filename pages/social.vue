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
        <div class="mt-6 text-black text-sm ml-1">
          Scenarios
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div>
              Scenario Settings
            </div>
            <Icon name="material-symbols:chevron-forward" class="text-black" />
          </div>
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div>
              Algorithms Management
            </div>
            <Icon name="material-symbols:chevron-forward" class="text-black" />
          </div>
        </div>
        <div class="mt-6 text-black text-sm ml-1">
          Community
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div>
              Allow Friend Requests
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div>
                Yes
              </div>
              <Icon name="material-symbols:chevron-forward" size="1.2em" class="text-black text-normal" />
            </div>
          </div>
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div>
              Your Status
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="w-3 h-3 rounded-full bg-green-600" />
              <div>
                Online
              </div>
              <Icon name="material-symbols:chevron-forward" size="1.2em" class="text-black text-normal" />
            </div>
          </div>
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div>
              Notification Settings
            </div>
            <Icon name="material-symbols:chevron-forward" class="text-black" />
          </div>
        </div>
        <div class="mt-6 text-black text-sm ml-1">
          Application
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div>
              Theme
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div>
                Automatic
              </div>
              <Icon name="material-symbols:chevron-forward" size="1.2em" class="text-black text-normal" />
            </div>
          </div>
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div>
              Auto Play Music
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div>
                Yes
              </div>
              <Icon name="material-symbols:chevron-forward" size="1.2em" class="text-black text-normal" />
            </div>
          </div>
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div>
              Last.fm Settings
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div>
                Not Connected
              </div>
              <Icon name="material-symbols:chevron-forward" size="1.2em" class="text-black text-normal" />
            </div>
          </div>
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div>
              Check Updates
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <Icon name="material-symbols:chevron-forward" size="1.2em" class="text-black text-normal" />
            </div>
          </div>
        </div>
        <div class="mt-6 text-black text-sm ml-1">
          Privacy
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div>
              Send Anonymous Statistics
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div>
                Yes
              </div>
              <Icon name="material-symbols:chevron-forward" size="1.2em" class="text-black text-normal" />
            </div>
          </div>
          <div class="h-10 flex items-center justify-between px-2 py-2">
            <div>
              Privacy Policy
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