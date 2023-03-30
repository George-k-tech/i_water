import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../Home/home.css'
import { ListUser } from '../Profile/listUser';
import { Register } from '../Register/register';
import { DeleteUser } from '../Profile/deleteUser';
import { EditUser } from '../Profile/editUser';

function Home(){
    return (
        <div className='App'>
      <h1>React Crud operations </h1>

      <BrowserRouter>

        <nav>
          <ul>
            <li>
            <Link to="Register/Users">create Users</Link>
            </li>
            <li>
            <Link to="List/Users">show Users</Link>
            </li>
            <li>
            <Link to="Edit/Users">edit Users</Link>
            </li>
            <li>
            <Link to="Delete/Users">delete Users</Link> 
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path='Register/Users' element ={<Register />} />
            <Route path='List/Users' element={<ListUser/>}/>
            <Route path='Edit/Users' element={<EditUser/>}/>
            <Route path='Delete/Users'element={< DeleteUser/>}/>

        </Routes>
      </BrowserRouter>
    </div>
    );
}

export default Home;