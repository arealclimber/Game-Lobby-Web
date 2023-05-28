import { cn } from "@/lib/utils";
import Link from "next/link";

export interface BreadcrumbItem {
  text: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  linkClassName?: string;
  textClassName?: string;
  arrowClassName?: string;
}

const Breadcrumb = ({
  items,
  className,
  linkClassName,
  textClassName,
  arrowClassName,
}: BreadcrumbProps) => {
  const rootClass = cn(
    `flex space-x-2 text-white text-base`,
    textClassName,
    className
  );
  const textClass = cn(`text-white text-base`, textClassName);

  const baseBreadcrumbClass = `hover:text-gray-500 hover:cursor-default`;
  const breadcrumbClass = cn(baseBreadcrumbClass, linkClassName);
  const arrowClass = cn(`text-white`, arrowClassName);

  const bread = items.map((item, index) => {
    const isLastItem = index === items.length - 1;

    return (
      <div className={rootClass} key={index}>
        {item.href ? (
          <Link href={item.href}>
            <p className={breadcrumbClass}>{item.text}</p>
          </Link>
        ) : (
          <span key={index} className={textClass}>
            {item.text}
          </span>
        )}
        <span className={arrowClass}>{!isLastItem ? `>` : ``}</span>
      </div>
    );
  });

  return <nav className={rootClass}>{bread}</nav>;
};

export default Breadcrumb;
