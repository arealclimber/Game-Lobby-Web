import { LoginType, getLoginEndpoint } from "@/requests/auth/auth"
import Button from "@/shared/components/Button"
import useRequest from "@/shared/hooks/useRequest"

export default function Login() {
  const { fetch } = useRequest()

  const onLoginClick = async (type: LoginType) => {
    const endpoint = await fetch(getLoginEndpoint(type))
    window.location.href = endpoint.url
  }

  return (
    <div>
      <h1>遊戲線上揪</h1>

      <div className="flex flex-col gap-4">
        <Button
          className="bg-[#D4DAE8] text-[#1E1F22]"
          onClick={() => onLoginClick(LoginType.GMAIL)}
        >
          Google 登入
        </Button>
        <Button
          className="bg-[#D4DAE8] text-[#1E1F22]"
          onClick={() => onLoginClick(LoginType.GITHUB)}
        >
          GitHub 登入
        </Button>
        <Button
          className="bg-[#D4DAE8] text-[#1E1F22]"
          onClick={() => onLoginClick(LoginType.LINKEDIN)}
        >
          LinkedIn 登入
        </Button>
        <Button
          className="bg-[#D4DAE8] text-[#1E1F22]"
          onClick={() => onLoginClick(LoginType.DISCORD)}
        >
          Discord 登入
        </Button>
      </div>
    </div>
  )
}
