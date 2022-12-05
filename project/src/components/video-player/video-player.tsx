import { useEffect, useRef, useState } from 'react';
import { Film } from '../../types/types';

export type VideoPlayerProps = {
  filmCard: Film;
  isMuted: boolean;
  isPlaying: boolean;
}

export default function VideoPlayer({ filmCard, isMuted, isPlaying }: VideoPlayerProps): JSX.Element {
  const [, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => {
      if (isVideoPlayerMounted) {
        setIsLoading(false);
      }
    });

    if (isPlaying) {
      setTimeout(() => {
        if (videoRef.current !== null) {
          videoRef.current.play();
        }

      }, 1000);
      return;
    }

    videoRef.current.load();

    return () => {
      isVideoPlayerMounted = false;
    };
  }, [isPlaying]);

  return (
    <video
      src={filmCard.previewVideoLink}
      poster={filmCard.previewImage}
      ref={videoRef}
      muted={isMuted}
    />
  );
}

