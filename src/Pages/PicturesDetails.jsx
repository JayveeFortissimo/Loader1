import { useParams,Link } from "react-router-dom"

const PicturesDetails = () => {

  const id = useParams();

  return (
<div style={{minHeight:'100vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
<h1>Authors ID: {id.id}</h1>
                      {/*////Need pala neto/*/}
<Link to=".." relative="path">Back</Link>

</div>
  )
}

export default PicturesDetails