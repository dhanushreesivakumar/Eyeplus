import React, { useState } from 'react';

const categories = [
  {
    name: 'Round',
    image: 'https://static1.lenskart.com/media/desktop/img/Apr22/a2.png',
  },
  {
    name: 'Cat-Eye',
    image: 'https://static1.lenskart.com/media/desktop/img/Apr22/b2.png',
  },
  {
    name: 'Clubmaster',
    image: 'https://static1.lenskart.com/media/desktop/img/Apr22/d2.png',
  },
  {
    name: 'Transparent',
    image: 'https://static1.lenskart.com/media/desktop/img/Apr22/d.png',
  },
  {
    name: 'Wayfarer',
    image: 'https://static1.lenskart.com/media/desktop/img/Apr22/e2.png',
  },
  {
    name: 'Aviator',
    image: 'https://static1.lenskart.com/media/desktop/img/Apr22/f2.png',
  },
];

const TrendingCategories = () => {
  const [visibleCategories, setVisibleCategories] = useState(0);

  const styles = {
    container: {
      display:'block',
      //  justifyContent: 'space-between',
      // alignItems: 'center',
      // padding: '20px',
    },
    trendTitle: {
      flexBasis: '30%',
      textAlign: 'center',
    },
    trendTitleHeading: {
      fontSize: '36px',
      color: '#333',
      margin: '0',
    },
    trendTitleSpan: {
      fontWeight: 'bold',
      color: '#000',
    },
    trendTitleParagraph: {
      fontSize: '14px',
      color: '#666',
    },
    arrowButton: {
      cursor: 'pointer',
      fontSize: '15px',
      border: 'none',
      background: 'transparent',
      color: '#999',
      transition: 'color 0.3s ease',
    },
    arrowButtonHover: {
      color: '#333',
    },
    categories: {
      display: 'flex',
      flexBasis: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      // overflow: 'hidden',
    },
    categoryCard: {
      flexBasis: '90%',
      // textAlign: 'center',
      padding: '10px',
      borderRadius: '10px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      backgroundColor: '#fff',
      cursor: 'pointer',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    categoryImage: {
      width: '100px',
      height: 'auto',
      marginBottom: '10px',
      marginleft:'20px'
    },
    categoryName: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '15px',
    },
    exploreButton: {
      // padding: '10px 20px',
      // backgroundColor: ' #0a638f',
      // color: '#0a638f',
      border: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
      cursor: 'pointer',
    },
    exploreButtonHover: {
      backgroundColor: '#0097a7',
    },
    categoryCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
  };

  const handleNextClick = () => {
    if (visibleCategories < categories.length - 4) {
      setVisibleCategories(visibleCategories + 1);
    }
  };

  const handlePrevClick = () => {
    if (visibleCategories > 0) {
      setVisibleCategories(visibleCategories - 1);
    }
  };

  const handleMouseEnter = (event) => {
    event.currentTarget.style.transform = styles.categoryCardHover.transform;
    event.currentTarget.style.boxShadow = styles.categoryCardHover.boxShadow;
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.transform = 'none';
    event.currentTarget.style.boxShadow = styles.categoryCard.boxShadow;
  };

  const handleButtonMouseEnter = (event) => {
    event.currentTarget.style.backgroundColor = styles.exploreButtonHover.backgroundColor;
  };

  const handleButtonMouseLeave = (event) => {
    event.currentTarget.style.backgroundColor = styles.exploreButton.backgroundColor;
  };

  return (
    <div style={styles.container}>
      <div style={styles.trendTitle}>
        <h2 style={styles.trendTitleHeading}>
          WEAR THE <span style={styles.trendTitleSpan}>TREND</span>
        </h2>
        <p style={styles.trendTitleParagraph}>Our hottest collections</p>
      </div>
      <button
        style={styles.arrowButton}
        onClick={handlePrevClick}
        onMouseEnter={(e) => (e.currentTarget.style.color = styles.arrowButtonHover.color)}
        onMouseLeave={(e) => (e.currentTarget.style.color = styles.arrowButton.color)}
        disabled={visibleCategories === 0}
      >
        &lt;
      </button>
      <div style={styles.categories}>
        {categories.slice(visibleCategories, visibleCategories + 4).map((category, index) => (
          <div
            key={index}
            style={styles.categoryCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={category.image} alt={category.name} style={styles.categoryImage} />
            <h3 style={styles.categoryName}>{category.name}</h3>
            <button
              style={styles.exploreButton} 
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
            >
              Explore
            </button>
          </div>
        ))}
      </div>
      <button
        style={styles.arrowButton}
        onClick={handleNextClick}
        onMouseEnter={(e) => (e.currentTarget.style.color = styles.arrowButtonHover.color)}
        onMouseLeave={(e) => (e.currentTarget.style.color = styles.arrowButton.color)}
        disabled={visibleCategories >= categories.length - 4}
      >
        &gt;
      </button>
    </div>
  );
};

export default TrendingCategories;
