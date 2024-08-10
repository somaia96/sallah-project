import Head from './Head'

const Articles = () => {
  let pics =["9.jfif","10.png","7.jfif"]
  return (
    <div className='py-5'>
      <Head title="احدث المقالات" description='تسوق احدث المنتجات المميزة المضافة جديد' />
      <div className='flex flex-col md:flex-row gap-8'>
       {pics.map((pic,i)=>(
         <div key={i} className='flex-1 flex flex-col gap-5 items-center text-center text-lg'>
         <div className='w-[100%] relative flex items-center justify-center md:h-[133px] lg:h-[184px] overflow-hidden'>
           <span className='flex rounded flex-col items-center justify-center bg-white py-1 px-2 font-bold absolute top-[20px] right-[20px] text-[16px] [line-height:15px]'>18<span className='font-normal'>يناير</span></span>
           <img className='w-[100%] h-[auto]' src={`../../src/assets/images/Home/${pic}`} alt="" />
         </div>
         <h2 className='font-bold'>مدى تأثير التكنولوجيا على حياة الإنسان</h2>
         <p className='text-gray-400'>لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات المطلوبة، إذا لم يكن لديك فكرة، سنشارك في هذه المقالة قائمة أنواع المنتجات</p>
       </div>
       ))}
       
      </div>
    </div>
  )
}

export default Articles
