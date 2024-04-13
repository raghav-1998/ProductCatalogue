import {useMutation,QueryClient, useQueryClient} from 'react-query';
const AddProduct=()=>{
    const addProductMutation=useMutation({
        mutationFn:(newProduct) => {
            return fetch('https://dummyjson.com/products/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newProduct),
            });
        }
    },{
        onSuccess: () => {
            const queryClient=new useQueryClient();
            queryClient.invalidateQueries('products');
        },
    })
    const handleSubmit=async(event)=>{
        event.preventDefault();
        const {name,description,price}=event.target.elements
        await addProductMutation.mutateAsync(
            {
                name:name.value,
                description:description.value,
                price:price.value
            }
        );
        event.target.reset();
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Product Name" required/>
            <input type="text" name="description" placeholder="Product Description" required/>
            <input type="number" name="price" placeholder="Price" required/>
            <button type="submit">Add Product</button>
        </form>
    )
}

export default AddProduct;