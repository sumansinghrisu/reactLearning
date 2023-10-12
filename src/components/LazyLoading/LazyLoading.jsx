import React, { Suspense } from 'react';

// This will automatically load the component when it's needed.
const LazyLoadedComponent = React.lazy(() => import('./LazyLoadedComponent'));

function LazyLoading() {
  return (
    <div>
     <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadedComponent />
      </Suspense>
    </div>
  );
}

export default LazyLoading;
