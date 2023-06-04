import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";

export interface BreadcrumbItemProps {
  text: string;
  href: string;
  className?: string;
}

const BreadcrumbItem = ({ text, href, className }: BreadcrumbItemProps) => {
  const router = useRouter();
  const isActive = href === router.pathname;
  const baseClass = `text-base text-white`;
  const activeClass = !isActive && `hover:text-gray-500`;
  const itemClass = cn(baseClass, activeClass, className);

  return href ? (
    <Link href={href} className={itemClass}>
      {text}
    </Link>
  ) : (
    <span className={itemClass}>{text}</span>
  );
};

export default BreadcrumbItem;
