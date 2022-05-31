"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1185],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"x11",title:"Appendix 11: Production Considerations",sidebar_label:"Appendix 11: Production Considerations"},s=void 0,c={unversionedId:"x11",id:"x11",title:"Appendix 11: Production Considerations",description:"\x3c!---",source:"@site/../CQL_Guide/x11.md",sourceDirName:".",slug:"/x11",permalink:"/cql-guide/x11",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tim Cheung",lastUpdatedAt:1654019217,formattedLastUpdatedAt:"5/31/2022",frontMatter:{id:"x11",title:"Appendix 11: Production Considerations",sidebar_label:"Appendix 11: Production Considerations"},sidebar:"someSidebar",previous:{title:"Appendix 10: CQL Working Example",permalink:"/cql-guide/x10"},next:{title:"Part 1: Lexing, Parsing, and the AST",permalink:"/cql-guide/int01"}},d={},p=[{value:"Production Considerations",id:"production-considerations",level:3},{value:"Concurrency",id:"concurrency",level:4},{value:"Statement Caching",id:"statement-caching",level:4},{value:"Your Underlying Runtime",id:"your-underlying-runtime",level:4},{value:"Debugging and Tracing",id:"debugging-and-tracing",level:4},{value:"Customizing Code Generation",id:"customizing-code-generation",level:4},{value:"Summary",id:"summary",level:4}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"production-considerations"},"Production Considerations"),(0,a.kt)("p",null,"This system as it appears in the sources here is designed to get some basic SQLite scenarios working but\nthe runtime systems that are packaged here are basic, if only for clarity.  There are some important\nthings you should think about improving or customizing for your production environment. Here's a brief list."),(0,a.kt)("h4",{id:"concurrency"},"Concurrency"),(0,a.kt)("p",null,"The reference counting solution in the stock ",(0,a.kt)("inlineCode",{parentName:"p"},"CQLRT")," implementation is single threaded.  This might be ok,\nin many environments only one thread is doing all the data access.  But if you plan to share objects\nbetween threads this is something you'll want to address.  ",(0,a.kt)("inlineCode",{parentName:"p"},"CQLRT")," is designed to be replacable.  In fact\nthere is another version included in the distribution ",(0,a.kt)("inlineCode",{parentName:"p"},"cqlrt_cf")," that is more friendly to iOS and CoreFoundation.\nThis alternate version is an excellent demonstration of what is possible.  There are more details\nin ",(0,a.kt)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/int05"},"Internals Part 5: CQL Runtime"),"."),(0,a.kt)("h4",{id:"statement-caching"},"Statement Caching"),(0,a.kt)("p",null,"SQLite statement management includes the ability to reset and re-prepare statements.  This is an\nimportant performance optimization but the stock ",(0,a.kt)("inlineCode",{parentName:"p"},"CQLRT")," does not take advantage of this.  This is\nfor two reasons:  first, simplicity, and secondly (though more importantly), any kind of statement cache would require\na caching policy and this simple ",(0,a.kt)("inlineCode",{parentName:"p"},"CQLRT")," cannot possibly know what might consitute a good policy\nfor your application."),(0,a.kt)("p",null,"The following three macros can be defined in your ",(0,a.kt)("inlineCode",{parentName:"p"},"cqlrt.h")," and they can be directed at a version that\nkeeps a cache of your choice."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#ifndef cql_sqlite3_exec\n#define cql_sqlite3_exec(db, sql) sqlite3_exec((db), (sql), NULL, NULL, NULL)\n#endif\n\n#ifndef cql_sqlite3_prepare_v2\n#define cql_sqlite3_prepare_v2(db, sql, len, stmt, tail) sqlite3_prepare_v2((db), (sql), (len), (stmt), (tail))\n#endif\n\n#ifndef cql_sqlite3_finalize\n#define cql_sqlite3_finalize(stmt) sqlite3_finalize((stmt))\n#endif\n")),(0,a.kt)("p",null,"As you might expect, ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare")," creates a statement or else returns one from the cache.\nWhen the ",(0,a.kt)("inlineCode",{parentName:"p"},"finalize")," API is called the indicated statement can be returned to the cache or discarded.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," API does both of these operations, but also, recall that ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," can get a semicolon\nseparated list of statements. Your ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," implementation will have to use SQLite's prepare functions\nto split the list and get prepared statements for part of the string.  Alternately, you could choose\nnot to cache in the ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," case."),(0,a.kt)("h4",{id:"your-underlying-runtime"},"Your Underlying Runtime"),(0,a.kt)("p",null,"As you can see in ",(0,a.kt)("inlineCode",{parentName:"p"},"cqlrt_cf"),", there is considerable ability to define what the basic data types mean.  Importantly,\nthe reference types ",(0,a.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"blob"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," can become something different (e.g., something\nalready supported by your environment).  For instance, on Windows you could use COM or .NET types\nfor your objects.  All object references are substantially opaque to ",(0,a.kt)("inlineCode",{parentName:"p"},"CQLRT"),"; they have comparatively\nfew APIs that are defined in the runtime:  things like getting the text out of the string reference\nand so forth."),(0,a.kt)("p",null,"In addition to the basic types and operations you can also define a few helper functions that\nallow you to create some more complex object types.  For instance, list, set, and dictionary\ncreation and management functions can be readily created and then you can declare them using\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"DECLARE FUNCTION")," language features.  These objects will then be whatever list, set, or\ndictionary they need to be in order to interoperate with the rest of your environment.  You can\ndefine all the data types you might need in your ",(0,a.kt)("inlineCode",{parentName:"p"},"CQLRT")," and you can employ whatever\nthreading model and locking primitives you need for correctness."),(0,a.kt)("h4",{id:"debugging-and-tracing"},"Debugging and Tracing"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CQLRT")," interface includes some helper macros for logging.  These are defined\nas no-ops by default but, of course, they can be changed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#define cql_contract assert\n#define cql_invariant assert\n#define cql_tripwire assert\n#define cql_log_database_error(...)\n#define cql_error_trace()\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cql_contract")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cql_invariant")," are for fatal errors. They both assert something\nthat is expected to always be true (like ",(0,a.kt)("inlineCode",{parentName:"p"},"assert"),") with the only difference being that\nthe former is conventionally used to validate preconditions of functions."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cql_tripwire")," is a slightly softer form of assert that should crash in debug\nbuilds but only log an error in production builds. It is generally used to enforce\na new condition that may not always hold with the goal of eventually transitioning\nover to ",(0,a.kt)("inlineCode",{parentName:"p"},"cql_contract")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"cql_invariant")," once logging has demonstrated that the\ntripwire is never hit.\nWhen a ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch_results")," method is called, a failure results in a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"cql_log_database_error"),".\nPresently the log format is very simple.  The invocation looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},' cql_log_database_error(info->db, "cql", "database error");\n')),(0,a.kt)("p",null,"The logging facility is expected to send the message to wherever is appropriate for your environment.\nAdditionally it will typically get the failing result code and error message from SQLite, however\nthese are likely to be stale. Failed queries usually still require cleanup and so the SQLite error\ncodes be lost because (e.g.) a ",(0,a.kt)("inlineCode",{parentName:"p"},"finalize")," has happened, clearing the code. You can do better if,\nfor instance, your runtime caches the results of recent failed ",(0,a.kt)("inlineCode",{parentName:"p"},"prepare")," calls. In any case,\nwhat you log and where you log it is entirely up to you."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cql_error_trace")," macro is described in ",(0,a.kt)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/int03#cleanup-and-errors"},"Internals Chapter 3"),".\nIt will typically invoke ",(0,a.kt)("inlineCode",{parentName:"p"},"printf")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"fprintf")," or something like that to trace the origin of thrown\nexceptions and to get the error text from SQLite as soon as possible."),(0,a.kt)("p",null,"An example might be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#define cql_error_trace() fprintf(stderr, "error %d in %s %s:%d\\n", _rc_, _PROC_, __FILE__, __LINE_)\n')),(0,a.kt)("p",null,"Typically the cost of all these diagnostics is too high to include in production code so this is\nturned on when debugging failures.  But you can make that choice for yourself."),(0,a.kt)("h4",{id:"customizing-code-generation"},"Customizing Code Generation"),(0,a.kt)("p",null,"The file ",(0,a.kt)("inlineCode",{parentName:"p"},"rt_common.c")," defines the common result types, but the skeleton file ",(0,a.kt)("inlineCode",{parentName:"p"},"rt.c"),"\nincludes affordances to add your own types without having to worry about conflicts with the\ncommon types.  These macros define"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#define RT_EXTRAS\n#define RT_EXTRA_CLEANUP\n")),(0,a.kt)("p",null,"Simply define these two to create whatever ",(0,a.kt)("inlineCode",{parentName:"p"},"rt_")," data structures you want and add any\ncleanup function that might be needed to release resources.  The other cleanup\nfunctions should provide a good template for you to make your own."),(0,a.kt)("p",null,"The C data type ",(0,a.kt)("inlineCode",{parentName:"p"},"rtdata")," includes many text fragments that directly control the\ncode generation.  If you want to make your generated code look more like say\nCoreFoundation you can define an ",(0,a.kt)("inlineCode",{parentName:"p"},"rtdata")," that will do the job.  This will mean\na lot of your generated code won't require the ",(0,a.kt)("inlineCode",{parentName:"p"},"#defines")," for the CQL types,\nit can use your runtime directly.  You can also enable things like Pascal casing\nfor procedure names and a common prefix on procedure names if those are useful\nin your environment.  However, the system is designed so that such changes\naren't necessary.  The data types in ",(0,a.kt)("inlineCode",{parentName:"p"},"cqlrt.h")," are enough for any remapping,\nadditional changes with ",(0,a.kt)("inlineCode",{parentName:"p"},"rtdata")," are merely cosmetic."),(0,a.kt)("h4",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CQLRT")," macros are very powerful, they allow you to target almost any\nruntime with a C API.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"cqlrt_cf")," version is a good example of the\nsorts of changes you can make."),(0,a.kt)("p",null,"Concurrency and Statement Caching are not supported in the basic version\nfor ",(0,a.kt)("inlineCode",{parentName:"p"},"cqlrt.h"),".  If this is important to you you might want to customize for that."),(0,a.kt)("p",null,"Helper functions for additional data types can be added, and they can be\nunique to your runtime."),(0,a.kt)("p",null,"There are tracing macros to help with debugability.  Providing some\nuseful versions of those can be of great help in production environments."))}m.isMDXComponent=!0}}]);