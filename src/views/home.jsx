import React from 'react'
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="layout-container">
    <aside className="layout-left">
      aside
    </aside>
    <article className="layout-right">
      <header className="layout-header">
        header
      </header>
      <div className="layout-main">
        main
        <Outlet />
      </div>
    </article>
  </div>
  )
}
