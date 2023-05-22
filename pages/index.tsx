import { GetStaticProps } from "next"

import Button from "@/shared/components/Button"
import useNicknameValidation from "@/shared/hooks/useNicknameValidation"
import { useEffect, useState } from "react"
import ModalManager from "@/shared/components/Modal/ModalManager"
import { MyModal } from "@/shared/components/Modal"

export default function Home() {
  const { showModal, hasNickname, handleDismissModal, handleNicknameSubmit } =
    useNicknameValidation()

  const [modalContent, setModalContent] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  )

  const createModal = () => {
    ModalManager.show(
      MyModal,
      {
        modalContent,
      },
      {
        keepMounted: true,
      }
    ).then((payload) => {
      // console.log(payload);
    })
  }

  return (
    <>
      <h1>遊戲大廳！</h1>
      <Button></Button>
      {showModal && createModal()}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
