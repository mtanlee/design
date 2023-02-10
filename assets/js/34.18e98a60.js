(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{368:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"设计模式之原型模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计模式之原型模式"}},[t._v("#")]),t._v(" 设计模式之原型模式")]),t._v(" "),s("h2",{attrs:{id:"意图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#意图"}},[t._v("#")]),t._v(" 意图")]),t._v(" "),s("p",[s("strong",[t._v("原型模式")]),t._v("（Prototype）是一种创建型设计模式， 使你能够复制已有对象， 而又无需使代码依赖它们所属的类。")]),t._v(" "),s("p",[t._v("原型模式主要用于对象的复制，它的核心是就是类图中的原型类 Prototype。Prototype 类需要具备以下两个条件：")]),t._v(" "),s("ul",[s("li",[t._v("实现 Cloneable 接口。在 java 语言有一个 Cloneable 接口，它的作用只有一个，就是在运行时通知虚拟机可以安全地在实现了此接口的类上使用 clone 方法。在 java 虚拟机中，只有实现了这个接口的类才可以被拷贝，否则在运行时会抛出 CloneNotSupportedException 异常。")]),t._v(" "),s("li",[t._v("重写 Object 类中的 clone 方法。Java 中，所有类的父类都是 Object 类，Object 类中有一个 clone 方法，作用是返回对象的一个拷贝，但是其作用域 protected 类型的，一般的类无法调用，因此，Prototype 类需要将 clone 方法的作用域修改为 public 类型。")])]),t._v(" "),s("h3",{attrs:{id:"浅拷贝与深拷贝"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝与深拷贝"}},[t._v("#")]),t._v(" 浅拷贝与深拷贝")]),t._v(" "),s("p",[t._v("浅拷贝是指当对象的字段值被复制时，字段引用的对象不会被复制。")]),t._v(" "),s("p",[t._v("例如：如果一个对象有一个指向字符串的字段，并且我们对该对象做了一个浅拷贝，那麽两个对象将引用同一个字符串。")]),t._v(" "),s("p",[t._v("深拷贝是指当一个类拥有资源，当这个类的对象发生复制过程的时候，资源重新分配，这个过程就是深拷贝。")]),t._v(" "),s("h2",{attrs:{id:"适用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),s("ul",[s("li",[t._v("如果你需要复制一些对象， 同时又希望代码独立于这些对象所属的具体类， 可以使用原型模式。")]),t._v(" "),s("li",[t._v("如果子类的区别仅在于其对象的初始化方式， 那么你可以使用该模式来减少子类的数量。 别人创建这些子类的目的可能是为了创建特定类型的对象。")])]),t._v(" "),s("h2",{attrs:{id:"结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20210506094301.png",alt:"img"}})]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("原型")]),t._v(" （Prototype） 接口将对克隆方法进行声明。 在绝大多数情况下， 其中只会有一个名为 "),s("code",[t._v("clone")]),t._v("克隆的方法。")]),t._v(" "),s("li",[s("strong",[t._v("具体原型")]),t._v(" （Concrete Prototype） 类将实现克隆方法。 除了将原始对象的数据复制到克隆体中之外， 该方法有时还需处理克隆过程中的极端情况， 例如克隆关联对象和梳理递归依赖等等。")]),t._v(" "),s("li",[s("strong",[t._v("客户端")]),t._v(" （Client） 可以复制实现了原型接口的任何对象。")])]),t._v(" "),s("h2",{attrs:{id:"伪代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪代码"}},[t._v("#")]),t._v(" 伪代码")]),t._v(" "),s("p",[t._v("在本例中， "),s("strong",[t._v("原型")]),t._v("模式能让你生成完全相同的几何对象副本， 同时无需代码与对象所属类耦合。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20210506095002.png",alt:"img"}})]),t._v(" "),s("p",[t._v("所有形状类都遵循同一个提供克隆方法的接口。 在复制自身成员变量值到结果对象前， 子类可调用其父类的克隆方法。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基础原型。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shape")]),t._v(" is\n    field "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("X")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("\n    field "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Y")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("\n    field color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 常规构造函数。")]),t._v("\n    constructor "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shape")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原型构造函数。使用已有对象的数值来初始化一个新对象。")]),t._v("\n    constructor "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shape")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shape")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("X")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("X")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Y")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// clone（克隆）操作会返回一个形状子类。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shape")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 具体原型。克隆方法会创建一个新对象并将其传递给构造函数。直到构造函数运")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 行完成前，它都拥有指向新克隆对象的引用。因此，任何人都无法访问未完全生")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成的克隆对象。这可以保持克隆结果的一致。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shape")]),t._v(" is\n    field width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("\n    field height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("\n\n    constructor "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要调用父构造函数来复制父类中定义的私有成员变量。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shape")]),t._v(" is\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Circle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shape")]),t._v(" is\n    field radius"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("\n\n    constructor "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Circle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Circle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("radius "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("radius\n\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shape")]),t._v(" is\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Circle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 客户端代码中的某个位置。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),t._v(" is\n    field shapes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" array of "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shape")]),t._v("\n\n    constructor "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Circle")]),t._v(" circle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Circle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("X")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("Y")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n        circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("radius "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n        shapes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Circle")]),t._v(" anotherCircle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" circle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        shapes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("anotherCircle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量 `anotherCircle（另一个圆）`与 `circle（圆）`对象的内")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 容完全一样。")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),t._v(" rectangle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rectangle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        rectangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n        rectangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n        shapes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rectangle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    method "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("businessLogic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原型是很强大的东西，因为它能在不知晓对象类型的情况下生成一个与")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其完全相同的复制品。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),t._v(" shapesCopy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),t._v(" of "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Shapes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 例如，我们不知晓形状数组中元素的具体类型，只知道它们都是形状。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但在多态机制的帮助下，当我们在某个形状上调用 `clone（克隆）`")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法时，程序会检查其所属的类并调用其中所定义的克隆方法。这样，")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们将获得一个正确的复制品，而不是一组简单的形状对象。")]),t._v("\n        foreach "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s in shapes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n            shapesCopy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `shapesCopy（形状副本）`数组中包含 `shape（形状）`数组所有")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子元素的复制品。")]),t._v("\n")])])]),s("h2",{attrs:{id:"案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),s("p",[s("strong",[t._v("使用示例：")]),t._v(" Java 的 "),s("code",[t._v("Cloneable")]),t._v(" （可克隆） 接口就是立即可用的原型模式。")]),t._v(" "),s("p",[t._v("任何类都可通过实现该接口来实现可被克隆的性质。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("java.lang.Object#clone()")]),s("OutboundLink")],1),t._v(" （类必须实现 "),s("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Cloneable.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("java.lang.Cloneable")]),s("OutboundLink")],1),t._v(" 接口）")])]),t._v(" "),s("p",[s("strong",[t._v("识别方法")]),t._v("： 原型可以简单地通过 "),s("code",[t._v("clone")]),t._v("或 "),s("code",[t._v("copy")]),t._v("等方法来识别。")]),t._v(" "),s("h2",{attrs:{id:"与其他模式的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与其他模式的关系"}},[t._v("#")]),t._v(" 与其他模式的关系")]),t._v(" "),s("ul",[s("li",[t._v("在许多设计工作的初期都会使用"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/factory-method",target:"_blank",rel:"noopener noreferrer"}},[t._v("工厂方法模式"),s("OutboundLink")],1),t._v(" （较为简单， 而且可以更方便地通过子类进行定制）， 随后演化为使用"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"}},[t._v("抽象工厂模式"),s("OutboundLink")],1),t._v("、 "),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"}},[t._v("原型模式"),s("OutboundLink")],1),t._v("或"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"}},[t._v("生成器模式"),s("OutboundLink")],1),t._v(" （更灵活但更加复杂）。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"}},[t._v("抽象工厂模式"),s("OutboundLink")],1),t._v("通常基于一组"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/factory-method",target:"_blank",rel:"noopener noreferrer"}},[t._v("工厂方法"),s("OutboundLink")],1),t._v("， 但你也可以使用"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"}},[t._v("原型模式"),s("OutboundLink")],1),t._v("来生成这些类的方法。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"}},[t._v("原型"),s("OutboundLink")],1),t._v("可用于保存"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/command",target:"_blank",rel:"noopener noreferrer"}},[t._v("命令模式"),s("OutboundLink")],1),t._v("的历史记录。")]),t._v(" "),s("li",[t._v("大量使用"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"}},[t._v("组合模式"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/decorator",target:"_blank",rel:"noopener noreferrer"}},[t._v("装饰模式"),s("OutboundLink")],1),t._v("的设计通常可从对于"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"}},[t._v("原型"),s("OutboundLink")],1),t._v("的使用中获益。 你可以通过该模式来复制复杂结构， 而非从零开始重新构造。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"}},[t._v("原型"),s("OutboundLink")],1),t._v("并不基于继承， 因此没有继承的缺点。 另一方面， "),s("em",[t._v("原型")]),t._v("需要对被复制对象进行复杂的初始化。 "),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/factory-method",target:"_blank",rel:"noopener noreferrer"}},[t._v("工厂方法"),s("OutboundLink")],1),t._v("基于继承， 但是它不需要初始化步骤。")]),t._v(" "),s("li",[t._v("有时候"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"}},[t._v("原型"),s("OutboundLink")],1),t._v("可以作为"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/memento",target:"_blank",rel:"noopener noreferrer"}},[t._v("备忘录模式"),s("OutboundLink")],1),t._v("的一个简化版本， 其条件是你需要在历史记录中存储的对象的状态比较简单， 不需要链接其他外部资源， 或者链接可以方便地重建。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"}},[t._v("抽象工厂"),s("OutboundLink")],1),t._v("、 "),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"}},[t._v("生成器"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"}},[t._v("原型"),s("OutboundLink")],1),t._v("都可以用"),s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/singleton",target:"_blank",rel:"noopener noreferrer"}},[t._v("单例模式"),s("OutboundLink")],1),t._v("来实现。")])]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Head First 设计模式》"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《大话设计模式》"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"}},[t._v("设计模式教程"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);