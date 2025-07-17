import React, { Suspense, lazy, useState } from 'react';

// Create a lazy image component that loads images dynamically
const createLazyImage = (imageLoader) => {
  return lazy(async () => {
    const imageModule = await imageLoader();
    return {
      default: ({ className, onClick, alt }) => (
        <img 
          src={imageModule.default} 
          className={className}
          onClick={onClick}
          alt={alt}
        />
      )
    };
  });
};

// Image loading fallback component
const ImageSkeleton = ({ className }) => (
  <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
    <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Error boundary for failed image loads
class ImageErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Image loading error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={`${this.props.className} bg-gray-100 flex items-center justify-center`}>
          <span className="text-gray-500">Failed to load image</span>
        </div>
      );
    }

    return this.props.children;
  }
}

// Updated LazyImage component that uses Suspense
const LazyImage = ({ imageData, className, onClick, alt }) => {
  const [LazyImageComponent, setLazyImageComponent] = useState(null);

  React.useEffect(() => {
    const LazyImg = createLazyImage(imageData.loader);
    setLazyImageComponent(() => LazyImg);
  }, [imageData.loader]);

  if (!LazyImageComponent) {
    return <ImageSkeleton className={className} />;
  }

  return (
    <ImageErrorBoundary className={className}>
      <Suspense fallback={<ImageSkeleton className={className} />}>
        <LazyImageComponent 
          className={className}
          onClick={onClick}
          alt={alt || `Image ${imageData.id}`}
        />
      </Suspense>
    </ImageErrorBoundary>
  );
};

export default LazyImage;
