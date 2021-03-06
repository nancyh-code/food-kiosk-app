import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [total, setTotal] = useState(0);

  const router = useRouter();

  const obtainCategories = async () => {
    try {
      const { data } = await axios("/api/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtainCategories();
  }, []);

  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);

  useEffect(() => {
    const newTotal = order.reduce(
      (total, product) => product.price * product.quantity + total,
      0
    );
    setTotal(newTotal);
  }, [order]);

  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setCurrentCategory(category[0]);
    router.push("/");
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAddingOrder = ({ categoryId, ...product }) => {
    if (order.some((productState) => productState.id === product.id)) {
      // Order update with quantities
      const orderUpdate = order.map((productState) =>
        productState.id === product.id ? product : productState
      );
      setOrder(orderUpdate);
      toast.success("Su pedido ha sido actualizado");
    } else {
      setOrder([...order, product]);
      toast.success("Agregado a su pedido");
    }
    setModal(false);
  };

  const handleEditQuantity = (id) => {
    const updateProduct = order.filter((product) => product.id === id);
    setProduct(updateProduct[0]);
    setModal(!modal);
  };

  const handleDeleteProduct = (id) => {
    const updateOrder = order.filter((product) => product.id !== id);
    setOrder(updateOrder);
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/orders", {
        customerName,
        date: Date.now().toString(),
        total,
        order,
      });

      //Resetting the app

      setCurrentCategory(categories[0]);
      setOrder([]);
      setCustomerName("");
      setTotal(0);

      toast.success("Pedido Recibido Correctamente");

      setTimeout(() => {
        router.push("/");
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KioskContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        handleAddingOrder,
        order,
        handleEditQuantity,
        handleDeleteProduct,
        customerName,
        setCustomerName,
        placeOrder,
        total,
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export { KioskProvider };

export default KioskContext;
