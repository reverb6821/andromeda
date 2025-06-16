import { useTranslation } from 'react-i18next';
import { FC, useState } from 'react';

import { cn } from '@/lib/utils';
interface StellarViewProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  layout?: 'fixed' | 'responsive' | 'intrinsic' | 'fill';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
  caption?: string
  fallbackSrc?: string;
}

const StellarView: FC<StellarViewProps> = ({
  src,
  alt,
  width,
  height,
  layout = 'intrinsic',
  placeholder = 'empty',
  blurDataURL,
  sizes,
  className,
  imgClassName,
  loading = 'lazy',
  caption,
  fallbackSrc
}) => {
  const [isLoading, setIsLoading] = useState(placeholder === 'blur');
  const [hasError, setHasError] = useState(false)

  const { t } = useTranslation()

  const isSrcValid = !!src && typeof src === 'string' && src.trim() !== '';
  
  const handleLoad = () => setIsLoading(false);
  const handleError = () => {
    if (fallbackSrc && !hasError) {
      setHasError(true);
    }
  };

  const wrapperClass = cn(
    className,
    layout === 'responsive' && 'relative w-full',
    layout === 'intrinsic' && 'inline-block',
    layout === 'fixed' && width && height && `w-[${width}px] h-[${height}px]`,
    layout === 'fill' && 'absolute inset-0 w-full h-full'
  );

  const imgClass = cn(
    imgClassName,
    'transition duration-300 ease-out',
    layout === 'fill' ? 'w-full h-full object-cover' : '',
    isLoading && placeholder === 'blur' ? 'blur-md scale-105' : 'blur-0'
  );

  const effectiveSrc =
    isLoading && blurDataURL
      ? blurDataURL
      : !isSrcValid || hasError
        ? fallbackSrc
        : src;
    
  return(
    <figure
      className={wrapperClass}
      style={
        layout === 'responsive' && width && height
          ? { paddingTop: `${(height / width) * 100}%` }
          : undefined
      }
    >
      <img
        src={effectiveSrc}
        alt={alt ? alt : t('images.mainFallback')}
        width={layout !== 'fill' ? width : undefined}
        height={layout !== 'fill' ? height : undefined}
        sizes={sizes}
        loading={loading}
        className={imgClass}
        onLoad={handleLoad}
        onError={handleError}
      />
      {caption && <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
        {caption}
      </figcaption>}
    </figure>
  )};

export default StellarView;

// interface StellarViewProps {
//   src: string
//   alt?: string;
//   defaultImage: string;
//   className?: string;
//   loading?: 'lazy' | 'eager'
//   fetchPriority?: 'low' | 'auto' | 'high'
//   decoding?: 'sync' | 'async' | 'auto'
// }

// const StellarView: FC<StellarViewProps> = ({
//   src,
//   alt,
//   defaultImage,
//   className,
//   loading,
//   fetchPriority,
//   decoding
// }) => {
// const [imageSrc, setImageSrc] = useState<string>();
// const [loaded, setLoaded] = useState<boolean>(false);
// const [hasError, setHasError] = useState<boolean>(false);
// const { t } = useTranslation()

// useEffect(() => {
//   const img = new Image();
//   img.src = src;

//   img.onload = () => {
//     setImageSrc(src);
//     setLoaded(true);
//     setHasError(false);
//   };

//   img.onerror = () => {
//     setImageSrc(defaultImage);
//     setLoaded(true);
//     setHasError(true);
//   };
// }, [src, defaultImage]);

// const imageKey = hasError ? 'fallback' : 'main';

// const handleError = () => {
//   setHasError(true);
// };

// return (
//   <figure>
{/* {!loaded && <p>Loading...</p>}
      <img
        src={imageSrc}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
        alt={alt ? alt : t('images.mainFallback')}
        className={`${className}`}
        loading={loading ?? 'lazy'}
        fetchPriority={fetchPriority ?? 'low'}
        decoding={decoding ?? 'async'}
      />
      {hasError && <p style={{ color: 'red' }}>Image failed to load</p>} */}
//       <img
//         key={imageKey}
//         src={hasError ? defaultImage : src}
//         onError={handleError}
//         alt={alt || t('images.mainFallback')}
//         className={className}
//         loading={loading}
//         fetchPriority={fetchPriority}
//         decoding={decoding}
//         style={{ transition: 'opacity 0.3s ease' }}
//       />
//       {/* {hasError && <p style={{ color: 'red' }}>Image failed to load</p>} */}
//     </figure>
//   )
// }

// export default StellarView