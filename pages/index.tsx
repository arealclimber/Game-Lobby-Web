import { GetStaticProps } from "next"

import Button from "@/shared/components/Button"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>遊戲大廳！</h1>
      <Button component={Link} href="/login">
        登入
      </Button>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
