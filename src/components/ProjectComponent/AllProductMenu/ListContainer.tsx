import * as React from "react"
import { IDataType } from "../../../interfaces";
import { Button } from "../../ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "../../ui/card"
// import cardImage from '../../../assets/images/1.jfif'
const ListContainer = () => {
  // let data=[1,2,3,4,5];
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    let tr= fetch("http://localhost:5173/src/data/data.json").then(data=>data.json()).then(data=>setData(data))
  }, [])
  // let r = [{"r":1,"s":"d"}];
//   type dataType= {
//     id: number,
//     name: string,
//     isNew: boolean,
//     discount: (string | number),
//     evaluation: number,
//     price: number,
//     picture: string,
//     category: string,
//     details: string

// }
  return (
    <div className='ListContainer md:w-auto lg:w-[893px] flex flex-col gap-[10px] lg:gap-[24px] w-[100%]'>
      {data?.map((item: IDataType)=>{
        return(
        <div key={item.id}>
        <Card className="flex justify-end h-[237px] w-[100%] overflow-hidden">
        <div className="w-[100%] max-w-[100%]">
        <CardContent dir="rtl" className="p-[8px] md:p-[16px]">
            <div className="grid w-full items-center gap-[2px] sm:gap-[4px]">
              <div className="text-[#62D0B6] space-y-1.5 text-[14px]">
              موبايلات
              </div>
              <div className="space-y-1.5 font-bold text-gray-600 text-[18px]">
              موبايل ابل ايفون 14 (128 جيجابايت) 
              </div>
              <div className="space-y-1.5 text-gray-400 text-[16px]">
              شاشة سوبر ريتينا XDR مقاس 6.1 بوصة
              </div>
              <div className="space-y-1.5 text-[14px] text-gray-300">
                *****
              </div>
              <div className="flex space-y-1.5 gap-3 font-bold text-[14px] text-[#F55157]">
              250.00 رس <del className="font-normal text-gray-300">350.00 ر.س</del>
              </div>
            </div>
        </CardContent>
        <CardFooter className="flex justify-center w-[100%]">
          <Button className="bg-transparent font-bold text-gray-600 w-[100%] border-2 border-gray-100">* أضف للسلة</Button>
        </CardFooter>
        </div>
        <div className="w-[235px] flex justify-center items-center relative">
        <span className={"hidden"}>jkhg</span>
          <img className="lg:h-[100%] w-[118px] lg:w-[235px] max-w-none overflow-hidden" src={item.picture} alt="" />
          </div>
  
      </Card>
        </div>
  
)      })}
    </div>
  )
}

export default ListContainer
