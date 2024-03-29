import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto h-screen flex justify-center p-4">
        <Navbar></Navbar>
        <section className="mt-20">
          {children}
        </section>
      </body>
    </html>
  );
}
