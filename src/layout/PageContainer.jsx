/**
 * Shared horizontal padding + max width so hero copy lines up with the nav logo.
 */
export function PageContainer({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-page px-page ${className}`.trim()}
    >
      {children}
    </div>
  );
}
