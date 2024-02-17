import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceAlert } from "@/components/Alert";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />

      <main className="container">
        <ServiceAlert />
        <section className="flex justify-center w-full"></section>
      </main>
    </>
  );
}
