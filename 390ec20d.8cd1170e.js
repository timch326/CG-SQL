(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(6),o=(n(0),n(126)),l={slug:"arg-bungle-intro",title:"Introducing  Argument Bundles",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql","errors"]},i={permalink:"/blog/arg-bungle-intro",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2020-12-08-arg-bundle-intro.md",source:"@site/blog/2020-12-08-arg-bundle-intro.md",description:"There are many cases where stored procedures require complex arguments using data shapes well known",date:"2020-12-08T00:00:00.000Z",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"},{label:"errors",permalink:"/blog/tags/errors"}],title:"Introducing  Argument Bundles",readingTime:5.565,truncated:!1,prevItem:{title:"Introducing Virtual Tables",permalink:"/blog/virtual-table-into"},nextItem:{title:"Introducing Declare Enum",permalink:"/blog/declare-enum-intro"}},s=[],u={rightToc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are many cases where stored procedures require complex arguments using data shapes well known\nto higher level languages or that come from the schema.  There is already some affordance for this\nsort of thing in the form of this kind of pattern:"),Object(o.b)("p",null,"(I'll continue to use this simple example as I discuss the generalization below)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"create table Person (\n   id text primary key,\n   name text not null,\n   address text not null,\n   birthday real\n);\n")),Object(o.b)("p",null,"Then maybe something like this"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"create proc insert_person(like Person)\nbegin\n    insert into Person from arguments;\nend;\n")),Object(o.b)("p",null,"The above expands into:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"create proc insert_person(\n    id_ text not null,\n    name_ text not null,\n    address_ text not null,\n    birthday_ real)\nbegin\n    insert into Person(id, name, address, birthday)\n        values(id_, name_, address_, birthday_);\nend;\n")),Object(o.b)("p",null,"And I think we can all agree the sugared version is a lot easier to reason about\nand much less prone to errors as well."),Object(o.b)("p",null,"Those features have been in the language for a long time and that's all fine and well\nbut it isn't general enough to handle the usual mix of situations.  For instance what\nif you need a procedure that works with two people?  A hypothetical ",Object(o.b)("inlineCode",{parentName:"p"},"insert_two_people"),"\nprocedure cannot be written with the old form.  This is where argument bundles come in.\nThe idea here is to name the bundle which provides useful reference.  To wit:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"create proc insert_two_people(p1 like Person, p2 like Person)\nbegin\n    call insert_person(from p1);\n    call insert_person(from p2);\nend;\n")),Object(o.b)("p",null,"or alternatively"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"create proc insert_two_people(p1 like Person, p2 like Person)\nbegin\n    insert into Person from p1;\n    insert into Person from p2;\nend;\n")),Object(o.b)("p",null,"So what's going on here?  Well, there are lots of reasons to keep the API to procedures simple\nand adding general purpose structured types would be at odds with that.  It would require lots\nof knowledge about C structure layout and whatnot.  And trying to call from java would require\nvery complex JNI for any such procedure.  So we avoid all that.  We keep simple arguments.\nThe above expands into:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"create proc insert_person(\n    p1_id text not null,\n    p1_name text not null,\n    p1_address text not null,\n    p1_birthday real,\n    p2_id text not null,\n    p2_name text not null,\n    p2_address text not null,\n    p2_birthday real)\nbegin\n    insert into Person(id, name, address, birthday)\n        values(p1_id, p1_name, p1_address, p1_birthday);\n    insert into Person(id, name, address, birthday)\n        values(p2_id, p2_name, p2_address, p2_birthday);\nend;\n")),Object(o.b)("p",null,"Or course the types don't have to be the same, you can create and name shapes of your choice.  The language allow\nyou to use an argument bundle in all the places that a cursor was previously a valid source.  That includes ",Object(o.b)("inlineCode",{parentName:"p"},"insert"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"fetch"),", ",Object(o.b)("inlineCode",{parentName:"p"},"update cursor"),", and procedure calls.  You can refer to the arguments by their expanded name ",Object(o.b)("inlineCode",{parentName:"p"},"p1_address"),"\nor alternatively ",Object(o.b)("inlineCode",{parentName:"p"},"p1.address")," means the same thing."),Object(o.b)("p",null,"Here's another example showing a silly but illustrative thing you could do:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'create proc insert_lotsa_people(P like Person)\nbegin\n    declare C cursor like P;\n    fetch C from P;\n    declare i integer not null;\n    set i := 0;\n    while (i < 20)\n    begin\n        update cursor C using\n            printf("id_%d", i) id;\n        insert into Person from C;\n    end;\nend;\n')),Object(o.b)("p",null,"The above shows that you can use a bundle as the source of a shape elsewhere, and you can\nuse a bundle as a source of data to load a cursor.  After which you can do all the usual value cursor things\nlike ",Object(o.b)("inlineCode",{parentName:"p"},"out")," statements and so forth."),Object(o.b)("p",null,'In order to call procedures with argument bundles more readily from other languages, the JSON output now includes additional\ninformation about where procedure arguments originated; The field with this information is creatively called "argOrigin:"\nand it has 3 forms.'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'"arg_name" -> the argument is not an expansion of anything'),Object(o.b)("li",{parentName:"ul"},'"T arg_name" -> the argument came from ',Object(o.b)("inlineCode",{parentName:"li"},"like T"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"there will be one arg for each member of T"),Object(o.b)("li",{parentName:"ul"},"the formal argument name for this arg will be arg",Object(o.b)("em",{parentName:"li"},"name")),Object(o.b)("li",{parentName:"ul"},"if T is procedure arguments ",Object(o.b)("inlineCode",{parentName:"li"},"like p1 arguments")," then you'll get  \"p1","[arguments]",' arg_name"'))),Object(o.b)("li",{parentName:"ul"},'"name T arg_name" -> the argument came from ',Object(o.b)("inlineCode",{parentName:"li"},"name like T")," (a named bundle)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"there will be one arg for each member of T"),Object(o.b)("li",{parentName:"ul"},"the formal argument name for this arg will be T_arg_name"),Object(o.b)("li",{parentName:"ul"},"T could be procedure arguments as above"))),Object(o.b)("li",{parentName:"ul"},"If the source of an argument was a cursor or argument bundle name you get instead that thing's shape source name",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"this is always better because cursor names and bundle names are not globally unique."))),Object(o.b)("li",{parentName:"ul"},"If the cursor had an anonymous source (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"like select 1 x"),') then you get the useless shape name "select"',Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"this is an indicator that you should make some ad hoc struct for this procedure because there is no useful name for the arg bundle's type")))),Object(o.b)("p",null,"None of this matters unless you're trying to make wrappers for a CQL procedure for some other language\nand you'd like to have your wrapper deal with structs rather than all loose arguments.  the JSON\nbasically tells you the structs."),Object(o.b)("p",null,"Interestingly, argument bundles resulted in a significant reduction of code in the compiler.  The argument bundle\nname has to be usable in the contexts where a cursor was previously usable.  It is another source of shaped data.\nGetting that to work  proved to be super simple as the two forms look almost identical to the compiler -- no coincidence there.\nSo very little code was required to make ",Object(o.b)("inlineCode",{parentName:"p"},"from [cursor_name]")," work with ",Object(o.b)("inlineCode",{parentName:"p"},"from [any_shape_name]")," in the half dozen or so places\nthat this construct is allowed (e.g. procedure call arguments, insert statements, etc.).  However, there was as\nmuch code associated with ",Object(o.b)("inlineCode",{parentName:"p"},"from arguments")," as there was ",Object(o.b)("inlineCode",{parentName:"p"},"from cursor_name"),".  And the code was nearly identical.."),Object(o.b)("p",null,'When argument bundles were introduced the natural thing to do was to create an artifical bundle called "arguments" which\nrepresents the bundle that is ALL the arguments.  With that done, all the code for ',Object(o.b)("inlineCode",{parentName:"p"},"from arguments")," could be deleted\nbecause ",Object(o.b)("inlineCode",{parentName:"p"},"arguments")," itself was a valid shape name.  Hence ",Object(o.b)("inlineCode",{parentName:"p"},"insert into T from arguments"),' "just works".  And so half\nthe rewrites were deleted.  The only cost was that the form ',Object(o.b)("inlineCode",{parentName:"p"},"from arguments like shape")," became the cursor form\n",Object(o.b)("inlineCode",{parentName:"p"},"from arguments(like shape)")," which only adds mandatory parens to a form that was largely unused anyway (there were two\ncases in our entire codebase).  The cursor form is more general as you can do ",Object(o.b)("inlineCode",{parentName:"p"},"from C(like A, like B)")," to get the\nfields that match ",Object(o.b)("inlineCode",{parentName:"p"},"A")," then those that match ",Object(o.b)("inlineCode",{parentName:"p"},"B"),".  Arguments get this for free as well (well, at the cost of parens)."),Object(o.b)("p",null,"So overall, this feature was added, and the compiler got smaller and cleaner.  Only the test suite had to grow."),Object(o.b)("p",null,"Stay safe out there."))}c.isMDXComponent=!0}}]);