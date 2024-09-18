import ReactDOM from "react-dom/client";

// Khởi tạo element mang giá trị hiển thị thời gian hiện tại

// Khai báo biến root và khởi tạo với ReactDOM.createRoot(), sau đó truyền element vừa tạo vào hàm root.render() để render element ra UI
const root = ReactDOM.createRoot(document.getElementById("root"));

// Sử dụng hàm hàm tick() để cập nhật thời gian

// Đặt root.render() trong hàm tick()
const tick = () => {
  root.render(
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
};

setInterval(tick, 1000);