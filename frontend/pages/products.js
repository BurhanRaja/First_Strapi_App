import Link from 'next/link'
import React from 'react'

const Products = (props) => {
    return (
        <div className='container mx-auto'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 lg:py-16 mx-auto">
                    <div className="lg:w-1/2 w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop</h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <div className="flex flex-wrap -m-4">

                        {props.products.data.map((item, index) => {
                            return <div key={index} className="lg:w-72 md:w-1/2 p-1 w-auto bg-gray-100 hover:bg-slate-50 my-2 mx-3">
                                <Link href={`/product/${item.attributes.slug}`}>
                                <a className="block relative lg:h-auto  rounded overflow-hidden hover:cursor-pointer">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={`${item.attributes.image.data && item.attributes.image.data.attributes.name}`} />
                                </a>
                                </Link>
                                <div className="mt-4 px-10 py-2">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.attributes.category}</h3>
                                    <Link href={`/product/${item.attributes.slug}`}>
                                    <h2 className="text-gray-900 title-font text-lg font-medium hover:text-yellow-400 hover:cursor-pointer">{item.attributes.title}</h2>
                                    </Link>
                                    <p className="mt-1">₹{item.attributes.price}</p>
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
            "Authorization": "Bearer 00af1c937ad0ade794936f4814eadc38ad18f68fa7f4df34bea52d85ae94b2ea1bb288858cbe4c75a6692825ff82668931c2dd21440fecad12a2f65399fd2bda2b7a1e8ec1b9ed4d908ab77b026e4f2aada1cf46cba81e61d80e39615b92f79276ef5da032554c02eefba2d8bcf1c16a6849d3887d2a398b016f6cc0d052ec33"
        }
    });

    const products = await response.json()

    return {
        props: { products: products },
    }
}
export default Products