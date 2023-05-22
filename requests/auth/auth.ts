import { IRequestWrapper, requestWrapper } from "@/requests/request"

export enum LoginType {
  GMAIL = "Gmail",
  GITHUB = "Github",
  LINKEDIN = "LinkedIn",
  DISCORD = "Discord",
}

export const getLoginEndpoint = (
  data: LoginType
): IRequestWrapper<{ url: string }> => {
  return requestWrapper({
    url: "/api/internal/auth/login",
    method: "GET",
  })
}

export const login = (data: {
  code: string
  state: string
  type: LoginType
}): IRequestWrapper<{ token: string }> => {
  return requestWrapper({
    url: "/api/internal/auth/login",
    method: "POST",
    data,
  })
}
