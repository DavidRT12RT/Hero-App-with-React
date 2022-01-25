import { AppRouter } from "./components/routers/AppRouter";

//Como esta App de heroes solo tienes una AppRouter puede deducir que es un SPA con React
export const HeroesApp = () => {
  return <AppRouter />;
};
