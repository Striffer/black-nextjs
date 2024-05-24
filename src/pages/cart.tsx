import CartTable from "@/Components/CartTable";
import CartTotal from "@/Components/CartTotal";
import Header from "@/Components/Header";
import { NextPage } from "next";
import Head from "next/head";
import { Container } from "reactstrap";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Carrinho
          </h1>

          <CartTable />
          
          <CartTotal />
        </Container>
      </main>
    </>
  )
}

export default Cart