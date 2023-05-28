import { cn } from "@/lib/utils";
import Link from "next/link";

export interface BreadcrumbItemProps {
  text: string;
  href?: string;
  isActive?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  text,
  href,
  isActive,
}) => {
  const itemClass = cn(
    `text-base`,
    isActive
      ? `text-white hover:text-gray-500`
      : `text-white hover:text-gray-500`
  );

  if (href) {
    return (
      <Link href={href}>
        <p className={itemClass}>{text}</p>
      </Link>
    );
  }

  return <span className={itemClass}>{text}</span>;
};

export default BreadcrumbItem;
