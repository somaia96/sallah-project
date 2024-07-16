import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  // type CarouselApi,
} from "../ui/carousel"
import { Button } from '../ui/button'
const Slider = () => {
  // const [api, setApi] = React.useState<CarouselApi>()
  // const [current, setCurrent] = React.useState(0)
  // const [count, setCount] = React.useState(0)
 
  // React.useEffect(() => {
  //   if (!api) {
  //     return
  //   }
 
  //   setCount(api.scrollSnapList().length)
  //   setCurrent(api.selectedScrollSnap() + 1)
 
  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap() + 1)
  //   })
  // }, [api])
 
  return (
    <div className='bg-bottom bg-cover bg-no-repeat flex justify-center items-center bg-[url("../../src/assets/images/Home/39.png")]'>
 <Carousel 
//  plugins={[
//         Autoplay({
//           delay: 2000,
//         }),
//       ]} 
      opts={{
    align: "start",
    loop: true,
  }} 
  // setApi={setApi} 
  className="container max-w-3xl">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className='border-0 bg-transparent'>
                <CardContent className="flex text-center gap-9 flex-col aspect-square items-center justify-center p-6">
                  
                  <h1 className='font-bold text-4xl text-white'>افضل التخفيضات 2022</h1>
                  <p className='text-gray-50 text-xl'>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات</p>
                  <Button className='bg-[--primary] hover:text-[--primary] text-xl'>اكتشف المزيد</Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=' bg-[transparent]  text-white' />
        <CarouselNext className=' bg-[transparent]  text-white' />
      </Carousel>
      {/* <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div> */}
    </div>
  )
}

export default Slider
