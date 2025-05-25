
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    const handleEnded = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setHasInteracted(true);

    try {
      if (isPlaying) {
        audio.pause();
      } else {
        await audio.play();
      }
    } catch (error) {
      console.log('Audio play failed:', error);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setIsMuted(!isMuted);
    audio.muted = !isMuted;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-navy-200 p-3">
      <audio
        ref={audioRef}
        src="/lovable-uploads/Intro.mp3"
        preload="metadata"
      />
      
      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-accent hover:bg-accent/90 text-white transition-colors"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="text-navy-600 hover:text-accent transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-navy-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #4F46E5 0%, #4F46E5 ${volume * 100}%, #E2E8F0 ${volume * 100}%, #E2E8F0 100%)`
            }}
          />
        </div>
      </div>

      {!hasInteracted && (
        <div className="absolute -top-12 right-0 bg-navy-900 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">
          Click to play intro music
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-navy-900"></div>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
