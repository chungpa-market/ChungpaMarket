import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView';
import LoginView from '../views/LoginView';
import RegistrationView from '../views/RegistrationView';
import WriteView from '../views/WriteView';
import SellView from '../views/SellView';
import ShareView from '../views/ShareView';
import BuyView from '../views/BuyView';
import ProductDetail from '../views/ProductDetail';
import WishList from '../views/WishList';
import TransactionHistory from '../views/TransactionHistory';
import MyPage from '../views/MyPage';
import SearchView from '../views/SearchView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/sell',
    name: 'sell',
    component: SellView,
  },
  {
    path: '/buy',
    name: 'buy',
    component: BuyView,
  },
  {
    path: '/share',
    name: 'share',
    component: ShareView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/registration',
    name: '/registration',
    component: RegistrationView,
  },
  {
    path: '/write',
    name: '/write',
    component: WriteView,
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/wish',
    name: 'WishList',
    component: WishList,
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage,
  },
  {
    path: '/transactionhistory',
    name: 'TransactionHistory',
    component: TransactionHistory,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
