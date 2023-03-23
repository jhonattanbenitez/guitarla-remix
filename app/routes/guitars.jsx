import { Outlet } from "@remix-run/react"
//refactor this
function Store() {
  return (
    <div className="o-container">
        <Outlet />
    </div>
  )
}

export default Store