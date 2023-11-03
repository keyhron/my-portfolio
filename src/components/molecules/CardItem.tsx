"use client";
import { useState } from "react";
import Image from "next/image";
import { ICertificates, IProject } from "@/interfaces";
import ModalItem, { IModalItem } from "./ModalItem";

interface ICardItem {
  items: IProject[] | ICertificates[];
}

const CardItem = ({ items }: ICardItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState<IProject | ICertificates>();

  return (
    <>
      <ModalItem
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        item={itemSelected as IModalItem}
      />
      <section className="grid sm:grid-cols-2 md:flex-row w-full my-6 xl:my-12 gap-6">
        {items.map((item) => (
          <div
            key={item.image}
            onClick={() => {
              setIsOpen(true);
              setItemSelected(item);
            }}
            className={`group rounded-3xl w-full h-20 lg:h-24 md:h-32 xl:h-32 duration-300 ease-in transition-all cursor-pointer shadow-lg relative grid items-center justify-center`}
          >
            <div
              /* */
              className={`bg-white group-hover:bg-black shadow-lg duration-300 ease-in transition-all py-2 px-8 flex items-center justify-center rounded-lg z-10`}
            >
              <h1 className="w-full text-md lg:text-lg tracking-wide text-center flex items-center justify-center text-black group-hover:text-white">
                {item.name}
              </h1>
            </div>
            <Image
              className="w-full h-full absolute object-cover rounded-3xl blur-sm group-hover:blur-0 brightness-90 group-hover:brightness-100"
              src={item.image}
              alt={`${item.name} image`}
              width={322}
              height={160}
              quality={100}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default CardItem;

