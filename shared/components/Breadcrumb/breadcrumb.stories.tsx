import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem, { BreadcrumbItemProps } from "./BreadcrumbItem";

const meta: Meta<typeof Breadcrumb> = {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
  args: {
    separator: "/",
    children: "HOME",
  },
  argTypes: {
    separator: {
      control: { type: "text" },
    },
    // children: {
    //   control: { type: "ReactNode" },
    // },
    className: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Playground: Story = {
  render: (args) => <Breadcrumb {...args}>{args.children}</Breadcrumb>,
};

Playground.args = {
  separator: "/",
  children: (
    <>
      <Breadcrumb.Item text="Home" href="/" />
      <Breadcrumb.Item text="Lobby" href="/lobby" />
      <Breadcrumb.Item text="UNO" href="/user/profile" />
    </>
  ),
};

// // export const Playground: Story = (args) => (
// //   <Breadcrumb {...args}>
// //     <Breadcrumb.Item text="Home" href="/" />
// //     <Breadcrumb.Item text="Lobby" href="/lobby" />
// //     <Breadcrumb.Item text="UNO" href="/user/profile" />
// //   </Breadcrumb>
// // );

// // export const AnotherBreadcrumb: Story = (args) => (
// //   <Breadcrumb {...args}>
// //     <Breadcrumb.Item text="Dashboard" href="/" />
// //     <Breadcrumb.Item text="Settings" href="/settings" />
// //     <Breadcrumb.Item text="User Profile" href="/user/profile" />
// //   </Breadcrumb>
// // );

// Info: According to doc ``
// export default {
//   title: "Components/Breadcrumb",
//   component: Breadcrumb,
// };

// const Template: React.FC<BreadcrumbItemProps> = (args) => (
//   <Breadcrumb {...args}>{args.children}</Breadcrumb>
// );

// export const Default = Template.bind({});
// Default.args = {
//   children: (
//     <>
//       <Breadcrumb.Item text="Home" href="/" />
//       <Breadcrumb.Item text="Library" href="/library" />
//       <Breadcrumb.Item text="Data" href="/data" />
//     </>
//   ),
//   separator: ">",
// };

// export const CustomSeparator = Template.bind({});
// CustomSeparator.args = {
//   children: (
//     <>
//       <Breadcrumb.Item text="Home" href="/" />
//       <Breadcrumb.Item text="Library" href="/library" />
//       <Breadcrumb.Item text="Data" href="/data" />
//     </>
//   ),
//   separator: "/",
// };

// // BreadcrumbItem story
// export const Item = (args) => <BreadcrumbItem {...args} />;
// Item.args = {
//   text: "Home",
//   href: "/",
// };
