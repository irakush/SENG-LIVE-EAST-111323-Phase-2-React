// Project Item Component
// Purpose of the component is

export default function ProjectItem({ project, key }) {
  console.log(project)
  // obj destructuring
  const { id, name, about, image, link, phase } = project




  return (
    <div class="card" id={id}>
      <br></br>
      <img src={image} class="image"></img>
      <h2>{name}</h2>
      <p>{about}</p>
    </div >
  )
}