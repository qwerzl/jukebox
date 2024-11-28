<template>
  <ion-page class="h-screen w-screen bg-neutral-400 font-sans flex flex-col">
    <ion-header class="shadow-none p-2">
      <div class="border font-bold">
        <div class="flex mt-12 font-grotesk items-center justify-start">
          <Icon name="material-symbols:arrow-back-ios-new" size="1.5em" class="text-black" @click="router.navigate('/', 'back', 'replace')" />
          <div class="text-2xl text-black ml-1">
            Marketplace
          </div>
        </div>
      </div>
    </ion-header>
    <ion-content>
      <div class="mt-6 text-black text-sm ml-3 mb-2">
        Featured
      </div>
      <div class="embla mt-2" ref="emblaRef">
        <div class="embla__container">
          <div class="embla__slide">              
            <div className="embla__slide__number">
              <div class="grid rounded overflow-hidden font-sans">
                <img src="/adhd-cover.jpg" class="rounded col-start-1 row-start-1 h-full w-full aspect-[16/9]">
                <div class="col-start-1 row-start-1 w-full h-full flex justify-end flex-col">
                  <div class="w-full h-13 backdrop-blur border-t shadow flex items-center flex-row justify-between px-2">
                    <div class="flex items-center space-x-2">
                      <img src="/adhd.png" class="h-10 w-10 rounded border bg-white">
                      <div class="flex flex-col">
                        <div class="text-sm">
                          ADHD Special
                        </div>
                        <div class="text-[0.6rem] text-black/40">
                          Preset | 4.4/5
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-row space-x-1 items-center text-sm">
                      <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                        GET
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="embla__slide">              
            <div className="embla__slide__number">
              <div class="grid rounded overflow-hidden font-sans">
                <img src="/calm.jpg" class="rounded col-start-1 row-start-1 h-full w-full aspect-[16/9]">
                <div class="col-start-1 row-start-1 w-full h-full flex justify-end flex-col">
                  <div class="w-full h-13 backdrop-blur border-t shadow flex items-center flex-row justify-between px-2">
                    <div class="flex items-center space-x-2">
                      <img src="/calm.png" class="h-10 w-10 rounded">
                      <div class="flex flex-col text-white">
                        <div class="text-sm">
                          Calm Down
                        </div>
                        <div class="text-[0.6rem] text-white/40">
                          Algorithm | 4.8/5
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-row space-x-1 items-center text-sm">
                      <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                        GET
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="embla__slide">              
            <div className="embla__slide__number">
              <div class="grid rounded overflow-hidden font-sans">
                <img src="/dre-cover.jpg" class="rounded col-start-1 row-start-1 h-full w-full object-cover aspect-[16/9]">
                <div class="col-start-1 row-start-1 w-full h-full flex justify-end flex-col">
                  <div class="w-full h-13 backdrop-blur border-t shadow flex items-center flex-row justify-between px-2">
                    <div class="flex items-center space-x-2">
                      <img src="/dre.jpg" class="h-10 w-10 rounded">
                      <div class="flex flex-col text-white">
                        <div class="text-sm">
                          Dre's Secret Sauce
                        </div>
                        <div class="text-[0.6rem] text-white/40">
                          Preset | 5/5
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-row space-x-1 items-center text-sm">
                      <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                        GET
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-2">
        <div class="mt-6 text-black text-sm ml-1">
          Most Popular Last Week
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20" @click="router.navigate('/settings-scenario', 'forward')">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/walkwithbeats.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Walk with the Beats
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Algorithm | 4.9/5
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                GET
              </div>
            </div>
          </div>
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/spotify.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Spotify Style Recommendation
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Algorithm | 4.3/5
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                GET
              </div>
            </div>
          </div>
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/mouse.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Tom's Algorithm Experiment #3
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Algorithm | 4.6/5
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
              See the full ranking
            </div>
            <Icon name="material-symbols:chevron-forward" class="text-black" />
          </div>
        </div>
        <div class="mt-6 text-black text-sm ml-1">
          Created by Artists
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/dre.jpg" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Dre's Secret Sauce
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Preset | 5/5
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                GET
              </div>
            </div>
          </div>
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/billie.jpg" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Billie Eilish: Stay at Home Mode
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Algorithm | 5/5
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                GET
              </div>
            </div>
          </div>
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/weeknd.jpg" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Weeknd's Weekends
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Preset | 5/5
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                GET
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 text-black text-sm ml-1">
          By Jukebox Team
        </div>
        <div class="rounded-lg bg-[#00000010] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20">
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/walkwithbeats.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Walk with the Beats
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Algorithm | 4.9/5
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                GET
              </div>
            </div>
          </div>
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/recharge.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Recharge
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Algorithm | 4.2/5
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                GET
              </div>
            </div>
          </div>
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/favourite.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Your Favourite
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Algorithm | 4.7/5
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                GET
              </div>
            </div>
          </div>
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/popular.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Most Popular
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Algorithm | 4.5/5
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                GET
              </div>
            </div>
          </div>
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/pickup.png" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Pick Up Your Old Songs 
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Algorithm | 4.5/5
                </div>
              </div>
            </div>
            <div class="flex flex-row space-x-1 items-center text-sm">
              <div class="bg-blue-6 rounded-full px-2 text-white font-sans text-xs py-0.5">
                GET
              </div>
            </div>
          </div>
          <div class="h-15 flex items-center justify-between px-2 py-2 font-sans">
            <div class="items-center flex space-x-2">
              <img src="/billboard.webp" class="h-10 w-10 rounded border border-b-coolGray bg-white">
              <div class="flex flex-col">
                <div class="text-sm font-medium">
                  Billboard Hot 100
                </div>
                <div class="text-black/40 text-[0.6rem]">
                  Algorithm | 4.5/5
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
              See more by Jukebox Team
            </div>
            <Icon name="material-symbols:chevron-forward" class="text-black" />
          </div>
        </div>
        <div class="mt-6 text-black text-sm ml-1">
          Categories
        </div>
        <div class="rounded-lg bg-[#00000030] w-full grid font-grotesk divide-y-2 grid-cols-1 mt-1 divide-black/20 h-60 animate-pulse"/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import Autoplay from 'embla-carousel-autoplay'
import emblaCarouselVue from 'embla-carousel-vue'

const router = useIonRouter()

const [emblaRef] = emblaCarouselVue({loop: true}, [Autoplay({ playOnInit: false, delay: 300 })]) 
</script>

<style>
ion-content {
  --background: #a3a3a3;
}
.embla {
  max-width: 48rem;
  margin: auto;
  --slide-height: 10rem;
  --slide-spacing: 1rem;
  --slide-size: 70%;
}
.embla__viewport {
  overflow: hidden;
}
.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
}
.embla__slide {
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
}
.embla__slide__number {
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  border-radius: 1.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--slide-height);
  user-select: none;
}
.embla__controls {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 1.8rem;
}
.embla__buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
  align-items: center;
}
.embla__button {
  -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  width: 3.6rem;
  height: 3.6rem;
  z-index: 1;
  border-radius: 50%;
  color: var(--text-body);
  display: flex;
  align-items: center;
  justify-content: center;
}
.embla__button:disabled {
  color: var(--detail-high-contrast);
}
.embla__button__svg {
  width: 35%;
  height: 35%;
}
.embla__play {
  -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  border-radius: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
  color: var(--text-body);
  font-weight: 700;
  font-size: 1.4rem;
  padding: 0 2.4rem;
  min-width: 8.4rem;
}
.embla__progress {
  border-radius: 1.8rem;
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  background-color: var(--background-site);
  position: relative;
  height: 0.6rem;
  justify-self: flex-end;
  align-self: center;
  width: 13rem;
  max-width: 90%;
  overflow: hidden;
}
.embla__progress__bar {
  background-color: var(--text-body);
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: -100%;
}
.embla__controls {
  grid-template-columns: auto 1fr auto;
}
.embla__progress {
  justify-self: center;
  transition: opacity 0.3s ease-in-out;
  width: 8rem;
}
.embla__progress--hidden {
  opacity: 0;
}
.embla__progress__bar {
  animation-name: autoplay-progress;
  animation-timing-function: linear;
  animation-iteration-count: 1;
}
.embla__progress--hidden .embla__progress__bar {
  animation-play-state: paused;
}
@keyframes autoplay-progress {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}


</style>