import Sidebar from "@/shared/components/Sidebar";
import Footer from "@/shared/components/Footer";
import Breadcrumb from "@/shared/components/Breadcrumb";
import { BreadcrumbItemProps } from "@/shared/components/Breadcrumb/BreadcrumbItem";

export default function Layout({ children }: { children: React.ReactNode }) {
  const bread: BreadcrumbItemProps[] = [
    {
      text: "首頁",
      href: "/",
    },
    {
      text: "遊戲大廳",
      href: "/game",
    },
    {
      text: "房間列表",
      href: "",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Breadcrumb items={bread} />
      <Sidebar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
