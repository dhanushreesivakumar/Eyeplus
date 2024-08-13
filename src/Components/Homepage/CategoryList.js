import React from 'react';

const categories = [
  {
    name: 'Eyeglasses',
    image: 'https://static1.lenskart.com/media/desktop/img/Apr22/a2.png',
  },
  {
    name: 'Sunglasses',
    image: 'https://static1.lenskart.com/media/desktop/img/Apr22/b2.png',
  },
  {
    name: 'Screen Glasses',
    image: 'https://static1.lenskart.com/media/desktop/img/Apr22/d2.png',
  },
  {
    name: 'Contact Lenses',
    image: 'https://static1.lenskart.com/media/desktop/img/Apr22/d.png',
  },
  {
    name: 'Power Sunglasses',
    image: 'https://static1.lenskart.com/media/desktop/img/Apr22/e2.png',
  },
  {
    name: 'Progressive Lenses',
    image: 'https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg',
  },
];

const CategoryCard = ({ name, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.text}>{name}</div>
    </div>
  );
};

const CategoryList = () => {
  return (
    <div style={styles.container}>
      {categories.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  },
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    width: '200px',
    textAlign: 'center',
    padding: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  text: {
    marginTop: '10px',
    fontSize: '16px',
    color: '#333',
  },
};

const CategoryCardWithHover = ({ name, image }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      style={{ ...styles.card, ...(hover ? styles.cardHover : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.text}>{name}</div>
    </div>
  );
};

const CategoryListWithHover = () => {
  return (
    <div style={styles.container}>
      {categories.map((category, index) => (
        <CategoryCardWithHover key={index} {...category} />
      ))}
    </div>
  );
};

export default CategoryListWithHover;
