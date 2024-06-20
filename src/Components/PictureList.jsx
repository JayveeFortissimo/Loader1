import { Link } from "react-router-dom"

const PictureList = ({picture}) => {
  return (
    <main>

      <div className="Elements">
      {
      picture.map(prod =>{
        return(
          <Link to={`${prod.id}`} key={prod.id} className="Items">
              <img src={prod.download_url} alt="" />
            <h4>Author: {prod.author}</h4>
          </Link>
        )
      })
    }
      </div>
    
    </main>
  )
}

export default PictureList