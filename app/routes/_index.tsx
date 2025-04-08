import Home from "@/components/home";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "It's all about Babar Javaid" }, { name: "description", content: "It's all about Babar Javaid" }];
};

export default function Index() {
  return <Home />;
}
