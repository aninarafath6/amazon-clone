import Image from 'next/image'
function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {
    return (
        <div className='grid grid-cols-5'>
             <Image src={image} height={200} width={200} objectFit="contain" />
       
            

            <div className="col-span-3 mx-5">
                <p>{title}</p>
                {
                    Array(rating).push().map((_, i) => {
                        
                    })
                }
            </div>
       
        </div>
    )
}

export default CheckoutProduct
