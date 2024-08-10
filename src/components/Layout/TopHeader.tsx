import SaudiSvg from "../../assets/SVG/SaudiSvg"
import { Separator } from "../ui/separator"
import PhoneSvg from "../../assets/SVG/PhoneSvg"
import { Fragment } from "react/jsx-runtime"
const TopHeader = () => {
  let navItems = ["تواصل معنا", "سياسة الإستبدال أو الاسترجاع", "المفضلة"]
  return (
    <div className='TopHeader p-[--spacing-lg] bg-gray-50 text-gray-400'>
      <div className="container flex justify-center md:justify-between">
        <div className="contact hidden md:block flex gap-4">
          <ul className='flex h-3 items-center space-x-4 text-sm'>
            {navItems.map((item, i) => (
              <Fragment key={i}>
                <li>{item}</li>
                <Separator orientation="vertical" />
              </Fragment>
            ))}
            <li className='flex gap-1 items-center' dir='rtl'><span>
              <SaudiSvg />
            </span>العربية - رس</li>
          </ul>
        </div>
        <div className="numbers flex gap-4">
          <div className="flex h-3 items-center space-x-4 text-sm">
            <span className='flex items-center gap-2'>support@salla.sa <i className="text-teal-400 fa-regular fa-envelope"></i></span>
            <Separator orientation="vertical" />
            <span className='flex items-center gap-2'>+966556754472
              <PhoneSvg />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
