import React,{useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleTrigger = () => { setIsOpen(!isOpen) }
  return (
    <div className={`main ${isOpen ? "toggled-sidebar" : ""}`}>
        <div class="container-fluid">
      <Header handleTrigger={handleTrigger}/>
      <Sidebar isOpen={isOpen} />
      {props.children}
      <Footer />
    </div>
    </div>
  
  )
}
export default Layout