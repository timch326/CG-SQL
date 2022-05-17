(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{162:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||r;return a?i.a.createElement(m,c(c({ref:t},s),{},{components:a})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=a[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),r=(a(0),a(162)),l=["components"],c={id:"x1",title:"Appendix 1: Command Line Options",sidebar_label:"Appendix 1: Command Line Options"},o={unversionedId:"x1",id:"x1",isDocsHomePage:!1,title:"Appendix 1: Command Line Options",description:"\x3c!---",source:"@site/../CQL_Guide/x1.md",slug:"/x1",permalink:"/cql-guide/x1",version:"current",lastUpdatedBy:"Russell Weas",lastUpdatedAt:1652761591,sidebar_label:"Appendix 1: Command Line Options",sidebar:"someSidebar",previous:{title:"Chapter 14: CQL Query Fragments",permalink:"/cql-guide/ch14"},next:{title:"Appendix 2: CQL Grammar",permalink:"/cql-guide/x2"}},s=[{value:"With No Options",id:"with-no-options",children:[]},{value:"--in file",id:"--in-file",children:[]},{value:"--sem",id:"--sem",children:[]},{value:"--ast",id:"--ast",children:[]},{value:"--echo",id:"--echo",children:[]},{value:"--dot",id:"--dot",children:[]},{value:"--cg output1 output2 ...",id:"--cg-output1-output2-",children:[]},{value:"--nolines",id:"--nolines",children:[]},{value:"--global_proc name",id:"--global_proc-name",children:[]},{value:"--compress",id:"--compress",children:[]},{value:"--test",id:"--test",children:[]},{value:"--dev",id:"--dev",children:[]},{value:"--java_package_name name",id:"--java_package_name-name",children:[]},{value:"--java_assembly_query_classname name",id:"--java_assembly_query_classname-name",children:[]},{value:"--java_fragment_interface_mode",id:"--java_fragment_interface_mode",children:[]},{value:"--java_fragment_interfaces interface",id:"--java_fragment_interfaces-interface",children:[]},{value:"--java_imports name",id:"--java_imports-name",children:[]},{value:"--c_include_namespace",id:"--c_include_namespace",children:[]},{value:"--c_include_path",id:"--c_include_path",children:[]},{value:"--objc_c_include_path",id:"--objc_c_include_path",children:[]},{value:"Result Types (--rt *)",id:"result-types---rt-",children:[]}],u={rightToc:s};function b(e){var t=e.components,a=Object(i.a)(e,l);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"CQL has a variety of command line options but many of them are only interesting for cql development.  Nonetheless this is a comprehensive list:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"note CQL is often used after the c pre-processor is run so this kind of invocation is typical:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cc -E -x c foo.sql | cql [args]\n")),Object(r.b)("h3",{id:"with-no-options"},"With No Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"emits a usage message")),Object(r.b)("h3",{id:"--in-file"},"--in file"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"reads the given file for the input instead of stdin"),Object(r.b)("li",{parentName:"ul"},"the input should probably have already been run through the C pre-processor as above"),Object(r.b)("li",{parentName:"ul"},"returns non-zero if the file fails to parse")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cql --in test.sql\n")),Object(r.b)("h3",{id:"--sem"},"--sem"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"performs semantic analysis on the input file ONLY"),Object(r.b)("li",{parentName:"ul"},"the return code is zero if there are no errors")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cql --in sem_test.sql --sem\n")),Object(r.b)("h3",{id:"--ast"},"--ast"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"walks the AST and prints it to stdout in human readable text form"),Object(r.b)("li",{parentName:"ul"},"may be combined with --sem (semantic info will be included)\nExample")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cql --in sem_test.sql --sem --ast >sem_ast.out\n")),Object(r.b)("h3",{id:"--echo"},"--echo"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"walks the AST and emits the text of a program that would create it"),Object(r.b)("li",{parentName:"ul"},'this has the effect of "beautifying" badly formatted input or "canonicalizing" it',Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"some sensible indenting is added but it might not be the original indenting"),Object(r.b)("li",{parentName:"ul"},"extraneous whitespace, parens, etc. are removed"))),Object(r.b)("li",{parentName:"ul"},"may be combined with --sem (in which case you see the source after any rewrites for sugar)"),Object(r.b)("li",{parentName:"ul"},"this also validates that the input can be parsed")),Object(r.b)("p",null,"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'cql --in test.sql --echo >test.out  # test.out is "equivalent" to test.sql\n')),Object(r.b)("h3",{id:"--dot"},"--dot"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"prints the internal AST to stdout in DOT format for graph visualization"),Object(r.b)("li",{parentName:"ul"},"this is really only interesting for small graphs for discussion as it rapidly gets insane")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cql --dot --in dottest.sql\n")),Object(r.b)("h3",{id:"--cg-output1-output2-"},"--cg output1 output2 ..."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"any number of output files may be needed for a particular result type, two is common"),Object(r.b)("li",{parentName:"ul"},"the return code is zero if there are no errors"),Object(r.b)("li",{parentName:"ul"},"any --cg option implies --sem")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cql --in foo.sql --cg foo.h foo.c\n")),Object(r.b)("h3",{id:"--nolines"},"--nolines"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Suppress the # directives for lines.  Useful if you need to debug the C code.")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"cql --in test.sql --nolines --cg foo.h foo.c\n")),Object(r.b)("h3",{id:"--global_proc-name"},"--global_proc name"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"any loose SQL statements not in a stored proc are gathered and put into a procedure of the given name"),Object(r.b)("li",{parentName:"ul"},"when generating a schema migrate script the global proc name is used as a prefix on all of the artifacts so that there can be several independent migrations linked into a single executable")),Object(r.b)("h3",{id:"--compress"},"--compress"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"for use with the C result type, (or any similar types added to the runtime array in your compiler)"),Object(r.b)("li",{parentName:"ul"},'string literals for the SQL are broken into "fragments" the DML is then represented by an array of fragments'),Object(r.b)("li",{parentName:"ul"},"since DML is often very similar there is a lot of token sharing possible"),Object(r.b)("li",{parentName:"ul"},"the original string is recreated at runtime from the fragments and then executed"),Object(r.b)("li",{parentName:"ul"},"comments show the original string inline for easier debugging and searching")),Object(r.b)("p",null,"NOTE: different result types require a different number of output files with different meanings"),Object(r.b)("h3",{id:"--test"},"--test"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"some of the output types can include extra diagnostics if ",Object(r.b)("inlineCode",{parentName:"li"},"--test")," is included"),Object(r.b)("li",{parentName:"ul"},"the test output often makes the outputs badly formed so this is generally good for humans only")),Object(r.b)("h3",{id:"--dev"},"--dev"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"some codegen features only make sense during development, this enables dev mode to turn those one\n** example: explain query plan")),Object(r.b)("h3",{id:"--java_package_name-name"},"--java_package_name name"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"used by java code generators when they output a class. Allows to specify the name of package the class will be a part of")),Object(r.b)("h3",{id:"--java_assembly_query_classname-name"},"--java_assembly_query_classname name"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fully qualified name of the parent class for the Java assembly. Used by java code generators when they output an extension fragment class.")),Object(r.b)("h3",{id:"--java_fragment_interface_mode"},"--java_fragment_interface_mode"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sets the Java codegen mode to generate interfaces for base and extension fragments instead of classes.")),Object(r.b)("h3",{id:"--java_fragment_interfaces-interface"},"--java_fragment_interfaces interface"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fully qualified name of the generated Java interfaces that an extension or assembly fragment implements. This should correspond to the base fragment and extension fragments that are referenced by the current fragment being generated.")),Object(r.b)("h3",{id:"--java_imports-name"},"--java_imports name"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fully qualified name to import in the emitted java source.")),Object(r.b)("h3",{id:"--c_include_namespace"},"--c_include_namespace"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'for the C codegen runtimes, it determines the header namespace (as in #include "namespace/file.h") that goes into the output C file'),Object(r.b)("li",{parentName:"ul"},"if this option is used, it is prefixed to the first argment to --cg to form the include path in the C file"),Object(r.b)("li",{parentName:"ul"},'if absent there is no "namespace/" prefix')),Object(r.b)("h3",{id:"--c_include_path"},"--c_include_path"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'for the C codegen runtimes, it determines the full header path (as in #include "your_arg") that goes into the output C file'),Object(r.b)("li",{parentName:"ul"},"if this option is used, the first argment to --cg controls only the output path and does not appear in include path at all"),Object(r.b)("li",{parentName:"ul"},"this form overrides --c_include_namespace if both are specified")),Object(r.b)("h3",{id:"--objc_c_include_path"},"--objc_c_include_path"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"for ObjC codegen runtimes that need to refer to the generated C code, this represents the header of the C generated code that will be used during inclusion from the ObjC file")),Object(r.b)("h3",{id:"result-types---rt-"},"Result Types (--rt *)"),Object(r.b)("p",null,"These are the various outputs the compiler can produce."),Object(r.b)("h4",{id:"--rt-c"},"--rt c"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"requires two output files (foo.h and foo.c)"),Object(r.b)("li",{parentName:"ul"},"this is the standard C compilation of the sql file")),Object(r.b)("h5",{id:"--cqlrt-fooh"},"--cqlrt foo.h"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"emits ",Object(r.b)("inlineCode",{parentName:"li"},'#include "foo.h"')," into the C output instead of ",Object(r.b)("inlineCode",{parentName:"li"},'#include "cqlrt.h"'))),Object(r.b)("h5",{id:"--generate_type_getters"},"--generate_type_getters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"changes C output for CQL result sets so that the field readers used shared functions to get fields of a certain type"),Object(r.b)("li",{parentName:"ul"},"this style of codegen makes result-sets more interoperable with each other if they have similar shape so it can be useful")),Object(r.b)("h5",{id:"--generate_exports"},"--generate_exports"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"adds an additional output file"),Object(r.b)("li",{parentName:"ul"},"example:  `--in foo.sql --generate_exports --rt c --cg foo.h foo.c foo_exports.sql"),Object(r.b)("li",{parentName:"ul"},"the output file ",Object(r.b)("inlineCode",{parentName:"li"},"foo_exports.sql")," includes procedure declarations for the contents of ",Object(r.b)("inlineCode",{parentName:"li"},"foo.sql")),Object(r.b)("li",{parentName:"ul"},"basically automatically generates the CQL header file you need to access the procedures in the input from some other file"),Object(r.b)("li",{parentName:"ul"},"if it were C it would be like auto-generating ",Object(r.b)("inlineCode",{parentName:"li"},"foo.h")," from ",Object(r.b)("inlineCode",{parentName:"li"},"foo.c"))),Object(r.b)("h4",{id:"--rt-objc"},"--rt objc"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"objective C wrappers for result sets produced by the stored procedures in the input"),Object(r.b)("li",{parentName:"ul"},"these depend on the output of a standard codegen run so this is additive"),Object(r.b)("li",{parentName:"ul"},"requires one output file (foo.h)")),Object(r.b)("h4",{id:"--rt-java"},"--rt java"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"java wrappers for result sets produced by the stored procedures in the input"),Object(r.b)("li",{parentName:"ul"},"these depend on the output of a standard codegen run so this is additive"),Object(r.b)("li",{parentName:"ul"},"requires one output file (foo.java)")),Object(r.b)("h4",{id:"--rt-schema"},"--rt schema"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"produces the canonical schema for the given input files"),Object(r.b)("li",{parentName:"ul"},"stored procedures etc. are removed"),Object(r.b)("li",{parentName:"ul"},"whitespace etc. is removed"),Object(r.b)("li",{parentName:"ul"},'suitable for use to create the next or first "previous" schema for schema validation'),Object(r.b)("li",{parentName:"ul"},"requires one output file")),Object(r.b)("h4",{id:"--rt-schema_facet_checker"},"--rt schema_facet_checker"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"produces a CQL script that checks whether the schema is up to date which can then be compiled with CQL itself"),Object(r.b)("li",{parentName:"ul"},"see the chapter on schema upgrade/migration: ",Object(r.b)("a",{parentName:"li",href:"https://cgsql.dev/cql-guide/ch10/"},"Chapter 10")),Object(r.b)("li",{parentName:"ul"},"requires one output file (foo.sql)")),Object(r.b)("h4",{id:"--rt-schema_upgrade"},"--rt schema_upgrade"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"produces a CQL schema upgrade script which can then be compiled with CQL itself"),Object(r.b)("li",{parentName:"ul"},"see the chapter on schema upgrade/migration: ",Object(r.b)("a",{parentName:"li",href:"https://cgsql.dev/cql-guide/ch10/"},"Chapter 10")),Object(r.b)("li",{parentName:"ul"},"requires one output file (foo.sql)")),Object(r.b)("h5",{id:"--include_regions-a-b-c"},"--include_regions a b c"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the indicated regions will be declared"),Object(r.b)("li",{parentName:"ul"},"used with ",Object(r.b)("inlineCode",{parentName:"li"},"--rt schema_upgrade")," or ",Object(r.b)("inlineCode",{parentName:"li"},"--rt schema")),Object(r.b)("li",{parentName:"ul"},"in the upgrade case excluded regions will not be themselves upgraded, but may be referred, to by things that are being upgraded")),Object(r.b)("h5",{id:"--exclude_regions-x-y-z"},"--exclude_regions x y z"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the indicated regions will still be declared but the upgrade code will be suppressed, the presumption being that a different script already upgrades x y z"),Object(r.b)("li",{parentName:"ul"},"used with ",Object(r.b)("inlineCode",{parentName:"li"},"--rt schema_upgrade"))),Object(r.b)("h5",{id:"--min_schema_version-n"},"--min_schema_version n"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the schema upgrade script will not include upgrade steps for schema older than the version specified")),Object(r.b)("h5",{id:"--schema_exclusive"},"--schema_exclusive"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the schema upgrade script assumes it owns all the schema in the database, it aggressively removes other things")),Object(r.b)("h4",{id:"--rt-json_schema"},"--rt json_schema"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"produces JSON output suitable for consumption by downstream codegen"),Object(r.b)("li",{parentName:"ul"},"the JSON includes a definition of the various entities in the input"),Object(r.b)("li",{parentName:"ul"},"see the section on JSON output for details")),Object(r.b)("h4",{id:"--rt-query_plan"},"--rt query_plan"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"produces CQL output which can be re-compiled by CQL as normal input"),Object(r.b)("li",{parentName:"ul"},"the output consists of a set of procedures that will emit all query plans for the DML that was in the input"),Object(r.b)("li",{parentName:"ul"},"see ",Object(r.b)("inlineCode",{parentName:"li"},"--rt udf")," for additional info")),Object(r.b)("h4",{id:"--rt-stats"},"--rt stats"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"produces  a simple .csv file with node count information for AST nodes per procedure in the input"),Object(r.b)("li",{parentName:"ul"},"requires one output file (foo.csv)")),Object(r.b)("h4",{id:"--rt-udf"},"--rt udf"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"produces stub UDF implementations for all UDFS that were seen in the input"),Object(r.b)("li",{parentName:"ul"},"this output is suitable for use with ",Object(r.b)("inlineCode",{parentName:"li"},"--rt query_plan")," so that SQL with UDFs will run in a simple context"),Object(r.b)("li",{parentName:"ul"},"requires two output files (e.g. udfs.h and udfs.c)")))}b.isMDXComponent=!0}}]);