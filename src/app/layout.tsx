import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mobile Security",
  description: "Summary by Niklas Gund",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-white min-h-screen flex flex-col">
        <div className="container ">{children}</div>
        <footer className="mt-auto bg-black bg-opacity-20">
          <div className="container  flex gap-4 my-2 items-center justify-center">
            <div>Summary by Niklas Gund</div>
            <div>
              Lecture by{" "}
              <a
                href="https://cispa.de/en"
                target="_blank"
                rel="noopener noreferrer"
                className="underline cursor-"
              >
                CISPA
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
