import {useQuery} from 'react-query'
import styles from './ProductList.module.css'
const fetchProducts=async()=>{
    const response=await fetch("https://dummyjson.com/products")
    console.log(response)
    if(!response.ok){
        throw new Error("Failed To Fetch The Product")
    }

    return response.json()
}
const ProductList=()=>{
    //console.log(useQuery("products",fetchProducts))
    const {data,status}=useQuery("products",fetchProducts)
    console.log(data)
    return (
        <>
            {status==="error" && <p className="error">Error in fetching Products</p>}
            {status==='loading' && <p className="loader">Fetching Products...</p>}
            {status=="success" && (
                <div className={styles.productList}>
                    {
                        data["products"].map(
                            product=>(
                                <div key={product.id} className={styles.productCard}>
                                    <h2 className={styles.productName}>{product.title}</h2>
                                    <p className={styles.productDescription}>{product.description}</p>
                                    <p className={styles.productPrice}>{product.price}</p>
                                </div>
                            )
                        )
                    }
                </div>
            )}
        </>
        
    )
}

export default ProductList