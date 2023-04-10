import { useNavigate } from "react-router-dom";


function Home(){

  const navigate = useNavigate();

  return (
      <div  className="container">
        <h1>
          home page
        </h1>
        <button onClick={() => navigate('/products')}>products</button>
      </div>
    );
}

export  {Home} ;