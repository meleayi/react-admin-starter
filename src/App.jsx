import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "'Poppins', sans-serif",
            colorText: "#333",
          },
          components: {
            Form: {
              labelFontFamily: "'Times New Roman', serif",
              labelColor: "#222",
              labelFontSize: 14,
              labelFontWeight: "bold",
            },
          },
        }}
      >
        <AllRoutes />
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
