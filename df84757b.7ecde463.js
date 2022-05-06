(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(162)),o=["components"],c={id:"x11",title:"Appendix 11: Production Considerations",sidebar_label:"Appendix 11: Production Considerations"},l={unversionedId:"x11",id:"x11",isDocsHomePage:!1,title:"Appendix 11: Production Considerations",description:"\x3c!---",source:"@site/../CQL_Guide/x11.md",slug:"/x11",permalink:"/cql-guide/x11",version:"current",lastUpdatedBy:"Tim Cheung",lastUpdatedAt:1651863910,sidebar_label:"Appendix 11: Production Considerations",sidebar:"someSidebar",previous:{title:"Appendix 10: CQL Working Example",permalink:"/cql-guide/x10"},next:{title:"Part 1: Lexing, Parsing, and the AST",permalink:"/cql-guide/int01"}},s=[{value:"Production Considerations",id:"production-considerations",children:[]}],d={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"production-considerations"},"Production Considerations"),Object(i.b)("p",null,"This system as it appears in the sources here is designed to get some basic SQLite scenarios working but\nthe runtime systems that are packaged here are basic, if only for clarity.  There are some important\nthings you should think about improving or customizing for your production environment. Here's a brief list."),Object(i.b)("h4",{id:"concurrency"},"Concurrency"),Object(i.b)("p",null,"The reference counting solution in the stock ",Object(i.b)("inlineCode",{parentName:"p"},"CQLRT")," implementation is single threaded.  This might be ok,\nin many environments only one thread is doing all the data access.  But if you plan to share objects\nbetween threads this is something you'll want to address.  ",Object(i.b)("inlineCode",{parentName:"p"},"CQLRT")," is designed to be replacable.  In fact\nthere is another version included in the distribution ",Object(i.b)("inlineCode",{parentName:"p"},"cqlrt_cf")," that is more friendly to iOS and CoreFoundation.\nThis alternate version is an excellent demonstration of what is possible.  There are more details\nin ",Object(i.b)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/int05"},"Internals Part 5: CQL Runtime"),"."),Object(i.b)("h4",{id:"statement-caching"},"Statement Caching"),Object(i.b)("p",null,"SQLite statement management includes the ability to reset and re-prepare statements.  This is an\nimportant performance optimization but the stock ",Object(i.b)("inlineCode",{parentName:"p"},"CQLRT")," does not take advantage of this.  This is\nfor two reasons:  first, simplicity, and secondly (though more importantly), any kind of statement cache would require\na caching policy and this simple ",Object(i.b)("inlineCode",{parentName:"p"},"CQLRT")," cannot possibly know what might consitute a good policy\nfor your application."),Object(i.b)("p",null,"The following three macros can be defined in your ",Object(i.b)("inlineCode",{parentName:"p"},"cqlrt.h")," and they can be directed at a version that\nkeeps a cache of your choice."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-C"},"#ifndef cql_sqlite3_exec\n#define cql_sqlite3_exec(db, sql) sqlite3_exec((db), (sql), NULL, NULL, NULL)\n#endif\n\n#ifndef cql_sqlite3_prepare_v2\n#define cql_sqlite3_prepare_v2(db, sql, len, stmt, tail) sqlite3_prepare_v2((db), (sql), (len), (stmt), (tail))\n#endif\n\n#ifndef cql_sqlite3_finalize\n#define cql_sqlite3_finalize(stmt) sqlite3_finalize((stmt))\n#endif\n")),Object(i.b)("p",null,"As you might expect, ",Object(i.b)("inlineCode",{parentName:"p"},"prepare")," creates a statement or else returns one from the cache.\nWhen the ",Object(i.b)("inlineCode",{parentName:"p"},"finalize")," API is called the indicated statement can be returned to the cache or discarded.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"exec")," API does both of these operations, but also, recall that ",Object(i.b)("inlineCode",{parentName:"p"},"exec")," can get a semicolon\nseparated list of statements. Your ",Object(i.b)("inlineCode",{parentName:"p"},"exec")," implementation will have to use SQLite's prepare functions\nto split the list and get prepared statements for part of the string.  Alternately, you could choose\nnot to cache in the ",Object(i.b)("inlineCode",{parentName:"p"},"exec")," case."),Object(i.b)("h4",{id:"your-underlying-runtime"},"Your Underlying Runtime"),Object(i.b)("p",null,"As you can see in ",Object(i.b)("inlineCode",{parentName:"p"},"cqlrt_cf"),", there is considerable ability to define what the basic data types mean.  Importantly,\nthe reference types ",Object(i.b)("inlineCode",{parentName:"p"},"text"),", ",Object(i.b)("inlineCode",{parentName:"p"},"blob"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"object")," can become something different (e.g., something\nalready supported by your environment).  For instance, on Windows you could use COM or .NET types\nfor your objects.  All object references are substantially opaque to ",Object(i.b)("inlineCode",{parentName:"p"},"CQLRT"),"; they have comparatively\nfew APIs that are defined in the runtime:  things like getting the text out of the string reference\nand so forth."),Object(i.b)("p",null,"In addition to the basic types and operations you can also define a few helper functions that\nallow you to create some more complex object types.  For instance, list, set, and dictionary\ncreation and management functions can be readily created and then you can declare them using\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"DECLARE FUNCTION")," language features.  These objects will then be whatever list, set, or\ndictionary they need to be in order to interoperate with the rest of your environment.  You can\ndefine all the data types you might need in your ",Object(i.b)("inlineCode",{parentName:"p"},"CQLRT")," and you can employ whatever\nthreading model and locking primitives you need for correctness."),Object(i.b)("h4",{id:"debugging-and-tracing"},"Debugging and Tracing"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"CQLRT")," interface includes some helper macros for logging.  These are defined\nas no-ops by default but, of course, they can be changed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#define cql_contract assert\n#define cql_invariant assert\n#define cql_tripwire assert\n#define cql_log_database_error(...)\n#define cql_error_trace()\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"cql_contract")," and ",Object(i.b)("inlineCode",{parentName:"p"},"cql_invariant")," are for fatal errors. They both assert something\nthat is expected to always be true (like ",Object(i.b)("inlineCode",{parentName:"p"},"assert"),") with the only difference being that\nthe former is conventionally used to validate preconditions of functions."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"cql_tripwire")," is a slightly softer form of assert that should crash in debug\nbuilds but only log an error in production builds. It is generally used to enforce\na new condition that may not always hold with the goal of eventually transitioning\nover to ",Object(i.b)("inlineCode",{parentName:"p"},"cql_contract")," or ",Object(i.b)("inlineCode",{parentName:"p"},"cql_invariant")," once logging has demonstrated that the\ntripwire is never hit.\nWhen a ",Object(i.b)("inlineCode",{parentName:"p"},"fetch_results")," method is called, a failure results in a call to ",Object(i.b)("inlineCode",{parentName:"p"},"cql_log_database_error"),".\nPresently the log format is very simple.  The invocation looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-C"},' cql_log_database_error(info->db, "cql", "database error");\n')),Object(i.b)("p",null,"The logging facility is expected to send the message to wherever is appropriate for your environment.\nAdditionally it will typically get the failing result code and error message from SQLite, however\nthese are likely to be stale. Failed queries usually still require cleanup and so the SQLite error\ncodes be lost because (e.g.) a ",Object(i.b)("inlineCode",{parentName:"p"},"finalize")," has happened, clearing the code. You can do better if,\nfor instance, your runtime caches the results of recent failed ",Object(i.b)("inlineCode",{parentName:"p"},"prepare")," calls. In any case,\nwhat you log and where you log it is entirely up to you."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"cql_error_trace")," macro is described in ",Object(i.b)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/int03#cleanup-and-errors"},"Internals Chapter 3"),".\nIt will typically invoke ",Object(i.b)("inlineCode",{parentName:"p"},"printf")," or ",Object(i.b)("inlineCode",{parentName:"p"},"fprintf")," or something like that to trace the origin of thrown\nexceptions and to get the error text from SQLite as soon as possible."),Object(i.b)("p",null,"An example might be:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'#define cql_error_trace() fprintf(stderr, "error %d in %s %s:%d\\n", _rc_, _PROC_, __FILE__, __LINE_)\n')),Object(i.b)("p",null,"Typically the cost of all these diagnostics is too high to include in production code so this is\nturned on when debugging failures.  But you can make that choice for yourself."),Object(i.b)("h4",{id:"customizing-code-generation"},"Customizing Code Generation"),Object(i.b)("p",null,"The file ",Object(i.b)("inlineCode",{parentName:"p"},"rt_common.c")," defines the common result types, but the skeleton file ",Object(i.b)("inlineCode",{parentName:"p"},"rt.c"),"\nincludes affordances to add your own types without having to worry about conflicts with the\ncommon types.  These macros define"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-C"},"#define RT_EXTRAS\n#define RT_EXTRA_CLEANUP\n")),Object(i.b)("p",null,"Simply define these two to create whatever ",Object(i.b)("inlineCode",{parentName:"p"},"rt_")," data structures you want and add any\ncleanup function that might be needed to release resources.  The other cleanup\nfunctions should provide a good template for you to make your own."),Object(i.b)("p",null,"The C data type ",Object(i.b)("inlineCode",{parentName:"p"},"rtdata")," includes many text fragments that directly control the\ncode generation.  If you want to make your generated code look more like say\nCoreFoundation you can define an ",Object(i.b)("inlineCode",{parentName:"p"},"rtdata")," that will do the job.  This will mean\na lot of your generated code won't require the ",Object(i.b)("inlineCode",{parentName:"p"},"#defines")," for the CQL types,\nit can use your runtime directly.  You can also enable things like Pascal casing\nfor procedure names and a common prefix on procedure names if those are useful\nin your environment.  However, the system is designed so that such changes\naren't necessary.  The data types in ",Object(i.b)("inlineCode",{parentName:"p"},"cqlrt.h")," are enough for any remapping,\nadditional changes with ",Object(i.b)("inlineCode",{parentName:"p"},"rtdata")," are merely cosmetic."),Object(i.b)("h4",{id:"summary"},"Summary"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"CQLRT")," macros are very powerful, they allow you to target almost any\nruntime with a C API.  The ",Object(i.b)("inlineCode",{parentName:"p"},"cqlrt_cf")," version is a good example of the\nsorts of changes you can make."),Object(i.b)("p",null,"Concurrency and Statement Caching are not supported in the basic version\nfor ",Object(i.b)("inlineCode",{parentName:"p"},"cqlrt.h"),".  If this is important to you you might want to customize for that."),Object(i.b)("p",null,"Helper functions for additional data types can be added, and they can be\nunique to your runtime."),Object(i.b)("p",null,"There are tracing macros to help with debugability.  Providing some\nuseful versions of those can be of great help in production environments."))}p.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(o,".").concat(u)]||p[u]||b[u]||i;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);