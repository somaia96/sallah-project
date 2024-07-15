import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Label } from "../ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import * as Slider from '@radix-ui/react-slider';
import ad from "../../assets/images/svg.svg"
const Filter = () => {
  const [priceStart, setPriceStart] = useState<number>(0)
  const [priceEnd, setPriceEnd] = useState<number>(100)
  const [closey, setClosey] = useState<number>(1)
  function handleClick() {
      setClosey(1)
  }
  return (
    <div dir='rtl' className={(closey?"hidden":"flex")+' Filter z-10 sm:[position:unset] fixed bg-opacity-90 sm:relative w-[100%] sm:w-[auto] right-0 top-0 text-black bg-[#1D1F1F] sm:bg-opacity-100 h-[100vh] sm:h-[auto] flex sm:flex flex-col gap-5'}>
      <div className="content closed border rounded-[4px] flex-col w-[342px] sm:w-[100%] bg-white right-0 top-0 h-[100%] sm:[position:unset] overflow-hidden z-10 fixed">
      <div onClick={handleClick}>
      <i className=" fa-solid fa-close close sm:hidden"></i>
      </div>
      <h3 className="sm:hidden sm:m-0 px-[--spacing-xl] sm:w-0 my-4" dir="rtl">فلترة المنتجات</h3>
      <hr className="sm:hidden sm:w-0 sm:m-0 w-[120%] mx-[-20%]" />
      <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1" className='px-5'>
        <AccordionTrigger className='font-bold'>الفئة</AccordionTrigger>
        <AccordionContent>
        <RadioGroup className='text-gray-600' dir='rtl' defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">الكل</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
    </RadioGroup>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className='px-5'>
        <AccordionTrigger className='font-bold'>الفئة</AccordionTrigger>
        <AccordionContent>
        <RadioGroup className='text-gray-600' dir='rtl' defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">الكل</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
    </RadioGroup>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className='px-5'>
        <AccordionTrigger className='font-bold'>الفئة</AccordionTrigger>
        <AccordionContent>
          <br />
          <form>
    <Slider.Root
      className="relative flex items-center select-none touch-none w-[100%] h-5"
      defaultValue={[0,100]}
      max={100}
      step={1}
    >
     
      <Slider.Track className="bg-gray-100 relative grow rounded-full h-[3px]">
        <Slider.Range className="absolute bg-[--primary] rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb
      id='PriceValueStart'
      onMouseOut={()=>setPriceStart(Number(document.getElementById("PriceValueStart")!.getAttribute('aria-valuenow')))}
        className="block w-3 overflow-hidden h-3 bg-[--primary] rounded-[10px]"
        aria-label="Volume"
      />
      <Slider.Thumb
       id='PriceValueEnd'
       onMouseOut={()=>setPriceEnd(Number(document.getElementById("PriceValueEnd")!.getAttribute('aria-valuenow')))}
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

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className='px-5'>
        <AccordionTrigger className='font-bold'>الفئة</AccordionTrigger>
        <AccordionContent>
        <RadioGroup className='text-gray-600' dir='rtl' defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">الكل</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
    </RadioGroup>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className='px-5'>
        <AccordionTrigger className='font-bold'>الفئة</AccordionTrigger>
        <AccordionContent>
        <RadioGroup className='text-gray-600' dir='rtl' defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">الكل</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">*****</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">****</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">***</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">**</Label>
      </div>
    </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
      <div className="img hidden md:block">
      <img className="" src={ad} alt="" />
      </div>
    </div>
  )
}

export default Filter
