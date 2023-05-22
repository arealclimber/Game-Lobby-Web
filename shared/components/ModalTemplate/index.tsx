import * as React from "react"
import ModalManager, { useModal } from "../Modal/ModalManager"
import type { ModalHandler } from "../Modal/ModalManager/src/typings"

interface BaseModalProps {
  visible: boolean
  onDismiss: () => void
  onResolve: (payload: any) => void
  modalContent?: React.ReactNode | string
}

const BaseModal = ({
  visible,
  onDismiss,
  onResolve,
  modalContent,
}: BaseModalProps) => {
  return (
    <div
      style={{ visibility: visible ? "visible" : "hidden" }}
      className="fixed top-0 left-0 w-full h-full bg-[var(--dark1E)] bg-opacity-80 flex justify-center items-center"
    >
      <div className="bg-[var(--dark29)] p-5 rounded shadow-lg relative w-full max-w-lg h-auto max-h-[80vh] overflow-y-auto">
        {modalContent}
      </div>
    </div>
  )
}

export const ModalTemplate = ModalManager.create(
  (modal: BaseModalProps & ModalHandler): JSX.Element => {
    return (
      <BaseModal
        {...modal}
        visible={modal.visible}
        onDismiss={modal.keepMounted ? modal.hide : modal.remove}
        onResolve={modal.resolve}
      />
    )
  }
)
