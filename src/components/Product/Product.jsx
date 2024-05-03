const Product = ({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price,
}) => {
  const alertStyles = {
    margin: 8,
    padding: "12px 16px",
    borderRadius: 4,
    backgroundColor: "gray",
    color: "red",
  };

  return (
    <div style={alertStyles}>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width='480' />
      <p>Price: {price} credits</p>
    </div>
  );
};

export default Product;
