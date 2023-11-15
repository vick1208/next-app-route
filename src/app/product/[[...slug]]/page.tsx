type ProductPageProps = { params: { slug: string[] } }

async function getData() {
    // const res = await fetch("https://fakestoreapi.com/products");
    const res = await fetch("http://localhost:3000/api/product",
    {cache: "no-store"});

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function ProductPage(props: ProductPageProps) {
    const { params } = props;
    const products = await getData();
    console.log(products);

    return (
        <div>
            <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1>


{/* Setelah dicoba dengan mengikuti tutorialnya, respons yang didapat sudah sukses. 
Namun, halaman web tidak menampilkan hasil respons.  */}
            {products.data.length > 0 &&
                products.data.map((product: any) => {
                    <>
                    <div key={product.id}>
                        <h4>{product.title}</h4>
                    </div>
                    </>
                })}


            {params.slug &&
                <>
                    <h2> Category : {params.slug[0]} </h2>
                    <h2> Gender : {params.slug[1]} </h2>
                    <h2> Id : {params.slug[2]} </h2>
                </>}
        </div>
    );
}