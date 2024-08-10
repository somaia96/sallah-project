import { Button } from '../ui/button'

const BestSale = () => {
  return (
    <div className='bg-bottom py-[--spacing-3xl] bg-cover bg-no-repeat flex justify-center items-center bg-[url("../../src/assets/images/Home/22.png")]'>
      <div className="container gap-5 flex-col md:flex-row flex justify-between items-center">
        <div className='flex-1 order-1'>
          <img src="../../src/assets/images/Home/0.png" alt="" />
        </div>
        <div className='flex-1 flex md:order-2 items-center md:items-start flex-col gap-5' dir='rtl'>
          <h1 className='font-bold text-4xl text-white'>افضل التخفيضات 2022</h1>
          <p className='text-gray-50 text-xl'>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات</p>
          <Button className='w-[fit-content] bg-[--primary] hover:text-teal-400 text-xl'>اكتشف المزيد</Button>
        </div>
      </div>

    </div>
  )
}

export default BestSale