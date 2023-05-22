import { GetStaticProps } from "next"
import { useEffect, useState } from "react"

import Button from "@/shared/components/Button"
import useNicknameValidation from "@/shared/hooks/useNicknameValidation"
import ModalManager from "@/shared/components/Modal/ModalManager"
import { MyModal } from "@/shared/components/Modal"
import { ModalTemplate } from "@/shared/components/ModalTemplate"
import Input from "@/shared/components/Input"

export default function Home() {
  const { showModal, hasNickname, handleDismissModal, handleNicknameSubmit } =
    useNicknameValidation()

  const [modalContent, setModalContent] = useState()
  const [nicknameInput, setNicknameInput] = useState("")
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState("")
  const [errorSpecialCharacter, setErrorSpecialCharacter] = useState("")
  const [count, setCount] = useState(0)
  const [nickname, setNickname] = useState("超級玩家")

  const limitCharacters = (length: number) => {
    const maxLength = 16
    const minLength = 4

    if (length < minLength)
      return setNicknameErrorMessage("請輸入至少 4 個英文字符或 2 個中文字符")
    if (length > maxLength)
      return setNicknameErrorMessage("請輸入最多 16 個英文字符或 8 個中文字符")

    setNicknameErrorMessage("")
  }

  const handleInputChange = (value: string) => {
    const length = value
      .split("")
      .map((char) => (/[^\x00-\xff]/.test(char) ? 2 : 1))
      .reduce((acc, curr) => acc + curr, 0)

    setNicknameInput(value)
    setCount(length)
    limitCharacters(length)
  }

  const handleNicknameInputKeyUp = (e: React.FormEvent<HTMLInputElement>) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{}':"\\|,.<>\/?~]/

    if (specialChars.test(nicknameInput))
      setErrorSpecialCharacter("請勿使用特殊字元")
    else setErrorSpecialCharacter("")

    if (count === 0) setNicknameErrorMessage("")
  }

  const handleResolve = (nickname: string) => {
    if (nicknameErrorMessage || errorSpecialCharacter) return
    if (!nickname) return setNicknameErrorMessage("暱稱欄位不可空白")
    if (nickname === "超級玩家") return setNicknameErrorMessage("暱稱已存在")
    // console.log('你的暱稱是:', nickname)
    // TODO: 關閉 modal
  }

  const createNickname = (): JSX.Element => {
    return (
      <div className="modal-content">
        <div className="modal-header py-4 text-white">
          <Input
            className="border-0 bg-transparent flex flex-between gap-[25px]"
            inputClassName="rounded-[10px] w-full"
            label="請輸入暱稱"
            value={nicknameInput}
            onChange={handleInputChange}
            onKeyUp={handleNicknameInputKeyUp}
          />
          <div
            className={`sm:col-span-2 text-sm leading-6 ${
              count < 4 || count > 16 ? "text-red-500" : "text-gray-500"
            }`}
          >
            {count > 0 && (
              <span className="text-gray-400 mr-2">{count}/16</span>
            )}
            {nicknameErrorMessage && (
              <span className="text-red-500">{nicknameErrorMessage}</span>
            )}
            {errorSpecialCharacter && (
              <span className="text-red-500"> {errorSpecialCharacter}</span>
            )}
          </div>
        </div>
        <Button
          onClick={() => handleResolve(nicknameInput)}
          className="w-full flex justify-center"
        >
          送出
        </Button>
      </div>
    )
  }

  const createModal = () => {
    ModalManager.show(
      ModalTemplate,
      {
        modalContent: createNickname(),
      },
      {
        keepMounted: true,
      }
    ).then((payload) => {
      // console.log(payload)
    })
  }

  return (
    <>
      <h1>遊戲大廳！</h1>
      {showModal && createModal()}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
