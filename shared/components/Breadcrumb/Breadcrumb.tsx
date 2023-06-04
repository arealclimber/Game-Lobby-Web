import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import BreadcrumbItem, { BreadcrumbItemProps } from "./BreadcrumbItem";

interface BreadcrumbProps {
  separator?: string;
  className?: string;
  children: ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> & {
  Item: React.ComponentType<BreadcrumbItemProps>;
} = ({ children, separator = ">", className }) => {
  const rootClass = cn(`flex space-x-2`, className);
  const childrenRender = React.Children.map(children, (child, index) => (
    <>
      {child}
      {index < React.Children.count(children) - 1 && (
        <span className="text-white">{separator}</span>
      )}
    </>
  ));

  return (
    <nav className={rootClass} aria-label="breadcrumb">
      {childrenRender}
    </nav>
  );
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
