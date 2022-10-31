import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer, SuccessProductsImagesContainer } from "../styles/pages/success";

interface productProps {
    price: {
        product: Stripe.Product;
    };
    name: string;
    imageUrl: string;
}

interface SuccessProps {
    customerName: string;
    product:productProps[];
}


export default function Success({ customerName, product }: SuccessProps) {

    


    return (
        <>

        <Head>
            <title>Compra efetuada | Ignite Shop</title>

            <meta name="robots" content="noindex" />
        </Head>

            <SuccessContainer>
                <h1>Compra efetuada!</h1>
                    <SuccessProductsImagesContainer>
                        {product.map(oneProduct => {
                            const productData = oneProduct.price.product as Stripe.Product
                            productData.images
                        return (
                            <ImageContainer key={String(productData.images)}>
                                <Image src={String(productData.images)} width={120} height={110} alt="" />
                            </ImageContainer>
                            )
                        })}
                    </SuccessProductsImagesContainer>

                <p>Uhuul <strong>{customerName}</strong>, sua compra de {product.length} camisetas já está a caminho da sua casa. </p>

                <Link href="/">
                    <a>
                        Voltar ao catálogo
                    </a>
                </Link>
            </SuccessContainer>
        </>
    )
}

// Client-side (useEffect) / getServerSideProps / getStaticProps

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    if (!query.session_id) {
        return {
           redirect: {
            destination: '/',
            permanent: false,
           }
        }
    }
    const sessionId = String(query.session_id);


    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details.name;
    // const product = session.line_items.data[1].price.product as Stripe.Product;
    const product = session.line_items.data;

    return {
        props: {
            customerName,
            // product: {
            //     name: product.name,
            //     imageUrl: product.images[0],
            // }
            product: product
        }
    }
}

