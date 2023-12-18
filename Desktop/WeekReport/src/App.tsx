import { Route, Routes, useNavigate } from 'react-router-dom'
import Form from './components/Form'
import Template, { TemplateProps } from './components/Template'
import { useState } from 'react';


function App() {

  const [formData, setFormData] = useState<TemplateProps| null>(null)
  const navigate = useNavigate();

  const handleFormSubmit = (data:TemplateProps) => {
    setFormData(data)
    navigate('/template')
}
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Form handleFormSubmit={handleFormSubmit} /> } />
        <Route path='template' element={ <Template formData={formData} /> } />
      </Routes>
    </div>
  )
}

export default App
