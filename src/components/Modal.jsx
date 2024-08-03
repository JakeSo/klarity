
import { Modal as FlowbiteModal } from "flowbite-react";




const modalTheme = {
  header: {
    base: "flex items-start justify-between rounded-t border-0 p-5 dark:border-transparent"

  }
}

export function Modal({openModal, onCloseModal, children, ...rest}) {
  console.log(onCloseModal);

  return (
      <FlowbiteModal className="bg-gray-950 slide-in " show={openModal} onClose={() => onCloseModal(false)} theme={modalTheme} popup {...rest}>
        <FlowbiteModal.Header className="bg-black " />
        <FlowbiteModal.Body className="bg-black ">
          {children}
        </FlowbiteModal.Body>
      </FlowbiteModal>
  );
}
