import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import Root from './Pages/Root';
import HomePage from './Pages/HomePage';
import Pictures , {pictureData}from './Pages/Pictures';
import Error from './Pages/ErrorPage';
import PicturesDetails from './Pages/PicturesDetails';

function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      errorElement:<Error/>,
      element:<Root/>,
      children:[
        {index:true,element:<HomePage/>},
        {path:'pictures',element:<Pictures/>,loader:pictureData},
       {path:'pictures/:id',element:<PicturesDetails/>}
      ]
    }
  ])

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
