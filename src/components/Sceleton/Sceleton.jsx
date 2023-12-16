import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = () => (
  <ContentLoader
    speed={.5}
    width={279.5}
    height={430}
    viewBox="0 0 279.5 430"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="14" y="10" rx="20" ry="20" width="250" height="330" /> 
    <rect x="27" y="363" rx="5" ry="5" width="180" height="20" /> 
    <rect x="27" y="393" rx="5" ry="5" width="60" height="18" /> 
    <rect x="217" y="369" rx="9" ry="9" width="32" height="32" />
  </ContentLoader>
)

export default Sceleton