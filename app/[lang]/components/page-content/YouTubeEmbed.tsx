import { Suspense } from 'react'
import extractYouTubeID from '@/lib/utils/youtubeIdExtractor'

interface IYouTubeEmbedProps {
  youtubeSourceId: string
}

const YouTubeEmbed = ({ youtubeSourceId }: IYouTubeEmbedProps) => {
  return (
    <div className='flex flex-col items-center justify-between'>
      <Suspense fallback={<IframeLoadingState />}>
        <div className='overflow-hidden rounded-lg  sm:shadow-xl px-4 sm:py-4'>
          <iframe
            width='320'
            height='210'
            title='Youtube Video Player'
            src={`https://www.youtube.com/embed/${extractYouTubeID(youtubeSourceId)}`}
            allowFullScreen={true}
            className='rounded-lg'
          />
        </div>
      </Suspense>
    </div>
  )
}

export default YouTubeEmbed

function IframeLoadingState() {
  return (
    <div className='flex h-[315px] w-[560px] animate-pulse items-center justify-center bg-stone-800'>
      <p>Loading video...</p>
    </div>
  )
}
