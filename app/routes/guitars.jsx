import { Outlet } from "@remix-run/react"
function Store() {
  return (
    <div className="o-container">
        <Outlet />
    </div>
  )
}

export default Store