import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Route, Routes,Link } from "react-router-dom";
import EditEmployee from "../../pages/EditEmployee";
import AllEmployees from "../../pages/AllEmployees";
import AddEmployee from "../../pages/AddEmployee";
import TestTree from "../../pages/TestTree";
const Layout = ({ children }) => {
	const navigate = useNavigate();
  return (
    <div className="resize">
     <header class="fixed right-0 top-0 left-60 bg-sky-300 py-3 px-4 h-16">
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center justify-between">
      </div>
    </div>
  </header>

  <aside class="resize fixed inset-y-0 left-0 bg-sky-300 shadow-md max-h-screen w-60 ">
    <div class="flex flex-col justify-between h-full">
      <div class="flex-grow">
        <div class="px-4 py-6 text-center border-b">
          <h1 class="text-xl font-bold leading-none"><span class="text-yellow-700">Employee Hierarchy</span> Api</h1>
        </div>
        <div class="p-4">
          <ul class="space-y-1">
             <Link to="/" className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4">
                <svg xmlns="" width="1em" height="1em" fill="currentColor" class="text-lg mr-4" viewBox="0 0 16 16">
                 <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
</svg>
                Users
            </Link>
            <Link to="/TestTree"
            class="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-3-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z"/>
</svg>Tree View
              
            </Link> 
          </ul>
        </div>
      </div>
      <div class="p-4">
        <button type="button" class="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="" viewBox="0 0 16 16">
            <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </button> <span class="font-bold text-sm ml-2"></span>
      </div>
    </div>
  </aside>

  <main class="ml-30 pt-16 max-h-screen overflow-x-clip">
    <div class="px-6 py-0">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-3xl p-8 mb-1">
          <h1 class="text-3xl font-bold mb-3">Employee heirarchy</h1>
          <div class="flex items-center justify-between">
           
            <div class="flex items-center gap-x-2">
             
              <button type="button" class="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-sky-500 text-gray-300 hover:text-white text-sm font-semibold transition
              " onClick={() => navigate('/add-employee')}>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
				  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
				  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
				</svg>
				Add 
              </button>
               
            </div>
          </div>

          <hr className="mb-2 w-full"/>
              <Routes>
      <Route path="/" element={<AllEmployees/>}></Route>
        <Route path="/add-employee" element={<AddEmployee />}></Route>
         <Route path="/TestTree" element={<TestTree/>}></Route>
        <Route path="/edit-employee/:id" element={<EditEmployee />}></Route>
      </Routes>
          
        </div>
      </div>
    </div>
  </main>
      <Container>{children}</Container>
    </div>
  );
};
export default Layout;
