import React from "react";

import Hero from "./Hero";

export default {
  title: "Hero",
  component: Hero,
};

const Template = (args) => <Hero />;

export const Primary = Template.bind({});
Primary.args = {};
