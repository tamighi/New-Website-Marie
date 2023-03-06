import React from "react";

export const SuspenseWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <React.Suspense fallback={<div>Loading ...</div>}>
      {children}
    </React.Suspense>
  );
};
