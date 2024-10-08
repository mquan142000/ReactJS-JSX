import ReactDOM from 'react-dom';

const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];

ReactDOM.render(
  <div>
    <h1>List of fruits</h1>
    <ul>
      {fruits.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>,
  document.getElementById('root') // Dấu nháy đơn chuẩn
);
