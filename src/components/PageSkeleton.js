import "./PageSkeleton.css";

const PageSkeleton = () => (
  <div className="page-skeleton">
    <div className="skeleton-hero" />
    <div className="skeleton-content">
      <div className="skeleton-line wide" />
      <div className="skeleton-line medium" />
      <div className="skeleton-line narrow" />
      <div className="skeleton-line wide" />
      <div className="skeleton-line medium" />
    </div>
  </div>
);

export default PageSkeleton;
