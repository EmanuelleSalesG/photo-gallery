"user client"
import { Photolist } from "@/data/Photolist";


export default function Home() {
  return (
    <div className="">
      <h1 className="text-center font-thin text-5xl py-10">Gallery</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            Photolist.map(item => (
              <div>...</div>
            ))
          }
      </section>
    </div>
  );
}
