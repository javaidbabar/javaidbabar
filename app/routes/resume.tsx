import Resume from "@/components/Resume";
import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [
    { title: "It's all about Babar Javaid" },
    { name: "description", content: "Babar Javaid" }
  ];
};

export default function ResumePage() {
  return (
    <div className="container py-8">
      <Resume />
    </div>
  );
}
