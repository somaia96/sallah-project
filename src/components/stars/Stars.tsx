const Stars = ({star}:{star:number}) => {
    let stars = [];
        for (let i = 0; i <  Math.floor(star); i++) {
          stars.push(<i key={i} className="text-[#FFC62A] fa-solid fa-star"></i>);
        }
        
        if (Math.floor(star) != star && Math.ceil(star) != star) {
            stars.push(<i key={15} className="text-[#FFC62A] fa-regular fa-star-half-stroke"></i>);
          }
        for (let i = 0; i <  Math.floor(5 - star); i++) {
          stars.push(<i key={5 + i} className="text-gray-300 fa-solid fa-star"></i>);
        }
  return (
    <>
      {stars}
    </>
  )
}

export default Stars
