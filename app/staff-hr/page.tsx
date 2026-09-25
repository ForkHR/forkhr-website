import { redirect } from "next/navigation"

// Old URL kept alive for links and search results.
export default function StaffHrRedirect() {
  redirect("/products#people")
}
