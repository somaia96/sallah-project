import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion"
import { Label } from "../../ui/label"
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group"
import * as Slider from '@radix-ui/react-slider';
import ad from "../../../assets/images/svg.svg"
const Filter = () => {
  const [priceStart, setPriceStart] = useState(0)
  const [priceEnd, setPriceEnd] = useState(100)

  
  return (
    <div dir='rtl' className='Filter flex flex-col flex-1 gap-5'>
      <div className="content border rounded-[4px] overflow-hidden">
      <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1" className='px-5'>
        <AccordionTrigger className='font-bold'>الفئة</AccordionTrigger>
        <AccordionContent>
        <RadioGroup dir='rtl' defaultValue="comfortable">
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
        <RadioGroup dir='rtl' defaultValue="comfortable">
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
      defaultValue={[25,75]}
      max={100}
      step={1}
    >
     
      <Slider.Track className="bg-gray-100 relative grow rounded-full h-[3px]">
        <Slider.Range className="absolute bg-[#62D0B6] rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb
      id='PriceValueStart'
      onMouseOut={()=>setPriceStart(Number(document.getElementById("PriceValueStart").getAttribute('aria-valuenow')))}
        className="block w-3 overflow-hidden h-3 bg-[#62D0B6] rounded-[10px]"
        aria-label="Volume"
      />
      <Slider.Thumb
       id='PriceValueEnd'
       onMouseOut={()=>setPriceEnd(Number(document.getElementById("PriceValueEnd").getAttribute('aria-valuenow')))}
        className="block w-3 h-3 bg-[#62D0B6] rounded-[10px]"
        aria-label="Volume"
      />
    </Slider.Root>
  </form>

<div className="rangeInput flex justify-between gap-3 max-w-[100%] mt-3">
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
        <RadioGroup dir='rtl' defaultValue="comfortable">
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
        <RadioGroup dir='rtl' defaultValue="comfortable">
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
      <div className="img">
      <img className="" src={ad} alt="" />

      </div>
    </div>
  )
}

export default Filter
