import React from 'react'

const Products = (props) => {
    return (
        <div className='container m-auto'>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-16 mx-auto">
                    <div class="lg:w-1/2 w-full mb-6">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop</h1>
                        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {props.products.data.map((item) => {
                            return <div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-slate-100 hover:cursor-pointer">
                                <a class="block relative h-48 rounded overflow-hidden hover:cursor-pointer">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={`${item.attributes.image.data && item.attributes.image.data.attributes.name}`} />
                                </a>
                                <div class="mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{item.attributes.category}</h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium hover:text-slate-700 hover:cursor-pointer">{item.attributes.title}</h2>
                                    <p class="mt-1">${item.attributes.price}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}



export async function getServerSideProps(context) {

    const host = "http://localhost:1337/"
    const response = await fetch(`${host}api/products?populate=*`, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            "Authorization": "Bearer 047632efeaf79a0682ab811d689b770c59913b5d259219e7e57ed4596ec7181e9281bb10002cf514524d7851eb970a9a4e2b2f71afaa92a13e0c300c227ceae7c24b69b9e4810aff03a4512cdd52f443a84cdb83c8554f4bc1ff728c42e0c4a4b6bced6f36b3aaae1e1fe153191eec193cdcfec3eb2dce914d2dd880ba31606d"
        }
    });

    const products = await response.json()
    console.log(products)

    return {
        props: { products: products, host: host },
    }
}
export default Products