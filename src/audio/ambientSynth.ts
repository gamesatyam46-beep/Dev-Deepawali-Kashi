// Web Audio API based ambient spiritual soundscape generator for Dev Deepawali
// Generates gentle tanpura drone, resonant temple bells, and peaceful river ambience

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private droneOscs: OscillatorNode[] = [];
  private bellTimer: number | null = null;

  public init() {
    if (this.ctx) return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  public toggle(): boolean {
    if (!this.ctx) {
      this.init();
    }
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      this.isPlaying = false;
    } else {
      this.start();
      this.isPlaying = true;
    }
    return this.isPlaying;
  }

  public getPlayingState(): boolean {
    return this.isPlaying;
  }

  private start() {
    if (!this.ctx || !this.masterGain) return;

    // Harmonic Tanpura Drone in C# (138.59 Hz) & G# (207.65 Hz)
    const baseFreq = 138.59;
    const freqs = [baseFreq * 0.5, baseFreq, baseFreq * 1.5, baseFreq * 2.01, baseFreq * 3];

    this.droneOscs = freqs.map((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);

      // Low pass filter for warm spiritual depth
      const filter = this.ctx!.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450 + idx * 80, this.ctx!.currentTime);

      const vol = (0.04 / (idx + 1));
      gain.gain.setValueAtTime(vol, this.ctx!.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);

      osc.start();
      return osc;
    });

    // Play periodic soft temple bell chime
    this.playTempleBell();
    this.bellTimer = window.setInterval(() => {
      if (this.isPlaying) {
        this.playTempleBell();
      }
    }, 7500);
  }

  private stop() {
    this.droneOscs.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    this.droneOscs = [];

    if (this.bellTimer) {
      clearInterval(this.bellTimer);
      this.bellTimer = null;
    }
  }

  public playTempleBell(freq: number = 880) {
    if (!this.ctx || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const bellOsc = this.ctx.createOscillator();
      const bellGain = this.ctx.createGain();

      bellOsc.type = 'sine';
      // Bell overtone frequency
      bellOsc.frequency.setValueAtTime(freq, now);
      bellOsc.frequency.exponentialRampToValueAtTime(freq * 0.99, now + 3);

      bellGain.gain.setValueAtTime(0.08, now);
      bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

      bellOsc.connect(bellGain);
      bellGain.connect(this.masterGain);

      bellOsc.start(now);
      bellOsc.stop(now + 3.3);
    } catch (e) {}
  }
}

export const ambientSound = new AmbientSoundEngine();
