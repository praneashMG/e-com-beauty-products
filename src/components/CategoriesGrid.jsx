import PropTypes from 'prop-types';  // Import PropTypes
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
  {
    title: 'Skin Care',
    imageUrl: 'https://i.pinimg.com/originals/1d/72/2c/1d722c824a0119c641f8abbeabe54275.jpg',
    link: '/product',
  },
  {
    title: 'Body Care',
    imageUrl: 'https://www.beautytester.it/wp-content/uploads/2018/01/gambe-secche-rimedi-naturali.jpg',
    link: '/product',
  },
  {
    title: 'Nail Polish',
    imageUrl: 'https://p0.zoon.ru/8/d/5ad5d223a98f350ce84ad818_5ad5fe93d5a92.jpg',
    link: '/product',
  },
  {
    title: 'Skin Care',
    imageUrl: 'https://i.pinimg.com/originals/1d/72/2c/1d722c824a0119c641f8abbeabe54275.jpg',
    link: '/product',
  },
  {
    title: 'Body Care',
    imageUrl: 'https://www.beautytester.it/wp-content/uploads/2018/01/gambe-secche-rimedi-naturali.jpg',
    link: '/product',
  },
  {
    title: 'Nail Polish',
    imageUrl: 'https://p0.zoon.ru/8/d/5ad5d223a98f350ce84ad818_5ad5fe93d5a92.jpg',
    link: '/product',
  },
];

const CategoryCard = ({ title, imageUrl, link }) => {
  const cardContent = (
    <div className="bg-purple-100 rounded-md shadow-md overflow-hidden mx-2 sm:mx-4">
      <img src={imageUrl} alt={title} className="w-full h-48 sm:h-60 object-cover" />
      <div className="p-4 sm:p-5 text-center">
        <h2 className="text-base sm:text-lg font-medium">
          {title} <span className="text-gray-500">→</span>
        </h2>
      </div>
    </div>
  );
  return link ? (
    <Link to={link}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

// Add prop validation for CategoryCard component
CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const CategoriesGrid = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10px',
        },
      },
    ],
  };

  return (
    <div className="w-full bg-[] flex justify-center py-8 sm:py-12">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-pink-500 mb-8 sm:mb-12">
          Categories
        </h1>
        <Slider {...settings}>
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoriesGrid;
