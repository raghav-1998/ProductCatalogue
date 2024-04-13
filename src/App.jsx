import './App.css'
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList'
import {QueryClient,QueryClientProvider} from 'react-query'

const queryClient=new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Product List</h1>
        <ProductList></ProductList>
        <AddProduct/>
      </div>
    </QueryClientProvider>
  )
}

export default App
