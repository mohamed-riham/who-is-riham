// High-tech synthesized cybernetic audio engine using Web Audio API
// Runs completely client-side without downloading heavy audio files

let audioCtx: AudioContext | null = null;
let isMuted = true; // Default to muted to follow browser autoplay policies

export function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    // Standard AudioContext initialization
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function setMute(muted: boolean) {
  isMuted = muted;
  if (!muted) {
    getAudioContext();
  }
}

export function getMuteState() {
  return isMuted;
}

// 1. Sleek, clean tick/click sound on hovering links
export function playHoverTick() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(1400, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(1800, ctx.currentTime + 0.04);

  gain.gain.setValueAtTime(0.02, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.04);
}

// 2. Futuristic cyber bleep on button click
export function playCyberClick() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();

  osc1.type = 'square';
  osc1.frequency.setValueAtTime(880, ctx.currentTime);
  osc1.frequency.setValueAtTime(1320, ctx.currentTime + 0.03);

  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(440, ctx.currentTime);
  osc2.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.08);

  gain.gain.setValueAtTime(0.04, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

  osc1.connect(gain);
  osc2.connect(gain);
  gain.connect(ctx.destination);

  osc1.start();
  osc2.start();
  osc1.stop(ctx.currentTime + 0.1);
  osc2.stop(ctx.currentTime + 0.1);
}

// 3. Cosmic power-up hum on switching panels
export function playWormholeSwoosh() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(110, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.25);

  filter.type = 'lowpass';
  filter.Q.setValueAtTime(5, ctx.currentTime);
  filter.frequency.setValueAtTime(200, ctx.currentTime);
  filter.frequency.exponentialRampToValueAtTime(1500, ctx.currentTime + 0.25);

  gain.gain.setValueAtTime(0.03, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.28);
}

// 4. Success tone on terminal or input validation
export function playSuccessChime() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
  const duration = 0.08;

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.04);

    gain.gain.setValueAtTime(0.02, ctx.currentTime + idx * 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.04 + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + idx * 0.04);
    osc.stop(ctx.currentTime + idx * 0.04 + duration);
  });
}
