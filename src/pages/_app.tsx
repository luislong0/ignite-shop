import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";
import { Container, Header, Trigger } from "../styles/pages/app";
import * as Dialog from "@radix-ui/react-dialog";

import Image from "next/future/image";
import { Handbag } from "phosphor-react";
import Link from "next/link";
import ShoppingCartModal from "../components/ShoppingCartModal";
import {
  IgniteShopContext,
  IgniteShopContextProvider,
} from "../contexts/IgniteShopContext";
import { useContext } from "react";
import ProductsCount from "../components/ProductsCount";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IgniteShopContextProvider>
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>

          <Dialog.Root>
            <Trigger asChild>
              <div>
                <ProductsCount />
                <Handbag size={48} weight="bold" />
              </div>
            </Trigger>

            <ShoppingCartModal />
          </Dialog.Root>
        </Header>

        <Component {...pageProps} />
      </Container>
    </IgniteShopContextProvider>
  );
}
