//React
import { Fragment } from "react";

//Icons
import { Dialog, Transition } from "@headlessui/react";

import Slider from "./Slider";

const Gallery = ({ open, setOpen, gallery }) => {
 return (
  <Transition.Root show={open} as={Fragment}>
   <Dialog as="div" className="relative z-10" onClose={setOpen}>
    <Transition.Child
     as={Fragment}
     enter="ease-out duration-300"
     enterFrom="opacity-0"
     enterTo="opacity-100"
     leave="ease-in duration-200"
     leaveFrom="opacity-100"
     leaveTo="opacity-0"
    >
     <div className="fixed inset-0 bg-[#00000073] transition-opacity" />
    </Transition.Child>
    <div className="fixed inset-0 z-10 ">
     <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
      <Transition.Child
       as={Fragment}
       enter="ease-out duration-300"
       enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
       enterTo="opacity-100 translate-y-0 sm:scale-100"
       leave="ease-in duration-200"
       leaveFrom="opacity-100 translate-y-0 sm:scale-100"
       leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
       <Dialog.Panel className=" w-[400px] sm:min-w-[600px] lg:min-w-[960px] min-h-[600px] relative transform  rounded-lg   text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
        <Slider gallery={gallery} setOpen={setOpen} />
       </Dialog.Panel>
      </Transition.Child>
     </div>
    </div>
   </Dialog>
  </Transition.Root>
 );
};

export default Gallery;
