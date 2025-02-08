import type { MetaFunction } from "@remix-run/node";
import Home from "../components/Home";
export const meta: MetaFunction = () => {
  return [
    { title: "It's all about Babar Javaid" },
    { name: "description", content: "Babar Javaid" },
  ];
};

export default function Index() {
  return (
    <Home />
  );
}
