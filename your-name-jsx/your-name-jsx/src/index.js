import ReactDOM from "react-dom/client";

// Sử dụng const để tạo biến name mang giá trị là “Your name”
const name = "Your name";

// Sử dụng JSX để khởi tạo element mang giá trị hiển thị tên của bạn
<h1 style={{textAlign: "center"}}>
  {name}
</h1>

// Khai báo biến root và khởi tạo với ReactDOM.createRoot()
const root = ReactDOM.createRoot(document.getElementById("root"));

// Truyền element ở vào hàm root.render()
root.render(
  <h1 style={{ textAlign: "center" }}>
	{ name }
  </h1>
);
