import { useContext } from "react";
import { IgniteShopContext } from "../../contexts/IgniteShopContext";
import { LittleNumberUnderPack } from "./styles";

export default function ProductsCount() {

    const { shoppingCartProducts } = useContext(IgniteShopContext);

    return (
        <>
            {
                        shoppingCartProducts.length !== 0 ? (
                          <LittleNumberUnderPack>
                            {shoppingCartProducts.length}
                          </LittleNumberUnderPack>
                        ) : (
                          <></>
                        )
              }
        </>
    )
}