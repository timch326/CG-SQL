"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1071],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,_=h["".concat(i,".").concat(p)]||h[p]||d[p]||o;return n?r.createElement(_,l(l({ref:t},c),{},{components:n})):r.createElement(_,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7301:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],s={id:"ch07",title:"Chapter 7: CQL Result Sets",sidebar_label:"Chapter 7: CQL Result Sets"},i=void 0,u={unversionedId:"ch07",id:"ch07",title:"Chapter 7: CQL Result Sets",description:"\x3c!---",source:"@site/../CQL_Guide/ch07.md",sourceDirName:".",slug:"/ch07",permalink:"/cql-guide/ch07",draft:!1,tags:[],version:"current",lastUpdatedBy:"Justin Rogers",lastUpdatedAt:1670991174,formattedLastUpdatedAt:"Dec 14, 2022",frontMatter:{id:"ch07",title:"Chapter 7: CQL Result Sets",sidebar_label:"Chapter 7: CQL Result Sets"},sidebar:"someSidebar",previous:{title:"Chapter 6: Calling Procedures Defined Elsewhere",permalink:"/cql-guide/ch06"},next:{title:"Chapter 8: Functions",permalink:"/cql-guide/ch08"}},c={},d=[{value:"Results Sets From <code>OUT UNION</code>",id:"results-sets-from-out-union",level:3},{value:"A Working Example",id:"a-working-example",level:3},{value:"Nested Result Sets (Parent/Child)",id:"nested-result-sets-parentchild",level:3},{value:"Cursor Types and Result Types",id:"cursor-types-and-result-types",level:4},{value:"Creating New Cursor Types From Existing Cursor Types",id:"creating-new-cursor-types-from-existing-cursor-types",level:4},{value:"Cursor Arguments",id:"cursor-arguments",level:4},{value:"The Specific Parent/Child Functions",id:"the-specific-parentchild-functions",level:4},{value:"Result Set Sugar",id:"result-set-sugar",level:4},{value:"Result Set Values",id:"result-set-values",level:4},{value:"Generated Code Details",id:"generated-code-details",level:4}],h={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Most of this tutorial is about the CQL language itself but here we must diverge a bit.  The purpose of the\nresult set feature of CQL is to create a C interface to SQLite data.  Because of this\nthere are a lot of essential details that require looking carefully at the generated C code.  Appendix 2\ncovers this code in even more detail but here it makes sense to at least talk about the interface."),(0,o.kt)("p",null,"Let's say we have this simple stored procedure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create table foo(id integer not null, b bool, t text);\n\ncreate proc read_foo(id_ integer not null)\nbegin\n  select * from foo where id = id_;\nend;\n")),(0,o.kt)("p",null,"We've created a simple data reader: this CQL code will cause the compiler to\ngenerate helper functions to read the data and materialize a result set."),(0,o.kt)("p",null,"Let's look at the public interface of that result set now considering the most essential pieces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"/* this is almost everything in the generated header file */\n#define read_foo_data_types_count 3\ncql_result_set_type_decl(\n  read_foo_result_set, \\\n  read_foo_result_set_ref);\n\nextern cql_int32 read_foo_get_id(read_foo_result_set_ref\n  _Nonnull result_set, cql_int32 row);\nextern cql_bool read_foo_get_b_is_null(read_foo_result_set_ref\n  _Nonnull result_set, cql_int32 row);\nextern cql_bool read_foo_get_b_value(read_foo_result_set_ref\n  _Nonnull result_set, cql_int32 row);\nextern cql_string_ref _Nullable read_foo_get_t(\n   read_foo_result_set_ref  _Nonnull result_set,\n   cql_int32 row);\nextern cql_int32 read_foo_result_count(read_foo_result_set_ref\n  _Nonnull result_set);\nextern cql_code read_foo_fetch_results(sqlite3 *_Nonnull _db_,\n  read_foo_result_set_ref _Nullable *_Nonnull result_set,\n  cql_int32 id_);\n#define read_foo_row_hash(result_set, row) \\\n  cql_result_set_get_meta((cql_result_set_ref)(result_set))->\\\n  rowHash((cql_result_set_ref)(result_set), row)\n#define read_foo_row_equal(rs1, row1, rs2, row2) \\\ncql_result_set_get_meta((cql_result_set_ref)(rs1)) \\\n ->rowsEqual( \\\n   (cql_result_set_ref)(rs1),  row1,  \\\n   (cql_result_set_ref)(rs2),  row2)\n")),(0,o.kt)("p",null,"Let's consider some of these individually now"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"cql_result_set_type_decl(\n  read_foo_result_set,\n  read_foo_result_set_ref);\n")),(0,o.kt)("p",null,"This declares the data type for ",(0,o.kt)("inlineCode",{parentName:"p"},"read_foo_result_set")," and the associated object reference ",(0,o.kt)("inlineCode",{parentName:"p"},"read_foo_result_set_ref"),".\nAs it turns out, the underlying data type for all result sets is the same, and only the shape of the data varies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"extern cql_code read_foo_fetch_results(sqlite3 *_Nonnull _db_,\n  read_foo_result_set_ref _Nullable *_Nonnull result_set,\n  cql_int32 id_);\n")),(0,o.kt)("p",null,"The result set fetcher method gives you a ",(0,o.kt)("inlineCode",{parentName:"p"},"read_foo_result_set_ref")," if it succeeds.  It accepts the ",(0,o.kt)("inlineCode",{parentName:"p"},"id_")," argument which it\nwill internally pass along to ",(0,o.kt)("inlineCode",{parentName:"p"},"read_foo(...)"),".  The latter function provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite3_stmt*")," which can then be iterated in the fetcher.\nThis method is the main public entry point for result sets."),(0,o.kt)("p",null,"Once you have a result set, you can read values out of it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"extern cql_int32 read_foo_result_count(read_foo_result_set_ref\n  _Nonnull result_set);\n")),(0,o.kt)("p",null,"That function tells you how many rows are in the result set."),(0,o.kt)("p",null,"For each row you can use any of the row readers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"extern cql_int32 read_foo_get_id(read_foo_result_set_ref\n  _Nonnull result_set, cql_int32 row);\nextern cql_bool read_foo_get_b_is_null(read_foo_result_set_ref\n  _Nonnull result_set, cql_int32 row);\nextern cql_bool read_foo_get_b_value(read_foo_result_set_ref\n  _Nonnull result_set, cql_int32 row);\nextern cql_string_ref _Nullable read_foo_get_t(\n   read_foo_result_set_ref  _Nonnull result_set,\n   cql_int32 row);\n")),(0,o.kt)("p",null,"These let you read the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of a particular row, and get a ",(0,o.kt)("inlineCode",{parentName:"p"},"cql_int32")," or you can read the nullable boolean,\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"read_foo_get_b_is_null")," function first to see if the boolean is null and then ",(0,o.kt)("inlineCode",{parentName:"p"},"read_foo_get_b_value"),"\nto get the value.  Finally the string can be accessed with ",(0,o.kt)("inlineCode",{parentName:"p"},"read_foo_get_t"),".  As you can see, there is a\nsimple naming convention for each of the field readers."),(0,o.kt)("p",null,"Note:  The compiler has runtime arrays that control naming conventions as well as using CamelCasing.  Additional customizations may be created by adding new runtime arrays into the CQL compiler."),(0,o.kt)("p",null,"Finally, also part of the public interface, are these macros:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#define read_foo_row_hash(result_set, row)\n#define read_foo_row_equal(rs1, row1, rs2, row2)\n")),(0,o.kt)("p",null,"These use the CQL runtime to hash a row or compare two rows from identical result\nset types.  Metadata included in the result set allows general purpose code to work for\nevery result set.  Based on configuration, result set copying methods can also\nbe generated.   When you're done with a result set you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"cql_release(...)"),"\nmethod to free the memory."),(0,o.kt)("p",null,"Importantly, all of the rows from the query in the stored procedure are materialized\nimmediately and become part of the result set.  Potentially large amounts of memory can\nbe used if a lot of rows are generated."),(0,o.kt)("p",null,"The code that actually creates the result set starting from the prepared statement is always the same.\nThe essential parts are:"),(0,o.kt)("p",null,"First, a constant array that holds the data types for each column."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"uint8_t read_foo_data_types[read_foo_data_types_count] = {\n  CQL_DATA_TYPE_INT32 | CQL_DATA_TYPE_NOT_NULL, // id\n  CQL_DATA_TYPE_BOOL, // b\n  CQL_DATA_TYPE_STRING, // t\n};\n")),(0,o.kt)("p",null,"All references are stored together at the end of the row, so we only need the count\nof references and the offset of the first one to do operations like ",(0,o.kt)("inlineCode",{parentName:"p"},"cql_retain")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"cql_release"),"\non the row."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#define read_foo_refs_offset cql_offsetof(read_foo_row, t) // count = 1\n")),(0,o.kt)("p",null,"Lastly we need metadata to tell us count of columns and the offset of each column within the row."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"static cql_uint16 read_foo_col_offsets[] = { 3,\n  cql_offsetof(read_foo_row, id),\n  cql_offsetof(read_foo_row, b),\n  cql_offsetof(read_foo_row, t)\n};\n")),(0,o.kt)("p",null,"Using the above we can now write this fetcher"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CQL_WARN_UNUSED cql_code\nread_foo_fetch_results(\n  sqlite3 *_Nonnull _db_,\n  read_foo_result_set_ref _Nullable *_Nonnull result_set,\n  cql_int32 id_)\n{\n  sqlite3_stmt *stmt = NULL;\n  cql_profile_start(CRC_read_foo, &read_foo_perf_index);\n\n  // we call the original procedure, it gives us a prepared statement\n  cql_code rc = read_foo(_db_, &stmt, id_);\n\n  // this is everything you need to know to fetch the result\n  cql_fetch_info info = {\n    .rc = rc,\n    .db = _db_,\n    .stmt = stmt,\n    .data_types = read_foo_data_types,\n    .col_offsets = read_foo_col_offsets,\n    .refs_count = 1,\n    .refs_offset = read_foo_refs_offset,\n    .rowsize = sizeof(read_foo_row),\n    .crc = CRC_read_foo,\n    .perf_index = &read_foo_perf_index,\n  };\n\n  // this function does all the work, it cleans up if .rc is an error code.\n  return cql_fetch_all_results(&info, (cql_result_set_ref *)result_set);\n}\n")),(0,o.kt)("h3",{id:"results-sets-from-out-union"},"Results Sets From ",(0,o.kt)("inlineCode",{parentName:"h3"},"OUT UNION")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"out")," keyword was added for writing procedures that produce a single row result set.  With that, it became possible to make any single row result you wanted, assembling it from whatever sources you needed.  That is an important\ncase as single row results happen frequently and they are comparatively easy to create and pass around using C\nstructures for the backing store.  However, it's not everything; there are also cases where full flexibility is needed\nwhile producing a standard many-row result set.  For this we have ",(0,o.kt)("inlineCode",{parentName:"p"},"out union")," which was discussed fully in Chapter 5.  Here we'll discuss the code generation behind that."),(0,o.kt)("p",null,"Here\u2019s an example from the CQL tests:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'create proc some_integers(start integer not null, stop integer not null)\nbegin\n  declare C cursor like select 1 v, 2 v_squared, "xx" some_text;\n  declare i integer not null;\n  set i := start;\n  while (i < stop)\n  begin\n   fetch C(v, v_squared, junk) from values (i, i*i, printf("%d", i));\n   out union C;\n   set i := i + 1;\n end;\nend;\n')),(0,o.kt)("p",null,"In this example the entire result set is made up out of thin air.  Of course any combination of this computation or data-access is possible, so you can ultimately make any rows you want in any order using SQLite to help you as much or as little as you need."),(0,o.kt)("p",null,"Virtually all the code pieces to do this already exist for normal result sets.  The important parts of the output code look like this in your generated C."),(0,o.kt)("p",null,"We need a buffer to hold the rows we are going to accumulate;  We use ",(0,o.kt)("inlineCode",{parentName:"p"},"cql_bytebuf")," just like the normal fetcher above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"// This bit creates a growable buffer to hold the rows\n// This is how we do all the other result sets, too\ncql_bytebuf _rows_;\ncql_bytebuf_open(&_rows_);\n")),(0,o.kt)("p",null,"We need to be able to copy the cursor into the buffer and retain any internal references"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// This bit is what you get when you "out union" a cursor "C"\n// first we +1 any references in the cursor then we copy its bits\ncql_retain_row(C_);   // a no-op if there is no row in the cursor\nif (C_._has_row_) cql_bytebuf_append(&_rows_, (const void *)&C_, sizeof(C_));\n')),(0,o.kt)("p",null,"Finally, we make the rowset when the procedure exits. If the procedure is returning with no errors the result set is created, otherwise the buffer is released.  The global ",(0,o.kt)("inlineCode",{parentName:"p"},"some_integers_info")," has constants that describe the shape produced by this procedure just like the other cases that produce a result set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cql_results_from_data(_rc_,\n                      &_rows_,\n                      &some_integers_info,\n                      (cql_result_set_ref *)_result_set_);\n")),(0,o.kt)("p",null,"The operations here are basically the same ones that will happen inside of the standard helper\n",(0,o.kt)("inlineCode",{parentName:"p"},"cql_fetch_all_results"),", the difference, of course, is that you write the loop manually and therefore have\nfull control of the rows as they go in to the result set."),(0,o.kt)("p",null,"In short, the overhead is pretty low.  What you\u2019re left with is pretty much the base cost of your algorithm.  The cost here is very similar to what it would be for any other thing that make rows."),(0,o.kt)("p",null,"Of course, if you make a million rows, well, that would burn a lot of memory."),(0,o.kt)("h3",{id:"a-working-example"},"A Working Example"),(0,o.kt)("p",null,"Here's a fairly simple example illustrating some of these concepts including the reading of rowsets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- hello.sql:\n\ncreate proc hello()\nbegin\n\n  create table my_data(\n    pos integer not null primary key,\n    txt text not null\n  );\n\n  insert into my_data values(2, 'World');\n  insert into my_data values(0, 'Hello');\n  insert into my_data values(1, 'There');\n\n  select * from my_data order by pos;\nend;\n")),(0,o.kt)("p",null,"And this main code to open the database and access the procedure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'// main.c\n\n#include <stdlib.h>\n#include <sqlite3.h>\n\n#include "hello.h"\n\nint main(int argc, char **argv)\n{\n  sqlite3 *db;\n  int rc = sqlite3_open(":memory:", &db);\n  if (rc != SQLITE_OK) {\n    exit(1); /* not exactly world class error handling but that isn\'t the point */\n  }\n  hello_result_set_ref result_set;\n  rc = hello_fetch_results(db, &result_set);\n  if (rc != SQLITE_OK) {\n    printf("error: %d\\n", rc);\n    exit(2);\n  }\n\n  cql_int32 result_count = hello_result_count(result_set);\n\n  for(cql_int32 row = 0; row < result_count; row++) {\n    cql_string_ref text = hello_get_txt(result_set, row);\n    cql_alloc_cstr(ctext, text);\n    printf("%d: %s\\n", row, ctext);\n    cql_free_cstr(ctext, text);\n  }\n  cql_result_set_release(result_set);\n\n  sqlite3_close(db);\n}\n')),(0,o.kt)("p",null,"From these pieces you can make a working example like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# ${cgsql} refers to the root directory of the CG-SQL sources\n#\ncql --in hello.sql --cg hello.h hello.c\ncc -o hello -I ${cgsql}/sources main.c hello.c ${cgsql}/sources/cqlrt.c -lsqlite3\n./hello\n")),(0,o.kt)("p",null,"Additional demo code is available in ",(0,o.kt)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/x10"},"Appendix 10"),"."),(0,o.kt)("h3",{id:"nested-result-sets-parentchild"},"Nested Result Sets (Parent/Child)"),(0,o.kt)("p",null,'There are many cases where you might want to nest one result set inside of another one.  In order to\ndo this ecomomically you must be able to run a parent query and a child query and\nthen link the child rows to the parent rows.  One way to do this is of course to run one query for\neach "child" but then you end up with ',(0,o.kt)("inlineCode",{parentName:"p"},"O(n)")," child queries and if there are sub-children it would be\n",(0,o.kt)("inlineCode",{parentName:"p"},"O(n*m)"),' and so forth. What you really want to do here is something more like a join, only without\nthe cross-product part of the join.  Many systems have such features, sometimes they are called\n"chaptered rowsets" but in any case there is a general need for such a thing.'),(0,o.kt)("p",null,"To reasonably support nested results sets the CQL language has to be extended a variety of ways,\nas discussed below."),(0,o.kt)("p",null,"Here are some things that happened along the way that are interesting."),(0,o.kt)("h4",{id:"cursor-types-and-result-types"},"Cursor Types and Result Types"),(0,o.kt)("p",null,"One of the first problems we run into thinking about how a CQL program might express pieces of a rowset\nand turn them into child results is that a program must be able to hash a row, append row data, and\nextract a result set from a key.  These are the essential operations required. In order to do anything\nat all with a child rowset, a program must be able to describe its type. Result sets must appear\nin the type system as well as in the runtime."),(0,o.kt)("p",null,'To address this we use an object type with a special "kind", similar to how boxed statements are handled.\nA result set has a type that looks like this: ',(0,o.kt)("inlineCode",{parentName:"p"},"object <proc_name set>"),".  Here ",(0,o.kt)("inlineCode",{parentName:"p"},"proc_name")," must the the name of a\nprocedure that returns a result set and the object will represent a result set with the corresponding columns in it."),(0,o.kt)("h4",{id:"creating-new-cursor-types-from-existing-cursor-types"},"Creating New Cursor Types From Existing Cursor Types"),(0,o.kt)("p",null,"In addition to creating result set types, the language must be able to express cursors that capture the necessary\nparent/child column. These are rows with all of the parent columns plus additional columns for the child rows\n(note that you can have more than one child result set per parent).  So for instance you might have a list of\npeople, and one child result might be the details of the schools they attended and another could be the details\nof the jobs they worked."),(0,o.kt)("p",null,"To accomplish this kind of shape, the language must be able to describe a new output row is that is the\nsame as the parent but includes columns for the the child results, too. This is done using a cursor\ndeclaration that comes from a typed name list.  An example might be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare C cursor like (id integer, name text);\n")),(0,o.kt)("p",null,"Importantly, such constructs include the ability to reference existing shapes by name. So we might create\na cursor we need like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare result cursor like (like parent_proc, child_result object<child_proc set>);\n")),(0,o.kt)("p",null,"Where the above indicates all the parent columns plus a child result set.  Or more than one child result set if needed."),(0,o.kt)("p",null,'In addition, the language needs a way to conveniently declare a cursor that is only some of the columns of an existing cursor.\nIn particular, nested result sets require us to extract the columns that link the parent and child result sets.  The columns\nwe will "join" on.  To accomplish this the language extends the familiar notion:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare D cursor like C;\n")),(0,o.kt)("p",null,"To the more general form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare pks cursor like C(pk1, pk2);\n")),(0,o.kt)("p",null,"Which chooses just the named fields from ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," and makes a cursor with only those. In this case\nthis primary key fields, ",(0,o.kt)("inlineCode",{parentName:"p"},"pk1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pk2"),".  Additionally, for completeness, we add this form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare vals cursor like C(-pk1, -pk2);\n")),(0,o.kt)("p",null,"To mean the cursor vals should have all the columns of ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," except ",(0,o.kt)("inlineCode",{parentName:"p"},"pk1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pk2"),' i.e. all the "values".'),(0,o.kt)("p",null,"Using any number of intermediate construction steps, and maybe some ",(0,o.kt)("inlineCode",{parentName:"p"},"declare X type ...")," statements,\nany type can be formed from existing shapes by adding and removing columns."),(0,o.kt)("p",null,"Having done the above we can load a cursor that has just the primary keys with the usual form"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"fetch pks from C(like pks);\n")),(0,o.kt)("p",null,"Which says we want to load ",(0,o.kt)("inlineCode",{parentName:"p"},"pks")," from the fields of ",(0,o.kt)("inlineCode",{parentName:"p"},"C"),", but using only the columns of ",(0,o.kt)("inlineCode",{parentName:"p"},"pks"),".  That operation\nis of course going to be an exact type match by construction."),(0,o.kt)("h4",{id:"cursor-arguments"},"Cursor Arguments"),(0,o.kt)("p",null,'In order to express the requisite parent/child join, the language must be able to express operations like\n"hash a cursor" (any cursor) or "store this row into the appropriate partition". The language provides no way\nto write functions that can take any cursor and dynamically do things to it based on type information, but:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we don't need very many of them,"),(0,o.kt)("li",{parentName:"ul"},"it's pretty easy to do that job in C (or lua if lua codegen is being used)")),(0,o.kt)("p",null,"The minimum requirement is that the language must be able to declare a functions that takes a generic cursor argument\nand to call such functions a generic cursor construct that has the necessary shape info.  This form does the job:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare function cursor_hash(C cursor) long not null;\n")),(0,o.kt)("p",null,"And it can be used like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"let hash := cursor_hash(C); -- C is any cursor\n")),(0,o.kt)("p",null,"When such a call is made the C function ",(0,o.kt)("inlineCode",{parentName:"p"},"cursor_hash"),' is passed a so-called "dynamic cursor" pointer which includes:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a pointer to the data for the cursor"),(0,o.kt)("li",{parentName:"ul"},"the count of fields"),(0,o.kt)("li",{parentName:"ul"},"the names of the fields"),(0,o.kt)("li",{parentName:"ul"},"the type/offset of every field in the cursor")),(0,o.kt)("p",null,"With this information you can (e.g.) generically do the hash by applying a hash to each field and then combining\nall of those hashes. This kind of function works on any cursor and all the extra data about the shape that's needed\nto make the call is static, so really the cost of the call stays modest.  Details of the dynamic cursor type are in\n",(0,o.kt)("inlineCode",{parentName:"p"},"cqlrt_common.h")," and there are many example functions now in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cqlrt_common.c")," file."),(0,o.kt)("h4",{id:"the-specific-parentchild-functions"},"The Specific Parent/Child Functions"),(0,o.kt)("p",null,"Three helper functions are used to do the parent/child join, they are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE FUNC cql_partition_create ()\n   CREATE OBJECT<partitioning> NOT NULL;\n\nDECLARE FUNC cql_partition_cursor (\n  part OBJECT<partitioning> NOT NULL,\n  key CURSOR,\n  value CURSOR)\n    BOOL NOT NULL;\n\nDECLARE FUNC cql_extract_partition (\n  part OBJECT<partitioning> NOT NULL,\n  key CURSOR)\n    CREATE OBJECT NOT NULL;\n")),(0,o.kt)("p",null,"The first function makes a new partitioning."),(0,o.kt)("p",null,"The second function hashes the key columns of a cursor (specified by the key argument) and appends\nthe values provided in the second argument into a bucket for that key.  By making a pass over the\nchild rows a procedure can easily create a partitioning with each unique key combo having a buffer of all\nthe matching rows."),(0,o.kt)("p",null,"The third function is used once the partitioning is done.  Given a key again, this time from the parent rows,\na procedure can get the buffer it had accumulated and then make a result set out of it and return that."),(0,o.kt)("p",null,"Note that the third function returns a vanilla object type because it could be returning a result set of\nany shape so a cast is required for correctness."),(0,o.kt)("h4",{id:"result-set-sugar"},"Result Set Sugar"),(0,o.kt)("p",null,"Using the features mentioned above a developer could now join together any kind of complex parent and\nchild combo as needed, but the result would be a lot of error-prone code, To avoid this CQL adds\nlanguage sugar to do such partitionings automatically and type-safely, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"-- parent and child defined elsewhere\ndeclare proc parent(x integer not null) (id integer not null, a integer, b integer);\ndeclare proc child(y integer not null) (id integer not null, u text, v text);\n\n-- join together parent and child using 'id'\n-- example x_, y_ arguments for illustration only\ncreate proc parent_child(x_ integer not null, y_ integer not null)\nbegin\n  out union call parent(x_) join call child(y_) using (id);\nend;\n")),(0,o.kt)("p",null,"The generated code is simple enough, even though there's a good bit of it.\nBut it's a useful exercise to look at it once.  Comments added for clarity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROC parent_child (x_ INTEGER NOT NULL, y_ INTEGER NOT NULL)\nBEGIN\n  DECLARE __result__0 BOOL NOT NULL;\n\n  -- we need a cursor to hold just the key of the child row\n  DECLARE __key__0 CURSOR LIKE child(id);\n\n  -- we need our partitioning object (there could be more than one per function\n  -- so it gets a number, likewise everything else gets a number\n  LET __partition__0 := cql_partition_create();\n\n  -- we invoke the child and then iterate its rows\n  DECLARE __child_cursor__0 CURSOR FOR CALL child(y_);\n  LOOP FETCH __child_cursor__0\n  BEGIN\n    -- we extract just the key fields (id in this case)\n    FETCH __key__0(id) FROM VALUES(__child_cursor__0.id);\n\n    -- we add this child to the partition using its key\n    SET __result__0 := cql_partition_cursor(__partition__0, __key__0, __child_cursor__0);\n  END;\n\n  -- we need a shape for our result, it is the columns of the parent plus the child rowset\n  DECLARE __out_cursor__0 CURSOR LIKE (id INTEGER NOT NULL, a INTEGER, b INTEGER,\n                                       child1 OBJECT<child SET> NOT NULL);\n\n  -- now we call the parent and iterate it\n  DECLARE __parent__0 CURSOR FOR CALL parent(x_);\n  LOOP FETCH __parent__0\n  BEGIN\n    -- we load the key values out of the parent this time, same key fields\n    FETCH __key__0(id) FROM VALUES(__parent__0.id);\n\n    -- now we create a result row using the parent columns and the child result set\n    FETCH __out_cursor__0(id, a, b, child1) FROM VALUES(__parent__0.id, __parent__0.a, __parent__0.b, cql_extract_partition(__partition__0, __key__0));\n\n    -- and then we emit that row\n    OUT UNION __out_cursor__0;\n  END;\nEND;\n")),(0,o.kt)("p",null,"This code iterates the child once and the parent once and only has two database calls,\none for the child and one for the parent.  And this is enough to create parent/child result\nsets for the most common examples."),(0,o.kt)("h4",{id:"result-set-values"},"Result Set Values"),(0,o.kt)("p",null,"While the above is probably the most common case,  a developer might also want to make a procedure call\nfor each parent row to compute the child.  And, more generally, to work with result sets from procedure calls\nother than iterating them with a cursor."),(0,o.kt)("p",null,"The iteration pattern:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare C cursor for call foo(args);\n")),(0,o.kt)("p",null,"is very good if the data is coming from (e.g.) a select statement and we don't want to materialize all\nof the results if we can stream instead.  However, when working with result sets the whole point is to\ncreate materialized results for use elsewhere."),(0,o.kt)("p",null,"Since we can express a result set type with ",(0,o.kt)("inlineCode",{parentName:"p"},"object<proc_name set>")," the language also includes the ability\nto call a procedure that returns a result set and capture that result.  This yields these forms:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare child_result object<child set>;\nset child_result := child(args);\n")),(0,o.kt)("p",null,"or better still:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"let child_result := child(args);\n")),(0,o.kt)("p",null,"And more generally, this examples shows a manual iteration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"declare proc parent(x integer not null) (id integer not null, a integer, b integer);\ndeclare proc child(id integer not null) (id integer not null, u text, v text);\n\ncreate proc parent_child(x_ integer not null, y_ integer not null)\nbegin\n  -- the result is like the parent with an extra column for the child\n  declare result cursor like (like parent, child object<child set>);\n\n  -- call the parent and loop over the results\n  declare P cursor for call parent(x_);\n  loop fetch P\n  begin\n     -- compute the child for each P and then emit it\n     fetch result from values(from P, child(P.id));\n     out union result;\n  end;\nend;\n")),(0,o.kt)("p",null,"After the sugar is applied to expand the types out, the net program is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE PROC parent (x INTEGER NOT NULL) (id INTEGER NOT NULL, a INTEGER, b INTEGER);\nDECLARE PROC child (id INTEGER NOT NULL) (id INTEGER NOT NULL, u TEXT, v TEXT);\n\nCREATE PROC parent_child (x_ INTEGER NOT NULL, y_ INTEGER NOT NULL)\nBEGIN\n  DECLARE result CURSOR LIKE (id INTEGER NOT NULL, a INTEGER, b INTEGER,\n                              child OBJECT<child SET>);\n\n  DECLARE P CURSOR FOR CALL parent(x_);\n  LOOP FETCH P\n  BEGIN\n    FETCH result(id, a, b, child) FROM VALUES(P.id, P.a, P.b, child(P.id));\n    OUT UNION result;\n  END;\nEND;\n")),(0,o.kt)("p",null,"Note the ",(0,o.kt)("inlineCode",{parentName:"p"},"LIKE")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FROM")," forms are make it a lot easier to express this notion\nof just adding one more column to the result. The code for emitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"parent_child"),"\nresult doesn't need to specify the columns of the parent or the columns of the child,\nonly that the parent has at least the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," column. Even that could have been removed."),(0,o.kt)("p",null,"This call could have been used instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"fetch result from values(from P, child(from P like child arguments));\n")),(0,o.kt)("p",null,"That syntax would result in using the columns of P that match the arguments of ",(0,o.kt)("inlineCode",{parentName:"p"},"child")," -- just\n",(0,o.kt)("inlineCode",{parentName:"p"},"P.id")," in this case.  But if there were many such columns the sugar would be easier to understand\nand much less error prone."),(0,o.kt)("h4",{id:"generated-code-details"},"Generated Code Details"),(0,o.kt)("p",null,"Normally all result sets that have an object type in them use a generic object ",(0,o.kt)("inlineCode",{parentName:"p"},"cql_object_ref"),"\nas their C data type. This isn't wrong exactly but it would mean that a cast would be required\nin every use case on the native side, and it's easy to get the cast wrong.  So the result type\nof column getters is adjusted to be a ",(0,o.kt)("inlineCode",{parentName:"p"},"child_result_set_ref")," instead of just ",(0,o.kt)("inlineCode",{parentName:"p"},"cql_object_ref"),"\nwhere ",(0,o.kt)("inlineCode",{parentName:"p"},"child")," is the name of the child procedure."))}p.isMDXComponent=!0}}]);