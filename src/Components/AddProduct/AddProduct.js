import React, { useState } from 'react';


function ProductForm({ onAddProduct }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onloadend = () => {
      onAddProduct({ title, description, imageUrl: reader.result, color, size,price  });
      setTitle('');
      setDescription('');
      setImage(null);
      setColor('');
      setPrice('');
      setSize('');
    };
    if (image) {
      reader.readAsDataURL(image);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Название:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Описание:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Изображение:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Цвет:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Цена:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Размер:
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Добавить продукт</button>
    </form>
  );
}


function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Цвет: {product.color}</p>
      <p>Цена: {product.price} $</p>
      <p>Размер: {product.size}</p>
    </div>
  );
}


function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="App">
      <h1>Добавить продукт</h1>
      <ProductForm onAddProduct={addProduct} />
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
