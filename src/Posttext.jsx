import React, { useState } from "react";
import { FaShare } from "react-icons/fa";

const Posttext = () => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const text = `
    خلال اجتماعه ليوم الاحد 30 يونيو 2024 على الساعة السادسة مساءا، بمركب
    الحاج محمد بنجلون، خلص المكتب المديري لنادي الوداد الرياضي الى القرارات
    التالية: بخصوص الاستقالات التي وردت على المكتب المديري - قبول استقالة
    السيد عبد المجيد برناكي من منصب رئيس المكتب المديري - رفض استقالة السيد
    المهدي الزوات من رئاسة فرع كرة اليد، والسادة هشام ملاخ مصطفى ملوكي
    وبناني عبد الله من عضوية المكتب المديري بخصوص وضع فرع كرة القدم وتفاديا
    للتأخر الذي يمكن أن يعرفه التحضير للموسم المقبل - تعيين السيد هشام ايت
    منا رئيسا منتدبا لفرع كرة القدم خلال هذه الفترة الانتقالية الى حين تسوية
    وضعية الجموع العامة لانتخاب رئيس ومكتب جديدين. وفي هذا الاطار، يود
    المكتب المديري التوضيح بشأن هذا الاختيار الذي جاء بناءا على مشاورات مع
    مجموعة من الفعاليات التي أجمعت على خبرة ورغبة السيد ايت منا للمساهمة في
    انجاح هذه المرحلة وعدم تضييع الوقت. كما أنه يود التأكيد على تساوي حظوظ
    جميع المرشحين في المنافسة على رئاسة نادي الوداد الرياضي. بخصوص الوضع
    التنظيمي وانتخاب رئيس جديد، فطبقا للمقتضيات القانونية الواردة في النظام
    الأساسي والمتعلقة بحالة الشغور، فسيتحمل باقي أعضاء المكتب المديري
    مسؤوليته تحت إشراف السيد ادريس حاسا بصفته نائبا أولا للرئيس المستقيل إلى
    حين انعقاد الجمع العام العادي الانتخابي كما تنص على ذلك الفقرة الرابعة
    من المادة 23 من النظام الأساسي النموذجي، وفي هذا الإطار قرر المكتب
    المديري: - إلغاء الجمع العام المجمع تنظيمه يوم 03 يوليوز 2023 - إلغاء
    فتح باب الترشيح الذي كان قد أعلن على فتحه سلفا من طرف الرئيس السابق -
    تنظيم جمع عام غير عادي يوم 15 يوليوز 2024، ليتسنى للمكتب المديري الدعوة
    إليه طبقا للشكليات المنصوص عليها قانونا وذلك للتداول في المصادقة
    النهائية على استقالة الرئيس، والمصادقة على إمكانية ترشح المنخرطين الجدد
    نظرا لرغبة مجموعة من هذه الفئة في المنافسة على رئاسة النادي بمشاريع
    ولوائح غنية ومختلفة. - الدعوة لعقد جمع عام عادي انتخابي يوم 24 يوليوز
    2024 مع الاعلان عن فتح باب الترشيح حسب الشروط الشكلية المنصوص عليها في
    الفقرة الثانية من المادة 23 من النظام الأساسي النموذجي
  `;

  // Shorten the text to a maximum of 1000 characters
  const shortText = text.slice(0, 300) + (text.length > 1000 ? "..." : "");

  return (
    <div className="flex flex-col justify-start max-w-xl gap-4 p-4 bg-white shadow-xl rounded-xl md:flex-row">
      <div className="flex items-start my-2 md:m-0">
        <div className="relative">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src="./wedad.jpg"
              className="mx-auto object-cover rounded-full h-10 w-10"
            />
          </a>
          <svg
            width="10"
            height="10"
            fill="currentColor"
            className="absolute bottom-0 right-0 w-4 h-4 p-1 -mx-1 -my-1 text-white bg-black rounded-full fill-current"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"></path>
          </svg>
        </div>
        <div className="flex flex-col items-start justify-center ml-2">
          <span className="flex items-center text-sm text-gray-600">
            Wydad Athletic Club - WAC
            <span className="block w-2 h-2 ml-1 bg-green-500 rounded-full"></span>
          </span>
          <span className="text-xs text-gray-400">1 week ago</span>
        </div>
      </div>

      <div className="relative">
        <p className="text-gray-800  leading-snug md:leading-normal">
          {showDetail ? text : shortText}
        </p>
        <span className="absolute px-2 py-1 text-xs text-white rounded bg-gray-700/50 right-2 bottom-2">
          7 min
        </span>
        <button
          onClick={toggleDetail}
          className="mt-2 text-yellow-500 hover:text-yellow-700"
        >
          {showDetail ? "Show Less" : "Show More"}
        </button>
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex items-start justify-between my-2 text-gray-700 md:m-0">
          <p className="text-xl leading-5">Qatar 2024 / FIFA</p>
          <button className="text-yellow-400 hover:text-yellow-600">
            <svg
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1664 596q0-81-21.5-143t-55-98.5-81.5-59.5-94-31-98-8-112 25.5-110.5 64-86.5 72-60 61.5q-18 22-49 22t-49-22q-24-28-60-61.5t-86.5-72-110.5-64-112-25.5-98 8-94 31-81.5 59.5-55 98.5-21.5 143q0 168 187 355l581 560 580-559q188-188 188-356zm128 0q0 221-229 450l-623 600q-18 18-44 18t-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344z"></path>
            </svg>
          </button>
        </div>
        <div className="flex items-center my-2 text-xs text-gray-500 md:m-0">
          <svg
            width="10"
            height="10"
            fill="currentColor"
            className="mr-2"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"></path>
          </svg>
          123,344,893 views
          <svg
            width="10"
            height="10"
            fill="currentColor"
            className="ml-6 mr-2"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"></path>
          </svg>
          45 876 likes
          <FaShare className="ml-4 mr-2" />
          45 876 Shares
        </div>
      </div>
    </div>
  );
};

export default Posttext;
