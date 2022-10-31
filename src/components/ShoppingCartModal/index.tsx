import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import Image from "next/future/image";
import { X } from "phosphor-react";
import { useContext } from "react";
import {
  IgniteShopContext,
  shoppingCartProductsType,
} from "../../contexts/IgniteShopContext";
import {
  CloseBtn,
  Content,
  DialogTitle,
  FooterContainer,
  ImageContainer,
  InfoContainer,
  ItemsContainer,
  Overlay,
  PriceContainer,
  QuantityContainer,
  ShoppingCartProduct,
} from "./styles";

interface productsToCheckoutProps {
  price: string;
  quantity: number;
}

export default function ShoppingCartModal() {
  const { shoppingCartProducts, totalMoney, deleteProduct } =
    useContext(IgniteShopContext);

  function handleDeleteProduct(data: string) {
    const productsWithoutDeletedOne: shoppingCartProductsType[] =
      shoppingCartProducts.filter((shoppingCartProduct) => {
        return shoppingCartProduct.id !== data;
      });
    console.log(`batatafrita123: ${JSON.stringify(productsWithoutDeletedOne)}`);
    deleteProduct(productsWithoutDeletedOne);
  }

  async function handleBuyProduct() {
    try {
      const productsToCheckout: productsToCheckoutProps[] =
        shoppingCartProducts.map((shoppingCartProduct) => {
          return {
            price: shoppingCartProduct.defaultPriceId,
            quantity: 1,
          };
        });

      const response = await axios.post("/api/checkout", {
        productsToCheckout,
      });

      const { checkoutUrl } = response.data;

      // router.push('/checkout')

      window.location.href = checkoutUrl;
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      // setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseBtn>
          <X size={24} weight="bold" />
        </CloseBtn>
        <DialogTitle>Sacola de compras</DialogTitle>

        <ItemsContainer>
          {shoppingCartProducts.map((shoppingCartProduct) => {
            return (
              <ShoppingCartProduct key={shoppingCartProduct.id}>
                <ImageContainer>
                  <Image
                    src={shoppingCartProduct.imageUrl}
                    width={90}
                    height={90}
                    alt=""
                  />
                </ImageContainer>

                <InfoContainer>
                  <p>{shoppingCartProduct.name}</p>
                  <strong>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(shoppingCartProduct.price / 100)}
                  </strong>
                  <button
                    onClick={() => handleDeleteProduct(shoppingCartProduct.id)}
                  >
                    Remover
                  </button>
                </InfoContainer>
              </ShoppingCartProduct>
            );
          })}
        </ItemsContainer>

        <FooterContainer>
          <QuantityContainer>
            <span>Quantidade</span>
            <span>{shoppingCartProducts.length} itens</span>
          </QuantityContainer>

          <PriceContainer>
            <span>Valor</span>
            <span>
              {shoppingCartProducts.length > 0 ? (
                new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalMoney / 100)
              ) : (
                <span>R$ 0,00</span>
              )}
            </span>
          </PriceContainer>

          <button onClick={handleBuyProduct}>Finalizar compra</button>
        </FooterContainer>
      </Content>
    </Dialog.Portal>
  );
}
