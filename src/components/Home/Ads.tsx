const Ads = () => {
  let pics = [4, 29, 17]
  return (
    <div className='text-white'>
      <div className='flex gap-8 flex-col md:flex-row mb-[--spacing-2xl]'>
        {pics.map((pic, i) => (
          <div key={i} style={{background:`url("../../../src/assets/images/Home/${pic}.png")`}} className={`flex-1 text-right rounded bg-center flex justify-start items-center p-3 text-xl`}>
            <div className='flex-1 h-[240px]'></div>
            <div className='flex-1'>
              <span className='text-gray-100'>سماعات ديجيتال</span>
              <h2 className='text-2xl font-bold'>أفضل صوت نقي</h2>
              <span>تسوق الان</span>
            </div>
          </div>
        ))}
      </div>
      <div className='flex-1 text-right bg-center rounded flex justify-start items-center text-xl bg-[url("../../../src/assets/images/Home/19.png")]'>
        <div className='flex-1'>
          <span className='text-gray-500'>سماعات ديجيتال</span>
          <h2 className='text-2xl font-bold'>أفضل صوت نقي</h2>
          <span>تسوق الان</span>
        </div>
        <div className='hidden lg:block lg:flex-1'></div>
        <div className='flex-1 h-[240px]'></div>
      </div>
    </div>
  )
}

export default Ads
