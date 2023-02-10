(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{363:function(t,r,_){"use strict";_.r(r);var v=_(4),o=Object(v.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"设计模式概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设计模式概述"}},[t._v("#")]),t._v(" 设计模式概述")]),t._v(" "),r("blockquote",[r("p",[t._v("设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。")])]),t._v(" "),r("h2",{attrs:{id:"创建型模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建型模式"}},[t._v("#")]),t._v(" 创建型模式")]),t._v(" "),r("h3",{attrs:{id:"创建型模式简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建型模式简介"}},[t._v("#")]),t._v(" 创建型模式简介")]),t._v(" "),r("p",[r("strong",[t._v("创建型模式")]),t._v("抽象了"),r("strong",[t._v("实例化")]),t._v("的过程。它将"),r("strong",[t._v("系统")]),t._v("与它的"),r("strong",[t._v("对象")]),t._v("创建、结合、表示的方式"),r("strong",[t._v("分离")]),t._v("。")]),t._v(" "),r("p",[t._v("创建型模式都会将关于该系统使用哪些具体的类的信息"),r("strong",[t._v("封装")]),t._v("起来。")]),t._v(" "),r("p",[t._v("在软件工程中，创建型模式是处理对象创建的设计模式，试图根据实际情况使用合适的方式创建对象。")]),t._v(" "),r("p",[t._v("基本的对象创建方式可能会导致设计上的问题，或增加设计的复杂度。创建型模式通过以某种方式控制对象的创建来解决问题。")]),t._v(" "),r("p",[t._v("创建型模式的"),r("strong",[t._v("指导思想")]),t._v("是：")]),t._v(" "),r("ul",[r("li",[t._v("将系统使用的具体类封装起来。")]),t._v(" "),r("li",[t._v("隐藏这些具体类的实例创建和结合的方式。")])]),t._v(" "),r("p",[t._v("创建型模式又分为"),r("strong",[t._v("对象创建型模式")]),t._v("和"),r("strong",[t._v("类创建型模式")]),t._v("。对象创建型模式处理对象的创建，类创建型模式处理类的创建。")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("对象创建型模式")]),t._v("把对象创建的一部分推迟到另一个对象中。（代表模式："),r("strong",[t._v("单例模式")]),t._v("、"),r("strong",[t._v("建造者模式")]),t._v("、"),r("strong",[t._v("原型模式")]),t._v("、"),r("strong",[t._v("抽象工厂模式")]),t._v("）")]),t._v(" "),r("li",[r("strong",[t._v("类创建型模式")]),t._v("将它对象的创建推迟到子类中。（代表模式："),r("strong",[t._v("工厂方法模式")]),t._v("）")])]),t._v(" "),r("h3",{attrs:{id:"创建型模式应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建型模式应用"}},[t._v("#")]),t._v(" 创建型模式应用")]),t._v(" "),r("p",[t._v("现代软件工程更加依赖对象的组合，而不是类的继承，强调从硬编码的行为转变到定义一组基本行为来组合成复杂的行为。")]),t._v(" "),r("p",[t._v("硬编码的行为不够灵活，因为如果想要改变设计的一部分，需要通过重写或者重新实现才能完成。")]),t._v(" "),r("p",[t._v("另外，硬编码没有提高重用性，而且难以跟踪错误。由于这些原因，创建型模式比硬编码的行为更有用。")]),t._v(" "),r("p",[t._v("创建型模式使设计变得更灵活，提供了不同的方式，从代码中移除了对需要实例化的具体类的引用。换句话说，这些模式增强了对象和类之间的独立性。")]),t._v(" "),r("p",[t._v("在以下情况中，可以考虑应用创建型模式：")]),t._v(" "),r("ul",[r("li",[t._v("一个系统需要和它的对象和产品的创建相互独立。")]),t._v(" "),r("li",[t._v("一组相关的对象被设计为一起使用。")]),t._v(" "),r("li",[t._v("隐藏一个类库的具体实现，仅暴露它们的接口。")]),t._v(" "),r("li",[t._v("创建独立复杂对象的不同表示。")]),t._v(" "),r("li",[t._v("一个类希望它的子类实现它所创建的对象。")]),t._v(" "),r("li",[t._v("类的实例化在运行时才指定。")]),t._v(" "),r("li",[t._v("一个类只能有一个实例，而且这个实例能在任何时候访问到。")]),t._v(" "),r("li",[t._v("实例应该能在不修改的情况下具有可扩展性。")])]),t._v(" "),r("h3",{attrs:{id:"创建型模式代表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建型模式代表"}},[t._v("#")]),t._v(" 创建型模式代表")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/单例模式.html"}},[t._v("单例模式 (Singleton)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/简单工厂模式.html"}},[t._v("简单工厂模式 (Simple Factory)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/工厂方法模式.html"}},[t._v("工厂方法模式 (Factory Method)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/抽象工厂模式.html"}},[t._v("抽象工厂模式 (Abstract Factory)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/建造者模式.html"}},[t._v("建造者模式 (Builder)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/原型模式.html"}},[t._v("原型模式 (Prototype)")])],1)]),t._v(" "),r("h3",{attrs:{id:"结构型模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结构型模式"}},[t._v("#")]),t._v(" 结构型模式")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/适配器模式.html"}},[t._v("适配器模式 (Adapter)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/桥接模式.html"}},[t._v("桥接模式 (Bridge)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/装饰模式.html"}},[t._v("装饰模式 (Decorator)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/组合模式.html"}},[t._v("组合模式 (Composite)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/外观模式.html"}},[t._v("外观模式 (Facade)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/享元模式.html"}},[t._v("享元模式 (Flyweight)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/代理模式.html"}},[t._v("代理模式 (Proxy)")])],1)]),t._v(" "),r("h3",{attrs:{id:"行为型模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#行为型模式"}},[t._v("#")]),t._v(" 行为型模式")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/模板方法模式.html"}},[t._v("模板方法模式 (Template Method)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/命令模式.html"}},[t._v("命令模式 (Command)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/迭代器模式.html"}},[t._v("迭代器模式 (Iterator)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/观察者模式.html"}},[t._v("观察者模式 (Observer)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/解释器模式.html"}},[t._v("解释器模式 (Interpreter)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/中介者模式.html"}},[t._v("中介者模式 (Mediator)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/职责链模式.html"}},[t._v("职责链模式 (Chain of Responsibility)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/备忘录模式.html"}},[t._v("备忘录模式 (Memento)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/策略模式.html"}},[t._v("策略模式 (Strategy)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/访问者模式.html"}},[t._v("访问者模式 (Visitor)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/03.设计/02.设计模式/状态模式.html"}},[t._v("状态模式 (State)")])],1)]),t._v(" "),r("h2",{attrs:{id:"📚-资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#📚-资料"}},[t._v("#")]),t._v(" 📚 资料")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Head First 设计模式》"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《大话设计模式》"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"🚪-传送"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#🚪-传送"}},[t._v("#")]),t._v(" 🚪 传送")]),t._v(" "),r("p",[t._v("◾ 💧 "),r("a",{attrs:{href:"https://dunwu.github.io/waterdrop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("钝悟的 IT 知识图谱"),r("OutboundLink")],1),t._v(" ◾ 🎯 "),r("a",{attrs:{href:"https://dunwu.github.io/blog/",target:"_blank",rel:"noopener noreferrer"}},[t._v("钝悟的博客"),r("OutboundLink")],1),t._v(" ◾")])])}),[],!1,null,null,null);r.default=o.exports}}]);