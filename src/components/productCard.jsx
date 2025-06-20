import "../style/components/productCard.css";

function ProductCard({ product, setProduct }) {
  return (
    <div className="product_card">
      <div className="card_top">
        <img
          className="product_image"
          src={product.image.desktop}
          alt="image"
        />
        <button
          onClick={() => {
            setProduct((prev) => {
              const existing = prev.find((p) => p.name === product.name);
              if(existing) {
                return prev.map((p) => 
                  p.name === product.name ? {...p, quantity: p.quantity +1} :p
                );
              } else {
                return [...prev, {...product, quantity:1}];
              }
            });
          }}
        >
          <img src="/public/assets/images/icon-add-to-cart.svg" />
          <p>Ajouter au panier</p>
        </button>
      </div>
      <div class="card_bottom">
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
