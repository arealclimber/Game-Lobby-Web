import React from "react";
import { render, screen } from "@testing-library/react";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";

describe("Breadcrumb", () => {
  it("renders breadcrumbs correctly", () => {
    const items: BreadcrumbItem[] = [
      { text: "Home", href: "/" },
      { text: "Blog", href: "/blog" },
      { text: "Article", href: "/blog/article" },
    ];

    render(<Breadcrumb items={items} />);

    items.forEach((item) => {
      const element = screen.getByText(item.text);
      expect(element).toBeInTheDocument();
      if (item.href) {
        expect(element).toHaveAttribute("href", item.href);
      }
    });
  });
});
