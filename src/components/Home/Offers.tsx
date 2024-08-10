import Head from './Head'
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "../ui/card";
import Stars from '../stars/Stars';
import CartSvg from '../../assets/SVG/CartSvg';
const Offers = () => {
  let dateArr = [
    { num: "02", unit: "يوم" },
    { num: "16", unit: "ساعة" },
    { num: "55", unit: "دقيقة" },
    { num: "55", unit: "يوم" }
  ]
  return (
    <div className='py-5'>
      <Head title="عروض تنتهى قريبا" description='تسوق احدث المنتجات المميزة المضافة جديد' />
      <div className='flex flex-col sm:flex-row gap-3'>
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="relative flex-1">
            <span className="new bg-[--primary] relative top-[60px] left-[17%] md:left-[65%] lg:left-[calc(100%-212px)] text-white p-2 z-[1]">جديد</span>
            <Card className='flex flex-col-reverse md:flex-row border justify-end w-[100%] overflow-hidden'>
              <div className="w-[100%] max-w-[100%]">
                <CardContent dir="rtl" className="p-[--spacing-lg] md:p-[--spacing-xl]">
                  <div className="grid w-full items-center gap-[2px] sm:gap-[4px]">
                    <div className="text-teal-400 space-y-1.5 text-[14px]">
                      موبايلات
                    </div>
                    <div className="space-y-1.5 font-bold text-gray-600 text-[18px]">
                      موبايل ابل ايفون 14 (128 جيجابايت)
                    </div>
                    <div className="space-y-1.5 text-gray-400 text-[--spacing-xl]">
                      شاشة سوبر ريتينا XDR مقاس 6.1 بوصة
                    </div>
                    <div className="space-y-1.5 text-[14px] text-gray-300">
                      <Stars star={5} />
                    </div>
                    <div className="flex space-y-1.5 gap-3 font-bold text-[14px] text-[#F55157]">
                      250.00 رس <del className="font-normal text-gray-300">350.00 ر.س</del>
                    </div>
                    <div className='flex gap-2 font-bold mt-3'>
                      {dateArr.map((date, i) => (
                        <div key={i} className="flex-1 flex py-1 flex-col justify-center items-center bg-gray-50">
                          <h2>{date.num}</h2>
                          <p className='text-gray-300'>{date.unit}</p>
                        </div>
                      )
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter dir="rtl" className="flex justify-center items-stretch gap-2 w-[100%]">
                  <Button dir="rtl" className="font-bold flex hover:bg-[--primary] hover:text-white gap-2 bg-transparent font-bold text-gray-600 w-[100%] border-2 border-gray-100">
                    <CartSvg width="17" height="16" />
                    أضف للسلة</Button>
                  <div className="border-2 p-2 hover:bg-[--primary] hover:text-white text-gray-400 flex items-center justify-center rounded-[5px]">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </CardFooter>
              </div>
              <div className="w-[auto] w-[235px] flex justify-center items-center relative">
                <img className="w-[118px] lg:h-[100%] lg:w-[235px] max-w-none overflow-hidden" src="../../src/assets/images/Home/11.jfif" alt="" />
              </div>
            </Card>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default Offers
