import TestimonialCard from './TestimonialCard';

const customers = [
    {
      fullName: 'Liam Johnson',
      image: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg",
      rating: [1, 1, 1, 0.5, 0.5],
      says: `The service was wonderful and the food was delicious! I highly recommend this place to anyone looking for a great experience.`,
    },
    {
      fullName: 'Brandon Williams',
      image: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg",
      rating: [1, 1, 1, 1, 1],
      says: `A perfect spot for a family dinner. The ambiance was cozy, and everything we ordered was flavorful and beautifully presented.`,
    },
    {
      fullName: 'Jackson Lee',
      image: "https://cdn.pixabay.com/photo/2017/07/26/16/32/woman-2542252_1280.jpg",
      rating: [1, 1, 1, 1, 1],
      says: `Amazing experience! The staff was friendly, and the dishes were authentic and fresh. Definitely coming back here soon.`,
    },
    {
      fullName: 'Emily Chen',
      image: "https://cdn.pixabay.com/photo/2021/02/10/08/02/woman-6001254_1280.jpg",
      rating: [1, 1, 1, 1, 0.5],
      says: `The food was delightful, especially the desserts! A must-visit for anyone who loves good food and great atmosphere.`,
    },
    {
        fullName: 'David Martinez',
        image: "https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_1280.jpg",
        rating: [1, 1, 1, 1, 1],
        says: `An outstanding dining experience! The flavors were rich, and the staff made us feel welcome. Can't wait to come back!`,
      }
      
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Our Customer's reviews</h2> {/* Title is outside the .container */}
      <div className="container">
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
      </div>
    </section>
  );
};

export default Testimonials;
