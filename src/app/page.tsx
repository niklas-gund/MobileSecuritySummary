import Link from "next/link";

const pages = [
  {
    path: "/lectures/01_motivation",
    name: "Motivation",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <h1>Mobile Security 2024/2025</h1>
      <h2>Lectures</h2>
      <div className="flex flex-wrap gap-2 mx-auto">
        {pages.map((p) => (
          <Link
            href={p.path}
            className="bg-background-500 w-48 rounded flex items-center justify-center h-12 border-2 border-background-500 hover:border-accent"
            key={p.path}
          >
            {p.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
