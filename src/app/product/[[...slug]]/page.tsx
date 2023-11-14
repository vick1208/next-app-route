type DetailProductPageProps = { params: { slug: string[] } }

export default function ProductDetailPage(props: DetailProductPageProps) {
    const { params } = props;
    // console.log(params);
    return (
        <div>
            <h1>{params.slug ? "Detail Product Page":"Product Page"}</h1>
           {params.slug && 
           <>
            <h2> Category : {params.slug[0]} </h2>
            <h2> Gender : {params.slug[1]} </h2>
            <h2> Id : {params.slug[2]} </h2>
           </>}
        </div>
    );
}