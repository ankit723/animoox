// components/products/SkeletonPlaceholder.tsx

export default function SkeletonPlaceholder() {
    return (
      <div className="animate-pulse bg-gray-300 w-full h-80 rounded-lg">
        {/* Customize placeholder skeletons here */}
        <div className="w-full h-32 bg-gray-200 rounded-md mb-4"></div>
        <div className="h-6 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
      </div>
    );
  }
  