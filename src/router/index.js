import HomeView from "/src/views/Home/HomeView.svelte";
export const HomeViewPath = "/";

import CategoriesListView from "/src/views/CategoriesList/CategoriesListView.svelte";
export const CategoriesListViewPath = "/categories/list";

import CategoriesView from "/src/views/Categories/CategoriesView.svelte";
export const CategoriesViewPath = "/categories";

import ItemDetailView from "/src/views/ItemDetail/ItemDetailView.svelte";
export const ItemDetailViewPath = "/itemdetail";

import CartView from "/src/views/Cart/CartView.svelte";
export const CartViewPath = "/cart";

import PaymentView from "/src/views/Payment/PaymentView.svelte";
export const PaymentViewPath = "/payment";

import PostPaymentView from "/src/views/PostPayment/PostPaymentView.svelte";
export const PostPaymentViewPath = "/postpayment";

import ChatView from "/src/views/Chat/ChatView.svelte";
export const ChatViewPath = "/chat";

import ChatDetailView from "/src/views/ChatDetail/ChatDetailView.svelte";
export const ChatDetailViewPath = "/chatDetail";

export const routes = {
  // Exact path
  [HomeViewPath]: HomeView,
  [CategoriesViewPath]: CategoriesView,
  [CategoriesListViewPath]: CategoriesListView,
  [ItemDetailViewPath]: ItemDetailView,
  [CartViewPath]: CartView,
  [PaymentViewPath]: PaymentView,
  [PostPaymentViewPath]: PostPaymentView,
  [ChatViewPath]: ChatView,
  [ChatDetailViewPath]: ChatDetailView,
  //   "*": NotFound,
};
