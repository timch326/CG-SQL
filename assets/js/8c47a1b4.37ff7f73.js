"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9110],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5427:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"ch01",title:"Chapter 1: Introduction",sidebar_label:"Chapter 1: Introduction"},s=void 0,p={unversionedId:"ch01",id:"ch01",title:"Chapter 1: Introduction",description:"\x3c!---",source:"@site/../CQL_Guide/ch01.md",sourceDirName:".",slug:"/ch01",permalink:"/cql-guide/ch01",draft:!1,tags:[],version:"current",lastUpdatedBy:"Ricardo Juan Palma Duran",lastUpdatedAt:1668625910,formattedLastUpdatedAt:"11/16/2022",frontMatter:{id:"ch01",title:"Chapter 1: Introduction",sidebar_label:"Chapter 1: Introduction"},sidebar:"someSidebar",next:{title:"Chapter 2: Using Data",permalink:"/cql-guide/ch02"}},d={},c=[{value:"Getting Started",id:"getting-started",level:3},{value:"Why did this work?",id:"why-did-this-work",level:3},{value:"Variables and Arithmetic",id:"variables-and-arithmetic",level:3},{value:"Basic Conversion Rules",id:"basic-conversion-rules",level:3},{value:"Preprocessing Features",id:"preprocessing-features",level:3}],h={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CQL was designed as a precompiled addition to the SQLite runtime system.  SQLite lacks\nstored procedures, but has a rich C runtime interface that allows you to create any kind\nof control flow mixed with any SQL operations that you might need.  However, SQLite's programming\ninterface is both verbose and error-prone in that small changes in SQL statements can require\nsignificant swizzling of the C code that calls them. Additionally, many of the SQLite runtime functions have error codes\nwhich must be strictly checked to ensure correct behavior.  In practice, it's easy to get some or all of this wrong."),(0,i.kt)("p",null,'CQL simplifies this situation by providing a high level SQL language not unlike the stored procedure\nforms that are available in client/server SQL solutions and lowering that language to "The C you could\nhave written to do that job using the normal SQLite interfaces."'),(0,i.kt)("p",null,"As a result, the C generated is generally very approachable but now the source language does not suffer from\nbrittleness due to query or table changes and CQL always generates correct column indices, nullability\nchecks, error checks, and the other miscellany needed to use SQLite correctly."),(0,i.kt)("p",null,"CQL is also strongly typed, whereas SQLite is very forgiving with regard to what operations\nare allowed on which data.  Strict type checking is much more reasonable given CQL's compiled programming model."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"CQL was created to help solve problems in the building of Meta Platforms's Messenger application, but this\ncontent is free from references to Messenger. The CQL code generation here is done in the simplest mode with the\nfewest runtime dependencies allowed for illustration."))),(0,i.kt)("h3",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Before starting this tutorial, make sure you have built the ",(0,i.kt)("inlineCode",{parentName:"p"},"cql")," executable first in ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started#building"},"Building CG/SQL"),"."),(0,i.kt)("p",null,'The "Hello World" program rendered in CQL looks like this:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="hello.sql"',title:'"hello.sql"'},'-- needed to allow vararg calls to C functions\ndeclare procedure printf no check;\n\ncreate proc hello()\nbegin\n  call printf("Hello, world\\n");\nend;\n')),(0,i.kt)("p",null,"This very nearly works exactly as written but we'll need a little bit of glue to wire it all up."),(0,i.kt)("p",null,"First, assuming you have ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started#building"},"built")," ",(0,i.kt)("inlineCode",{parentName:"p"},"cql"),", you should have the power to do this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cql --in hello.sql --cg hello.h hello.c\n")),(0,i.kt)("p",null,"This will produce the C output files ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.c")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.h")," which can be readily compiled."),(0,i.kt)("p",null,"However, hello.c will not have a ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," -- rather it will have a function like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="hello.c"',title:'"hello.c"'},"...\nvoid hello(void);\n...\n")),(0,i.kt)("p",null,"The declaration of this function can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.h"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: hello.h tries to include ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/CG-SQL/blob/main/sources/cqlrt.h"},(0,i.kt)("inlineCode",{parentName:"a"},"cqlrt.h")),". To\navoid configuring include paths for the compiler, you might keep ",(0,i.kt)("inlineCode",{parentName:"p"},"cqlrt.h")," in the same directory as the examples and\navoid that complication. Otherwise you must make arrangements for the compiler to be able to find ",(0,i.kt)("inlineCode",{parentName:"p"},"cqlrt.h")," either by\nadding it to an ",(0,i.kt)("inlineCode",{parentName:"p"},"INCLUDE")," path or by adding some ",(0,i.kt)("inlineCode",{parentName:"p"},"-I")," options to help the compiler find the source.")),(0,i.kt)("p",null,"That ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," function is not quite adequate to get a running program, which brings us to the next step in\ngetting things running.  Typically you have some kind of client program that will execute the procedures you\ncreate in CQL.  Let's create a simple one in a file we'll creatively name ",(0,i.kt)("inlineCode",{parentName:"p"},"main.c"),"."),(0,i.kt)("p",null,"A very simple CQL main might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.c"',title:'"main.c"'},'#include <stdlib.h>\n#include "hello.h"\nint main(int argc, char **argv)\n{\n   hello();\n   return 0;\n}\n')),(0,i.kt)("p",null,"Now we should be able to do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cc -o hello main.c hello.c\n$ ./hello\nHello, world\n")),(0,i.kt)("p",null,"Congratulations, you've printed ",(0,i.kt)("inlineCode",{parentName:"p"},'"Hello, world"')," with CG/SQL!"),(0,i.kt)("h3",{id:"why-did-this-work"},"Why did this work?"),(0,i.kt)("p",null,"A number of things are going on even in this simple program that are worth discussing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the procedure ",(0,i.kt)("inlineCode",{parentName:"li"},"hello")," had no arguments, and did not use the database",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"therefore its type signature when compiled will be simply ",(0,i.kt)("inlineCode",{parentName:"li"},"void hello(void);")," so we know how to call it"),(0,i.kt)("li",{parentName:"ul"},"you can see the declaration for yourself by examining the ",(0,i.kt)("inlineCode",{parentName:"li"},"hello.c")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"hello.h")))),(0,i.kt)("li",{parentName:"ul"},"since nobody used a database we didn't need to initialize one"),(0,i.kt)("li",{parentName:"ul"},"since there are no actual uses of SQLite we didn't need to provide that library"),(0,i.kt)("li",{parentName:"ul"},"for the same reason we didn't need to include a reference to the CQL runtime"),(0,i.kt)("li",{parentName:"ul"},"the function ",(0,i.kt)("inlineCode",{parentName:"li"},"printf"),' was declared "no check", so calling it creates a regular C call using whatever arguments are provided, in this case a string'),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"printf")," function is declared in ",(0,i.kt)("inlineCode",{parentName:"li"},"stdio.h")," which is pulled in by ",(0,i.kt)("inlineCode",{parentName:"li"},"cqlrt.h"),", which appears in ",(0,i.kt)("inlineCode",{parentName:"li"},"hello.c"),", so it will be available to call in the generated C code"),(0,i.kt)("li",{parentName:"ul"},'CQL allows string literals with double quotes, and those literals may have most C escape sequences in them, so the "\\n" bit works',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Normal SQL string literals (also supported) use single quotes and do not allow, or need escape characters other than ",(0,i.kt)("inlineCode",{parentName:"li"},"''")," to mean one single quote")))),(0,i.kt)("p",null,'All of these facts put together mean that the normal, simple linkage rules result in an executable that prints\nthe string "Hello, world" and then a newline.'),(0,i.kt)("h3",{id:"variables-and-arithmetic"},"Variables and Arithmetic"),(0,i.kt)("p",null,'Borrowing once again from examples in "The C Programming Language", it\'s possible to do significant control flow in CQL without reference to databases.  The following program illustrates a variety of concepts:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'-- needed to allow vararg calls to C functions\ndeclare procedure printf no check;\n\n-- print a conversion table  for temperatures from 0 to 300\ncreate proc conversions()\nbegin\n  declare fahr, celsius integer not null;\n  declare lower, upper, step integer not null;\n\n  set lower := 0;   /* lower limit of range */\n  set upper := 300; /* upper limit of range */\n  set step := 20;   /* step size */\n\n  set fahr := lower;\n  while fahr <= upper\n  begin\n    set celsius := 5 * (fahr - 32) / 9;\n    call printf("%d\\t%d\\n", fahr, celsius);\n    set fahr := fahr + step;\n  end;\nend;\n')),(0,i.kt)("p",null,"You may notice that both the SQL style ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," line prefix comments and the C style ",(0,i.kt)("inlineCode",{parentName:"p"},"/* */")," forms ","[note you haven't used the second for of comment style yet]","\nare acceptable comment forms. Indeed, it's actually quite normal to pass CQL source through the C pre-processor before giving\nit to the CQL compiler, thereby gaining ",(0,i.kt)("inlineCode",{parentName:"p"},"#define")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"#include")," as well as other pre-processing options\nlike token pasting in addition to the aforementioned comment forms.  More on this later."),(0,i.kt)("p",null,"Like C, in CQL all variables must be declared before they are used.  They remain in scope until the end of the\nprocedure in which they are declared, or they are global scoped if they are declared outside of any procedure.  The\ndeclarations announce the names and types of the local variables.   Importantly, variables stay in scope for the whole\nprocedure even if they are declared within a nested ",(0,i.kt)("inlineCode",{parentName:"p"},"begin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," block."),(0,i.kt)("p",null,'The most basic types are the scalar or "unitary" types (as they are referred to in the compiler)'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"aliases"),(0,i.kt)("th",{parentName:"tr",align:null},"notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"a 32 bit integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"long")),(0,i.kt)("td",{parentName:"tr",align:null},"long integer"),(0,i.kt)("td",{parentName:"tr",align:null},"a 64 bit integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bool")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"an 8 bit integer, normalized to 0/1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"real")),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"a C double")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"text")),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"an immutable string reference")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"blob")),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"an immutable blob reference")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"an object reference")))),(0,i.kt)("p",null,"Note: SQLite makes no distinction between integer storage and long integer storage, but the declarations\ntell CQL whether it should use the SQLite methods for binding and reading 64-bit or 32-bit quantities\nwhen using the variable or column so declared."),(0,i.kt)("p",null,"There will be more notes on these types later, but importantly, all keywords and names in CQL\nare case insensitive just like in the underlying SQL language.   Additionally all of the\nabove may be combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"not null")," to indicate that a ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," value may not be stored\nin that variable (as in the example).  When generating the C code, the case used in the declaration\nbecomes the canonical case of the variable and all other cases are converted to that in the emitted\ncode.  As a result the C remains case sensitively correct."),(0,i.kt)("p",null,"The size of the reference types is machine dependent, whatever the local pointer size is.  The\nnon-reference types use machine independent declarations like ",(0,i.kt)("inlineCode",{parentName:"p"},"int32_t")," to get exactly the desired\nsizes in a portable fashion."),(0,i.kt)("p",null,"All variables of a reference type are set to ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," when they are declared,\nincluding those that are declared ",(0,i.kt)("inlineCode",{parentName:"p"},"NOT NULL"),". For this reason, all nonnull\nreference variables must be initialized (i.e., assigned a value) before anything\nis allowed to read from them. This is not the case for nonnull variables of a\nnon-reference type, however: They are automatically assigned an initial value of\n0, and thus may be read from at any point."),(0,i.kt)("p",null,"The programs execution begins with three assignments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"set lower := 0;\nset upper := 300;\nset step := 20;\n")),(0,i.kt)("p",null,"This initializes the variables just like in the isomorphic C code.  Statements are seperated by semicolons,\njust like in C."),(0,i.kt)("p",null,"The table is then printed using a ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loop"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"while fahr <= upper\nbegin\n  ...\nend;\n")),(0,i.kt)("p",null,"This has the usual meaning, with the statements in the ",(0,i.kt)("inlineCode",{parentName:"p"},"begin/end")," block being executed repeatedly\nuntil the condition becomes false."),(0,i.kt)("p",null,"The body of a ",(0,i.kt)("inlineCode",{parentName:"p"},"begin/end")," block such as the one in the ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," statement can contain one or more statements."),(0,i.kt)("p",null,"The typical computation of Celsius temperature ensues with this code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'set celsius := 5 * (fahr - 32) / 9;\ncall printf("%d\\t%d\\n", fahr, celsius);\nset fahr := fahr + step;\n')),(0,i.kt)("p",null,"This computes the celsuis and then prints it out, moving on to the next entry in the table."),(0,i.kt)("p",null,"Importantly, the CQL compiler uses the normal SQLite order of operations, which is NOT the C order of operations.\nAs a result, the compiler may need to add parentheses in the C output to get the correct order; or it may remove\nsome parentheses because they are not needed in the C order even though they were in the SQL order."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"printf")," call operates as before, with the ",(0,i.kt)("inlineCode",{parentName:"p"},"fahr")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"celsius")," variables being passed on to the C runtime library\nfor formatting, unchanged."),(0,i.kt)("p",null,"NOTE: when calling unknown foreign functions like ",(0,i.kt)("inlineCode",{parentName:"p"},"printf")," string literals are simply passed right through unchanged\nas C string literals. No CQL string object is created."),(0,i.kt)("h3",{id:"basic-conversion-rules"},"Basic Conversion Rules"),(0,i.kt)("p",null,"As a rule, CQL does not perform its own conversions, leaving that instead to the C compiler.  An exception\nto this is that boolean expressions are normalized to a 0 or 1 result before they are stored."),(0,i.kt)("p",null,"However, even with no explicit conversions, there are compatibility checks to ensure that letting the C compiler\ndo the conversions will result in something sensible.  The following list summarizes the essential facts/rules as\nthey might be applied when performing a ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," operation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the numeric types are bool, int, long, real"),(0,i.kt)("li",{parentName:"ul"},"non-numeric types cannot be combined with numerics, e.g. 1 + 'x' always yields an error"),(0,i.kt)("li",{parentName:"ul"},"any numeric type combined with itself yields the same type"),(0,i.kt)("li",{parentName:"ul"},"bool combined with int yields int"),(0,i.kt)("li",{parentName:"ul"},"bool or int combined with long yields long"),(0,i.kt)("li",{parentName:"ul"},"bool, int, or long combined with real yields real")),(0,i.kt)("h3",{id:"preprocessing-features"},"Preprocessing Features"),(0,i.kt)("p",null,"CQL does not include its own pre-processor but it is designed to consume the output of the C pre-processor.  To do this, you can either write the output of the pre-processor to a temporary file and read it into CQL as usual or you can set up a pipeline something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cc -x c -E your_program.sql | cql --cg your_program.h your_program.c\n")),(0,i.kt)("p",null,"The above causes the C compiler to invoke only the pre-processor ",(0,i.kt)("inlineCode",{parentName:"p"},"-E")," and to treat the input as though it were C code ",(0,i.kt)("inlineCode",{parentName:"p"},"-x c")," even though it is in a ",(0,i.kt)("inlineCode",{parentName:"p"},".sql")," file. Later examples will assume that you have configured CQL to be used with the C pre-processor as above."))}u.isMDXComponent=!0}}]);