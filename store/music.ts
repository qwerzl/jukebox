import { Howl, Howler } from 'howler'
import { createRealTimeBpmProcessor, getBiquadFilter } from 'realtime-bpm-analyzer'

export const useMusicStore = defineStore('websiteStore', {
    state: () => ({
      howlInstance: undefined as undefined | Howl,
      context: undefined as undefined | AudioContext,
      analyser: undefined as undefined | AnalyserNode,
      src: undefined as undefined | MediaElementAudioSourceNode,
      description: '',
      dataArray: undefined as undefined | Uint8Array,
      realtimeAnalyzerNode: undefined as undefined | AudioWorkletNode,
      lowpass: undefined as undefined | BiquadFilterNode,
      bpm: 110,
      playing: false,
    }),
    actions: {
      async init() {
        this.howlInstance = new Howl({
          src: ['/chihiro.mp3'],
          html5: true
        })
        this.context = Howler.ctx
        this.analyser = Howler.ctx.createAnalyser()
        this.analyser.fftSize = 256
        Howler.masterGain.connect(this.analyser)
        this.realtimeAnalyzerNode = await createRealTimeBpmProcessor(Howler.ctx)
        this.lowpass = getBiquadFilter(Howler.ctx)
      },
      async play() {
        this.playing = true
        if (!this.howlInstance) {
          await this.init()
        }
        this.howlInstance?.play()
        // @ts-expect-error TS2339
        const node = this.howlInstance?._sounds[0]._node
        const sound_node = Howler.ctx.createMediaElementSource(node)
        sound_node.connect(this.analyser!)
        this.analyser!.connect(Howler.ctx.destination)        
        sound_node.connect(this.lowpass!).connect(this.realtimeAnalyzerNode!)
        sound_node.connect(Howler.ctx.destination);
        // this.realtimeAnalyzerNode!.port.onmessage = (event) => {
        //   if (event.data.message === 'BPM') {
        //     if (event.data.data.bpm[0].tempo !== 0) {
        //       this.bpm = event.data.data.bpm[0].tempo
        //     }
        //   }
        // }
      },
      pause() {
        this.howlInstance?.pause()
        this.playing = false
      },

    }
  })