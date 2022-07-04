import React from 'react'
import TextForm from './components/TextForm'
import Navbar from './components/Navbar'

function App() {
  return (
	<>
		<Navbar title="UTIALS" />
		<div className='container'>
			<TextForm heading="Enter your Text" />
		</div>

	</>
  )
}

export default App