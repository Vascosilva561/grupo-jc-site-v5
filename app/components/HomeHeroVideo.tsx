"use client";

import { useRef, useState, type ChangeEvent, type ReactNode } from "react";

type VideoSource =
  | { kind: "upload"; url: string; poster?: string }
  | { kind: "youtube"; url: string };

function youtubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const id = parsed.hostname.includes("youtu.be") ? parsed.pathname.slice(1) : parsed.searchParams.get("v") ?? parsed.pathname.split("/").filter(Boolean).pop();
    return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0` : null;
  } catch { return null; }
}

function formatTime(value: number) {
  if (!Number.isFinite(value)) return "0:00";
  return `${Math.floor(value / 60)}:${Math.floor(value % 60).toString().padStart(2, "0")}`;
}

function Icon({ children }: { children: ReactNode }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">{children}</svg>;
}

export function HomeHeroVideo({ source }: { source: VideoSource }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) await video.play(); else video.pause();
  };
  const seek = (event: ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Number(event.target.value);
    setCurrentTime(video.currentTime);
  };
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  if (!source.url) return <div className="home-v2-hero-video home-v2-hero-video--empty" role="status" aria-label="Vídeo institucional em breve"><span className="home-v2-hero-video__play" aria-hidden="true"><Icon><path d="m9.5 7 7 5-7 5V7Z" fill="currentColor" /></Icon></span><div className="home-v2-hero-video__details"><strong>Vídeo institucional</strong><span>Em breve</span></div></div>;

  if (source.kind === "youtube") {
    const embedUrl = youtubeEmbedUrl(source.url);
    if (embedUrl) return <div className="home-v2-hero-video"><iframe src={embedUrl} title="Vídeo institucional do Grupo JC" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>;
  }

  const progress = `${duration ? (currentTime / duration) * 100 : 0}%`;
  return <div className="home-v2-hero-video home-v2-hero-video--custom">
    <video ref={videoRef} playsInline preload="metadata" poster={source.kind === "upload" ? source.poster : undefined} onClick={togglePlayback} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)} onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)} onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}>
      <source src={source.url} type={source.url.endsWith(".webm") ? "video/webm" : undefined} />
      O seu navegador não suporta a reprodução de vídeo.
    </video>
    {!isPlaying && <button type="button" className="home-v2-video-play" onClick={togglePlayback} aria-label="Reproduzir vídeo"><img src="/assets/video/video-play.svg" alt="" /></button>}
    <div className="home-v2-video-controls">
      <button type="button" className="home-v2-video-controls__play" onClick={togglePlayback} aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}><img src={isPlaying ? "/assets/video/video-pause.svg" : "/assets/video/video-play.svg"} alt="" /></button>
      <span className="home-v2-video-time">{formatTime(currentTime)} <i>/</i> {formatTime(duration)}</span>
      <input aria-label="Posição do vídeo" type="range" min="0" max={duration || 0} step="0.1" value={currentTime} onChange={seek} style={{ "--progress": progress } as React.CSSProperties} />
      <button type="button" onClick={toggleMute} aria-label={isMuted ? "Activar som" : "Silenciar vídeo"}>{isMuted ? <Icon><path d="M5 10v4h3l4 3V7l-4 3H5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="m16 10 4 4m0-4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></Icon> : <Icon><path d="M5 10v4h3l4 3V7l-4 3H5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><path d="M16 10c1 .8 1.5 1.7 1.5 2.5S17 14.2 16 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></Icon>}</button>
      <button type="button" onClick={() => videoRef.current?.parentElement?.requestFullscreen()} aria-label="Ver em ecrã inteiro"><Icon><path d="M8 4H4v4m12-4h4v4M8 20H4v-4m16 0v4h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></Icon></button>
    </div>
  </div>;
}
