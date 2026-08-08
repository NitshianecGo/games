import { redirect } from "next/navigation"

// The app itself is a fully self-contained single-file SPA at /public/index.html.
// This route simply forwards the v0 preview (and any deployment root) to it.
export default function Page() {
  redirect("/index.html")
}
