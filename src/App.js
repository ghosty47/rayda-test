import MainPage from "./pages/MainPage/MainPage";
import { Provider } from "react-redux";
import store from "./store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { productsApi } from "./features/apiSlice";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={productsApi} >
        <div>
          <MainPage />
        </div>
      </ApiProvider>
    </Provider>
  );
}

export default App;
