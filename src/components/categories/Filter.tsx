import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Label } from "../ui/label"
import { IFilter } from "../../interfaces"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import * as Slider from '@radix-ui/react-slider';
import Stars from '../stars/Stars'
import SideSvg from '../../assets/SVG/SideSvg'
const Filter = ({mobile}:{mobile:boolean}) => {
  const [priceStart, setPriceStart] = useState<number>(0)
  const [priceEnd, setPriceEnd] = useState<number>(100)
  const [filters, setFilters] = React.useState([])
  React.useEffect(() => {
    fetch("http://localhost:5173/src/data/filter.json").then(data => data.json()).then(data => setFilters(data))
  }, [])
  return (
    <div dir='rtl' className={mobile?"hidden z-10 right-0 top-0 text-black bg-[#1D1F1F] h-[100vh] fixed w-[100%] bg-opacity-90":" Filter md:[position:unset] md:relative md:w-[auto] md:bg-white md:bg-opacity-100 md:h-[auto] flex flex-col gap-5"}>
      <div className={mobile?" bg-white right-0 top-0 h-[100%] w-[342px] z-10 fixed":" content closed border rounded-[4px] flex-col md:w-[100%] md:h-[auto] md:[position:unset] overflow-hidden"}>
        <Accordion type="multiple" className="w-full">
          {filters.map((filter: IFilter, index) => {
            return (
              <AccordionItem key={index} value={"item-" + (index + 1)} className='px-5'>
                <AccordionTrigger className='text-[16px] text-gray-600 font-[500]'>{filter.filter}</AccordionTrigger>
                <AccordionContent>
                  {filter.filter == "السعر" ? (<>
                    <br />
                    <form>
                      <Slider.Root
                        className="relative flex items-center select-none touch-none w-[100%] h-5"
                        defaultValue={[0, 100]}
                        max={100}
                        step={1}
                      >
                        <Slider.Track className="bg-gray-100 relative grow rounded-full h-[3px]">
                          <Slider.Range className="absolute bg-[--primary] rounded-full h-full" />
                        </Slider.Track>
                        <Slider.Thumb
                          id='PriceValueStart'
                          onMouseOut={() => setPriceStart(Number(document.getElementById("PriceValueStart")!.getAttribute('aria-valuenow')))}
                          className="block w-3 overflow-hidden h-3 bg-[--primary] rounded-[10px]"
                          aria-label="Volume"
                        />
                        <Slider.Thumb
                          id='PriceValueEnd'
                          onMouseOut={() => setPriceEnd(Number(document.getElementById("PriceValueEnd")!.getAttribute('aria-valuenow')))}
                          className="block w-3 h-3 bg-[--primary] rounded-[10px]"
                          aria-label="Volume"
                        />
                      </Slider.Root>
                    </form>
                    <div className="text-gray-600 rangeInput flex justify-between gap-3 max-w-[100%] mt-3">
                      <div>
                        <span>من</span>
                        <input className='my-3 border rounded-[4px] h-[33px] max-w-[119px]' value={priceStart} type="number" />
                      </div>
                      <div>
                        <span>الى</span>
                        <input className='my-3 border rounded-[4px] h-[33px] max-w-[119px]' value={priceEnd} type="number" />
                      </div>
                    </div>
                  </>) : <RadioGroup className='text-gray-600' dir='rtl' defaultValue="default">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="default" id={"r" + (index + 1)} />
                      <Label htmlFor={"r" + (index + 1)}>الكل</Label>
                    </div>
                    {filter.data?.map((content,i) => {
                      return (
                        <div key={i} className="flex items-center gap-1">
                          <RadioGroupItem value={content.name ? content.name : `${content.id}`} id={"r" + index + i + 2} />
                          <Label className='flex items-start gap-2 text-gray-400 text-[14px]' htmlFor={"r" + index + i + 2}>
                            {content.color && <span style={{background:content.color}} className="inline-block w-[20px] h-[20px] rounded-[50%]"></span>}
                            {content.name && content.name}
                            {!content.name && 
                              <div className='flex'>
                                <Stars star={content.id}/>
                              </div>
                            }
                          </Label>
                        </div>
                      )
                    })}
                  </RadioGroup>}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
      <div className="img hidden md:block">
        <SideSvg/>
      </div>
    </div>
  )
}

export default Filter
