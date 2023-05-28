import Sidebar from "@/shared/components/Sidebar";
import Footer from "@/shared/components/Footer";
import Breadcrumb, { BreadcrumbItem } from "@/shared/components/Breadcrumb";

export default function Layout({ children }: { children: React.ReactNode }) {
  const bread: BreadcrumbItem[] = [
    {
      text: "首頁",
      href: "/",
    },
    {
      text: "遊戲大廳",
      href: "",
    },
    {
      text: "房間列表",
      href: "",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Breadcrumb
        linkClassName="text-blue-500 hover:text-green-500"
        arrowClassName="bg-red-500"
        items={bread}
      />
      <Sidebar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
