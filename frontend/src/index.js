import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import App from "./App"
import FunkyExamples from "./pages/FunkyExamples"
import Todo from "./components/Todo"
import TodoPage from "./pages/TodoPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        path="funky"
        element={<FunkyExamples />}
      />
      <Route
        path="contact"
        element={<h1>Contact</h1>}
      />
      <Route
        path="Todo"
        element={<TodoPage />}
      />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
