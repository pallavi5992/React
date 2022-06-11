import React from 'react'
const Footer = () => {
  return (
 <>
    <footer className=" text-center text-lg-start">
          <div className="text-center p-3">
          @{new Date().getFullYear()}
            <a className="text-dark text-decoration-none" href="#">
               &nbsp;GrandCoeur
            </a>
          </div>
        </footer>
 </>
  )
}

export default Footer