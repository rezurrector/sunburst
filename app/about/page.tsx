import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div>
      <h1>About</h1>
      <Button>Click me</Button>
      <Link href="/">Home</Link>
    </div>
  )
}
