# Image Fallback System Usage Guide

## Components Overview

### 1. `ImageNotAvailable` Component

Enhanced fallback component with animations and consistent design.

```tsx
import ImageNotAvailable from "@/components/ImageNotAvailable";

// Basic usage
<ImageNotAvailable />

// With custom size and settings
<ImageNotAvailable
  size="lg"
  showText={false}
  className="rounded-lg border"
/>
```

### 2. `EnhancedImage` Component

Automatic image fallback with loading states.

```tsx
import EnhancedImage from "@/components/ui/enhanced-image";

// Basic usage - automatically handles errors
<EnhancedImage
  src="/path/to/image.jpg"
  alt="Description"
  width={400}
  height={300}
  className="rounded-lg"
/>

// With custom fallback and loading
<EnhancedImage
  src="/path/to/image.jpg"
  alt="Description"
  fill
  className="object-cover"
  fallbackSize="lg"
  showLoadingSpinner={true}
  onLoadComplete={() => console.log('Image loaded')}
  onError={() => console.log('Image failed to load')}
/>
```

### 3. `EnhancedVideo` Component

Video fallback with loading states.

```tsx
import EnhancedVideo from "@/components/ui/enhanced-video";

// Basic usage
<EnhancedVideo
    src="/path/to/video.mp4"
    autoPlay
    loop
    muted
    className="w-full h-full object-cover"
    fallbackSize="lg"
/>;
```

## Integration Examples

### In Project Cards

```tsx
function ProjectCard({ project }) {
    return (
        <div className="relative aspect-video">
            {project.image.endsWith(".mp4") ? (
                <EnhancedVideo
                    src={project.image}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover rounded-lg"
                    fallbackSize="md"
                />
            ) : (
                <EnhancedImage
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                    fallbackSize="md"
                />
            )}
        </div>
    );
}
```

### In Gallery Components

```tsx
function ImageGallery({ images }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, index) => (
                <div key={index} className="aspect-square">
                    <EnhancedImage
                        src={img.url}
                        alt={img.alt}
                        fill
                        className="object-cover rounded-lg hover:scale-105 transition-transform"
                        fallbackSize="sm"
                        showLoadingSpinner={false}
                    />
                </div>
            ))}
        </div>
    );
}
```

### With Custom Loading States

```tsx
import { useImageLoader } from "@/components/ui/enhanced-image";

function CustomImageComponent() {
    const {
        isLoading,
        hasError,
        handleImageLoad,
        handleImageError,
        startLoading,
    } = useImageLoader();

    return (
        <div className="relative">
            {hasError("/path/to/image.jpg") ? (
                <ImageNotAvailable size="md" />
            ) : (
                <EnhancedImage
                    src="/path/to/image.jpg"
                    alt="Custom image"
                    fill
                    onLoadComplete={() => handleImageLoad("/path/to/image.jpg")}
                    onError={() => handleImageError("/path/to/image.jpg")}
                />
            )}
        </div>
    );
}
```

## Features

-   ✅ Automatic fallback for broken images/videos
-   ✅ Loading spinners with smooth animations
-   ✅ Consistent design system integration
-   ✅ TypeScript support with proper typing
-   ✅ Responsive design with size variants
-   ✅ Accessibility features (ARIA labels, alt text)
-   ✅ Error handling callbacks
-   ✅ Custom styling support
-   ✅ Performance optimized with Next.js Image component

## Styling

The components use your existing design system tokens:

-   `muted`, `muted-foreground` for subtle backgrounds
-   `primary`, `destructive` for accent colors
-   `border-muted-foreground` for borders
-   Consistent spacing and typography scales
