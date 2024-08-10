const Rights = () => {
  let imgs = ["mada", "master", "paypal", "visa"]
  return (
    <div className='bg-[--color-BG] text-white'>
      <div className="container flex items-end md:flex-row md:items-center flex-col gap-[--spacing-xl] p-[--spacing-xl]">
        <div className="visa flex-1 md:flex gap-[--spacing-xl] items-center">
          <div className="imgs mb-[--spacing-xl] md:mb-0 flex items-center gap-[--spacing-lg]">
            {imgs.map((img, i) => (
              <div key={i} className='bg-white flex items-center w-[64px] h-[31px] p-[--spacing-lg]'>
                <img className='w-[100%]' src={`./src/assets/images/pay/${img}.png`} alt="" />
              </div>
            )
            )}
          </div>
          <div dir='rtl' className="tax flex items-center gap-[--spacing-lg]">
            <img className=' h-[20px]' src="./src/assets/images/pay/tax.jfif" alt="" />
            <span>546987552 : الرقم الضريبي</span>
          </div>
        </div>
        <h3 className='flex-1 md:flex-none lg:flex-1 text-end'>الحقوق محفوظة لمنصة سلة © 2023</h3>
      </div>
    </div>
  )
}

export default Rights
