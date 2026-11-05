import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("food", "routes/food.tsx"),
  route("about", "routes/about.tsx"),
  route("faq", "routes/faq.tsx"),
  route("contact", "routes/contact.tsx"),
  route("testimonials", "routes/testimonials.tsx"),
] satisfies RouteConfig;
