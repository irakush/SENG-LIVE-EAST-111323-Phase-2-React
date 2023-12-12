import React from 'react'
import ProjectItem from './ProjectItem'

// export default function ProjectList(props) {
export default function ProjectList({ projects }) {

  // console.log("Came from App: ", props)
  // console.log("Came from App: ", props.projects)
  // console.log("Came from App: ", props.projects[0])

  // let { projects } = prop
  // console.log(projects)

  let projectMapMultiLine = projects.map((eachP, i, arr) => {
    console.log(i, arr)
    // return <ProjectItem project={eachP} key={eachP.id} />
    return <ProjectItem project={eachP} key={i} />
  })

  console.log(projectMapMultiLine)

  return (
    // <div>ProjectList</div>
    <>
      {projectMapMultiLine}
    </>
  )
}