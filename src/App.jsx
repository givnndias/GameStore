import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./routes/Home"
import Produto from "./routes/Produto"
import Error from "./routes/Error"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produto />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App