import { Howl, Howler } from 'howler'

export const useMusicStore = defineStore('websiteStore', {
    state: () => ({
      howlInstance: undefined as undefined | Howl,
      context: undefined as undefined | AudioContext,
      analyser: undefined as undefined | AnalyserNode,
      src: undefined as undefined | MediaElementAudioSourceNode,
      description: '',
      dataArray: undefined as undefined | Uint8Array,
    }),
    actions: {
      init() {
        this.howlInstance = new Howl({
          src: ['/badguy.flac'],
          html5: true
        })
        this.context = Howler.ctx
        this.analyser = Howler.ctx.createAnalyser()
        this.analyser.fftSize = 256
        Howler.masterGain.connect(this.analyser)
        // this.analyser.connect(Howler.ctx.destination)
      },
      play() {
        console.log("play")
        if (!this.howlInstance) {
          this.init()
        }
        this.howlInstance?.play()
        // @ts-expect-error
        const node = this.howlInstance?._sounds[0]._node
        const sound_node = Howler.ctx.createMediaElementSource(node)
        sound_node.connect(this.analyser!)
        this.analyser!.connect(Howler.ctx.destination)
      },
      pause() {
        this.howlInstance?.pause()
      },

    }
  })