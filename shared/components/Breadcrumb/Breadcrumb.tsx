import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import BreadcrumbItem, { BreadcrumbItemProps } from "./BreadcrumbItem";

export interface BreadcrumbProps {
  items: BreadcrumbItemProps[];
  separator?: string;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className,
  separator,
}) => {
  const rootClass = cn(`flex space-x-2`, className);
  const router = useRouter();

  return (
    <nav className={rootClass}>
      {items.map((item, index) => {
        const isLastItem = index === items.length - 1;
        const isActive = item.href === router.pathname || isLastItem;
        return (
          <Fragment key={index}>
            <BreadcrumbItem {...item} isActive={isActive} />
            {!isLastItem && (
              <span className="text-white">{separator ? separator : `>`}</span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
