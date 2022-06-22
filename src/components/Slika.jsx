import React from "react";

function Slika({ element }) {
  const url = element.images.fixed_width_downsampled.url

  const handleRedirect = (prop) => {
    window.location = prop;
  }
  return <img src={url} onClick={() => handleRedirect(url)} className="slika"></img>

}

export default Slika;
