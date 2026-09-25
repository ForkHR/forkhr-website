import { redirect } from "next/navigation"

// Old URL kept alive for links and search results.
export default function SchedulerRedirect() {
  redirect("/products#schedule")
}
