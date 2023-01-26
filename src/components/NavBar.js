import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  console.log(links)

  const navLinks = links.map(link => {
    return <a href={`#${link}`} key={link}>{link}</a>
  })
  return (
  <nav>
    {navLinks}
  </nav>
  )
}

export default NavBar;
