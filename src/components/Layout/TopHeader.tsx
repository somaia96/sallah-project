import React from 'react'
import { Separator } from "../ui/separator"
const TopHeader = () => {
  return (
    <div className='TopHeader p-[--spacing-lg] bg-gray-50 text-gray-400'>
      <div className="container flex justify-center md:justify-between">
        <div className="contact hidden md:block flex gap-4">
          <ul className='flex h-3 items-center space-x-4 text-sm'>
            <li>تواصل معنا</li>

            <Separator orientation="vertical" />
            <li>سياسة الإستبدال أو الاسترجاع</li>
            <Separator orientation="vertical" />
            <li>المفضلة</li>

            <Separator orientation="vertical" />
            <li className='flex gap-1 items-center' dir='rtl'><span>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0.5C3.58873 0.5 0 4.08873 0 8.5C0 12.9113 3.589 16.5 8 16.5C12.411 16.5 16 12.9113 16 8.5C16 4.08873 12.4113 0.5 8 0.5Z" fill="#008C56" />
                <path d="M11.5354 5.20325C11.706 5.41289 11.8804 5.63589 12.0556 5.86876C12.0925 6.34359 12.1023 6.77863 12.1397 7.25426C12.1344 7.45776 12.0719 7.72776 12.0126 7.75339C12.0126 7.75339 11.9221 7.80547 11.8615 7.74779C11.8174 7.73016 11.6414 7.45429 11.6414 7.45429C11.5514 7.37177 11.4913 7.39527 11.4272 7.45429C11.2504 7.62494 11.1706 7.94461 11.0504 8.16466C11.0194 8.2138 10.9321 8.25573 10.8352 8.16092C10.6333 7.88532 10.6936 7.51438 10.7051 7.45696L10.7024 7.46844C10.4832 7.71574 10.5801 8.12514 10.6298 8.21327C10.7022 8.35801 10.7606 8.45068 10.9014 8.52199C11.0296 8.61626 11.1294 8.55751 11.1845 8.49128C11.3135 8.35775 11.3151 8.01591 11.3757 7.94808C11.4181 7.8239 11.5244 7.84526 11.5765 7.90028C11.6267 7.97265 11.6863 8.01965 11.7602 8.05891C11.8804 8.16493 12.0241 8.18443 12.1656 8.08748C12.2623 8.03327 12.3251 7.96277 12.3817 7.82363C12.4423 7.66126 12.4124 6.80961 12.3988 6.33585C12.4896 6.46377 12.5793 6.59463 12.6685 6.72682C12.7078 7.14263 12.7254 7.5523 12.7126 7.94487C12.7032 8.02286 12.985 7.71173 12.9831 7.56432C12.9818 7.43533 12.9834 7.31836 12.9831 7.20966C13.1201 7.42773 13.2514 7.64928 13.377 7.8741C13.4545 7.83298 13.428 7.39447 13.3789 7.33384C13.248 7.11432 13.0803 6.87691 12.9505 6.69317C12.9249 6.46137 12.8899 6.1879 12.8741 6.10431C12.8493 5.97372 12.8245 5.77743 12.7871 5.62254C12.7769 5.56191 12.7457 5.36856 12.7556 5.35014C12.7708 5.30687 12.8285 5.35147 12.857 5.30126C12.8995 5.2548 12.7096 4.76287 12.6132 4.6224C12.5785 4.55938 12.5158 4.58127 12.4383 4.68356C12.3665 4.75086 12.3926 4.90468 12.4201 5.05076C12.4914 5.42331 12.5553 5.80253 12.6057 6.18095C12.5123 6.04208 12.3985 5.87437 12.2863 5.71253L12.2719 5.63883C12.2719 5.63215 12.2564 5.33411 12.2434 5.26307C12.2409 5.23423 12.2343 5.22595 12.2644 5.22969C12.2965 5.25667 12.3008 5.258 12.3208 5.26708C12.3531 5.27296 12.3814 5.21821 12.3619 5.16773L12.0618 4.61305C12.0497 4.6013 12.0361 4.58875 12.0206 4.58635C12.0051 4.58395 11.988 4.59169 11.9691 4.61973C11.9456 4.64019 11.9267 4.66547 11.9139 4.69386C11.901 4.72225 11.8944 4.75308 11.8946 4.78424C11.9034 4.91537 11.9269 5.0497 11.9357 5.18109L11.9453 5.2337C11.9348 5.22014 11.9236 5.20704 11.9119 5.19444C11.6561 4.92578 12.0294 5.15064 11.8631 4.94287C11.7223 4.78851 11.6812 4.73937 11.561 4.64644C11.5007 4.60745 11.4641 4.53294 11.4443 4.65979C11.4366 4.77142 11.4283 4.90041 11.4358 4.99441C11.4344 5.04702 11.4886 5.1453 11.5354 5.20325ZM5.2352 7.17735C5.23227 7.22595 5.36927 7.28497 5.37755 7.39714C5.39704 7.44334 5.34817 7.59182 5.38903 7.60544C5.42642 7.62093 5.4785 7.50289 5.49799 7.39313C5.50894 7.33304 5.45099 7.12287 5.35271 7.08521C5.33738 7.08182 5.32165 7.08056 5.30598 7.08147C5.25844 7.08495 5.21598 7.11032 5.2352 7.17735Z" fill="white" />
                <path d="M11.949 6.35846C11.9454 6.3579 11.9418 6.35827 11.9384 6.35953C11.9384 6.35953 11.3551 6.77427 11.3407 6.78896C11.2827 6.84024 11.3118 7.02104 11.3407 7.0002C11.3826 7.01623 11.9696 6.61831 11.9584 6.57184C11.984 6.57318 11.9966 6.36701 11.949 6.35846ZM13.0213 5.41281C13.0418 5.47584 12.99 5.67907 13.0328 5.69776C13.072 5.71886 13.127 5.55729 13.1476 5.408C13.1588 5.32628 13.0985 5.03946 12.9956 4.98819C12.9875 4.98601 12.9792 4.98476 12.9708 4.98445C12.9121 4.98231 12.848 5.02691 12.8733 5.11451C12.8584 5.16231 12.9986 5.32415 13.0213 5.41281ZM11.6208 6.36327C11.623 6.24496 11.6344 6.0874 11.6409 5.98939C11.6435 5.95253 11.6523 5.91167 11.6876 5.90233C11.7231 5.89298 11.7845 5.93785 11.7851 5.89939C11.7787 5.82408 11.7634 5.71298 11.721 5.66037C11.7103 5.64499 11.6962 5.63232 11.6798 5.62337C11.6634 5.61441 11.6451 5.60944 11.6264 5.60883C11.5647 5.60589 11.4988 5.64595 11.482 5.73034C11.4822 5.78001 11.5044 5.80752 11.5001 5.85265C11.4937 5.87856 11.467 5.89538 11.4034 5.86521C11.4133 5.85613 11.3623 5.78402 11.3623 5.78402C11.3129 5.75384 11.2467 5.78562 11.2037 5.81366C11.1882 5.84302 11.179 5.87523 11.1765 5.90831C11.174 5.94138 11.1784 5.97462 11.1893 6.00595C11.2606 6.13707 11.5044 6.36113 11.6208 6.36327ZM9.14065 7.13587L9.14172 7.1348L9.14279 7.13373L9.14386 7.13267V7.1308C9.14409 7.12755 9.14373 7.12429 9.14279 7.12118L9.08724 7.0886L7.99444 7.08379C7.98387 7.0802 7.97388 7.07507 7.9648 7.06857L7.96293 7.0667L7.96213 7.06563L7.96106 7.06457L7.96026 7.0627L7.95919 7.06163V7.06056L7.95812 7.05949V7.05095L7.95919 7.04988L7.96026 7.04801C7.9656 7.0408 7.97842 7.03412 7.99471 7.02798C8.25562 6.99246 8.71924 6.91635 8.74995 6.47063C8.74514 6.23829 8.6506 6.08633 8.36565 6.04414C8.15628 6.06043 8.00699 6.26286 8.03103 6.48585C8.02115 6.54594 8.05132 6.66371 7.9899 6.67706C7.58825 6.71365 7.14974 6.96549 7.13505 7.14548H7.13398L7.13291 7.14655L7.13104 7.14762H7.12917L7.12623 7.14869H7.12063C7.11937 7.14837 7.11812 7.14801 7.11689 7.14762C7.09072 7.14041 7.05707 7.09715 7.06241 7.03679C7.04719 6.7254 6.9457 6.37315 6.78707 6.10182C6.73045 6.0452 6.70562 6.02224 6.68959 6.01957H6.68185C6.68025 6.0201 6.67864 6.02144 6.67704 6.0225L6.6741 6.02437C6.66182 6.03372 6.6474 6.05482 6.61482 6.07778C6.56007 6.14001 6.55019 6.18354 6.55366 6.30826C6.55687 6.32134 6.65755 6.60175 6.74301 6.79884C6.80069 7.00368 6.85383 7.23815 6.81484 7.45954C6.67998 7.75224 6.40892 8.01476 6.14746 8.15764C6.0142 8.20036 5.8991 8.18568 5.86839 8.15657L5.86732 8.1555C5.84205 8.13799 5.8219 8.11406 5.80895 8.08618C5.79599 8.0583 5.7907 8.02747 5.79361 7.99687V7.9958L5.79468 7.99473C6.01527 7.8409 6.26764 7.71645 6.465 7.30145C6.52322 7.14281 6.54111 7.04747 6.48316 6.80231C6.46046 6.71098 6.43268 6.63567 6.37046 6.57104L6.37153 6.56997C6.40918 6.55208 6.50666 6.62392 6.52161 6.57852C6.49865 6.46155 6.41933 6.30425 6.32933 6.22387C6.25082 6.15256 6.16509 6.14428 6.09325 6.20944C6.01207 6.25458 5.99497 6.41668 6.03397 6.55849C6.07723 6.66531 6.19447 6.68401 6.27779 6.89899V6.90006C6.27966 6.91341 6.30637 7.06056 6.26444 7.11985C6.23025 7.22614 5.79254 7.57144 5.76157 7.59227C5.76063 7.59296 5.75965 7.59358 5.75863 7.59414L5.75756 7.59521L5.75649 7.59628L5.75542 7.59735H5.75329L5.75249 7.59628V7.59521L5.75142 7.59334C5.75008 7.5848 5.75249 7.5629 5.75142 7.52738C5.74848 7.46275 5.77519 7.3164 5.77332 7.2913V7.29023L5.77252 7.28916V7.28809H5.77145C5.6267 7.38156 5.5789 7.66812 5.55246 7.75278C5.18606 8.00595 4.76998 8.19422 4.53043 8.45087C4.40571 8.64582 5.39036 8.22707 5.50466 8.17633L5.50759 8.17927C5.52923 8.2033 5.53109 8.28662 5.59652 8.36194C5.69881 8.50054 5.91646 8.586 6.12824 8.53312C6.48316 8.40493 6.68772 8.16271 6.89603 7.89432C6.92567 7.85105 6.97241 7.81687 7.01567 7.85025C7.15882 8.17072 7.57142 8.39852 8.10474 8.42202C8.22812 8.27194 8.1691 8.19823 8.11916 8.16672C8.10367 8.15657 7.85397 8.05909 7.81498 7.96215C7.79068 7.87188 7.84996 7.79177 7.9688 7.73168C8.31117 7.69028 8.64793 7.64435 8.97374 7.53939C8.97695 7.4299 9.04158 7.26619 9.08457 7.19516C9.11422 7.14762 9.13344 7.14281 9.14065 7.13587ZM8.23933 6.44953C8.24018 6.44618 8.24144 6.44296 8.24307 6.43992C8.24361 6.43885 8.24414 6.43698 8.24494 6.43618L8.24574 6.43511C8.24721 6.43338 8.24882 6.43177 8.25055 6.4303C8.25868 6.42435 8.26829 6.42075 8.27832 6.41989C8.30837 6.41888 8.33804 6.42688 8.36352 6.44285C8.40705 6.46796 8.43375 6.50615 8.43055 6.53365V6.53659L8.42868 6.53953L8.42761 6.54247L8.42654 6.54434L8.42547 6.54621C8.4239 6.54866 8.42201 6.55091 8.41987 6.55288C8.39903 6.57238 8.3507 6.56971 8.30503 6.54327C8.26177 6.51843 8.23533 6.47997 8.238 6.45247C8.23853 6.45167 8.23933 6.45033 8.23933 6.44953ZM7.80243 7.5442C7.68519 7.58426 7.57249 7.61577 7.57196 7.78509C7.58744 7.86895 7.58397 7.91301 7.57115 7.93331L7.56741 7.93811L7.56635 7.93918L7.56528 7.94025L7.56448 7.94132L7.56341 7.94239L7.56154 7.94345C7.55966 7.94459 7.5577 7.94558 7.55566 7.94639L7.55006 7.94746C7.52228 7.95147 7.48169 7.92503 7.45151 7.90927C7.37914 7.85746 7.17644 7.73168 7.14733 7.46168C7.14333 7.40079 7.18873 7.34818 7.26217 7.34311H7.27445C7.39623 7.37622 7.57569 7.37969 7.73139 7.39572C7.85851 7.40293 7.92127 7.50254 7.80243 7.5442Z" fill="white" />
                <path d="M7.43635 6.491C7.56214 6.55109 7.86205 6.51557 7.78914 6.32168C7.7879 6.29011 7.78567 6.25858 7.78246 6.22714C7.76964 6.19723 7.74587 6.18602 7.72317 6.18976C7.70047 6.19376 7.67858 6.21246 7.67056 6.24317C7.66549 6.26346 7.68018 6.29711 7.66202 6.30726C7.6516 6.31794 7.61074 6.3118 7.61235 6.25572C7.61235 6.23783 7.59926 6.21833 7.59125 6.20685C7.58324 6.20151 7.57896 6.20017 7.56454 6.20017C7.54692 6.20097 7.54638 6.20551 7.53677 6.2202C7.53276 6.23516 7.52715 6.25011 7.52715 6.26694C7.52502 6.28696 7.51807 6.29364 7.50339 6.29658C7.4871 6.29658 7.49083 6.29845 7.47748 6.2899C7.46947 6.28136 7.45932 6.27788 7.45932 6.2632C7.4595 6.24633 7.45688 6.22954 7.45158 6.21352C7.44463 6.20444 7.43262 6.20044 7.42006 6.19723C7.35143 6.1975 7.34716 6.27548 7.35116 6.30539C7.34609 6.311 7.34262 6.45201 7.43635 6.491ZM11.9766 11.7221C11.9016 11.7334 11.6906 11.7547 11.6906 11.7547C11.4468 11.7256 11.2678 11.7227 10.9936 11.7125C11.0189 11.6805 11.0635 11.5502 11.0088 11.5031C10.9946 11.4914 10.9733 11.4847 10.9439 11.4869H10.941L10.9399 11.4858L10.937 11.4847C10.9352 11.4833 10.9335 11.4817 10.9321 11.4799L10.9303 11.478C10.9164 11.4577 10.9089 11.4083 10.8996 11.3958L10.8985 11.3947L10.8977 11.3937L10.8958 11.3926H10.8937L10.8929 11.3934C10.7116 11.4399 10.7172 11.6281 10.8336 11.7109C8.91853 11.7109 5.97928 11.6783 5.34903 11.6783C4.99651 11.6783 3.88074 11.6361 3.85938 11.6361C4.09866 11.986 4.4453 12.0573 4.89877 12.0645C5.74935 12.0645 9.69086 12.0541 10.8125 12.0541C10.7327 12.1956 10.8197 12.4234 10.8822 12.4654L10.887 12.4683C10.8894 12.4694 10.8924 12.4707 10.8948 12.4712H10.8977C10.9719 12.4889 11.0045 12.4349 11.0296 12.3957C11.1501 12.4063 11.8281 12.416 11.8901 12.3946L11.8912 12.3935C11.9331 12.4552 11.9747 12.5137 12.0546 12.5035C12.1943 12.4736 12.3046 12.4584 12.308 12.1745C12.3083 12.1753 12.2939 11.692 11.9766 11.7221ZM11.8399 12.2405L11.8351 12.2424H11.8276L11.5934 12.2357C11.5935 12.2312 11.5928 12.2267 11.5915 12.2223C11.5699 12.1585 11.4139 12.1628 11.3773 12.2127L11.3755 12.2157L11.3736 12.2194L11.3717 12.2242L11.3707 12.2309C11.3704 12.2333 11.3696 12.2362 11.3696 12.2386C11.247 12.2533 11.1364 12.2346 11.0139 12.2301C10.9778 12.1852 10.9821 12.1043 11.0243 12.0848H11.0251C11.3044 12.0984 11.5669 12.0875 11.8466 12.1011C11.8909 12.1385 11.8687 12.2247 11.8399 12.2405ZM8.55933 8.35854C8.55933 8.36334 8.60847 8.40554 8.66643 8.37189C8.78847 8.32542 8.86458 8.28002 9.0355 8.2429C9.08037 8.2421 9.0777 8.12192 9.00693 8.11765C8.91426 8.12219 8.8288 8.127 8.73639 8.1999C8.67951 8.21299 8.66963 8.17827 8.65708 8.14729C8.64266 8.07011 8.68966 8.0159 8.68004 7.95795C8.68272 7.96062 8.6512 7.93231 8.61114 7.93018C8.59657 7.92925 8.58201 7.9322 8.56895 7.93872C8.56601 7.93872 8.44023 8.02391 8.39963 8.0832C8.3748 8.10189 8.37773 8.11845 8.38521 8.15103C8.40444 8.19536 8.43836 8.18148 8.47708 8.16065C8.52836 8.1537 8.55293 8.18708 8.54892 8.24851C8.52515 8.32542 8.55933 8.35373 8.55933 8.35854ZM12.7818 8.32809C12.758 8.30085 12.7041 8.31714 12.668 8.31287C12.6509 8.31287 12.5943 8.30459 12.6213 8.25465C12.6437 8.22367 12.652 8.20498 12.6672 8.16679C12.6843 8.1294 12.6694 8.10403 12.6079 8.08373C12.5831 8.07869 12.5577 8.07645 12.5324 8.07706C12.5097 8.07786 12.4856 8.0808 12.4512 8.08373C12.4138 8.09175 12.4007 8.10804 12.3938 8.15344C12.3964 8.22234 12.4386 8.21886 12.4816 8.2461C12.5067 8.27788 12.5227 8.30673 12.4798 8.3588C12.4389 8.39619 12.4098 8.41702 12.3689 8.45441C12.3497 8.48726 12.3377 8.538 12.3967 8.55376C12.5057 8.58447 12.758 8.42049 12.758 8.41702C12.7989 8.38631 12.7853 8.32809 12.7818 8.32809ZM10.8323 8.00228C10.9199 8.00282 11.0213 7.80172 11.0646 7.60249C11.0884 7.32823 11.0489 7.16131 11.0416 7.00001C11.0344 6.83871 10.8592 5.53092 10.8237 5.40888C10.7807 5.17814 10.9944 5.37843 10.9709 5.24437C10.8972 5.07532 10.7129 4.82909 10.6555 4.68221C10.6338 4.64295 10.6312 4.60637 10.6133 4.60957C10.6026 4.61144 10.5868 4.62773 10.5577 4.66592C10.4859 4.9012 10.4605 5.09348 10.488 5.23956C10.6731 6.20498 10.8624 7.08387 10.8323 8.00228Z" fill="white" />
                <path d="M13.5637 5.44573C13.5555 5.38484 13.5285 5.2449 13.5389 5.22674C13.5557 5.18401 13.6399 5.23101 13.67 5.18187C13.7141 5.13701 13.4521 4.80132 13.3602 4.65791C13.3418 4.62185 13.3306 4.59221 13.3143 4.59381C13.3018 4.59515 13.2863 4.61544 13.2628 4.66538C13.2059 4.75832 13.1864 4.9247 13.2091 5.07185C13.3458 5.99587 13.4473 6.89078 13.4681 7.70985C13.4564 7.78756 13.4529 7.82896 13.4166 7.92697C13.3359 8.03032 13.247 8.15984 13.1632 8.22233C13.0793 8.28483 12.9012 8.34438 12.8427 8.39058C12.6579 8.4974 12.6568 8.62052 12.8064 8.62479C13.0641 8.59488 13.3688 8.57378 13.579 8.25678C13.6351 8.16785 13.7013 7.92697 13.7042 7.77955C13.724 6.91535 13.6933 6.07038 13.5637 5.44573ZM11.8604 7.48552C11.8997 7.50662 12.0028 7.37976 11.9991 7.2206C12.0105 7.13888 11.9699 6.83764 11.8671 6.78636C11.8549 6.7831 11.8423 6.78211 11.8297 6.78342C11.7761 6.7901 11.725 6.84084 11.7486 6.92203C11.7339 6.96983 11.8215 7.13648 11.8442 7.22514C11.8647 7.28843 11.818 7.46656 11.8604 7.48552ZM3.74561 4.92657C3.8714 4.98665 4.10748 4.96128 4.0976 4.75832C4.09662 4.72675 4.09466 4.69523 4.09172 4.66378C4.0789 4.63387 4.0554 4.62265 4.0327 4.62666C4.01 4.63067 3.9881 4.64936 3.98009 4.68007C3.97502 4.70037 3.9889 4.73402 3.97048 4.74417C3.96006 4.75485 3.92 4.74764 3.92161 4.69156C3.92161 4.67366 3.90852 4.65497 3.90051 4.64375C3.8925 4.63868 3.88716 4.63708 3.87273 4.63708C3.85511 4.63788 3.85564 4.64242 3.84603 4.6571C3.84176 4.67206 3.83615 4.68675 3.83615 4.70384C3.83401 4.72387 3.826 4.73055 3.81131 4.73348C3.79502 4.73348 3.79876 4.73535 3.78541 4.72681C3.77766 4.71826 3.76831 4.71479 3.76831 4.7001C3.76812 4.68319 3.76524 4.66643 3.75977 4.65043C3.75282 4.64135 3.74187 4.63654 3.72906 4.63334C3.66042 4.6336 3.65535 4.71265 3.65935 4.7423C3.65455 4.74764 3.65188 4.88758 3.74561 4.92657ZM5.6468 5.58353C5.62562 5.58321 5.60488 5.58957 5.58752 5.60169C5.47615 5.66178 5.43316 5.84044 5.50232 5.94486C5.56695 6.03699 5.6695 6.00308 5.68312 6.00308C5.79208 6.0167 5.85724 5.79851 5.85724 5.79851C5.85724 5.79851 5.86045 5.73709 5.73093 5.85299C5.67645 5.86314 5.66897 5.84364 5.65535 5.81293C5.64238 5.75552 5.64838 5.69546 5.67244 5.64175C5.68472 5.60783 5.67271 5.5862 5.6468 5.58353ZM10.1732 7.80359C9.97074 8.01483 9.67912 8.27548 9.36132 8.39539C9.32713 8.43384 9.44624 8.59728 9.60033 8.59702C9.85805 8.56711 10.0845 8.42236 10.2944 8.04154C10.3505 7.95261 10.4493 7.76246 10.4523 7.61504C10.472 6.75084 10.4087 6.07892 10.2792 5.45427C10.2709 5.39338 10.2765 5.32155 10.2869 5.30312C10.3035 5.28309 10.3601 5.30365 10.3903 5.25425C10.4344 5.20938 10.2728 4.83657 10.1809 4.69289C10.1625 4.65684 10.1513 4.62826 10.135 4.62986C10.1224 4.6312 10.1069 4.65069 10.0834 4.70063C10.0268 4.79357 9.9881 4.95541 9.99264 5.1071C10.1155 5.95821 10.1531 6.70277 10.2335 7.55389C10.2399 7.63641 10.2279 7.75578 10.1732 7.80359ZM3.1661 6.52758C2.86379 6.53319 2.42154 6.92363 2.40979 7.14048C2.72866 6.98746 3.04192 6.84004 3.36586 6.68141C3.31351 6.60343 3.36265 6.53319 3.1661 6.52758ZM2.58017 8.131C2.50059 8.2923 2.46774 8.18201 2.46053 8.09174C2.44824 7.92083 2.4648 7.76326 2.4835 7.63854C2.49338 7.57472 2.49311 7.55228 2.48537 7.55255C2.47789 7.55282 2.4624 7.57552 2.44237 7.60142C2.26264 7.88771 2.24662 8.31527 2.34569 8.44292C2.3983 8.50328 2.48537 8.52972 2.54946 8.51076C2.66243 8.46189 2.7121 8.23302 2.68513 8.14943C2.64747 8.09014 2.61783 8.08079 2.58017 8.131Z" fill="white" />
                <path d="M2.61696 6.26659C2.98417 6.30185 2.78147 5.64568 2.91447 5.52658C2.93957 5.46782 2.98604 5.46675 2.99004 5.541V6.09835C2.98657 6.27968 3.10595 6.33336 3.19862 6.37075C3.29503 6.36327 3.35885 6.36594 3.39651 6.45968C3.41146 6.78095 3.42722 7.10302 3.44244 7.42456C3.44244 7.42456 3.66517 7.48865 3.67585 6.88243C3.68653 6.52644 3.60508 6.22787 3.65288 6.1587C3.65449 6.0906 3.74181 6.0874 3.8019 6.12051C3.89778 6.18835 3.9405 6.27167 4.08979 6.23802C4.31679 6.17553 4.45352 6.06523 4.457 5.89084C4.44364 5.72527 4.42441 5.55942 4.35284 5.39358C4.36299 5.3634 4.30931 5.28515 4.31946 5.25498C4.36032 5.3188 4.42201 5.31346 4.43617 5.25498C4.39744 5.12759 4.33735 5.00554 4.24014 4.95293C4.15976 4.88216 4.04225 4.89712 3.99926 5.0448C3.97923 5.21492 4.06095 5.41655 4.18486 5.58132C4.2113 5.64568 4.24789 5.75277 4.2316 5.84891C4.16564 5.88657 4.10047 5.87081 4.04519 5.81259C4.04519 5.81259 3.86439 5.6772 3.86439 5.64729C3.91246 5.34017 3.87481 5.30518 3.8481 5.21999C3.82941 5.10249 3.77386 5.0651 3.72846 4.98471C3.68333 4.93691 3.6219 4.93691 3.59279 4.98471C3.51294 5.12332 3.55033 5.42055 3.60802 5.55355C3.64968 5.67613 3.71377 5.75251 3.68359 5.75251C3.65876 5.82167 3.60722 5.80565 3.56983 5.7258C3.51668 5.56076 3.50573 5.3148 3.50573 5.2037C3.48971 5.06617 3.47182 4.7724 3.38155 4.69789C3.35752 4.66504 3.32894 4.65356 3.30117 4.65677C3.26565 4.66104 3.23227 4.68988 3.21598 4.7286C3.20816 4.86152 3.21102 4.99486 3.22452 5.12732C3.28648 5.34791 3.30624 5.54206 3.33642 5.768C3.3447 6.07057 3.16176 5.89885 3.17004 5.74877C3.21224 5.55382 3.20102 5.24723 3.16336 5.16925C3.13345 5.09154 3.099 5.07231 3.02663 5.08513C2.96921 5.08166 2.82046 5.24349 2.77907 5.51162C2.77907 5.51162 2.74435 5.64915 2.7294 5.77173C2.7091 5.91007 2.61723 6.00808 2.5534 5.75251C2.49812 5.56663 2.46421 5.1089 2.3718 5.21599C2.34483 5.57304 2.31332 6.20197 2.61696 6.26659Z" fill="white" />
                <path d="M2.73282 4.91988C2.75205 4.96795 2.71359 5.12258 2.75392 5.137C2.79077 5.15302 2.84178 5.02991 2.86101 4.91614C2.87169 4.85392 2.86368 4.64054 2.71867 4.59674C2.71112 4.59507 2.70343 4.59409 2.6957 4.5938C2.64015 4.5922 2.579 4.62665 2.60303 4.69315C2.58914 4.72974 2.71146 4.85232 2.73282 4.91988ZM4.83003 7.70183C4.96089 7.26599 4.82736 6.93724 4.87116 6.89665L4.87303 6.89558L4.8749 6.89451L4.87677 6.89344L4.88237 6.89238C5.04394 7.0665 5.27068 6.91454 5.32035 6.85419C5.34171 6.82401 5.39486 6.80451 5.43225 6.84377C5.5583 6.9343 5.77916 6.89157 5.82536 6.73187C5.85206 6.57564 5.87449 6.41487 5.87984 6.24796C5.79785 6.27333 5.73162 6.29256 5.70491 6.3206C5.69869 6.32695 5.69434 6.3349 5.69236 6.34357L5.67126 6.48217C5.67058 6.48582 5.66932 6.48934 5.66753 6.49259C5.66362 6.49849 5.65841 6.50343 5.6523 6.50701C5.62319 6.52277 5.57272 6.51369 5.57005 6.47176C5.53106 6.29416 5.37029 6.2712 5.27255 6.54627C5.20685 6.59941 5.08721 6.60983 5.07466 6.52998C5.09068 6.34544 5.01617 6.3206 4.86715 6.40766C4.81935 6.04206 4.77181 5.69275 4.72374 5.32715C4.78597 5.32528 4.84285 5.37041 4.89973 5.29937C4.83831 5.10816 4.70825 4.71905 4.63481 4.68273L4.63294 4.68167C4.62981 4.67787 4.62632 4.67438 4.62253 4.67125L4.61772 4.66751L4.61291 4.66457C4.60985 4.66298 4.60663 4.66173 4.6033 4.66083C4.59662 4.65897 4.59021 4.65816 4.58327 4.65897C4.56511 4.66137 4.54481 4.67178 4.52104 4.67713C4.44306 4.70196 4.36989 4.76953 4.39286 4.90092C4.48526 5.46174 4.54535 5.88984 4.63748 6.45093C4.65163 6.51662 4.59662 6.60315 4.52558 6.59434C4.40487 6.51262 4.37496 6.34731 4.16906 6.35425C4.02004 6.35612 3.84993 6.51823 3.82856 6.67446C3.80372 6.79864 3.79491 6.93323 3.82856 7.04166C3.93325 7.16771 4.05903 7.15436 4.16906 7.12578C4.25959 7.08866 4.3341 6.9992 4.36588 7.02056H4.36695V7.02163C4.38671 7.05608 4.36508 7.34798 3.94046 7.57337C3.67954 7.69061 3.47177 7.71865 3.36014 7.50554C3.29097 7.37228 3.36522 6.8654 3.19483 6.98264C2.69063 8.28188 4.37576 8.46348 4.56404 7.03605C4.57633 6.99573 4.61345 6.9554 4.63962 6.96528C4.6511 6.97009 4.66152 6.98585 4.66552 7.01495C4.62653 8.30725 3.36201 8.39591 3.14703 7.98918C3.09388 7.89331 3.07786 7.6802 3.07252 7.55228C3.06291 7.47483 3.04341 7.43023 3.02098 7.4126C2.9697 7.37415 2.9008 7.47456 2.88611 7.64868C2.86475 7.78889 2.87089 7.82735 2.87089 7.96221C2.93819 8.98344 4.56538 8.54493 4.83003 7.70183ZM4.20137 6.81867V6.81973C4.20111 6.82027 4.20084 6.82134 4.20031 6.8216C4.18776 6.83789 4.14316 6.83122 4.11138 6.83122C4.07292 6.82962 4.05423 6.82321 4.03099 6.79196C4.02004 6.75724 4.05343 6.72306 4.06838 6.69742L4.06918 6.69635C4.07117 6.69358 4.07341 6.69099 4.07586 6.68861C4.09405 6.67314 4.11714 6.66463 4.14102 6.66457C4.17066 6.66484 4.20191 6.67953 4.21847 6.72092C4.22455 6.73727 4.22617 6.75493 4.22316 6.77211C4.22016 6.78929 4.21264 6.80536 4.20137 6.81867ZM9.58207 5.8439C9.70785 5.90399 9.945 5.87755 9.93485 5.67459C9.93361 5.64301 9.93138 5.61149 9.92817 5.58005C9.91535 5.55014 9.89159 5.53892 9.86889 5.54266C9.84619 5.54667 9.82429 5.56616 9.81628 5.59714C9.8112 5.61744 9.82589 5.65002 9.80773 5.66017C9.79731 5.67085 9.75646 5.66471 9.75806 5.60862C9.75806 5.59073 9.74497 5.57124 9.73696 5.55975C9.72895 5.55468 9.72361 5.55308 9.70919 5.55308C9.69156 5.55388 9.69209 5.55842 9.68248 5.57311C9.67847 5.58806 9.67287 5.60302 9.67287 5.61984C9.67073 5.63987 9.66379 5.64655 9.6491 5.64948C9.63281 5.64948 9.63574 5.65135 9.62239 5.64281C9.61438 5.63426 9.6053 5.63079 9.6053 5.6161C9.60511 5.5992 9.60222 5.58243 9.59675 5.56643C9.58981 5.55735 9.57886 5.55334 9.56604 5.55014C9.49741 5.55041 9.4934 5.62839 9.49714 5.6583C9.4918 5.66417 9.48833 5.80518 9.58207 5.8439ZM9.66699 5.05715C9.71186 5.18293 9.63281 5.30284 9.67954 5.3202C9.72254 5.3397 9.78236 5.19041 9.80479 5.05261C9.8307 4.94098 9.75111 4.71264 9.63842 4.66538C9.62964 4.66345 9.62069 4.66246 9.61171 4.66244C9.54735 4.66057 9.47578 4.70116 9.50355 4.78208C9.48726 4.82588 9.64215 4.97516 9.66699 5.05715Z" fill="white" />
                <path d="M4.9818 5.66144H4.98287L4.98394 5.66251H4.98501L4.98608 5.66357C5.00985 5.6796 5.30441 5.67933 5.33699 5.66464L5.33779 5.66357H5.33886V5.66251C5.44008 5.62512 5.92025 5.07631 5.92025 5.07631C5.89541 5.05495 5.87244 5.03919 5.84761 5.01809C5.8209 4.99513 5.82357 4.97243 5.84761 4.94919C5.96645 4.88003 5.92879 4.7278 5.86683 4.65863C5.82201 4.63776 5.77283 4.62796 5.72342 4.63006C5.68333 4.63224 5.64418 4.64298 5.60859 4.66157C5.52527 4.74142 5.5055 4.86961 5.5712 4.94946C5.63503 4.97964 5.69886 5.044 5.65639 5.07952C5.47559 5.2726 5.00504 5.59521 4.98127 5.65423L4.98047 5.6561V5.65903L4.98127 5.6609L4.9818 5.66144ZM5.69378 4.80098L5.69939 4.79991C5.72877 4.79697 5.76428 4.82394 5.78164 4.86213C5.80007 4.90273 5.79099 4.94172 5.76055 4.94919C5.73037 4.95667 5.69111 4.9297 5.67268 4.88884C5.65426 4.84825 5.6636 4.80845 5.69378 4.80098ZM8.50217 5.10462C8.71308 5.38698 8.91647 5.67488 9.11213 5.96802C9.14284 6.18701 9.16554 6.40119 9.17996 6.6143C9.21174 7.08192 9.22135 7.66411 9.19251 8.15656C9.28011 8.16004 9.42058 8.01502 9.46972 7.80271C9.50177 7.50895 9.45823 6.90994 9.4553 6.73661C9.45252 6.65405 9.4487 6.57152 9.44381 6.48905C9.68293 6.87969 9.90524 7.28038 10.1101 7.69001C10.1892 7.65236 10.1718 7.20664 10.1253 7.14415C9.95149 6.77 9.71141 6.40066 9.63476 6.25885C9.60725 6.20757 9.51298 6.06443 9.40135 5.89939C9.38079 5.66384 9.35836 5.46435 9.34393 5.40399C9.30815 5.1551 9.44622 5.43204 9.42726 5.28729C9.38239 5.03866 9.24512 4.86961 9.08302 4.64181C9.03067 4.56783 9.03174 4.55261 8.95109 4.65997C8.90275 4.76946 8.90356 4.86053 8.91771 4.94572C8.89115 4.9068 8.86272 4.86919 8.83252 4.83302C8.69258 4.71285 8.68403 4.70644 8.5676 4.60843C8.53101 4.58252 8.46131 4.54246 8.4079 4.54727C8.37585 4.55021 8.35048 4.5689 8.34086 4.61617C8.32804 4.72727 8.33472 4.78762 8.35341 4.88003C8.3681 4.94172 8.45783 5.0448 8.50217 5.10462ZM8.94869 5.0878C8.95403 5.11183 8.95937 5.13587 8.96311 5.16044C8.97513 5.21331 8.98554 5.26593 8.99649 5.31827C8.96424 5.27256 8.93048 5.22794 8.89528 5.18447C8.79032 5.05976 8.89741 5.10248 8.94869 5.0878Z" fill="white" />
                <path d="M6.35816 5.98483C6.50504 6.04572 6.59825 5.76611 6.65833 5.45979C6.69946 5.3738 6.73097 5.36392 6.75207 5.40825C6.74673 5.81524 6.78118 5.90631 6.88587 6.02969C7.11928 6.20996 7.31236 6.05239 7.32758 6.03744L7.50918 5.85584C7.54978 5.81338 7.60319 5.8107 7.66034 5.84809C7.71589 5.89857 7.70868 5.98563 7.82778 6.04598C7.92793 6.08604 8.14158 6.0556 8.19125 5.9696C8.25801 5.8553 8.27404 5.81605 8.30502 5.77252C8.35255 5.70922 8.43401 5.73726 8.43401 5.75729C8.42653 5.79254 8.37846 5.82753 8.41104 5.89109C8.46765 5.93355 8.48074 5.90631 8.51439 5.8967C8.63296 5.84008 8.72189 5.58317 8.72189 5.58317C8.72724 5.4873 8.67249 5.49451 8.63777 5.51427C8.59237 5.54204 8.58943 5.55139 8.54403 5.57917C8.48608 5.58771 8.37392 5.6259 8.31837 5.53991C8.26175 5.43656 8.26122 5.29234 8.21795 5.18792C8.21795 5.18045 8.14211 5.02395 8.21235 5.0138C8.2476 5.02048 8.32371 5.03997 8.33573 4.97641C8.37285 4.91446 8.25561 4.739 8.17603 4.65034C8.10686 4.57449 8.01125 4.56514 7.91885 4.64259C7.85395 4.70215 7.86357 4.76864 7.85102 4.83194C7.83446 4.90431 7.83766 4.99431 7.91137 5.09018C7.976 5.21757 8.09351 5.38127 8.05478 5.61228C8.05478 5.61228 7.98642 5.72231 7.86651 5.70789C7.81657 5.69694 7.73485 5.67531 7.69158 5.3551C7.65873 5.11261 7.69986 4.77318 7.59704 4.61402C7.57381 4.55393 7.55378 4.49571 7.52067 4.50025C7.50064 4.50292 7.47633 4.52856 7.44215 4.59025C7.41785 4.65461 7.31289 4.75235 7.38874 4.95371C7.4507 5.08137 7.47607 5.28861 7.44803 5.51988C7.40503 5.58557 7.39542 5.60827 7.33907 5.6737C7.26002 5.75863 7.17429 5.737 7.10859 5.70522C7.04717 5.66382 6.99883 5.64246 6.97079 5.51107C6.97587 5.30142 6.98815 4.95852 6.94969 4.88561C6.89335 4.77292 6.80014 4.81324 6.76035 4.84742C6.56914 5.02208 6.47487 5.31718 6.41718 5.55219C6.3643 5.72338 6.30769 5.6737 6.26816 5.6048C6.17149 5.51427 6.16481 4.80683 6.04811 4.923C5.8609 5.45712 6.15466 6.04171 6.35816 5.98483Z" fill="white" />
                <path d="M7.18392 4.97584C7.2563 4.78062 7.25656 4.6973 7.26137 4.61451C7.25015 4.55148 7.22265 4.52104 7.19167 4.52371C7.16069 4.52638 7.12597 4.5627 7.09793 4.63267C7.0739 4.68581 7.04425 4.96436 7.04933 4.96436C7.02983 5.04714 7.13559 5.08239 7.18392 4.97584ZM6.42842 4.93017C6.44623 4.91911 6.46155 4.90448 6.47341 4.8872C6.48527 4.86991 6.49341 4.85035 6.49732 4.82976C6.51441 4.74457 6.40758 4.87008 6.39396 4.77528C6.3702 4.68715 6.4383 4.6511 6.50292 4.5659C6.50426 4.52585 6.50506 4.493 6.47916 4.4922C6.46741 4.49193 6.44951 4.49834 6.42468 4.51329C6.36886 4.55068 6.25777 4.66632 6.25456 4.79905C6.25109 4.87409 6.23693 4.87382 6.28607 4.92136C6.32159 4.97263 6.35684 4.96756 6.42842 4.93017Z" fill="white" />
              </svg>

            </span>العربية - رس</li>

          </ul>

        </div>
        <div className="numbers flex gap-4">
          <div className="flex h-3 items-center space-x-4 text-sm">
            <span className='flex items-center gap-2'>support@salla.sa <i className="text-[--primary] fa-regular fa-envelope"></i></span>
            <Separator orientation="vertical" />
            <span className='flex items-center gap-2'>+966556754472 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.36797 15.1693C5.1213 15.1693 5.91464 14.9893 6.73464 14.6426C7.53464 14.3026 8.3413 13.8359 9.12797 13.2693C9.90797 12.6959 10.6613 12.0559 11.3746 11.3559C12.0813 10.6426 12.7213 9.88927 13.288 9.11594C13.8613 8.31594 14.3213 7.51594 14.648 6.7426C14.9946 5.91594 15.168 5.11594 15.168 4.3626C15.168 3.8426 15.0746 3.34927 14.8946 2.88927C14.708 2.41594 14.408 1.97594 14.0013 1.59594C13.488 1.08927 12.9013 0.835938 12.2746 0.835938C12.0146 0.835938 11.748 0.895938 11.5213 1.0026C11.2613 1.1226 11.0413 1.3026 10.8813 1.5426L9.33464 3.7226C9.19464 3.91594 9.08797 4.1026 9.01464 4.28927C8.92797 4.48927 8.8813 4.68927 8.8813 4.8826C8.8813 5.13594 8.95464 5.3826 9.09464 5.61594C9.19464 5.79594 9.34797 5.98927 9.5413 6.1826L9.99464 6.65594C9.98797 6.67594 9.9813 6.68927 9.97464 6.7026C9.89464 6.8426 9.73464 7.0826 9.42797 7.4426C9.1013 7.81594 8.79463 8.15594 8.48797 8.46927C8.09464 8.85594 7.76797 9.1626 7.4613 9.41594C7.0813 9.73594 6.83463 9.89594 6.68797 9.96927L6.7013 10.0026L6.21463 9.5226C6.00797 9.31594 5.80797 9.1626 5.61464 9.0626C5.24797 8.83594 4.7813 8.79594 4.31463 8.98927C4.1413 9.0626 3.95463 9.1626 3.75463 9.3026L1.5413 10.8759C1.29463 11.0426 1.11464 11.2559 1.00797 11.5093C0.907969 11.7626 0.861302 11.9959 0.861302 12.2293C0.861302 12.5493 0.934635 12.8693 1.07464 13.1693C1.21464 13.4693 1.38797 13.7293 1.60797 13.9693C1.98797 14.3893 2.4013 14.6893 2.8813 14.8826C3.3413 15.0693 3.8413 15.1693 4.36797 15.1693ZM12.2746 1.83594C12.6413 1.83594 12.9813 1.99594 13.308 2.31594C13.6146 2.6026 13.828 2.91594 13.9613 3.25594C14.1013 3.6026 14.168 3.96927 14.168 4.3626C14.168 4.9826 14.0213 5.65594 13.728 6.34927C13.428 7.05594 13.008 7.78927 12.4746 8.5226C11.9413 9.25594 11.3346 9.96927 10.668 10.6426C10.0013 11.3026 9.2813 11.9159 8.5413 12.4559C7.8213 12.9826 7.0813 13.4093 6.34797 13.7159C5.20797 14.2026 4.1413 14.3159 3.2613 13.9493C2.9213 13.8093 2.6213 13.5959 2.34797 13.2893C2.19464 13.1226 2.07463 12.9426 1.97463 12.7293C1.89463 12.5626 1.85464 12.3893 1.85464 12.2159C1.85464 12.1093 1.87463 12.0026 1.92797 11.8826C1.94797 11.8426 1.98797 11.7693 2.11464 11.6826L4.32797 10.1093C4.4613 10.0159 4.5813 9.94927 4.69464 9.90261C4.8413 9.8426 4.9013 9.7826 5.12797 9.9226C5.2613 9.98927 5.3813 10.0893 5.51464 10.2226L6.0213 10.7226C6.2813 10.9759 6.6813 11.0359 6.98797 10.9226L7.16797 10.8426C7.4413 10.6959 7.7613 10.4693 8.11464 10.1693C8.43464 9.89594 8.7813 9.57594 9.2013 9.1626C9.52797 8.82927 9.85464 8.47594 10.1946 8.0826C10.508 7.71594 10.7346 7.4026 10.8746 7.1426L10.9546 6.9426C10.9946 6.78927 11.008 6.7026 11.008 6.60927C11.008 6.36927 10.9213 6.15594 10.7546 5.98927L10.2546 5.46927C10.1213 5.33594 10.0213 5.20927 9.95464 5.09594C9.9013 5.00927 9.8813 4.93594 9.8813 4.86927C9.8813 4.81594 9.9013 4.73594 9.93464 4.65594C9.9813 4.54927 10.0546 4.42927 10.148 4.3026L11.6946 2.11594C11.7613 2.0226 11.8413 1.95594 11.9413 1.90927C12.048 1.8626 12.1613 1.83594 12.2746 1.83594ZM6.7013 10.0093L6.80797 10.4626L6.62797 9.99594C6.6613 9.98927 6.68797 9.99594 6.7013 10.0093Z" fill="#62D0B6" />
            </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
