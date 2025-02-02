export default function Loading() {
  return (
    <div className="max-w-screen-2xl mx-auto p-4">
      <div className="animate-pulse flex flex-col lg:flex-row gap-8">
        {/* Image skeleton */}
        <div className="w-full lg:w-1/3 bg-gray-200 rounded-lg aspect-square"></div>

        {/* Content skeleton */}
        <div className="w-full lg:w-2/3 space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="h-20 bg-gray-200 rounded w-full"></div>
          <div className="h-10 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
