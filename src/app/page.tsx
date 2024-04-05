"use client"
import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { Photolist } from "@/data/Photolist";
import { useState } from "react";


export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  function closeModal(){
    setShowModal(false);
  }

  function openModal(id: number){
    const photo = Photolist.find(item => item.id === id);

    if(photo){
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }

  return (
    <div className="">
      <h1 className="text-center font-thin text-5xl py-10">Gallery</h1>
      <section className="container max-w-5xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            Photolist.map(item => (
              <PhotoItem
              key = {item.id}
              photo = {item}
              onClick={() => openModal(item.id)}
              />
            ))}

            {
              showModal &&
              <Modal image={imageOfModal} closeModal={closeModal}/>
            }

      </section>
    </div>
  );
}
