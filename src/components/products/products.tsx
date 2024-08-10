import React from "react"
import { IDataType } from "../../interfaces";
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "../ui/card";
import Stars from "../stars/Stars";
import CartSvg from "../../assets/SVG/CartSvg";
type grid = {
  grid: number,
  startIndex?:number,
  endIndex?:number
}
const Products = ({ grid,startIndex,endIndex}: grid) => {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    fetch("/src/data/data.json")
    .then(data => data.json())
    .then(data => setData(data))
  }, [])
  return (
    <div className={grid ? 'grid w-[100%] grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3' :
      'ListContainer md:w-auto flex flex-col gap-[10px] lg:gap-[24px] w-[100%]'}
    >
      {data?.slice(startIndex, endIndex).map((item: IDataType) => {
        return (
          <div key={item.id} className="relative">
            <span className={(item.isNew ? "new bg-[--primary]" : item.discount != 0 ? "discount bg-[#F55157]" : "hidden") + " relative top-[60px] left-[calc(100%-212px)] text-white p-2 z-[1]"}>{item.isNew && "جديد"}{item.discount != 0 && "خصم 25%"}</span>
            <Card className={grid ? 'flex flex-col-reverse border overflow-hidden' :
              "flex justify-end h-[237px] w-[100%] overflow-hidden"}>
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
                    <Stars star={item.evaluation}/>
                      <span> ({item.evaluation}) </span>
                    </div>
                    <div className="flex space-y-1.5 gap-3 font-bold text-[14px] text-[#F55157]">
                      250.00 رس <del className="font-normal text-gray-300">350.00 ر.س</del>
                    </div>
                  </div>
                </CardContent>
                <CardFooter dir="rtl" className="flex justify-center items-stretch gap-2 w-[100%]">
                  <Button dir="rtl" className="font-bold flex gap-2 bg-transparent font-bold text-gray-600 w-[100%] border-2 border-gray-100">
                    <CartSvg width="17" height="16"/>
                    أضف للسلة</Button>
                  <div className="border-2 p-2 text-gray-400 flex items-center justify-center rounded-[5px]">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </CardFooter>
              </div>
              <div className={(grid ? "w-[auto]" : "w-[235px]") + " flex justify-center items-center relative"}>
                <img className={(grid ? "" : "w-[118px]") + " lg:h-[100%] lg:w-[235px] max-w-none overflow-hidden"} src={item.picture} alt="" />
              </div>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default Products
