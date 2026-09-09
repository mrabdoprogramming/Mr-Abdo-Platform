"use strict";

/* =========================================================
   MASTER ABDo PROGRAMMING — BEHAVIOR / DATA
   =========================================================
   FILE STRUCTURE
   index.html    -> page structure/markup only
   css/style.css -> all styling
   js/script.js  -> all behavior/data (this file)
*/

/* =========================================================
   LOGO CONFIGURATION
   =========================================================
   To use your own logo, replace the path below with your
   image, e.g. LOGO_PATH = "images/logo.png".
   If the file is missing or fails to load, the platform
   automatically falls back to showing the "م" letter mark,
   so nothing breaks while you add the real file.
*/
const LOGO_PATH = "assets/logo.png";

/* =========================================================
   CONFIGURATION
   ========================================================= */
const config = {
  brandName: "مستر عبدو برمجة",
  teacherName: "م. عبدالرحمن فتحي",
  slogan: "يرى مالا يُكتب، يبحث عما لا يظهر",
  logo: LOGO_PATH,
  teacherImage: "teacher.png",
  contact: {
    whatsapp: "https://wa.me/1020086224",
    facebook: "https://www.facebook.com/mrabdoprogramming",
    instagram: "https://www.instagram.com/mrabdoprogramming/",
    tiktok: "https://www.tiktok.com/@mrabdoprogramming"
  },
  storage: {
    session: "maabdo_session",
    theme: "maabdo_theme",
    progressPrefix: "maabdo_progress_",
    lastLessonPrefix: "maabdo_last_lesson_"
  }
};

/* =========================================================
   STUDENT ACCOUNTS
   =========================================================
   DEMO DATA — duplicate one object to add a student.
   Change only:
   id / username / password / name / grade / active

   Optional: add a "photoUrl" field (e.g. "images/students/ali.jpg")
   to show the student's real photo on the Profile page. If it is
   left out, a professional placeholder icon is shown instead.
*/
const students = [
  {
    id: "student001",
    username: "abdelrahman-ibrahim",
    password: "7706",
    name: "عبدالرحمن ابراهيم",
    phone: "01067497706",
    grade: "secondSecondary",
    active: true
  },
  {
    id: "student001",
    username: "mahmoud",
    password: "6970",
    name: "الاسم محمود محمد فخري",
    phone: "01273796970",
    grade: "secondSecondary",
    active: true
  },
  {
    id: "student003",
    username: "hamza-ahmed",
    password: "9859",
    name: "حمزة احمد",
    grade: "firstSecondary",
    active: true
  },
  {
    id: "student004",
    username: "faisal",
    password: "1111",
    name: "فيصل",
    grade: "firstSecondary",
    active: true
  },
  {
    id: "student004",
    username: "student004",
    password: "222222",
    name: "نور خالد",
    grade: "thirdSecondary",
    active: false
  }
];

/* =========================================================
   COURSE CONTENT
   =========================================================
   DEMO DATA — replace titles/descriptions/Drive links with
   the teacher's real curriculum.
*/
const courses = {
  firstPreparatory: {
    name: "الصف الأول الإعدادي",
    shortName: "أولى إعدادي",
    colorClass: "grade-blue",
    terms: {
      first: {
        name: "الترم الأول",
        units: [
          {
            id: "unit1",
            title: "الوحدة الأولى",
            description: "مقدمة تجريبية قابلة للاستبدال بمحتوى المنهج الفعلي.",
            lessons: [
              { id: "lesson1", title: "مقدمة في البرمجة", description: "تعرف على أساسيات التفكير البرمجي.", duration: "25 دقيقة", driveUrl: "https://drive.google.com/" },
              { id: "lesson2", title: "الخوارزميات", description: "مدخل مبسط لفكرة الخوارزمية.", duration: "30 دقيقة", driveUrl: "https://drive.google.com/" }
            ]
          }
        ]
      },
      second: {
        name: "الترم الثاني",
        units: [
          {
            id: "unit1",
            title: "الوحدة الأولى",
            description: "محتوى تجريبي.",
            lessons: [
              { id: "lesson1", title: "حل المشكلات", description: "خطوات منظمة للتفكير في المشكلة.", duration: "28 دقيقة", driveUrl: "" }
            ]
          }
        ]
      }
    }
  },

  secondPreparatory: {
    name: "الصف الثاني الإعدادي",
    shortName: "ثانية إعدادي",
    colorClass: "grade-green",
    terms: {
      first: {
        name: "الترم الأول",
        units: [
          {
            id: "unit1",
            title: "الوحدة الأولى",
            description: "محتوى تجريبي قابل للتعديل.",
            lessons: [
              { id: "lesson1", title: "التفكير الحاسوبي", description: "مفاهيم أولية في التفكير الحاسوبي.", duration: "24 دقيقة", driveUrl: "https://drive.google.com/" },
              { id: "lesson2", title: "تمثيل البيانات", description: "كيف تمثل الحواسيب المعلومات.", duration: "32 دقيقة", driveUrl: "" }
            ]
          }
        ]
      },
      second: {
        name: "الترم الثاني",
        units: []
      }
    }
  },

  thirdPreparatory: {
    name: "الصف الثالث الإعدادي",
    shortName: "ثالثة إعدادي",
    colorClass: "grade-purple",
    terms: {
      first: {
        name: "الترم الأول",
        units: [
          {
            id: "unit1",
            title: "الوحدة الأولى",
            description: "محتوى تجريبي.",
            lessons: [
              { id: "lesson1", title: "مقدمة إلى Python", description: "بداية عملية مع لغة Python.", duration: "35 دقيقة", driveUrl: "https://drive.google.com/" },
              { id: "lesson2", title: "المتغيرات", description: "فهم المتغيرات واستخدامها.", duration: "30 دقيقة", driveUrl: "https://drive.google.com/" }
            ]
          }
        ]
      },
      second: {
        name: "الترم الثاني",
        units: []
      }
    }
  },

 firstSecondary: {

    name: "الصف الأول الثانوي",

    shortName: "أولى ثانوي",

    colorClass: "grade-red",

    terms: {

        first: {

            name: "الترم الأول",

            units: [

                {
                    id: "unit1",
                    title: "الوحدة الأولى: ما هي المعلومات ؟",
                    description: "التعرف على مفهوم المعلومات والوسائط وأخلاقيات المعلومات.",
                    lessons: [

                        {
                            id: "lesson1",
                            title: "المعلومات والوسائط",
                            description: "التعرف على مفهوم المعلومات والوسائط وأنواعها.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson2",
                            title: "أخلاقيات المعلومات",
                            description: "التعرف على أخلاقيات التعامل مع المعلومات واستخدامها.",
                            duration: "",
                            driveUrl: ""
                        }

                    ]
                },

                {
                    id: "unit2",
                    title: "الوحدة الثانية: القوانين والحقوق في مجتمع المعلومات",
                    description: "التعرف على القوانين والحقوق المرتبطة بالمعلومات والبيانات في مجتمع المعلومات.",
                    lessons: [

                        {
                            id: "lesson1",
                            title: "البيانات الشخصية",
                            description: "التعرف على البيانات الشخصية وأهمية حمايتها.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson2",
                            title: "حقوق الملكية الفكرية",
                            description: "التعرف على مفهوم حقوق الملكية الفكرية وأهميتها.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson3",
                            title: "استخدام المعلومات والكشف عنها",
                            description: "التعرف على ضوابط استخدام المعلومات والكشف عنها.",
                            duration: "",
                            driveUrl: ""
                        }

                    ]
                },

                {
                    id: "unit3",
                    title: "الوحدة الثالثة: أمن المعلومات",
                    description: "التعرف على تهديدات أمن المعلومات ووسائل الحماية والتدابير المضادة.",
                    lessons: [

                        {
                            id: "lesson1",
                            title: "تهديدات وإجراءات مواجهة أمن المعلومات 1",
                            description: "التعرف على تهديدات أمن المعلومات وإجراءات مواجهتها.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson2",
                            title: "التهديدات والتدابير المضادة في أمن المعلومات 2",
                            description: "التعرف على التهديدات والتدابير المضادة في أمن المعلومات.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson3",
                            title: "التهديدات والتدابير المضادة فى أمن المعلومات 3",
                            description: "استكمال التعرف على تهديدات أمن المعلومات والتدابير المضادة.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson4",
                            title: "تقنيات المعلومات للسلامة 4",
                            description: "التعرف على تقنيات المعلومات المستخدمة لتحقيق السلامة.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson5",
                            title: "تكنولوجيا المعلومات للسلامة 2",
                            description: "التعرف على دور تكنولوجيا المعلومات في تحقيق السلامة.",
                            duration: "",
                            driveUrl: ""
                        }

                    ]
                },

                {
                    id: "unit4",
                    title: "الوحدة الرابعة: تكنولوجيا المعلومات والمجتمع",
                    description: "التعرف على تطور تكنولوجيا المعلومات وتأثيرها في المجتمع.",
                    lessons: [

                        {
                            id: "lesson1",
                            title: "تطور تكنولوجيا المعلومات",
                            description: "التعرف على مراحل وتطور تكنولوجيا المعلومات.",
                            duration: "",
                            driveUrl: ""
                        }

                    ]
                },

                {
                    id: "unit5",
                    title: "الوحدة الخامسة: الاتصالات",
                    description: "التعرف على تطور وسائل الاتصال وأشكاله وعلاقته بالإنترنت.",
                    lessons: [

                        {
                            id: "lesson1",
                            title: "تطوير وسائل الاتصال",
                            description: "التعرف على تطور وسائل الاتصال عبر الزمن.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson2",
                            title: "الاتصال وأشكاله",
                            description: "التعرف على مفهوم الاتصال وأشكاله المختلفة.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson3",
                            title: "الإنترنت والاتصالات",
                            description: "التعرف على دور الإنترنت في الاتصالات وتطورها.",
                            duration: "",
                            driveUrl: ""
                        }

                    ]
                },

                {
                    id: "unit6",
                    title: "الوحدة السادسة: تصميم المعلومات",
                    description: "التعرف على التمثيل الرقمي للبيانات وطرق تصميمها ومعالجتها.",
                    lessons: [

                        {
                            id: "lesson1",
                            title: "التناظري والرقمي",
                            description: "التعرف على الفرق بين الأنظمة التناظرية والرقمية.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson2",
                            title: "النظام الثنائي وكمية البيانات",
                            description: "التعرف على النظام الثنائي وعلاقته بكمية البيانات.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson3",
                            title: "النظام السادس عشر (Hexadecimal)",
                            description: "التعرف على النظام السادس عشر واستخداماته في تمثيل البيانات.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson4",
                            title: "التمثيل الرقمي للأحرف",
                            description: "التعرف على كيفية تمثيل الأحرف بصورة رقمية.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson5",
                            title: "العمليات الحسابات العددية [1]",
                            description: "التعرف على العمليات الحسابية العددية في الأنظمة الرقمية.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson6",
                            title: "العمليات الحسابات العددية [2]",
                            description: "استكمال العمليات الحسابية العددية في الأنظمة الرقمية.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson7",
                            title: "رقمنة الصوت",
                            description: "التعرف على كيفية تحويل الصوت إلى صورة رقمية.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson8",
                            title: "رقمنة الصور",
                            description: "التعرف على كيفية تمثيل الصور بصورة رقمية.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson9",
                            title: "التمثيل الرقمي وضغط الفيديو",
                            description: "التعرف على التمثيل الرقمي للفيديو وطرق ضغطه.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson10",
                            title: "تصميم البيانات",
                            description: "التعرف على مبادئ تصميم البيانات وتنظيمها.",
                            duration: "",
                            driveUrl: ""
                        }

                    ]
                },

                {
                    id: "unit7",
                    title: "الوحدة السابعة: الكمبيوترات",
                    description: "التعرف على بنية الكمبيوتر وبرامجه والدوائر المنطقية.",
                    lessons: [

                        {
                            id: "lesson1",
                            title: "بنية الكمبيوتر",
                            description: "التعرف على مكونات الكمبيوتر وبنيته الأساسية.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson2",
                            title: "برامج الكمبيوتر",
                            description: "التعرف على برامج الكمبيوتر وأنواعها ووظائفها.",
                            duration: "",
                            driveUrl: ""
                        },

                        {
                            id: "lesson3",
                            title: "الدوائر المنطقية",
                            description: "التعرف على الدوائر المنطقية ودورها في عمل الكمبيوتر.",
                            duration: "",
                            driveUrl: ""
                        }

                    ]
                }

            ]

        }

    }

},
  //     second: {
  //       name: "الترم الثاني",
  //       units: [
  //         {
  //           id: "unit1",
  //           title: "الوحدة الأولى",
  //           description: "محتوى تجريبي للعرض.",
  //           lessons: [
  //             { id: "lesson1", title: "التطبيق العملي", description: "درس تجريبي يمكن استبداله لاحقًا.", duration: "30 دقيقة", driveUrl: "" }
  //           ]
  //         }
  //       ]
  //     }
  //   }
  // },

  secondSecondary: {
    name: "الصف الثاني الثانوي",
    shortName: "ثانية ثانوي",
    colorClass: "grade-gold",
    terms: {
    first: {
      name: "الترم الأول",
      units: [
        {
          id: "unit1",
          title: "الفصل الأول: تكنولوجيا المعلومات والمجتمع",
          description: "التعرف على تطور تكنولوجيا المعلومات والذكاء الاصطناعي وتأثيرهما في المجتمع والحياة اليومية.",
          lessons: [
            {
              id: "lesson1",
              title: "تطور تكنولوجيا المعلومات والتحول الاجتماعي",
              description: "التعرف على تطور تكنولوجيا المعلومات ودورها في التحول الاجتماعي.",
              duration: "",
              driveUrl: "https://drive.google.com/drive/folders/10sriGL4UoTBBaaAMK8zGA5NcYD1cuL73?usp=drive_link",
              htmlUrl: "2-1-1.html"
            },
            {
              id: "lesson2",
              title: "كيف يعمل الذكاء الاصطناعي",
              description: "التعرف على آلية عمل الذكاء الاصطناعي والمفاهيم الأساسية المرتبطة به.",
              duration: "",
              driveUrl: "https://drive.google.com/drive/folders/1_ckumHtD41rLYZ1SaUCLPJeBVjwdmGkg?usp=sharing",
              htmlUrl: "2-1-2.html"
            },
            {
              id: "lesson3",
              title: "الذكاء الاصطناعي في الحياة اليومية والصناعة",
              description: "التعرف على تطبيقات الذكاء الاصطناعي في الحياة اليومية ومجالات الصناعة.",
              duration: "",
              driveUrl: ""
            },
            {
              id: "lesson4",
              title: "القضايا الأخلاقية للذكاء الاصطناعي",
              description: "التعرف على القضايا والتحديات الأخلاقية المرتبطة باستخدام الذكاء الاصطناعي.",
              duration: "",
              driveUrl: ""
            }
          ]
        },

        {
          id: "unit2",
          title: "الفصل الثاني: الأمن السيبراني",
          description: "التعرف على تقنيات حماية المعلومات والشبكات والاستجابة للحوادث وإدارة المخاطر.",
          lessons: [
            {
              id: "lesson1",
              title: "تقنيات التشفير والمصادقة",
              description: "التعرف على تقنيات التشفير والمصادقة ودورها في حماية المعلومات.",
              duration: "",
              driveUrl: ""
            },
            {
              id: "lesson2",
              title: "تصميم أمن الشبكات",
              description: "التعرف على المبادئ الأساسية لتصميم شبكات آمنة.",
              duration: "",
              driveUrl: ""
            },
            {
              id: "lesson3",
              title: "الاستجابة للحوادث وإدارة المخاطر",
              description: "التعرف على أساليب الاستجابة للحوادث وإدارة المخاطر السيبرانية.",
              duration: "",
              driveUrl: ""
            }
          ]
        },

        {
          id: "unit3",
          title: "الفصل الثالث: تطبيقات الويب",
          description: "التعرف على البنية الأساسية لتطبيقات الويب وطرق الاتصال ومبادئ الواجهة الأمامية.",
          lessons: [
            {
              id: "lesson1",
              title: "البنية العامة لتطبيقات الويب",
              description: "التعرف على المكونات والبنية العامة لتطبيقات الويب.",
              duration: "",
              driveUrl: ""
            },
            {
              id: "lesson2",
              title: "طرق الاتصال في تطبيقات الويب",
              description: "التعرف على طرق الاتصال المستخدمة في تطبيقات الويب.",
              duration: "",
              driveUrl: ""
            },
            {
              id: "lesson3",
              title: "أساسيات تكنولوجيا الواجهة الأمامية",
              description: "التعرف على أساسيات تقنيات الواجهة الأمامية المستخدمة في تطوير الويب.",
              duration: "",
              driveUrl: ""
            }
          ]
        },

        {
          id: "unit4",
          title: "الفصل الرابع: تصميم الويب والوسائط",
          description: "التعرف على أنواع الوسائط وتصميم المعلومات وتجربة المستخدم وتقييم المواقع وتحسينها.",
          lessons: [
            {
              id: "lesson1",
              title: "أنواع الوسائط وخصائصها",
              description: "التعرف على أنواع الوسائط المختلفة وخصائص كل نوع.",
              duration: "",
              driveUrl: ""
            },
            {
              id: "lesson2",
              title: "تصميم المعلومات وتجربة المستخدم للمواقع",
              description: "التعرف على مبادئ تصميم المعلومات وتحسين تجربة المستخدم للمواقع.",
              duration: "",
              driveUrl: ""
            },
            {
              id: "lesson3",
              title: "أساليب تقييم المواقع الإلكترونية",
              description: "التعرف على الأساليب والمعايير المستخدمة في تقييم المواقع الإلكترونية.",
              duration: "",
              driveUrl: ""
            },
            {
              id: "lesson4",
              title: "عملية التحسين التكراري للمواقع",
              description: "التعرف على مفهوم التحسين التكراري وخطوات تطوير المواقع وتحسينها.",
              duration: "",
              driveUrl: ""
            }
          ]
        }
      ]
    },
      // second: {
      //   name: "الترم الثاني",
      //   units: []
      // }
    }
  }
};

/* =========================================================
   ANNOUNCEMENTS
   ========================================================= */
const announcements = [
  {
    id: 1,
    title: "تم رفع درس جديد",
    message: "يمكنك متابعة الدروس المتاحة من قسم دروسي.",
    date: "2026-09-07",
    type: "new"
  },
  {
    id: 2,
    title: "تنبيه للطلاب",
    message: "تأكد من تحديد الدرس كمكتمل بعد الانتهاء منه حتى يتم حفظ تقدمك.",
    date: "2026-09-07",
    type: "important"
  },
  {
    id: 3,
    title: "تحديث المنصة",
    message: "تم تجهيز البحث والتنقل بين الدروس وحفظ آخر درس وصلت إليه.",
    date: "2026-09-06",
    type: "update"
  }
];

/* =========================================================
   STATE
   ========================================================= */
const state = {
  student: null,
  route: "home",
  selectedTerm: null,
  selectedUnit: null,
  searchQuery: ""
};

/* =========================================================
   DOM HELPERS
   ========================================================= */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(dateString) {
  const d = new Date(dateString + "T12:00:00");
  if (Number.isNaN(d.getTime())) return dateString;
  return new Intl.DateTimeFormat("ar-EG", { day:"numeric", month:"long", year:"numeric" }).format(d);
}

function icon(name, size = 17) {
  return `<i data-lucide="${name}" width="${size}" height="${size}" aria-hidden="true"></i>`;
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

/* =========================================================
   THEME
   ========================================================= */
function getInitialTheme() {
  const saved = localStorage.getItem(config.storage.theme);
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(config.storage.theme, theme);
  const iconName = theme === "dark" ? "moon" : "sun";
  ["publicThemeBtn","authThemeBtn","appThemeBtn"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.innerHTML = icon(iconName);
  });
  refreshIcons();
}

function toggleTheme() {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
}

/* =========================================================
   IMAGE FALLBACKS
   ========================================================= */
function setupImageFallback(imgId, fallbackId) {
  const img = document.getElementById(imgId);
  const fallback = document.getElementById(fallbackId);
  if (!img || !fallback) return;
  fallback.classList.add("hidden");
  img.addEventListener("error", () => {
    img.classList.add("hidden");
    fallback.classList.remove("hidden");
  });
  img.addEventListener("load", () => {
    img.classList.remove("hidden");
    fallback.classList.add("hidden");
  });
}

/* =========================================================
   LOGO
   ========================================================= */
function applyLogo() {
  $$(".brand-mark-img").forEach(img => {
    img.src = LOGO_PATH;
    img.addEventListener("load", () => img.classList.add("is-loaded"));
    img.addEventListener("error", () => img.classList.remove("is-loaded"));
  });
}

/* =========================================================
   AUTHENTICATION
   ========================================================= */
function findStudent(username, password) {
  return students.find(s => s.username === username && s.password === password) || null;
}

function findStudentByUsername(username) {
  return students.find(s => s.username === username) || null;
}

function saveSession(student, remember = true) {
  if (remember) {
    localStorage.setItem(config.storage.session, JSON.stringify({
      id: student.id,
      username: student.username,
      name: student.name,
      grade: student.grade
    }));
  } else {
    sessionStorage.setItem(config.storage.session, JSON.stringify({
      id: student.id,
      username: student.username,
      name: student.name,
      grade: student.grade
    }));
  }
}

function restoreSession() {
  const raw = localStorage.getItem(config.storage.session) || sessionStorage.getItem(config.storage.session);
  if (!raw) return null;
  try {
    const data = JSON.parse(raw);
    const student = students.find(s => s.id === data.id && s.username === data.username);
    if (!student || !student.active) return null;
    return student;
  } catch {
    return null;
  }
}

function clearSession() {
  localStorage.removeItem(config.storage.session);
  sessionStorage.removeItem(config.storage.session);
  state.student = null;
}

function loginStudent(student, remember) {
  state.student = student;
  saveSession(student, remember);
  showApp();
  navigate("dashboard", true);
  showToast("تم تسجيل الدخول بنجاح.", "success");
}

function logout() {
  clearSession();
  showPublic();
  location.hash = "home";
  showToast("تم تسجيل الخروج بنجاح.", "success");
}

/* =========================================================
   PROGRESS / LAST ACCESSED
   ========================================================= */
function progressKey(studentId) {
  return config.storage.progressPrefix + studentId;
}

function lastKey(studentId) {
  return config.storage.lastLessonPrefix + studentId;
}

function getCompleted(studentId) {
  try {
    return JSON.parse(localStorage.getItem(progressKey(studentId)) || "[]");
  } catch {
    return [];
  }
}

function saveCompleted(studentId, completed) {
  localStorage.setItem(progressKey(studentId), JSON.stringify([...new Set(completed)]));
}

function lessonKey(grade, termKey, unitId, lessonId) {
  return `${grade}-${termKey}-${unitId}-${lessonId}`;
}

function getLastAccessed(studentId) {
  const raw = localStorage.getItem(lastKey(studentId));
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

function saveLastAccessed(studentId, data) {
  localStorage.setItem(lastKey(studentId), JSON.stringify(data));
}

function getStudentCourse() {
  return state.student ? courses[state.student.grade] : null;
}

function getAllLessonsForStudent() {
  const course = getStudentCourse();
  if (!course) return [];
  const result = [];
  Object.entries(course.terms || {}).forEach(([termKey, term]) => {
    (term.units || []).forEach(unit => {
      (unit.lessons || []).forEach(lesson => {
        result.push({ ...lesson, termKey, termName:term.name, unitId:unit.id, unitTitle:unit.title });
      });
    });
  });
  return result;
}

function getProgress() {
  if (!state.student) return { completed:0, total:0, percent:0 };
  const lessons = getAllLessonsForStudent();
  const completed = getCompleted(state.student.id);
  const count = lessons.filter(l => completed.includes(lessonKey(state.student.grade,l.termKey,l.unitId,l.id))).length;
  const total = lessons.length;
  return { completed:count, total, percent: total ? Math.round(count / total * 100) : 0 };
}

function isCompleted(lesson) {
  if (!state.student) return false;
  return getCompleted(state.student.id).includes(
    lessonKey(state.student.grade, lesson.termKey, lesson.unitId, lesson.id)
  );
}

function toggleLessonCompleted(lesson) {
  if (!state.student) return;
  const key = lessonKey(state.student.grade, lesson.termKey, lesson.unitId, lesson.id);
  const completed = getCompleted(state.student.id);
  if (completed.includes(key)) {
    saveCompleted(state.student.id, completed.filter(x => x !== key));
    showToast("تم إلغاء تحديد الدرس كمكتمل.", "success");
  } else {
    saveCompleted(state.student.id, [...completed, key]);
    showToast("تم حفظ الدرس كمكتمل.", "success");
  }
  renderRoute();
}

/* =========================================================
   COURSE ACCESS / ROUTING DATA
   ========================================================= */
function getTerm(termKey) {
  const course = getStudentCourse();
  return course?.terms?.[termKey] || null;
}

function findLessonForStudent(lessonId) {
  const all = getAllLessonsForStudent();
  return all.find(l => l.id === lessonId && l.termKey && l.unitId) || null;
}

function getAdjacentLessons(current) {
  const all = getAllLessonsForStudent();
  const index = all.findIndex(l =>
    l.id === current.id && l.termKey === current.termKey && l.unitId === current.unitId
  );
  return {
    previous: index > 0 ? all[index - 1] : null,
    next: index >= 0 && index < all.length - 1 ? all[index + 1] : null
  };
}

/* =========================================================
   VIEWS
   ========================================================= */
function showPublic() {
  $("#publicView").classList.remove("hidden");
  $("#authView").classList.add("hidden");
  $("#appView").classList.add("hidden");
  window.scrollTo(0,0);
}

function showAuth() {
  $("#publicView").classList.add("hidden");
  $("#authView").classList.remove("hidden");
  $("#appView").classList.add("hidden");
  setTimeout(() => $("#username")?.focus(), 60);
  window.scrollTo(0,0);
}

function showApp() {
  $("#publicView").classList.add("hidden");
  $("#authView").classList.add("hidden");
  $("#appView").classList.remove("hidden");
  updateShellUser();
}

function updateShellUser() {
  if (!state.student) return;
  const course = courses[state.student.grade];
  const initials = state.student.name.trim().slice(0,1) || "ط";
  $("#topStudent").innerHTML = `
    <div class="avatar">${escapeHTML(initials)}</div>
    <div>
      <strong style="display:block;font-size:.75rem">${escapeHTML(state.student.name)}</strong>
      <span class="muted" style="font-size:.62rem">${escapeHTML(course?.shortName || "طالب")}</span>
    </div>`;
  $("#sidebarUser").innerHTML = `
    <strong>${escapeHTML(state.student.name)}</strong>
    <span>${escapeHTML(course?.shortName || "—")}</span>`;
}

/* =========================================================
   DASHBOARD
   ========================================================= */
function dashboardHTML() {
  const course = getStudentCourse();
  const progress = getProgress();
  const last = getLastAccessed(state.student.id);
  const lastLesson = last ? findLessonForStudent(last.lessonId) : null;

  return `
    <section>
      <div class="welcome">
        <div>
          <span class="grade-badge ${course?.colorClass || ""}"><i></i>${escapeHTML(course?.name || "غير محدد")}</span>
          <h1>أهلاً يا ${escapeHTML(state.student.name.split(" ")[0])}</h1>
          <p>جاهز تكمل رحلتك في البرمجة؟</p>
        </div>
        <button class="btn btn-primary btn-small" data-route="courses">${icon("book-open",15)} ابدأ التعلم</button>
      </div>

      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-top"><span>الوحدات المتاحة</span><span class="stat-icon">${icon("layers",16)}</span></div>
          <div class="stat-value">${course ? Object.values(course.terms).reduce((n,t)=>n+(t.units?.length||0),0) : 0}</div>
          <div class="stat-desc">ضمن مقررك الحالي</div>
        </div>
        <div class="stat-card">
          <div class="stat-top"><span>الدروس</span><span class="stat-icon">${icon("book-open",16)}</span></div>
          <div class="stat-value">${progress.total}</div>
          <div class="stat-desc">إجمالي الدروس المتاحة</div>
        </div>
        <div class="stat-card">
          <div class="stat-top"><span>المكتمل</span><span class="stat-icon">${icon("circle-check",16)}</span></div>
          <div class="stat-value">${progress.completed}</div>
          <div class="stat-desc">درس مكتمل</div>
        </div>
        <div class="stat-card">
          <div class="stat-top"><span>نسبة التقدم</span><span class="stat-icon">${icon("trending-up",16)}</span></div>
          <div class="stat-value">${progress.percent}%</div>
          <div class="stat-desc">في رحلتك الحالية</div>
        </div>
      </div>

      <div class="progress-card">
        <div class="progress-head">
          <strong>رحلتك التعليمية</strong>
          <span>${progress.percent}%</span>
        </div>
        <div class="progress-track"><div class="progress-bar" style="width:${progress.percent}%"></div></div>
        <div class="progress-caption">${progress.completed} من ${progress.total} دروس مكتملة</div>
      </div>

      ${lastLesson ? `
        <div class="section-card">
          <div class="section-card-head">
            <div>
              <h2>استكمل من حيث توقفت</h2>
              <p>${escapeHTML(lastLesson.unitTitle)} · ${escapeHTML(lastLesson.termName)}</p>
            </div>
            <button class="btn btn-primary btn-small" data-open-lesson="${escapeHTML(lastLesson.id)}" data-term="${escapeHTML(lastLesson.termKey)}" data-unit="${escapeHTML(lastLesson.unitId)}">
              استكمال الدرس ${icon("arrow-left",15)}
            </button>
          </div>
          <div class="lesson-card">
            <div class="lesson-number">${escapeHTML(lastLesson.id.replace("lesson","").padStart(2,"0"))}</div>
            <div class="lesson-main">
              <h3>${escapeHTML(lastLesson.title)}</h3>
              <p>${escapeHTML(lastLesson.description || "")}</p>
            </div>
            <div class="lesson-side"><span class="meta-pill">${escapeHTML(lastLesson.duration || "—")}</span></div>
          </div>
        </div>
      ` : `
        <div class="section-card">
          <div class="empty-state">
            <div class="empty-icon">${icon("play-circle",28)}</div>
            <strong>ابدأ أول درس في رحلتك التعليمية.</strong>
            <span>اختر "دروسي" للوصول إلى المحتوى.</span>
            <div style="margin-top:14px"><button class="btn btn-primary btn-small" data-route="courses">عرض دروسي</button></div>
          </div>
        </div>
      `}

      <div class="section-card">
        <div class="section-card-head">
          <div><h2>آخر الإعلانات</h2><p>آخر التحديثات المهمة للطلاب</p></div>
          <button class="btn btn-ghost btn-small" data-route="announcements">كل الإعلانات</button>
        </div>
        ${announcementHTML(announcements.slice(0,3))}
      </div>
    </section>`;
}

/* =========================================================
   COURSES / UNITS / LESSONS
   ========================================================= */
function coursesHTML() {
  const course = getStudentCourse();
  if (!course) return emptyStateHTML("book-x","لا يوجد محتوى متاح حاليًا.","تحقق من إعدادات حساب الطالب.");

  const terms = Object.entries(course.terms || {});
  if (!terms.length) return emptyStateHTML("book-x","لا توجد ترمات متاحة حاليًا.","");

  return `
    <section>
      <div class="welcome">
        <div><h1>دروسي</h1><p>${escapeHTML(course.name)} — اختر الترم ثم الوحدة.</p></div>
        <span class="grade-badge ${course.colorClass}"><i></i>${escapeHTML(course.shortName)}</span>
      </div>
      <div class="section-card">
        <div class="section-card-head"><div><h2>الترمات الدراسية</h2><p>المحتوى متصل بحسابك الدراسي.</p></div></div>
        <div class="course-grid">
          ${terms.map(([key,term]) => `
            <button class="course-card" style="text-align:right" data-term-select="${escapeHTML(key)}">
              <div class="course-top">
                <span class="grade-badge ${course.colorClass}"><i></i>Term</span>
                ${icon("arrow-left",17)}
              </div>
              <h3>${escapeHTML(term.name)}</h3>
              <p>${term.units?.length || 0} وحدات · ${(term.units||[]).reduce((n,u)=>n+(u.lessons?.length||0),0)} دروس</p>
              <div class="course-meta">
                <span class="meta-pill">فتح المحتوى</span>
              </div>
            </button>
          `).join("")}
        </div>
      </div>
    </section>`;
}

function termHTML(termKey) {
  const course = getStudentCourse();
  const term = getTerm(termKey);
  if (!course || !term) return accessDeniedHTML();

  return `
    <section>
      ${breadcrumbHTML([
        {label:"دروسي", action:"courses"},
        {label:term.name}
      ])}
      <div class="welcome">
        <div><h1>${escapeHTML(term.name)}</h1><p>${escapeHTML(course.name)} — اختر الوحدة التي تريد دراستها.</p></div>
        <button class="btn btn-ghost btn-small" data-route="courses">${icon("arrow-right",15)} الترمات</button>
      </div>
      <div class="section-card">
        <div class="section-card-head"><div><h2>الوحدات</h2><p>${term.units?.length || 0} وحدات متاحة</p></div></div>
        ${term.units?.length ? `
          <div class="unit-grid">
            ${term.units.map((unit,index)=>`
              <button class="unit-card" data-unit-select="${escapeHTML(unit.id)}" data-term="${escapeHTML(termKey)}" style="text-align:right">
                <div class="unit-num">الوحدة ${String(index+1).padStart(2,"0")}</div>
                <h3>${escapeHTML(unit.title)}</h3>
                <p>${escapeHTML(unit.description || "")}</p>
                <div class="course-meta"><span class="meta-pill">${unit.lessons?.length||0} دروس</span></div>
              </button>
            `).join("")}
          </div>` : emptyStateHTML("layers-3","لا توجد وحدات متاحة حاليًا.","")}
      </div>
    </section>`;
}

function unitHTML(termKey, unitId) {
  const term = getTerm(termKey);
  const unit = term?.units?.find(u=>u.id===unitId);
  if (!term || !unit) return accessDeniedHTML();

  return `
    <section>
      ${breadcrumbHTML([
        {label:"دروسي", action:"courses"},
        {label:term.name, action:`term:${termKey}`},
        {label:unit.title}
      ])}
      <div class="welcome">
        <div><h1>${escapeHTML(unit.title)}</h1><p>${escapeHTML(unit.description || "")}</p></div>
        <span class="grade-badge ${getStudentCourse().colorClass}"><i></i>${unit.lessons?.length||0} دروس</span>
      </div>
      <div class="section-card">
        <div class="section-card-head"><div><h2>دروس الوحدة</h2><p>اضغط على الدرس لعرض التفاصيل والملفات.</p></div></div>
        ${unit.lessons?.length ? lessonListHTML(unit.lessons, termKey, unit.id) : emptyStateHTML("book-x","لا توجد دروس متاحة حاليًا.","")}
      </div>
    </section>`;
}

function lessonListHTML(lessons, termKey, unitId) {
  return `<div class="lesson-list">${lessons.map(lesson=>{
    const done = isCompleted({...lesson,termKey,unitId});
    return `
      <div class="lesson-card">
        <div class="lesson-number">${escapeHTML(lesson.id.replace("lesson","").padStart(2,"0"))}</div>
        <div class="lesson-main">
          <h3>${escapeHTML(lesson.title)}</h3>
          <p>${escapeHTML(lesson.description || "لا يوجد وصف لهذا الدرس.")}</p>
        </div>
        <div class="lesson-side">
          ${done ? `<span class="completed-message">${icon("circle-check",14)} مكتمل</span>` : ""}
          ${lesson.duration ? `<span class="meta-pill">${escapeHTML(lesson.duration)}</span>` : ""}
          <div class="lesson-actions">
            <button class="btn btn-primary btn-small" data-open-lesson="${escapeHTML(lesson.id)}" data-term="${escapeHTML(termKey)}" data-unit="${escapeHTML(unitId)}">
              فتح الدرس ${icon("arrow-left",14)}
            </button>
          </div>
        </div>
      </div>`;
  }).join("")}</div>`;
}

/* =========================================================
   LESSON VIEW
   ========================================================= */
function lessonHTML(termKey, unitId, lessonId) {
  const term = getTerm(termKey);
  const unit = term?.units?.find(u=>u.id===unitId);
  const lesson = unit?.lessons?.find(l=>l.id===lessonId);

  /* Client-side access control: requested lesson must belong to current student's course. */
  if (!state.student || !term || !unit || !lesson) return accessDeniedHTML();

  saveLastAccessed(state.student.id, {
    grade: state.student.grade,
    termKey,
    unitId,
    lessonId
  });

  const done = isCompleted({...lesson,termKey,unitId});
  const adjacent = getAdjacentLessons({...lesson,termKey,unitId});
  const course = getStudentCourse();

  return `
    <section>
      ${breadcrumbHTML([
        {label:"الرئيسية", action:"dashboard"},
        {label:course.name},
        {label:term.name, action:`term:${termKey}`},
        {label:unit.title, action:`unit:${termKey}:${unitId}`},
        {label:lesson.title}
      ])}

      <div class="lesson-hero">
        <div class="lesson-title-row">
          <div>
            <span class="grade-badge ${course.colorClass}"><i></i>${escapeHTML(course.shortName)}</span>
            <h1>${escapeHTML(lesson.title)}</h1>
            <p>${escapeHTML(lesson.description || "لا يوجد وصف لهذا الدرس حاليًا.")}</p>
            <div class="lesson-meta">
              <span class="meta-pill">${escapeHTML(term.name)}</span>
              <span class="meta-pill">${escapeHTML(unit.title)}</span>
              ${lesson.duration ? `<span class="meta-pill">${icon("clock",12)} ${escapeHTML(lesson.duration)}</span>` : ""}
              ${done ? `<span class="completed-message">${icon("circle-check",14)} مكتمل</span>` : ""}
            </div>
          </div>
          <div class="grade-badge"><i></i>الدرس ${escapeHTML(lesson.id.replace("lesson","").padStart(2,"0"))}</div>
        </div>
      </div>

      <div class="lesson-resource">
        <div class="section-card-head">
          <div><h2>ملفات الدرس</h2><p>افتح الموارد التعليمية المرتبطة بهذا الدرس.</p></div>
        </div>
        ${lesson.driveUrl ? `
          <div class="resource-box">
            <div>
              <h3>Google Drive</h3>
              <p>سيتم فتح الملفات في علامة تبويب جديدة.</p>
            </div>
            <a class="btn btn-primary" href="${escapeHTML(lesson.driveUrl)}" target="_blank" rel="noopener noreferrer">
              ${icon("external-link",16)} فتح ملفات الدرس
            </a>
          </div>` : `
          <div class="empty-state">
            <div class="empty-icon">${icon("folder-clock",28)}</div>
            <strong>ملفات هذا الدرس ستتوفر قريبًا.</strong>
            <span>لا يوجد رابط Google Drive مضاف حاليًا.</span>
          </div>`}
      </div>

      <div class="section-card">
        <div class="section-card-head">
          <div><h2>متابعة الدرس</h2><p>يمكنك حفظ حالة الإكمال على هذا الجهاز.</p></div>
        </div>
        <div class="lesson-actions-row">
          <a class="btn btn-primary" href="${escapeHTML(lesson.htmlUrl || "#")}" target="_blank" rel="noopener noreferrer">${icon("external-link",16)} فتح الدرس</a>
          <button class="btn ${done ? "btn-secondary" : "btn-primary"}" data-complete-lesson="${escapeHTML(lesson.id)}" data-term="${escapeHTML(termKey)}" data-unit="${escapeHTML(unitId)}">
            ${done ? icon("circle-check",16) + " تم إكمال الدرس" : icon("check",16) + " تم إكمال الدرس"}
          </button>
        </div>
        <div class="lesson-bottom">
          <div class="lesson-nav">
            ${adjacent.previous ? `<button class="btn btn-ghost btn-small" data-open-lesson="${escapeHTML(adjacent.previous.id)}" data-term="${escapeHTML(adjacent.previous.termKey)}" data-unit="${escapeHTML(adjacent.previous.unitId)}">${icon("arrow-right",14)} السابق</button>` : ""}
            ${adjacent.next ? `<button class="btn btn-primary btn-small" data-open-lesson="${escapeHTML(adjacent.next.id)}" data-term="${escapeHTML(adjacent.next.termKey)}" data-unit="${escapeHTML(adjacent.next.unitId)}">التالي ${icon("arrow-left",14)}</button>` : ""}
          </div>
          <button class="btn btn-ghost btn-small" data-route="dashboard">${icon("layout-dashboard",14)} العودة للرئيسية</button>
        </div>
      </div>
    </section>`;
}

/* =========================================================
   SEARCH
   ========================================================= */
function searchHTML() {
  const course = getStudentCourse();
  const query = state.searchQuery.trim().toLowerCase();
  let results = getAllLessonsForStudent();

  if (query) {
    results = results.filter(l =>
      [l.title,l.description,l.termName,l.unitTitle].some(v => String(v||"").toLowerCase().includes(query))
    );
  }

  return `
    <section>
      <div class="welcome">
        <div><h1>البحث في الدروس</h1><p>ابحث داخل محتوى ${escapeHTML(course?.shortName || "")} فقط.</p></div>
      </div>
      <div class="section-card">
        <div class="search-box">
          ${icon("search",17)}
          <span class="search-icon">${icon("search",17)}</span>
          <input class="form-input" id="lessonSearch" value="${escapeHTML(state.searchQuery)}" placeholder="ابحث باسم الدرس أو الوصف..." aria-label="البحث في الدروس">
          ${query ? `<button class="search-clear" id="clearSearch" aria-label="مسح البحث">${icon("x",16)}</button>` : ""}
        </div>
      </div>
      <div class="section-card">
        <div class="section-card-head"><div><h2>نتائج البحث</h2><p>${results.length} نتيجة</p></div></div>
        ${results.length ? lessonListHTML(results.map(({termKey,unitId,...l})=>l), "__SEARCH__", "__SEARCH__").replaceAll('data-term="__SEARCH__" data-unit="__SEARCH__"','') : emptyStateHTML("search-x", query ? "لم نجد أي درس مطابق لبحثك." : "اكتب كلمة للبحث عن درس.","جرب عنوان درس أو كلمة من الوصف.")}
      </div>
    </section>`;
}

/* =========================================================
   ANNOUNCEMENTS
   ========================================================= */
function announcementHTML(items) {
  if (!items.length) return emptyStateHTML("bell-off","لا توجد إعلانات جديدة.","");
  return `<div class="announcement-list">${items.map(a=>`
    <article class="announcement ${escapeHTML(a.type)}">
      <div class="announcement-icon">${icon(a.type==="important"?"triangle-alert":a.type==="update"?"refresh-cw":"sparkles",17)}</div>
      <div>
        <h3>${escapeHTML(a.title)}</h3>
        <p>${escapeHTML(a.message)}</p>
        <small>${formatDate(a.date)}</small>
      </div>
    </article>`).join("")}</div>`;
}

function announcementsHTML() {
  return `
    <section>
      <div class="welcome">
        <div><h1>الإعلانات</h1><p>آخر التحديثات والملاحظات الخاصة بالطلاب.</p></div>
      </div>
      <div class="section-card">
        ${announcementHTML(announcements)}
      </div>
    </section>`;
}

/* =========================================================
   PROFILE
   ========================================================= */
function profileHTML() {
  const progress = getProgress();
  const course = getStudentCourse();
  const hasPhoto = Boolean(state.student.photoUrl);
  return `
    <section>
      <div class="welcome">
        <div><h1>الملف الشخصي</h1><p>بيانات حسابك الحالية.</p></div>
      </div>
      <div class="profile-header">
        <div class="profile-avatar">
          ${hasPhoto
            ? `<img src="${escapeHTML(state.student.photoUrl)}" alt="صورة ${escapeHTML(state.student.name)}">`
            : icon("circle-user-round", 34)}
        </div>
        <div>
          <h2>${escapeHTML(state.student.name)}</h2>
          <p>${escapeHTML(course?.shortName || "طالب")}</p>
        </div>
      </div>
      <div class="profile-grid">
        <div class="section-card">
          <div class="section-card-head"><div><h2>بيانات الحساب</h2><p>للعرض فقط</p></div></div>
          <div class="profile-row"><span>الاسم</span><strong>${escapeHTML(state.student.name)}</strong></div>
          <div class="profile-row"><span>اسم المستخدم</span><strong class="ltr">${escapeHTML(state.student.username)}</strong></div>
          <div class="profile-row"><span>رقم الهاتف</span><strong class="ltr">${escapeHTML(state.student.phone)}</strong></div>
          <div class="profile-row"><span>الصف</span><strong>${escapeHTML(course?.name || "غير محدد")}</strong></div>
          <div class="profile-row"><span>حالة الحساب</span><strong style="color:var(--green)">نشط</strong></div>
        </div>
        <div class="section-card">
          <div class="section-card-head"><div><h2>التقدم</h2><p>محفوظ محليًا على هذا الجهاز</p></div></div>
          <div class="profile-row"><span>الدروس المكتملة</span><strong>${progress.completed}</strong></div>
          <div class="profile-row"><span>إجمالي الدروس</span><strong>${progress.total}</strong></div>
          <div class="profile-row"><span>التقدم العام</span><strong>${progress.percent}%</strong></div>
          <div style="margin-top:16px" class="progress-track"><div class="progress-bar" style="width:${progress.percent}%"></div></div>
        </div>
      </div>
      <div class="section-card">
        <h2 style="font-size:1rem;margin-top:0">تعديل بيانات الحساب</h2>
        <p class="muted" style="font-size:.78rem;margin-bottom:0">لتعديل بيانات الحساب، برجاء التواصل مع مستر عبدو.</p>
      </div>
    </section>`;
}

/* =========================================================
   LAST ACCESSED
   ========================================================= */
function lastHTML() {
  const last = getLastAccessed(state.student.id);
  const lesson = last ? findLessonForStudent(last.lessonId) : null;
  if (!lesson) {
    return `
      <section>
        <div class="welcome"><div><h1>آخر ما درست</h1><p>يمكنك العودة إلى آخر درس فتحته.</p></div></div>
        <div class="section-card">${emptyStateHTML("history","لا يوجد درس سابق.","ابدأ أي درس وسيتم حفظه تلقائيًا.")}</div>
      </section>`;
  }
  return `
    <section>
      <div class="welcome"><div><h1>آخر ما درست</h1><p>استكمل من آخر نقطة وصلت إليها.</p></div></div>
      <div class="section-card">
        <div class="lesson-card">
          <div class="lesson-number">${escapeHTML(lesson.id.replace("lesson","").padStart(2,"0"))}</div>
          <div class="lesson-main">
            <h3>${escapeHTML(lesson.title)}</h3>
            <p>${escapeHTML(lesson.unitTitle)} · ${escapeHTML(lesson.termName)}</p>
          </div>
          <button class="btn btn-primary btn-small" data-open-lesson="${escapeHTML(lesson.id)}" data-term="${escapeHTML(lesson.termKey)}" data-unit="${escapeHTML(lesson.unitId)}">
            استكمال ${icon("arrow-left",14)}
          </button>
        </div>
      </div>
    </section>`;
}

/* =========================================================
   UTILITY HTML
   ========================================================= */
function emptyStateHTML(iconName, title, text) {
  return `<div class="empty-state"><div class="empty-icon">${icon(iconName,28)}</div><strong>${escapeHTML(title)}</strong><span>${escapeHTML(text || "")}</span></div>`;
}

function accessDeniedHTML() {
  return `
    <section>
      <div class="section-card">
        ${emptyStateHTML("shield-x","ليس لديك صلاحية للوصول إلى هذا المحتوى.","سيتم إعادتك إلى لوحة التحكم.")}
      </div>
    </section>`;
}

function breadcrumbHTML(items) {
  return `<div class="breadcrumb">
    ${items.map((item,i)=>`
      ${i ? `<span>/</span>` : ""}
      ${item.action ? `<button data-breadcrumb="${escapeHTML(item.action)}">${escapeHTML(item.label)}</button>` : `<span>${escapeHTML(item.label)}</span>`}
    `).join("")}
  </div>`;
}

/* =========================================================
   ROUTING
   ========================================================= */
function parseHash() {
  const hash = location.hash.replace(/^#/,"") || "home";
  const parts = hash.split("/");
  if (parts[0] === "lesson" && parts[1]) {
    return { route:"lesson", lessonId:decodeURIComponent(parts[1]), termKey:parts[2] || null, unitId:parts[3] || null };
  }
  if (parts[0] === "term" && parts[1]) return {route:"term",termKey:parts[1]};
  if (parts[0] === "unit" && parts[1] && parts[2]) return {route:"unit",termKey:parts[1],unitId:parts[2]};
  return {route:parts[0] || "home"};
}

function navigate(route, replace=false) {
  const target = "#" + route;
  if (replace) history.replaceState(null,"",target);
  else location.hash = route;
  renderRoute();
}

function renderRoute() {
  const parsed = parseHash();
  state.route = parsed.route;

  if (!state.student) {
    if (state.route === "login") showAuth();
    else showPublic();
    return;
  }

  showApp();

  /* Public-only routes after login return to dashboard. */
  if (["home","login"].includes(state.route)) {
    navigate("dashboard", true);
    return;
  }

  updateActiveNav();
  closeMobileSidebar();

  let html = "";
  switch (state.route) {
    case "dashboard": html = dashboardHTML(); break;
    case "courses": html = coursesHTML(); break;
    case "term": html = termHTML(parsed.termKey); break;
    case "unit": html = unitHTML(parsed.termKey, parsed.unitId); break;
    case "lesson": {
      /* If URL omits term/unit, try to resolve from the student's allowed course. */
      let termKey = parsed.termKey;
      let unitId = parsed.unitId;
      let lessonId = parsed.lessonId;
      if (!termKey || !unitId) {
        const resolved = findLessonForStudent(lessonId);
        if (resolved) { termKey=resolved.termKey; unitId=resolved.unitId; }
      }
      html = lessonHTML(termKey,unitId,lessonId);
      if (html.includes("ليس لديك صلاحية")) {
        setTimeout(()=>navigate("dashboard",true),900);
      }
      break;
    }
    case "last": html = lastHTML(); break;
    case "announcements": html = announcementsHTML(); break;
    case "profile": html = profileHTML(); break;
    case "search": html = searchHTML(); break;
    default:
      navigate("dashboard", true);
      return;
  }

  $("#pageContent").innerHTML = html;
  refreshIcons();
  updateShellUser();
  if (state.route === "lesson") window.scrollTo(0,0);
}

function updateActiveNav() {
  $$(".nav-item").forEach(el => {
    el.classList.toggle("active", el.dataset.route === state.route || (state.route==="term"||state.route==="unit") && el.dataset.route==="courses");
  });
  $$(".mobile-bottom button").forEach(el => {
    el.classList.toggle("active", el.dataset.route === state.route || (state.route==="term"||state.route==="unit") && el.dataset.route==="courses");
  });
}

/* =========================================================
   TOAST / MODAL
   ========================================================= */
let toastTimer = null;
function showToast(message, type="success") {
  const toast = $("#toast");
  const content = $("#toastContent");
  content.innerHTML = `${icon(type==="error"?"circle-alert":"circle-check",17)} <span>${escapeHTML(message)}</span>`;
  toast.className = `toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove("show"),3200);
  refreshIcons();
}

function openModal(title, bodyHTML) {
  $("#modalTitle").textContent = title;
  $("#modalBody").innerHTML = bodyHTML;
  $("#modalBackdrop").classList.remove("hidden");
  refreshIcons();
}

function closeModal() {
  $("#modalBackdrop").classList.add("hidden");
}

/* =========================================================
   MOBILE SIDEBAR
   ========================================================= */
function closeMobileSidebar() {
  $("#appSidebar")?.classList.remove("open");
}

function toggleMobileSidebar() {
  $("#appSidebar")?.classList.toggle("open");
}

/* =========================================================
   MOBILE PUBLIC NAV
   ========================================================= */
function closePublicMobileNav() {
  const nav = $("#publicNavMobile");
  const btn = $("#mobilePublicMenu");
  nav?.classList.remove("open");
  if (btn) {
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = icon("menu");
    refreshIcons();
  }
}

function toggleMobilePublicNav() {
  const nav = $("#publicNavMobile");
  const btn = $("#mobilePublicMenu");
  if (!nav || !btn) return;
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", String(open));
  btn.innerHTML = icon(open ? "x" : "menu");
  refreshIcons();
}

/* =========================================================
   SOCIAL LINKS
   =========================================================
   Reads directly from config.contact so there is a single
   place to add/edit social URLs. Any entry left empty or set
   to "#" is skipped automatically instead of rendering a dead
   link.
*/
/* Note: Lucide removed brand/logo icons (Facebook, Instagram, etc.) from its
   library, so generic, professional icons are used here instead. */
const SOCIAL_META = {
  whatsapp: { label: "واتساب", iconName: "message-circle" },
  facebook: { label: "فيسبوك", iconName: "users-round" },
  instagram: { label: "انستجرام", iconName: "camera" },
  tiktok: { label: "تيك توك", iconName: "music-2" }
};

function renderSocialLinks() {
  const container = $("#socialLinks");
  if (!container) return;
  const links = Object.entries(config.contact || {})
    .filter(([, url]) => url && url !== "#")
    .map(([type, url]) => {
      const meta = SOCIAL_META[type] || { label: type, iconName: "link" };
      return `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${icon(meta.iconName, 16)} ${escapeHTML(meta.label)}</a>`;
    });
  container.innerHTML = links.join("") || `<span class="muted" style="font-size:.8rem">لا توجد روابط تواصل مضافة بعد.</span>`;
  refreshIcons();
}

/* =========================================================
   EVENT HANDLERS
   ========================================================= */
document.addEventListener("click", (event) => {
  const actionBtn = event.target.closest("[data-action]");
  if (actionBtn?.dataset.action === "login") {
    event.preventDefault();
    location.hash = "login";
    showAuth();
    return;
  }

  const routeEl = event.target.closest("[data-route]");
  if (routeEl) {
    event.preventDefault();
    const route = routeEl.dataset.route;
    navigate(route);
    return;
  }

  const termEl = event.target.closest("[data-term-select]");
  if (termEl) {
    navigate(`term/${encodeURIComponent(termEl.dataset.termSelect)}`);
    return;
  }

  const unitEl = event.target.closest("[data-unit-select]");
  if (unitEl) {
    navigate(`unit/${encodeURIComponent(unitEl.dataset.term)}/${encodeURIComponent(unitEl.dataset.unitSelect)}`);
    return;
  }

  const lessonEl = event.target.closest("[data-open-lesson]");
  if (lessonEl) {
    navigate(`lesson/${encodeURIComponent(lessonEl.dataset.openLesson)}/${encodeURIComponent(lessonEl.dataset.term)}/${encodeURIComponent(lessonEl.dataset.unit)}`);
    return;
  }

  const completeEl = event.target.closest("[data-complete-lesson]");
  if (completeEl) {
    const term = getTerm(completeEl.dataset.term);
    const unit = term?.units?.find(u=>u.id===completeEl.dataset.unit);
    const lesson = unit?.lessons?.find(l=>l.id===completeEl.dataset.completeLesson);
    if (lesson) toggleLessonCompleted({...lesson,termKey:completeEl.dataset.term,unitId:completeEl.dataset.unit});
    return;
  }

  const breadcrumb = event.target.closest("[data-breadcrumb]");
  if (breadcrumb) {
    const a = breadcrumb.dataset.breadcrumb;
    if (a.startsWith("term:")) navigate(`term/${a.split(":")[1]}`);
    else if (a.startsWith("unit:")) {
      const [,term,unit] = a.split(":");
      navigate(`unit/${term}/${unit}`);
    } else navigate(a);
    return;
  }
});

$("#publicThemeBtn").addEventListener("click", toggleTheme);
$("#authThemeBtn").addEventListener("click", toggleTheme);
$("#appThemeBtn").addEventListener("click", toggleTheme);
$("#mobileSidebarBtn").addEventListener("click", toggleMobileSidebar);
$("#mobilePublicMenu").addEventListener("click", toggleMobilePublicNav);

$("#publicNavMobile").addEventListener("click", (event) => {
  if (event.target.closest("a")) closePublicMobileNav();
});

/* Close the public mobile nav when clicking outside of it. */
document.addEventListener("click", (event) => {
  const nav = $("#publicNavMobile");
  if (nav?.classList.contains("open")) {
    if (!event.target.closest("#publicNavMobile") && !event.target.closest("#mobilePublicMenu")) {
      closePublicMobileNav();
    }
  }
});

$("#authBackBtn").addEventListener("click", () => {
  location.hash = "home";
  showPublic();
});

$("#passwordToggle").addEventListener("click", () => {
  const input = $("#password");
  const visible = input.type === "text";
  input.type = visible ? "password" : "text";
  $("#passwordToggle").innerHTML = icon(visible ? "eye" : "eye-off");
  $("#passwordToggle").setAttribute("aria-label", visible ? "إظهار كلمة المرور" : "إخفاء كلمة المرور");
  refreshIcons();
});

$("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = $("#username").value.trim();
  const password = $("#password").value;
  const remember = $("#rememberSession").checked;
  const error = $("#loginError");
  error.classList.add("hidden");

  if (!username || !password) {
    error.textContent = "يرجى إدخال اسم المستخدم وكلمة المرور.";
    error.classList.remove("hidden");
    return;
  }

  const student = findStudent(username,password);
  if (!student) {
    error.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
    error.classList.remove("hidden");
    return;
  }

  if (!student.active) {
    error.textContent = "هذا الحساب غير نشط حاليًا. برجاء التواصل مع مستر عبدو.";
    error.classList.remove("hidden");
    return;
  }

  loginStudent(student,remember);
});

$("#logoutBtn").addEventListener("click", () => {
  openModal("تسجيل الخروج", `
    <p class="muted" style="font-size:.82rem">هل تريد تسجيل الخروج من حسابك على هذا الجهاز؟</p>
    <div style="display:flex;gap:8px;justify-content:flex-start;margin-top:18px">
      <button class="btn btn-danger" id="confirmLogout">${icon("log-out",15)} تسجيل الخروج</button>
      <button class="btn btn-secondary" id="cancelLogout">إلغاء</button>
    </div>
  `);
  $("#confirmLogout").addEventListener("click",()=>{closeModal();logout()});
  $("#cancelLogout").addEventListener("click",closeModal);
});

$("#modalClose").addEventListener("click",closeModal);
$("#modalBackdrop").addEventListener("click",(e)=>{if(e.target.id==="modalBackdrop")closeModal()});

document.addEventListener("input",(event)=>{
  if (event.target.id === "lessonSearch") {
    state.searchQuery = event.target.value;
    renderRoute();
    const input = $("#lessonSearch");
    if (input) { input.focus(); input.setSelectionRange(input.value.length,input.value.length); }
  }
});

document.addEventListener("click",(event)=>{
  if (event.target.closest("#clearSearch")) {
    state.searchQuery = "";
    renderRoute();
  }
});

window.addEventListener("hashchange", renderRoute);

/* Close sidebar when clicking outside on mobile. */
document.addEventListener("click",(event)=>{
  const sidebar = $("#appSidebar");
  if (window.innerWidth <= 850 && sidebar?.classList.contains("open")) {
    if (!event.target.closest("#appSidebar") && !event.target.closest("#mobileSidebarBtn")) closeMobileSidebar();
  }
});

/* =========================================================
   INITIALIZATION
   ========================================================= */
function init() {
  applyTheme(getInitialTheme());
  applyLogo();
  renderSocialLinks();

  setupImageFallback("heroTeacherImage","heroTeacherFallback");
  setupImageFallback("aboutTeacherImage","aboutTeacherFallback");

  const restored = restoreSession();
  if (restored) {
    state.student = restored;
    const parsed = parseHash();
    if (parsed.route === "home" || parsed.route === "login") location.hash = "dashboard";
    renderRoute();
  } else {
    const parsed = parseHash();
    if (parsed.route === "login") showAuth();
    else showPublic();
  }

  refreshIcons();
}

init();
