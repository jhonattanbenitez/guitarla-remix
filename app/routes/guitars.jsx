import { Outlet, useOutletContext } from "@remix-run/react"
function Store() {
  return (
    <div className="o-container">
        <Outlet 
          context={useOutletContext()}
        />
    </div>
  )
}

export default Store