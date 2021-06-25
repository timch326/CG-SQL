(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,h=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return n?r.a.createElement(h,s(s({ref:t},c),{},{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(138)),l=["components"],s={id:"ch06",title:"Chapter 6: Calling Procedures Defined Elsewhere",sidebar_label:"Chapter 6: Calling Procedures Defined Elsewhere"},i={unversionedId:"ch06",id:"ch06",isDocsHomePage:!1,title:"Chapter 6: Calling Procedures Defined Elsewhere",description:"\x3c!---",source:"@site/../CQL_Guide/ch06.md",slug:"/ch06",permalink:"/cql-guide/ch06",version:"current",lastUpdatedBy:"Edward Pastuszenski",lastUpdatedAt:1624613396,sidebar_label:"Chapter 6: Calling Procedures Defined Elsewhere",sidebar:"someSidebar",previous:{title:"Chapter 5: Types of Cursors, OUT and OUT UNION, and FETCH flavors",permalink:"/cql-guide/ch05"},next:{title:"Chapter 7: CQL Result Sets",permalink:"/cql-guide/ch07"}},c=[{value:"Declaring Procedures Defined Elsewhere",id:"declaring-procedures-defined-elsewhere",children:[]},{value:"Simple Procedures (database free):",id:"simple-procedures-database-free",children:[]},{value:"Procedures that use the database",id:"procedures-that-use-the-database",children:[]},{value:"Procedures that create a result set",id:"procedures-that-create-a-result-set",children:[]},{value:"Procedures that return a single row with a value cursor",id:"procedures-that-return-a-single-row-with-a-value-cursor",children:[]},{value:"Procedures that return a full result set",id:"procedures-that-return-a-full-result-set",children:[]},{value:"Exporting Declared Symbols Automatically",id:"exporting-declared-symbols-automatically",children:[]},{value:"Declaration Examples",id:"declaration-examples",children:[]}],u={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"CQL generally doesn't see the whole world in one compilation.",Object(o.b)("br",{parentName:"p"}),"\n","In this way it's a lot more like say the C compiler than it is like say Java\nor C# or something like that.  This means several things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You don't have to tell CQL about all your schema in all your files,\nso particular stored procs can be more encapsulated"),Object(o.b)("li",{parentName:"ul"},"You can have different databases mounted in different places and CQL\nwon't care; you provide the database connection to the stored procedures when you call them, and that database is assumed to have the tables declared in this translation unit"),Object(o.b)("li",{parentName:"ul"},"Several different schema can be maintained by CQL,\neven in the same database, and they won't know about each other")),Object(o.b)("p",null,"To make this possible there are a few interesting features"),Object(o.b)("h3",{id:"declaring-procedures-defined-elsewhere"},"Declaring Procedures Defined Elsewhere"),Object(o.b)("p",null,"Stored procedures defined in another file can be declared to CQL in various\nways for each major type of stored procedure.  These are covered in\nthe sections below."),Object(o.b)("h3",{id:"simple-procedures-database-free"},"Simple Procedures (database free):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"DECLARE PROCEDURE foo(id integer, out name text not null);\n")),Object(o.b)("p",null,"This introduces the symbol name without providing the body.",Object(o.b)("br",{parentName:"p"}),"\n","This has important variations."),Object(o.b)("h3",{id:"procedures-that-use-the-database"},"Procedures that use the database"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"DECLARE PROCEDURE foo(id integer, out name text not null) USING TRANSACTION;\n")),Object(o.b)("p",null,"Most procedures you write will use SQLite in some fashion,\nmaybe a ",Object(o.b)("inlineCode",{parentName:"p"},"select")," or something.  The ",Object(o.b)("inlineCode",{parentName:"p"},"USING TRANSACTION")," annotation indicates that\nthe proc in question uses the database and therefore the generated code\nwill need a database connection in-argument and it will return a SQLite error code."),Object(o.b)("h3",{id:"procedures-that-create-a-result-set"},"Procedures that create a result set"),Object(o.b)("p",null,"If the procedure in question is going to use ",Object(o.b)("inlineCode",{parentName:"p"},"select")," or ",Object(o.b)("inlineCode",{parentName:"p"},"call")," to create a result set,\nthe type of that result set has to be declared.  An example might look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"DECLARE PROC with_result_set () (id INTEGER NOT NULL, \n                                 name TEXT, \n                                 rate LONG INTEGER, \n                                 type INTEGER, \n                                 size REAL);\n")),Object(o.b)("p",null,"This says that the procedure takes no arguments (other than the implicit database\nconnection) and it has an implicit out-argument that can be read to get a result\nset with the indicated columns: id, name, rate, type, and size.",Object(o.b)("br",{parentName:"p"}),"\n","This form implies ",Object(o.b)("inlineCode",{parentName:"p"},"USING TRANSACTION"),"."),Object(o.b)("h3",{id:"procedures-that-return-a-single-row-with-a-value-cursor"},"Procedures that return a single row with a value cursor"),Object(o.b)("p",null,"If the procedure emits a cursor with the ",Object(o.b)("inlineCode",{parentName:"p"},"OUT")," statement to produce a single\nrow then it can be declared as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"DECLARE PROC with_result_set () OUT (id INTEGER NOT NULL, \n                                     name TEXT, \n                                     rate LONG INTEGER, \n                                     type INTEGER, \n                                     size REAL);\n")),Object(o.b)("p",null,"This form can have ",Object(o.b)("inlineCode",{parentName:"p"},"USING TRANSACTION"),"  or not, since it is possible to emit a row with a value cursor and never use the database.  See the previous chapter for details on the ",Object(o.b)("inlineCode",{parentName:"p"},"OUT")," statement."),Object(o.b)("h3",{id:"procedures-that-return-a-full-result-set"},"Procedures that return a full result set"),Object(o.b)("p",null,"If the procedure emits many rows with the ",Object(o.b)("inlineCode",{parentName:"p"},"OUT UNION")," statement to produce a full result set\nthen it can be declared as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"DECLARE PROC with_result_set () OUT UNION (id INTEGER NOT NULL, \n                                     name TEXT, \n                                     rate LONG INTEGER, \n                                     type INTEGER, \n                                     size REAL);\n")),Object(o.b)("p",null,"This form can have ",Object(o.b)("inlineCode",{parentName:"p"},"USING TRANSACTION"),"  or not, since it is possible to emit a rows with a value cursor and never use the database.  See the previous chapter for details on the ",Object(o.b)("inlineCode",{parentName:"p"},"OUT UNION")," statement."),Object(o.b)("h3",{id:"exporting-declared-symbols-automatically"},"Exporting Declared Symbols Automatically"),Object(o.b)("p",null,"To avoid errors, the declarations for any given file can be automatically created\nby adding something like ",Object(o.b)("inlineCode",{parentName:"p"},"--generate_exports")," to the command line. This will require an additonal file name to be passed in the ",Object(o.b)("inlineCode",{parentName:"p"},"--cg")," portion to capture the exports."),Object(o.b)("p",null,"That file can then be used with ",Object(o.b)("inlineCode",{parentName:"p"},"#include")," when you combine the C pre-processor\nwith CQL as is normally done."),Object(o.b)("p",null,"Nomenclature is perhaps a bit weird here.  You use ",Object(o.b)("inlineCode",{parentName:"p"},"--generate_exports")," to export\nthe stored procedure declarations from the translation units.  Of course those\nexported symbols are what you then import in some other module.  Sometimes this\noutput file is called ",Object(o.b)("inlineCode",{parentName:"p"},"foo_imports.sql")," because those exports are of course exactly\nwhat you need to import ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),".  You can use whatever convention you like of course,\nCQL doesn't care.  The full command line might look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cql --in foo.sql --cg foo.h foo.c foo_imports.sql --generate_exports\n")),Object(o.b)("p",null,"Using the pre-processor you can get declarations from elsewhere with\na directive like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'#include "foo_imports.sql"\n')),Object(o.b)("h3",{id:"declaration-examples"},"Declaration Examples"),Object(o.b)("p",null,"Here are some more examples directly from the CQL test cases; these are all\nauto-generated with ",Object(o.b)("inlineCode",{parentName:"p"},"--generate_exports"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"DECLARE PROC test (i INTEGER NOT NULL);\n\nDECLARE PROC out_test (OUT i INTEGER NOT NULL, OUT ii INTEGER);\n\nDECLARE PROC outparm_test (OUT foo INTEGER NOT NULL) USING TRANSACTION;\n\nDECLARE PROC select_from_view () (id INTEGER NOT NULL, type INTEGER);\n\nDECLARE PROC make_view () USING TRANSACTION;\n\nDECLARE PROC copy_int (a INTEGER, OUT b INTEGER);\n\nDECLARE PROC complex_return () \n  (_bool BOOL NOT NULL, \n   _integer INTEGER NOT NULL, \n   _longint LONG INTEGER NOT NULL, \n   _real REAL NOT NULL, \n   _text TEXT NOT NULL, \n   _nullable_bool BOOL);\n\nDECLARE PROC outint_nullable (\n  OUT output INTEGER, \n  OUT result BOOL NOT NULL)\nUSING TRANSACTION;\n\nDECLARE PROC outint_notnull (\n  OUT output INTEGER NOT NULL, \n  OUT result BOOL NOT NULL)\nUSING TRANSACTION;\n\nDECLARE PROC obj_proc (OUT an_object OBJECT);\n\nDECLARE PROC insert_values (\n  id_ INTEGER NOT NULL,\n  type_ INTEGER)\n  USING TRANSACTION;\n")),Object(o.b)("p",null,"So far we've avoided discussing the generated C code in any details but here\nit seems helpful to show exactly what these declarations correspond to in the\ngenerated C to demystify all this.  There is a very straightforward conversion."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-C"},"void test(cql_int32 i);\n\nvoid out_test(\n  cql_int32 *_Nonnull i, \n  cql_nullable_int32 *_Nonnull ii);\n\ncql_code outparm_test(\n  sqlite3 *_Nonnull _db_, \n  cql_int32 *_Nonnull foo);\n\ncql_code select_from_view_fetch_results(\n  sqlite3 *_Nonnull _db_, \n  select_from_view_result_set_ref _Nullable *_Nonnull result_set);\n\ncql_code make_view(sqlite3 *_Nonnull _db_);\n\nvoid copy_int(cql_nullable_int32 a, cql_nullable_int32 *_Nonnull b);\n\ncql_code complex_return_fetch_results(\n  sqlite3 *_Nonnull _db_, \n  complex_return_result_set_ref _Nullable *_Nonnull result_set);\n\ncql_code outint_nullable(\n  sqlite3 *_Nonnull _db_, \n  cql_nullable_int32 *_Nonnull output, \n  cql_bool *_Nonnull result);\n\ncql_code outint_notnull(\n  sqlite3 *_Nonnull _db_, \n  cql_int32 *_Nonnull output, \n  cql_bool *_Nonnull result);\n\nvoid obj_proc(\n  cql_object_ref _Nullable *_Nonnull an_object);\n\ncql_code insert_values(\n  sqlite3 *_Nonnull _db_, \n  cql_int32 id_, \n  cql_nullable_int32 type_);\n")),Object(o.b)("p",null,"As you can see, these declarations use exactly the normal SQLite\ntypes and so it is very easy to declare a procedure in CQL and then implement it\nyourself in straight C, simply by conforming to the contract."),Object(o.b)("p",null,"Importantly, SQLite does not know anything about CQL stored procedures, or anything at all about CQL\nreally so CQL stored procedure names cannot be used in any way in SQL statements.  CQL\ncontrol flow like the ",Object(o.b)("inlineCode",{parentName:"p"},"call")," statement can be used to invoke other procedures and\nresults can be captured by combing the ",Object(o.b)("inlineCode",{parentName:"p"},"OUT")," statement and a ",Object(o.b)("inlineCode",{parentName:"p"},"DECLARE CURSOR")," construct\nbut SQLite is not involved in those things.  This is another place where the inherent\ntwo-headed nature of CQL leaks out."),Object(o.b)("p",null,"Finally, this is a good place to reinforce that procedures with any of the structured\nresult types (",Object(o.b)("inlineCode",{parentName:"p"},"select"),", ",Object(o.b)("inlineCode",{parentName:"p"},"out"),", ",Object(o.b)("inlineCode",{parentName:"p"},"out union"),") can be used with a suitable cursor."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"create procedure get_stuff()\nbegin\n  select * from stuff;\nend;\n")),Object(o.b)("p",null,"Can be used two interesting ways:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"create procedure meta_stuff(meta bool)\nbegin\n  if meta then\n    call get_stuff();\n  else\n    call get_other_stuff();\n  end if;\nend;\n")),Object(o.b)("p",null,"Assuming that ",Object(o.b)("inlineCode",{parentName:"p"},"get_stuff")," and ",Object(o.b)("inlineCode",{parentName:"p"},"get_other_stuff")," have the same shape, then\nthis procedure simply passes on one or the other's result set unmodified\nas its own return value."),Object(o.b)("p",null,"But you could do more than simply pass on the result."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"create procedure meta_stuff(meta bool)\nbegin\n  declare C cursor for call get_stuff();  -- or get_meta_stuff(...)\n  loop fetch C\n  begin\n     -- do stuff with C\n     -- may be out union some of the rows after adjustment even\n  end;\nend;\n")),Object(o.b)("p",null,"Here we can see that we used the procedure to get the results and then\nprocess them directly somehow."),Object(o.b)("p",null,"And of course the result of an ",Object(o.b)("inlineCode",{parentName:"p"},"OUT")," can similarly be processed using\na value cursor as we previously saw."),Object(o.b)("p",null,"These combinations allow for pretty general composition of stored procedures\nas long as they are not recombined with SQLite statements."))}d.isMDXComponent=!0}}]);