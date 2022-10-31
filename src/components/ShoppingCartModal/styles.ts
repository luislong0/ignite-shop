import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "../../styles";

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  maxWidth: "100vw",
  width: "100%",
  height: "100vh",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.15)",
});

export const Content = styled(Dialog.Content, {
  maxWidth: 480,
  width: "100%",
  height: "100vh",
  padding: "2.5rem 3rem",
  backgroundColor: "$gray900",
  boxShadow: "-4px 1px 24px -6px rgba(0,0,0,0.86);",

  position: "fixed",
  top: "0",
  right: "0",
  zIndex: 2,
});

export const CloseBtn = styled(Dialog.Close, {
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  color: "$gray400",
  width: 24,
  height: 24,
  marginLeft: "auto",
  marginBottom: "1rem",

  cursor: "pointer",

  "&:hover": {
    color: "$gray300",
  },
});

export const DialogTitle = styled(Dialog.Title, {
  display: "flex",

  fontSize: "$lg",
  color: "$gray100",

  marginBottom: "2rem",
});

export const ItemsContainer = styled("div", {
  height: "50vh",
  overflow: "auto",

  "&::-webkit-scrollbar-track": {
    borderRadius: 0,
    backgroundColor: "$gray900",
  },

  "&::-webkit-scrollbar": {
    width: 6,
    backgroundColor: "$green500",
  },

  "&::-webkit-scrollbar-thumb": {
    borderRadius: 8,
    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
    backgroundColor: "$green500",
  },
});

export const ShoppingCartProduct = styled("div", {
  display: "flex",
  alignItems: "center",

  gap: "2rem",

  marginBottom: "1.5rem",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 100,
  height: 95,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const InfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  height: 95,

  p: {
    color: "$gray300",
    fontSize: "$md",
    marginBottom: 6,
  },

  strong: {
    fontWeight: "bold",
    color: "$gray100",
    fontSize: "$md",
  },

  button: {
    textAlign: "left",
    backgroundColor: "transparent",
    border: "none",
    marginTop: "auto",
    fontSize: "$sm",
    color: "$green500",
    fontWeight: "bold",
    transition: "all 0.3s",

    cursor: "pointer",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const FooterContainer = styled("footer", {
  maxWidth: 385,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: "auto",

  position: "fixed",
  bottom: 48,

  button: {
    width: "100%",
    padding: "1.25rem 2rem",

    backgroundColor: "$green500",
    border: "none",
    borderRadius: 8,

    color: "$white",
    fontSize: "$md",
    fontWeight: "bold",
    transition: "all 0.2s ease-out",

    "&:hover": {
      backgroundColor: "$green300",
    },
  },
});

export const QuantityContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  color: "$gray300",
  marginBottom: "0.5rem",

  span: {
    "&:nth-child(2)": {
      fontSize: "$md",
    },
  },
});

export const PriceContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  color: "$gray300",
  marginBottom: "3.5rem",

  span: {
    fontWeight: "bold",
    color: "$gray100",

    "&:nth-child(1)": {
      fontSize: "$md",
    },

    "&:nth-child(2)": {
      fontSize: "$xl",
    },
  },
});
