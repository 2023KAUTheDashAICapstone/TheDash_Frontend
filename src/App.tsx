import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const loading = <div>화면을 불러오는 중 입니다.(App)</div>

const About = React.lazy(() => import('./Pages/About'))
const Home = React.lazy(() => import('./Pages/Home'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
