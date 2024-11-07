"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SunburstChart from "@/components/charts/sunburst"

export default function Page() {
  return (
    <div>
      <h1>Sunburst</h1>
      <Button>Click me</Button>

      <SunburstChart />

      <Link href="/">Home</Link>
    </div>
  )
}
