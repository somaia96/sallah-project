import React from 'react'

const AboutUs = () => {
  return (
    <div dir='rtl' className='py-[48px]'>
        <div className="container flex flex-col gap-[--spacing-2xl] md:flex-row">
            <div className="about flex-1">
                <h3 className='font-bold mb-[--spacing-xl]'>عن متجرنا</h3>
                <p className='text-gray-400'>متجر سلة من افضل المتاجر التى تقوم ببيع<br className='md:hidden'/> المنتجات الرقمية بأفضل الاسعار وماركات عالمية<br className='md:hidden'/> تسوق الان واطلع على المزيد من التصاميم<br className='md:hidden'/> واستمتع بأفضل العروض والخصومات</p>
                </div>
            <div className="acount flex-1">
                <h3 className='font-bold mb-[--spacing-xl]'>حسابي</h3>
                <ul className='text-gray-400'>
                    <li className='hover:mr-[--spacing-lg] hover:text-[--primary]'><i className="fa-solid fa-angles-left"></i> حسابي</li>
                    <li className='hover:mr-[--spacing-lg] hover:text-[--primary]'><i className="fa-solid fa-angles-left"></i> طلباتي</li>
                    <li className='hover:mr-[--spacing-lg] hover:text-[--primary]'><i className="fa-solid fa-angles-left"></i> سلة المشتريات</li>
                    <li className='hover:mr-[--spacing-lg] hover:text-[--primary]'><i className="fa-solid fa-angles-left"></i> المفضلة</li>
                </ul>
                </div>
            <div className="links flex-1">
                <h3 className='font-bold mb-[--spacing-xl]'>روابط مهمة</h3>
                <ul className='text-gray-400'>
                    <li className='hover:mr-[--spacing-lg] hover:text-[--primary]'><i className="fa-solid fa-angles-left"></i> من نحن</li>
                    <li className='hover:mr-[--spacing-lg] hover:text-[--primary]'><i className="fa-solid fa-angles-left"></i> سياسة الخصوصية</li>
                    <li className='hover:mr-[--spacing-lg] hover:text-[--primary]'><i className="fa-solid fa-angles-left"></i> الشروط و الاحكام</li>
                    <li className='hover:mr-[--spacing-lg] hover:text-[--primary]'><i className="fa-solid fa-angles-left"></i> الدعم الفني</li>
                </ul>
                </div>
            <div className="contact flex-1">
                <h3 className='font-bold mb-[--spacing-xl]'>تواصل معنا</h3>
                <ul className='text-gray-400'>
                    <li className='hover:mr-[--spacing-lg] hover:text-[--primary]'><i className="fa-solid fa-angles-left"></i> واتساب :<br/>
                    <span>009612345678932</span></li>
                    <li className='hover:mr-[--spacing-lg] hover:text-[--primary]'><i className="fa-solid fa-angles-left"></i> موبايل :<br/>
                    <span>009612345678932</span></li>
                    <li className='hover:mr-[--spacing-lg] hover:text-[--primary]'><i className="fa-solid fa-angles-left"></i> البريد:<br/>
                    <span>https://salla.sa</span></li>
                </ul>
                </div>
            <div className="follow flex-1">
                <h3 className='font-bold mb-[--spacing-xl]'>تابعنا على</h3>
                <ul className='text-gray-400 flex gap-[--spacing-lg]'>
                    <li className="fa-brands border border-gray-100 w-[17px] hover:text-[--primary] hover:border-[--primary] rounded-[50%] fa-facebook-f p-[--spacing-lg]"></li>
                    <li className="fa-brands border border-gray-100 rounded-[50%] fa-twitter p-[--spacing-lg] hover:text-[--primary] hover:border-[--primary]"></li>
                    <li className="fa-brands border border-gray-100 rounded-[50%] fa-instagram p-[--spacing-lg] hover:text-[--primary] hover:border-[--primary]"></li>
                    <li className="fa-brands border border-gray-100 rounded-[50%] fa-snapchat p-[--spacing-lg] hover:text-[--primary] hover:border-[--primary]"></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
