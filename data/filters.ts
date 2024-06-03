export const buttonFilters = [
  {
    id: "FStyled" as const,
    index: 1,
    label: "内置样式",
    icon: "i-tabler-palette",
		// Styled components come with opinated style. You usually customize them by overriding these styles.
    help: "组件带有初始样式, 也可以自定义样式",
    autoDisable: "FUnstyled",
  },
  {
    id: "FUnstyled" as const,
    index: 2,
    label: "无样式",
    icon: "i-tabler-palette-off",
		// Unstyled components come with no style and force you to write your own.
    help: "没有样式的组件, 需要自己编写样式",
    autoDisable: "FStyled",
  },
  {
    id: "FImported" as const,
    index: 3,
    label: "外部导入",
    icon: "i-mdi-import",
		// You depends on an external library from which you import components. You benefits from library updates but can not directly customize components since it's not your own code.
    help: "需要从外部库中导入",
    autoDisable: "FPasted",
  },
  {
    id: "FPasted" as const,
    index: 4,
    label: "粘贴代码",
    icon: "i-mdi-content-paste",
		// You depends on no external library and need to copy paste component code into your own project. After pasting the code, it's yours and you can customize it as you want. However, you can't benefit from the updates automatically.
    help: "不从外部库中导入组件, 而是将组件的代码复制到项目中, 支持自定义",
    autoDisable: "FImported",
  },
  {
    id: "FComponents" as const,
    index: 5,
    label: "组件",
    icon: "i-icon-park-outline-components",
		// Provide Vue components handling both logic and stying (or logic only if unstyled), but it is coupled to the Vue framework.
    help: "提供处理逻辑和样式的Vue组件(或只提供逻辑处理, 没有样式)",
    autoDisable: "FCSS",
  },
  {
    id: "FCSS" as const,
    index: 6,
    label: "纯CSS",
    icon: "i-ph-file-css",
		// Only provide CSS classes to inject into your own Vue components. You get no logic, but the library can be used with any framework (not only Vue).
    help: "只提供CSS类, 没有逻辑处理功能",
    autoDisable: "FComponents",
  },
  {
    id: "FVue" as const,
    index: 7,
    label: "Vue和Nuxt",
    icon: "i-mdi-vuejs",
		// Made for Vue framework, can be used with Nuxt too.
    help: "为Vue框架设计, Nuxt也可以使用",
    autoDisable: "FNuxt",
  },
  {
    id: "FNuxt" as const,
    index: 8,
    label: "仅Nuxt",
    icon: "i-simple-icons-nuxtdotjs",
		// Dedicated to Nuxt framework, can't be used with Vue.
    help: "只能Next框架使用",
    autoDisable: "FVue",
  },
  {
    id: "FTailwind" as const,
    index: 9,
    label: "Tailwind CSS",
    icon: "i-simple-icons-tailwindcss",
		// The library uses Tailwind CSS itself and allows you to use it to customize components. As a Tailwind CSS user, this allows to keep a unique tool for all your styling.
    help: "库本身使用Tailwind CSS, 且允许通过Tailwind CSS来定制组件, 可以使组件风格统一",
  },
  {
    id: "FFree" as const,
    index: 10,
    label: "免费",
    icon: "i-material-symbols-money-off",
		// The UI Library is entirely free for all available components.
    help: "免费",
  },
  {
    id: "FAccessible" as const,
    index: 11,
    label: "简易的",
    icon: "i-material-symbols-accessibility-new",
		// All components are designed with accessibility in mind.
    help: "易操作",
  },
  {
    id: "FBuiltinThemes" as const,
    index: 12,
    label: "内置主题",
    icon: "i-solar-palette-outline",
		// Provide different themes ready to be used.
    help: "可选择主题",
  },
  {
    id: "FThemeGenerator" as const,
    index: 13,
    label: "主题设计",
    icon: "i-fluent-wand-24-regular",
		// Provide a tool to help developpers generate new themes in an easy way.
    help: "可自定义主题",
  },
  {
    id: "FDarkMode" as const,
    index: 14,
    label: "深色模式",
    icon: "i-mdi-weather-night",
		// Components are designed tu support both a light and dark version.
    help: "有浅色和深色主题",
  },
  {
    id: "FSemanticColors" as const,
    index: 15,
    label: "语义化配色",
    icon: "i-mingcute-color-filter-line",
		// Colors can be associated with particular meanings, like 'primary', 'secondary', etc.
    help: "配色可以与特定的含义相关联, 如'主要'、'次要'等。",
  },
  {
    id: "FFigma" as const,
    index: 16,
    label: "Figma文档",
    icon: "i-ph-figma-logo",
		// Figma is the leading design tool. Figma files contain the same components that the UI Library, sothat designers can create designs without coding skills.
    help: "可通过Figma设计",
  },
  {
    id: "FOfficial" as const,
    index: 17,
    label: "官方出品",
    icon: "i-solar-medal-ribbon-linear",
		// Made by a team responsible for managing a framework itself.
    help: "官方出品",
  },
  {
    id: "FRoadmap" as const,
    index: 18,
    label: "公共产品路线图",
    icon: "i-tabler-road",
		// A public roadmap is available to help you see next library features.
    help: "一个公共路线图可以帮助您了解库的下一个特性",
  },
  {
    id: "FRTLSupport" as const,
    index: 19,
    label: "可国际化",
    icon: "i-material-symbols-keyboard-tab-rtl-rounded",
		// Ability to display text that is written from right to left (Arabic, Hebrew, etc.)
    help: "支持国际化",
  },
  {
    id: "FTyped" as const,
    index: 20,
    label: "支持TypeScript",
    icon: "i-tabler-brand-typescript",
		// Provided components are all typed to help developpers with auto-completion and potential errors.
    help: "支持TypeScript",
  },
  {
    id: "FForm" as const,
    index: 21,
    label: "表单处理",
    icon: "i-material-symbols-dynamic-form-outline",
		// Provided tools or examples for integration with form management libraries (Vee-Validate, Zod, Yup, etc.)
    help: "提供了与表单管理库(Vee-Validate、Zod、Yup等)集成的工具或示例",
  },
]

export const rangeFilters = [
  {
    id: "FNbStars" as const,
    leadingLabel: "GitHub Star数超过",
    trailingLabel: "",
    icon: "i-mdi-star-outline",
		// Remind that Vue-centered libraries are supposed to be less stared than general ones
    help: "以vue为中心的库应该比一般库的关注度更低",
    rangeMax: 35000,
    rangeStep: 1000,
  },
  {
    id: "FNbDownloads" as const,
    leadingLabel: "npm下载数超过",
    trailingLabel: "k",
    icon: "i-material-symbols-download",
		// Remind that Vue-centered libraries are supposed to be less downloaded than general ones
    help: "以vue为中心的库应该比一般库下载得少",
    rangeMax: 500,
    rangeStep: 5,
  },
  {
    id: "FNbComponents" as const,
    leadingLabel: "组件数超过",
    trailingLabel: "个",
    icon: "i-heroicons-square-3-stack-3d",
		// Don't forget to browse all available components on the libraries
    help: "不要忘记浏览库中所有可用的组件",
    rangeMax: 100,
    rangeStep: 5,
  },
]
