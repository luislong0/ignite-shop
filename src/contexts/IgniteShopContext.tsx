import { createContext, ReactNode, useState } from "react";

export interface shoppingCartProductsType {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  defaultPriceId: string;
}

interface IgniteShopContextType {
  addNewProduct: (data: shoppingCartProductsType) => void;
  deleteProduct: (productToDelete: shoppingCartProductsType[]) => void;
  shoppingCartProducts: shoppingCartProductsType[];
  totalMoney: number;
}

interface IgniteShopContextProviderProps {
  children: ReactNode;
}

export const IgniteShopContext = createContext({} as IgniteShopContextType);

export function IgniteShopContextProvider({
  children,
}: IgniteShopContextProviderProps) {
  const [shoppingCartProducts, setShoppingCartProduct] = useState<
    shoppingCartProductsType[]
  >([]);
  const [moneyVector, setMoneyVector] = useState<number[]>([]);
  [];
  const [totalMoney, setTotalMoney] = useState(0);

  function addNewProduct(data: shoppingCartProductsType) {
    const id: string = String(new Date().getTime());

    setShoppingCartProduct([
      ...shoppingCartProducts,
      {
        id,
        name: data.name,
        price: data.price,
        imageUrl: data.imageUrl,
        defaultPriceId: data.defaultPriceId,
      },
    ]);
    setMoneyVector([...moneyVector, data.price]);

    setTotalMoney(
      shoppingCartProducts.reduce(
        (total: number, item: shoppingCartProductsType) =>
          (total += item.price),
        data.price
      )
    );
  }

  function deleteProduct(productToDelete: shoppingCartProductsType[]) {
    setShoppingCartProduct(productToDelete);

    setTotalMoney(
      shoppingCartProducts.reduce(
        (total: number, item: shoppingCartProductsType) =>
          (total = totalMoney - item.price),
        0
      )
    );
  }

  return (
    <IgniteShopContext.Provider
      value={{
        addNewProduct,
        shoppingCartProducts,
        totalMoney,
        deleteProduct,
      }}
    >
      {children}
    </IgniteShopContext.Provider>
  );
}
