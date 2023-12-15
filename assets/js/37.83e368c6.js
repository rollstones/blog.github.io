(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{446:function(t,a,s){t.exports=s.p+"assets/img/1.f06cff50.png"},771:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_01-spring-mvc面试题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01-spring-mvc面试题"}},[t._v("#")]),t._v(" 01-Spring MVC面试题")]),t._v(" "),n("h2",{attrs:{id:"一、概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[t._v("#")]),t._v(" "),n("strong",[t._v("一、概述")])]),t._v(" "),n("p",[n("strong",[t._v("什么是Spring MVC？简单介绍下你对Spring MVC的理解？")])]),t._v(" "),n("p",[t._v("Spring MVC是一个基于Java的实现了MVC设计模式的请求驱动类型的轻量级Web框架，通过把模型-视图-控制器分离，将web层进行职责解耦，把复杂的web应用分成逻辑清晰的几部分，简化开发，减少出错，方便组内开发人员之间的配合。")]),t._v(" "),n("p",[n("strong",[t._v("Spring MVC的优点")])]),t._v(" "),n("p",[t._v("（1）可以支持各种视图技术,而不仅仅局限于JSP；")]),t._v(" "),n("p",[t._v("（2）与Spring框架集成（如IoC容器、AOP等）；")]),t._v(" "),n("p",[t._v("（3）清晰的角色分配：前端控制器(dispatcherServlet) , 请求到处理器映射（handlerMapping), 处理器适配器（HandlerAdapter), 视图解析器（ViewResolver）。")]),t._v(" "),n("p",[t._v("（4） 支持各种请求资源的映射策略。")]),t._v(" "),n("h2",{attrs:{id:"二、核心组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、核心组件"}},[t._v("#")]),t._v(" "),n("strong",[t._v("二、核心组件")])]),t._v(" "),n("p",[n("strong",[t._v("Spring MVC的主要组件？")])]),t._v(" "),n("p",[t._v("（1）前端控制器 DispatcherServlet（不需要程序员开发）")]),t._v(" "),n("p",[t._v("作用：接收请求、响应结果，相当于转发器，有了DispatcherServlet 就减少了其它组件之间的耦合度。")]),t._v(" "),n("p",[t._v("（2）处理器映射器HandlerMapping（不需要程序员开发）")]),t._v(" "),n("p",[t._v("作用：根据请求的URL来查找Handler")]),t._v(" "),n("p",[t._v("（3）处理器适配器HandlerAdapter")]),t._v(" "),n("p",[t._v("注意：在编写Handler的时候要按照HandlerAdapter要求的规则去编写，这样适配器HandlerAdapter才可以正确的去执行Handler。")]),t._v(" "),n("p",[t._v("（4）处理器Handler（需要程序员开发）")]),t._v(" "),n("p",[t._v("（5）视图解析器 ViewResolver（不需要程序员开发）")]),t._v(" "),n("p",[t._v("作用：进行视图的解析，根据视图逻辑名解析成真正的视图（view）")]),t._v(" "),n("p",[t._v("（6）视图View（需要程序员开发jsp）")]),t._v(" "),n("p",[t._v("View是一个接口， 它的实现类支持不同的视图类型（jsp，freemarker，pdf等等）")]),t._v(" "),n("p",[n("strong",[t._v("什么是DispatcherServlet")])]),t._v(" "),n("p",[t._v("Spring的MVC框架是围绕DispatcherServlet来设计的，它用来处理所有的HTTP请求和响应。")]),t._v(" "),n("p",[n("strong",[t._v("什么是Spring MVC框架的控制器？")])]),t._v(" "),n("p",[t._v("控制器提供一个访问应用程序的行为，此行为通常通过服务接口实现。控制器解析用户输入并将其转换为一个由视图呈现给用户的模型。Spring用一个非常抽象的方式实现了一个控制层，允许用户创建多种用途的控制器。")]),t._v(" "),n("p",[n("strong",[t._v("Spring MVC的控制器是不是单例模式,如果是,有什么问题,怎么解决？")])]),t._v(" "),n("p",[t._v("答：是单例模式,所以在多线程访问的时候有线程安全问题,不要用同步,会影响性能的,解决方案是在控制器里面不能写字段。")]),t._v(" "),n("h2",{attrs:{id:"三、工作原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、工作原理"}},[t._v("#")]),t._v(" "),n("strong",[t._v("三、工作原理")])]),t._v(" "),n("p",[n("strong",[t._v("请描述Spring MVC的工作流程？描述一下 DispatcherServlet 的工作流程？")])]),t._v(" "),n("p",[t._v("（1）用户发送请求至前端控制器DispatcherServlet；")]),t._v(" "),n("p",[t._v("（2） DispatcherServlet收到请求后，调用HandlerMapping处理器映射器，请求获取Handle；")]),t._v(" "),n("p",[t._v("（3）处理器映射器根据请求url找到具体的处理器，生成处理器对象及处理器拦截器(如果有则生成)一并返回给DispatcherServlet；")]),t._v(" "),n("p",[t._v("（4）DispatcherServlet 调用 HandlerAdapter处理器适配器；")]),t._v(" "),n("p",[t._v("（5）HandlerAdapter 经过适配调用 具体处理器(Handler，也叫后端控制器)；")]),t._v(" "),n("p",[t._v("（6）Handler执行完成返回ModelAndView；")]),t._v(" "),n("p",[t._v("（7）HandlerAdapter将Handler执行结果ModelAndView返回给DispatcherServlet；")]),t._v(" "),n("p",[t._v("（8）DispatcherServlet将ModelAndView传给ViewResolver视图解析器进行解析；")]),t._v(" "),n("p",[t._v("（9）ViewResolver解析后返回具体View；")]),t._v(" "),n("p",[t._v("（10）DispatcherServlet对View进行渲染视图（即将模型数据填充至视图中）")]),t._v(" "),n("p",[t._v("（11）DispatcherServlet响应用户。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(446),alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"四、mvc框架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、mvc框架"}},[t._v("#")]),t._v(" "),n("strong",[t._v("四、MVC框架")])]),t._v(" "),n("p",[n("strong",[t._v("MVC是什么？MVC设计模式的好处有哪些")])]),t._v(" "),n("p",[t._v("mvc是一种设计模式（设计模式就是日常开发中编写代码的一种好的方法和经验的总结）。模型（model）-视图（view）-控制器（controller），三层架构的设计模式。用于实现前端页面的展现与后端业务数据处理的分离。")]),t._v(" "),n("p",[t._v("mvc设计模式的好处")]),t._v(" "),n("p",[t._v("1.分层设计，实现了业务系统各个组件之间的解耦，有利于业务系统的可扩展性，可维护性。")]),t._v(" "),n("p",[t._v("2.有利于系统的并行开发，提升开发效率。")]),t._v(" "),n("h2",{attrs:{id:"五、常用注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、常用注解"}},[t._v("#")]),t._v(" "),n("strong",[t._v("五、常用注解")])]),t._v(" "),n("p",[n("strong",[t._v("注解原理是什么")])]),t._v(" "),n("p",[t._v("注解本质是一个继承了Annotation的特殊接口，其具体实现类是Java运行时生成的动态代理类。我们通过反射获取注解时，返回的是Java运行时生成的动态代理对象。通过代理对象调用自定义注解的方法，会最终调用AnnotationInvocationHandler的invoke方法。该方法会从memberValues这个Map中索引出对应的值。而memberValues的来源是Java常量池。")]),t._v(" "),n("p",[n("strong",[t._v("Spring MVC常用的注解有哪些？")])]),t._v(" "),n("p",[t._v("@RequestMapping：用于处理请求 url 映射的注解，可用于类或方法上。用于类上，则表示类中的所有响应请求的方法都是以该地址作为父路径。")]),t._v(" "),n("p",[t._v("@RequestBody：注解实现接收http请求的json数据，将json转换为java对象。")]),t._v(" "),n("p",[t._v("@ResponseBody：注解实现将conreoller方法返回对象转化为json对象响应给客户。")]),t._v(" "),n("p",[n("strong",[t._v("SpingMvc中的控制器的注解一般用哪个,有没有别的注解可以替代？")])]),t._v(" "),n("p",[t._v("答：一般用@Controller注解,也可以使用@RestController,@RestController注解相当于@ResponseBody ＋ @Controller,表示是表现层,除此之外，一般不用别的注解代替。")]),t._v(" "),n("p",[n("strong",[t._v("@Controller注解的作用")])]),t._v(" "),n("p",[t._v("在Spring MVC 中，控制器Controller 负责处理由DispatcherServlet 分发的请求，它把用户请求的数据经过业务处理层处理之后封装成一个Model ，然后再把该Model 返回给对应的View 进行展示。在Spring MVC 中提供了一个非常简便的定义Controller 的方法，你无需继承特定的类或实现特定的接口，只需使用@Controller 标记一个类是Controller ，然后使用@RequestMapping 和@RequestParam 等一些注解用以定义URL 请求和Controller 方法之间的映射，这样的Controller 就能被外界访问到。此外Controller 不会直接依赖于HttpServletRequest 和HttpServletResponse 等HttpServlet 对象，它们可以通过Controller 的方法参数灵活的获取到。")]),t._v(" "),n("p",[t._v("@Controller 用于标记在一个类上，使用它标记的类就是一个Spring MVC Controller 对象。分发处理器将会扫描使用了该注解的类的方法，并检测该方法是否使用了@RequestMapping 注解。@Controller 只是定义了一个控制器类，而使用@RequestMapping 注解的方法才是真正处理请求的处理器。单单使用@Controller 标记在一个类上还不能真正意义上的说它就是Spring MVC 的一个控制器类，因为这个时候Spring 还不认识它。那么要如何做Spring 才能认识它呢？这个时候就需要我们把这个控制器类交给Spring 来管理。有两种方式：")]),t._v(" "),n("ul",[n("li",[t._v("在Spring MVC 的配置文件中定义MyController 的bean 对象。")]),t._v(" "),n("li",[t._v("在Spring MVC 的配置文件中告诉Spring 该到哪里去找标记为@Controller 的Controller 控制器。")])]),t._v(" "),n("p",[n("strong",[t._v("@RequestMapping注解的作用")])]),t._v(" "),n("p",[t._v("RequestMapping是一个用来处理请求地址映射的注解，可用于类或方法上。用于类上，表示类中的所有响应请求的方法都是以该地址作为父路径。")]),t._v(" "),n("p",[t._v("RequestMapping注解有六个属性，下面我们把她分成三类进行说明（下面有相应示例）。")]),t._v(" "),n("p",[n("strong",[t._v("value， method")])]),t._v(" "),n("p",[t._v("value： 指定请求的实际地址，指定的地址可以是URI Template 模式（后面将会说明）；")]),t._v(" "),n("p",[t._v("method： 指定请求的method类型， GET、POST、PUT、DELETE等；")]),t._v(" "),n("p",[n("strong",[t._v("consumes，produces")])]),t._v(" "),n("p",[t._v("consumes： 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html;")]),t._v(" "),n("p",[t._v("produces: 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回；")]),t._v(" "),n("p",[n("strong",[t._v("params，headers")])]),t._v(" "),n("p",[t._v("params： 指定request中必须包含某些参数值是，才让该方法处理。")]),t._v(" "),n("p",[t._v("headers： 指定request中必须包含某些指定的header值，才能让该方法处理请求。")]),t._v(" "),n("p",[n("strong",[t._v("@ResponseBody注解的作用")])]),t._v(" "),n("p",[t._v("作用： 该注解用于将Controller的方法返回的对象，通过适当的HttpMessageConverter转换为指定格式后，写入到Response对象的body数据区。")]),t._v(" "),n("p",[t._v("使用时机：返回的数据不是html标签的页面，而是其他某种格式的数据时（如json、xml等）使用；")]),t._v(" "),n("p",[n("strong",[t._v("@PathVariable和@RequestParam的区别")])]),t._v(" "),n("p",[t._v("请求路径上有个id的变量值，可以通过@PathVariable来获取 @RequestMapping(value = “/page/{id}”, method = RequestMethod.GET)")]),t._v(" "),n("p",[t._v("@RequestParam用来获得静态的URL请求入参 spring注解时action里用到。")]),t._v(" "),n("h2",{attrs:{id:"六、其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、其他"}},[t._v("#")]),t._v(" "),n("strong",[t._v("六、其他")])]),t._v(" "),n("p",[n("strong",[t._v("Spring MVC与Struts2区别")])]),t._v(" "),n("p",[t._v("相同点")]),t._v(" "),n("p",[t._v("都是基于mvc的表现层框架，都用于web项目的开发。")]),t._v(" "),n("p",[t._v("不同点")]),t._v(" "),n("p",[t._v("1.前端控制器不一样。Spring MVC的前端控制器是servlet：DispatcherServlet。struts2的前端控制器是filter：StrutsPreparedAndExcutorFilter。")]),t._v(" "),n("p",[t._v("2.请求参数的接收方式不一样。Spring MVC是使用方法的形参接收请求的参数，基于方法的开发，线程安全，可以设计为单例或者多例的开发，推荐使用单例模式的开发（执行效率更高），默认就是单例开发模式。struts2是通过类的成员变量接收请求的参数，是基于类的开发，线程不安全，只能设计为多例的开发。")]),t._v(" "),n("p",[t._v("3.Struts采用值栈存储请求和响应的数据，通过OGNL存取数据，Spring MVC通过参数解析器是将request请求内容解析，并给方法形参赋值，将数据和视图封装成ModelAndView对象，最后又将ModelAndView中的模型数据通过reques域传输到页面。Jsp视图解析器默认使用jstl。")]),t._v(" "),n("p",[t._v("4.与spring整合不一样。Spring MVC是spring框架的一部分，不需要整合。在企业项目中，Spring MVC使用更多一些。")]),t._v(" "),n("p",[n("strong",[t._v("Spring MVC怎么样设定重定向和转发的？")])]),t._v(" "),n("p",[t._v('（1）转发：在返回值前面加"forward:"，譬如"forward:user.do?name=method4"')]),t._v(" "),n("p",[t._v('（2）重定向：在返回值前面加"redirect:"，譬如"redirect:http://www.baidu.com"')]),t._v(" "),n("p",[n("strong",[t._v("Spring MVC怎么和AJAX相互调用的？")])]),t._v(" "),n("p",[t._v("通过Jackson框架就可以把Java里面的对象直接转化成Js可以识别的Json对象。具体步骤如下 ：")]),t._v(" "),n("p",[t._v("（1）加入Jackson.jar")]),t._v(" "),n("p",[t._v("（2）在配置文件中配置json的映射")]),t._v(" "),n("p",[t._v("（3）在接受Ajax方法里面可以直接返回Object,List等,但方法前面要加上@ResponseBody注解。")]),t._v(" "),n("p",[n("strong",[t._v("如何解决POST请求中文乱码问题，GET的又如何处理呢？")])]),t._v(" "),n("p",[t._v("（1）解决post请求乱码问题：")]),t._v(" "),n("p",[t._v("在web.xml中配置一个CharacterEncodingFilter过滤器，设置成utf-8；")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("CharacterEncodingFilter"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.web.filter.CharacterEncodingFilter"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("init-param")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("encoding"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("param-value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("utf-8"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("param-value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("init-param")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-mapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("filter-name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("CharacterEncodingFilter"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url-pattern")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("/*"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url-pattern")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("filter-mapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("（2）get请求中文参数出现乱码解决方法有两个：")]),t._v(" "),n("p",[t._v("​\t\t①修改tomcat配置文件添加编码与工程编码一致")]),t._v(" "),n("p",[t._v("​\t\t②另外一种方法对参数进行重新编码：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userName "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParamter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“userName”"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBytes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“ISO8859"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("”"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("“utf"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("”"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("ISO8859-1是tomcat默认编码，需要将tomcat编码后的内容按utf-8编码。")]),t._v(" "),n("p",[n("strong",[t._v("Spring MVC的异常处理？")])]),t._v(" "),n("p",[t._v("答：可以将异常抛给Spring框架，由Spring框架来处理；我们只需要配置简单的异常处理器，在异常处理器中添视图页面即可。")]),t._v(" "),n("p",[n("strong",[t._v("如果在拦截请求中，我想拦截get方式提交的方法,怎么配置")])]),t._v(" "),n("p",[t._v("答：可以在@RequestMapping注解里面加上method=RequestMethod.GET。")]),t._v(" "),n("p",[n("strong",[t._v("怎样在方法里面得到Request,或者Session？")])]),t._v(" "),n("p",[t._v("答：直接在方法的形参中声明request,Spring MVC就自动把request对象传入。")]),t._v(" "),n("p",[n("strong",[t._v("如果想在拦截的方法里面得到从前台传入的参数,怎么得到？")])]),t._v(" "),n("p",[t._v("答：直接在形参里面声明这个参数就可以,但必须名字和传过来的参数一样。")]),t._v(" "),n("p",[n("strong",[t._v("如果前台有很多个参数传入,并且这些参数都是一个对象的,那么怎么样快速得到这个对象？")])]),t._v(" "),n("p",[t._v("答：直接在方法中声明这个对象,Spring MVC就自动会把属性赋值到这个对象里面。")]),t._v(" "),n("p",[n("strong",[t._v("Spring MVC中函数的返回值是什么？")])]),t._v(" "),n("p",[t._v("答：返回值可以有很多类型,有String, ModelAndView。ModelAndView类把视图和数据都合并的一起的，但一般用String比较好。")]),t._v(" "),n("p",[n("strong",[t._v("Spring MVC用什么对象从后台向前台传递数据的？")])]),t._v(" "),n("p",[t._v("答：通过ModelMap对象,可以在这个对象里面调用put方法,把对象加到里面,前台就可以通过el表达式拿到。")]),t._v(" "),n("p",[n("strong",[t._v("怎么样把ModelMap里面的数据放入Session里面？")])]),t._v(" "),n("p",[t._v("答：可以在类上面加上@SessionAttributes注解,里面包含的字符串就是要放入session里面的key。")]),t._v(" "),n("p",[n("strong",[t._v("Spring MVC里面拦截器是怎么写的")])]),t._v(" "),n("p",[t._v("有两种写法,一种是实现HandlerInterceptor接口，另外一种是继承适配器类，接着在接口方法当中，实现处理逻辑；然后在Spring MVC的配置文件中配置拦截器即可：")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("interceptors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myInterceptor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.zwp.action.MyHandlerInterceptor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("interceptor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("mapping")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/modelMap.do"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("com.zwp.action.MyHandlerInterceptorAdapter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("interceptor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("bean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("mvc:")]),t._v("interceptors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("strong",[t._v("介绍一下 WebApplicationContext")])]),t._v(" "),n("p",[t._v("WebApplicationContext 继承了ApplicationContext 并增加了一些WEB应用必备的特有功能，它不同于一般的ApplicationContext ，因为它能处理主题，并找到被关联的servlet。")])])}),[],!1,null,null,null);a.default=e.exports}}]);