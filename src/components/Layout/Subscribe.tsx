import { Button } from '../ui/button'
const Subscribe = () => {
    return (
        <div className='bg-gray-50 py-[--spacing-2xl]' dir='rtl'>
            <div className="container flex flex-col md:flex-row gap-[24px]">
                <div className="sub flex-1 flex items-center gap-[--spacing-xl]">
                    <i className="fa-regular fa-envelope fa-xl text-teal-400 bg-[#D6F8F0] p-[--spacing-xl] rounded-[50px]"></i>
                    <div className="content">
                        <h3 className='font-bold text-[18px] mb-[4px]'>الاشتراك فى النشرة البريدية</h3>
                        <p className='text-[14px]'>انضم الآن واحصل على خصم 10٪ على مشترياتك التالية!</p>
                    </div>
                </div>
                <div className="email flex-1">
                    <h4 className='font-bold mb-[--spacing-xl]'>يمكنك إلغاء الاشتراك في أي لحظة</h4>
                    <div className="input gap-[--spacing-lg] flex">
                        <input className='flex-1 p-[--spacing-lg]' type="email" placeholder='ادخل البريد الالكترونى' name="email" id="email" />
                        <Button className='bg-[--primary]'>اشترك</Button>
                    </div>
                </div>
                <div className="apps flex-1">
                    <h3 className='font-bold'>تطبيقات الجوال</h3>
                    <div className='flex mt-[--spacing-xl] gap-[--spacing-lg]'>
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Button key={i} className='px-[--spacing-lg] py-[24px] bg-[--color-BG] gap-[--spacing-lg]'>
                                <div>
                                    <span>Download on the</span>
                                    <br />
                                    <span className='font-bold'>App Store</span>
                                </div>
                                <i className="fa-brands fa-apple fa-2xl"></i>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
