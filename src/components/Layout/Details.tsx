import { Button } from "../ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Link } from 'react-router-dom';
import SallahSvg from "../../assets/SVG/SallahSvg"
import UserSvg from "../../assets/SVG/UserSvg"
import CartSvg from "../../assets/SVG/CartSvg"
import { Fragment } from "react/jsx-runtime";

const Details = () => {
  let login = [
    { icon: <UserSvg />, label1: "مرحبا بك", label2: "تسجيل الدخول" },
    { icon: <CartSvg width='24' height='24' />, label1: "سلة المشتريات", label2: "1200 رس" }
  ]
  return (
    <div dir='rtl' className='Details py-[--spacing-xl]'>
      <div className="container flex flex-wrap md:items-center justify-between md:gap-[--spacing-3xl]">
        <Link to="/products">
          <div className="logo flex items-center md:order-1">
            <Sheet>
              <SheetTrigger asChild>
                <Button>
                  <i className="fa-solid text-teal-400 ml-[--spacing-xl] fa-2xl fa-bars md:hidden"></i>
                </Button>
              </SheetTrigger>
              <SheetContent className="p-0">
                <SheetHeader>
                  <SheetTitle>
                    <h3 className="md:hidden md:m-0 px-[--spacing-xl] md:w-0 my-4" dir="rtl">جميع الاقسام</h3>
                  </SheetTitle>
                  <SheetDescription>
                    <hr />
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 md:py-4">
                  <Accordion type="multiple" className="w-full">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <AccordionItem key={i} value={`item-${i}`} className='px-5'>
                        <AccordionTrigger dir="rtl" className='font-bold'>كل المنتجات</AccordionTrigger>
                        <AccordionContent dir="rtl">
                          <div className="flex items-center gap-2">
                            الكل
                          </div>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="flex items-center gap-2">
                              Default
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
            <SallahSvg />
            <h2 className='font-bold text-gray-600 font-[700] [letter-spacing:2px]'>متجر<br />سلة</h2>
          </div>
        </Link>
        <div className="cart flex gap-[--spacing-lg] md:order-3">
          {login.map((log, i) => (
            <Fragment key={i}>
              <div className='bg-gray-50 rounded-[50%] p-[16px]'>
                {log.icon}
              </div>
              <div className={(i==0 ? 'hidden ':"") +'md:block'}>
                <h3 className='text-gray-600'>{log.label1}</h3>
                <h3 className='text-black font-bold'>{log.label2}</h3>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="search mt-4 md:mt-0 w-[100%] md:flex-1 md:order-2">
          <input className='border w-[100%] p-[--spacing-lg]' type="search" placeholder='ابحث عن ما تريد' name="search" id="search" />
        </div>
      </div>
    </div>
  )
}

export default Details
