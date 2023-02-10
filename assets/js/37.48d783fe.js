(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{371:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"设计模式之桥接模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计模式之桥接模式"}},[t._v("#")]),t._v(" 设计模式之桥接模式")]),t._v(" "),s("h2",{attrs:{id:"意图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#意图"}},[t._v("#")]),t._v(" 意图")]),t._v(" "),s("p",[s("strong",[t._v("桥接模式")]),t._v(" (Bridge) 是一种结构型设计模式， 可将"),s("strong",[t._v("抽象")]),t._v("部分与"),s("strong",[t._v("实现")]),t._v("部分"),s("strong",[t._v("分离")]),t._v("，使它们都可以独立的变化。")]),t._v(" "),s("p",[t._v("如果一个系统需要在构件的抽象化角色和具体化角色之间增加更多的灵活性，避免在两个层次之间建立静态的联系。抽象化角色和具体化角色都应该可以被子类扩展。在这种情况下，桥接模式可以灵活地组合不同的抽象化角色和具体化角色，并独立化地扩展。")]),t._v(" "),s("p",[t._v("设计要求实现化角色的任何改变不应当影响客户端，或者说实现化角色的改变对客户端是完全透明的。")]),t._v(" "),s("h2",{attrs:{id:"适用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),s("ul",[s("li",[t._v("如果你想要拆分或重组一个具有多重功能的庞杂类（例如能与多个数据库服务器进行交互的类），可以使用桥接模式。")]),t._v(" "),s("li",[t._v("如果你希望在几个独立维度上扩展一个类， 可使用该模式。")]),t._v(" "),s("li",[t._v("如果你需要在运行时切换不同实现方法， 可使用桥接模式。")])]),t._v(" "),s("h2",{attrs:{id:"结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20210430154630.png",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"结构说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构说明"}},[t._v("#")]),t._v(" 结构说明")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("抽象部分")]),t._v(" （Abstraction） 提供高层控制逻辑， 依赖于完成底层实际工作的实现对象。")]),t._v(" "),s("li",[s("strong",[t._v("实现部分")]),t._v(" （Implementation） 为所有具体实现声明通用接口。 抽象部分仅能通过在这里声明的方法与实现对象交互。\n"),s("ul",[s("li",[t._v("抽象部分可以列出和实现部分一样的方法， 但是抽象部分通常声明一些复杂行为， 这些行为依赖于多种由实现部分声明的原语操作。")])])]),t._v(" "),s("li",[s("strong",[t._v("具体实现")]),t._v(" （Concrete Implementations） 中包括特定于平台的代码。")]),t._v(" "),s("li",[s("strong",[t._v("精确抽象")]),t._v(" （Refined Abstraction） 提供控制逻辑的变体。 与其父类一样， 它们通过通用实现接口与不同的实现进行交互。")]),t._v(" "),s("li",[t._v("通常情况下， "),s("strong",[t._v("客户端")]),t._v(" （Client） 仅关心如何与抽象部分合作。 但是， 客户端需要将抽象对象与一个实现对象连接起来。")])]),t._v(" "),s("h3",{attrs:{id:"结构代码范式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构代码范式"}},[t._v("#")]),t._v(" 结构代码范式")]),t._v(" "),s("p",[t._v("【Implementor】定义"),s("strong",[t._v("实现接口")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现抽象部分需要的某些具体功能")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("operationImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("【Abstraction】定义"),s("strong",[t._v("抽象接口")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Abstraction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 持有一个 Implementor 对象，形成聚合关系")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" implementor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Abstraction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" implementor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("implementor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" implementor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可能需要转调实现部分的具体实现")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        implementor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("operationImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("【ConcreteImplementor】实现 "),s("strong",[t._v("Implementor")]),t._v(" 中定义的接口。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteImplementorA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("operationImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 真正的实现")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"具体实现A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteImplementorB")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("operationImpl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 真正的实现")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"具体实现B"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("【RefinedAbstraction】扩展 "),s("strong",[t._v("Abstraction")]),t._v(" 类。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RefinedAbstraction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Abstraction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RefinedAbstraction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" implementor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("implementor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("otherOperation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现一定的功能，可能会使用具体实现部分的实现方法,")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但是本方法更大的可能是使用 Abstraction 中定义的方法，")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过组合使用 Abstraction 中定义的方法来完成更多的功能。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("【客户端】")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BridgePattern")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" implementor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteImplementorA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RefinedAbstraction")]),t._v(" abstraction "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RefinedAbstraction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("implementor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        abstraction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        abstraction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("otherOperation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("【输出】")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("具体实现A\n其他操作\n")])])]),s("h2",{attrs:{id:"伪代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪代码"}},[t._v("#")]),t._v(" 伪代码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20210430170020.png",alt:"img"}})]),t._v(" "),s("p",[t._v("遥控器基类声明了一个指向设备对象的引用成员变量。 所有遥控器通过通用设备接口与设备进行交互， 使得同一个遥控器可以支持不同类型的设备。")]),t._v(" "),s("p",[t._v("你可以开发独立于设备类的遥控器类， 只需新建一个遥控器子类即可。 例如， 基础遥控器可能只有两个按钮， 但你可在其基础上扩展新功能， 比如额外的一节电池或一块触摸屏。")]),t._v(" "),s("p",[t._v("客户端代码通过遥控器构造函数将特定种类的遥控器与设备对象连接起来。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// “抽象部分”定义了两个类层次结构中“控制”部分的接口。它管理着一个指向“实")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 现部分”层次结构中对象的引用，并会将所有真实工作委派给该对象。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RemoteControl")]),t._v(" is\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" field device"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Device")]),t._v("\n    constructor "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RemoteControl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Device")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("device "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" device\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("togglePower")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEnabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" then\n            device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("disable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("volumeDown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setVolume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getVolume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("volumeUp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setVolume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getVolume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("channelDown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("channelUp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你可以独立于设备类的方式从抽象层中扩展类。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AdvancedRemoteControl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RemoteControl")]),t._v(" is\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setVolume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// “实现部分”接口声明了在所有具体实现类中通用的方法。它不需要与抽象接口相")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配。实际上，这两个接口可以完全不一样。通常实现接口只提供原语操作，而")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抽象接口则会基于这些操作定义较高层次的操作。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Device")]),t._v(" is\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEnabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("disable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getVolume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setVolume")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("percent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setChannel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所有设备都遵循相同的接口。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tv")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Device")]),t._v(" is\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Radio")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Device")]),t._v(" is\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 客户端代码中的某个位置。")]),t._v("\ntv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nremote "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RemoteControl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nremote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("togglePower")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nradio "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Radio")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nremote "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AdvancedRemoteControl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),s("p",[s("strong",[t._v("使用示例：")]),t._v(" 桥接模式在处理跨平台应用、 支持多种类型的数据库服务器或与多个特定种类 （例如云平台和社交网络等） 的 API 供应商协作时会特别有用。")]),t._v(" "),s("p",[s("strong",[t._v("识别方法")]),t._v("： 桥接可以通过一些控制实体及其所依赖的多个不同平台之间的明确区别来进行识别。")]),t._v(" "),s("p",[t._v("Java 中桥接模式应用最经典的代表无疑是日志组件 slf4j 的桥接 jar 包。")]),t._v(" "),s("p",[t._v("假如，你正在开发应用程序所调用的组件当中已经使用了 common-logging，这时你需要 jcl-over-slf4j.jar 把日志信息输出重定向到 slf4j-api，slf4j-api 再去调用 slf4j 实际依赖的日志组件。这个过程称为桥接。下图是官方的 slf4j 桥接策略图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javalib/log/slf4j-bind-strategy.png",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"与其他模式的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与其他模式的关系"}},[t._v("#")]),t._v(" 与其他模式的关系")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("桥接模式"),s("OutboundLink")],1),t._v("通常会于开发前期进行设计， 使你能够将程序的各个部分独立开来以便开发。 另一方面， "),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"}},[t._v("适配器模式"),s("OutboundLink")],1),t._v("通常在已有程序中使用， 让相互不兼容的类能很好地合作。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("桥接"),s("OutboundLink")],1),t._v("、 "),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/state",target:"_blank",rel:"noopener noreferrer"}},[t._v("状态模式"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"}},[t._v("策略模式"),s("OutboundLink")],1),t._v(" （在某种程度上包括"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"}},[t._v("适配器"),s("OutboundLink")],1),t._v("） 模式的接口非常相似。 实际上， 它们都基于"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"}},[t._v("组合模式"),s("OutboundLink")],1),t._v("——即将工作委派给其他对象， 不过也各自解决了不同的问题。 模式并不只是以特定方式组织代码的配方， 你还可以使用它们来和其他开发者讨论模式所解决的问题。")]),t._v(" "),s("li",[t._v("你可以将"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"}},[t._v("抽象工厂模式"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("桥接"),s("OutboundLink")],1),t._v("搭配使用。 如果由"),s("em",[t._v("桥接")]),t._v("定义的抽象只能与特定实现合作， 这一模式搭配就非常有用。 在这种情况下， "),s("em",[t._v("抽象工厂")]),t._v("可以对这些关系进行封装， 并且对客户端代码隐藏其复杂性。")]),t._v(" "),s("li",[t._v("你可以结合使用"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"}},[t._v("生成器模式"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("桥接模式"),s("OutboundLink")],1),t._v("： "),s("em",[t._v("主管")]),t._v("类负责抽象工作， 各种不同的"),s("em",[t._v("生成器")]),t._v("负责"),s("em",[t._v("实现")]),t._v("工作。")])]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Head First 设计模式》"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《大话设计模式》"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"}},[t._v("设计模式教程"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);