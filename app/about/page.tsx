import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="container flex flex-col gap-5 px-6 md:px-6 pb-24 md:pb-24 max-h-screen max-w-full mx-auto text-base point">
      <Navbar/>
      <section className="flex flex-col sm:flex-row items-center justify-center w-full h-screen gap-2 mt-6">
      </section>   
    </main>
  );
}
