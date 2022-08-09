import React from "react"

export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">List Test</h1>
      <ul className="main--facts">
        <li>Going to cinema</li>
        <li>Travel around the world</li>
        <li>Play football with friends on the weekend</li>
        <li>Try a new restaurant</li>
        <li>Program an app with light and dark mode</li>
      </ul>
    </main>
  )
}