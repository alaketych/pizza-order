import React from 'react'
import ContentLoader from 'react-content-loader'

function PizzaLoader() {
  return(
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f5f5f5"
      foregroundColor="#ecebeb"
    >
      <circle cx="579" cy="543" r="22" />
      <circle cx="599" cy="527" r="25" />
      <circle cx="603" cy="534" r="53" />
      <circle cx="138" cy="142" r="108" />
      <rect x="5" y="279" rx="10" ry="10" width="270" height="24" />
      <rect x="3" y="319" rx="20" ry="10" width="275" height="84" />
      <rect x="125" y="414" rx="10" ry="10" width="150" height="42" />
      <rect x="235" y="452" rx="0" ry="10" width="0" height="1" />
      <rect x="4" y="416" rx="10" ry="10" width="90" height="40" />
    </ContentLoader>
  )
}

export default PizzaLoader