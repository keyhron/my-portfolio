import Label from "@/components/atoms/Label";
import Navbar from "@/components/molecules/Navbar";
import Footer from "@/components/molecules/Footer";
import CardItem from "@/components/molecules/CardItem";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <Navbar />

      <div className="h-full px-4 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
        <Label>My projects</Label>
        <p className="text-right text-slate-800 dark:text-slate-200 mt-2 text-sm">
          I have a total of {projects.length} projects
        </p>

        <CardItem items={projects} />

        <Footer />
      </div>
    </>
  );
}

