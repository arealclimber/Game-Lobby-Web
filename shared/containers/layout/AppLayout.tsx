import Sidebar from "@/shared/components/Sidebar";
import Footer from "@/shared/components/Footer";
import Breadcrumb from "@/shared/components/Breadcrumb";
import { BreadcrumbItemProps } from "@/shared/components/Breadcrumb/BreadcrumbItem";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* <Breadcrumb items={bread} /> */}
      <Breadcrumb className="bg-gray-400">
        <Breadcrumb.Item
          className="hover:text-green-300"
          text="Test1"
          href="/test1"
        />
        <Breadcrumb.Item text="Test2" href="/test2" />
        <Breadcrumb.Item text="Login" href="/login" />
      </Breadcrumb>
      <Sidebar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
