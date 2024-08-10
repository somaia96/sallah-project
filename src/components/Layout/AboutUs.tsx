const AboutUs = () => {
    let arrow = <i className="fa-solid fa-angles-left"></i>;
    let iconStyle = "fa-brands border border-gray-100 rounded-[50%] hover:text-teal-400 hover:border-[--primary] p-[--spacing-lg] w-[17px] "
    let icons = ["fa-facebook-f", "fa-twitter", "fa-instagram", "fa-snapchat"]
    type Info = {name:string;arr:(string[] | {app:string;number:string}[])}[];
    let infos:Info = [
        {
            name: "حسابي",
            arr: ["حسابي", "طلباتي", "سلة المشتريات", "المفضلة"]
        },
        {
            name: "روابط مهمة",
            arr: ["من نحن", "سياسة الخصوصية", "الشروط و الاحكام", "الدعم الفني"]
        },
        {
            name: "تواصل معنا",
            arr: [
                { app: "واتساب :", number: "009612345678932" },
                { app: "موبايل :", number: "009612345678932" },
                { app: "البريد :", number: "https://salla.sa" }
            ]
        }
    ]
    
    return (
        <div dir='rtl' className='py-[48px]'>
            <div className="container flex flex-col gap-[--spacing-2xl] md:flex-row">
                <div className="about flex-1">
                    <h3 className='font-bold mb-[--spacing-xl]'>عن متجرنا</h3>
                    <p className='text-gray-400'>متجر سلة من افضل المتاجر التى تقوم ببيع<br className='md:hidden' />
                        المنتجات الرقمية بأفضل الاسعار وماركات عالمية<br className='md:hidden' />
                        تسوق الان واطلع على المزيد من التصاميم<br className='md:hidden' />
                        واستمتع بأفضل العروض والخصومات
                    </p>
                </div>
                {infos.map((info, i) => {
                    return (
                        <div key={i} className="flex-1">
                            <h3 className='font-bold mb-[--spacing-xl]'>{info.name}</h3>
                            <ul className='text-gray-400'>
                                {info.arr.map((contact,index) => (
                                    <li key={index} className='hover:mr-[--spacing-lg] hover:text-teal-400'>{arrow} {!contact.app ? contact : contact.app}<br />
                                        {contact.number && <span>{contact.number}</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
                <div className="follow flex-1">
                    <h3 className='font-bold mb-[--spacing-xl]'>تابعنا على</h3>
                    <ul className='text-gray-400 flex gap-[--spacing-lg]'>
                        {icons.map((icon, i) => (
                            <li key={i} className={`${icon} ${iconStyle}`}></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
