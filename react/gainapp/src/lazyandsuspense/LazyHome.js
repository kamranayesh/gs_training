import { lazy, Suspense } from "react";
// import ErrorBoundry from "./ErrorBoundry";

const RenderLoading = () => <div>Loading...</div>;
const LazyComponent = lazy(() => import("./LazyComponent"));
const LazyHome = () => {
  return (
    <div>
      <h1> Home Page</h1>
      <Suspense fallback={RenderLoading()}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};
export default LazyHome;
