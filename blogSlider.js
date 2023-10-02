import React from 'react';
import BlogCard from './BlogCard';

const BlogSlider = () => {
  // Definir los datos de los blogs aquí o cargarlos desde una fuente de datos
  const blogData = [
    {
      imageUrl:
        'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp',
      date: '26 December 2019',
      title: 'Lorem Ipsum Dolor 1',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
    },
    {
      imageUrl:
        'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp',
      date: '26 December 2019',
      title: 'Lorem Ipsum Dolor 2',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
    },
    // Agregar más datos de blogs aquí
  ];

  return (
    <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      <div className="blog-slider__pagination"></div>
    </div>
  );
};

export default BlogSlider;
