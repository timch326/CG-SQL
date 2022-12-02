"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2559],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),p=l,h=c["".concat(i,".").concat(p)]||c[p]||m[p]||r;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4095:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=n(3117),l=n(102),r=(n(7294),n(3905)),s=["components"],o={id:"ch12",title:"Chapter 12: Testability Features",sidebar_label:"Chapter 12: Testability Features"},i=void 0,u={unversionedId:"ch12",id:"ch12",title:"Chapter 12: Testability Features",description:"\x3c!---",source:"@site/../CQL_Guide/ch12.md",sourceDirName:".",slug:"/ch12",permalink:"/cql-guide/ch12",draft:!1,tags:[],version:"current",lastUpdatedBy:"Vaishnavi Mantha",lastUpdatedAt:1669960931,formattedLastUpdatedAt:"Dec 2, 2022",frontMatter:{id:"ch12",title:"Chapter 12: Testability Features",sidebar_label:"Chapter 12: Testability Features"},sidebar:"someSidebar",previous:{title:"Chapter 11: Previous Schema Validation",permalink:"/cql-guide/ch11"},next:{title:"Chapter 13: JSON Output",permalink:"/cql-guide/ch13"}},d={},m=[{value:"Dummy Data",id:"dummy-data",level:3},{value:"Simple Inserts With Dummy Data",id:"simple-inserts-with-dummy-data",level:4},{value:"Using <code>WITH RECURSIVE</code>",id:"using-with-recursive",level:4},{value:"Using Temporary Tables",id:"using-temporary-tables",level:4},{value:"Other Considerations",id:"other-considerations",level:4},{value:"Complex Result Set Example",id:"complex-result-set-example",level:4},{value:"Autotest Attributes",id:"autotest-attributes",level:3},{value:"Temporary Table Pattern",id:"temporary-table-pattern",level:4},{value:"Single Row ResultSet",id:"single-row-resultset",level:4},{value:"Generalized Dummy Test Pattern",id:"generalized-dummy-test-pattern",level:4},{value:"Cross Procedure Limitations",id:"cross-procedure-limitations",level:4}],c={toc:m};function p(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'CQL includes a number of features to make it easier to create what you might call "Test" procedures.  These primarily are concerned with loading up the database with dummy data, and/or validating the result of normal procedures that query the database.  There are several interesting language features in these dimensions.'),(0,r.kt)("h3",{id:"dummy-data"},"Dummy Data"),(0,r.kt)("p",null,"Test code can be needlessly brittle, especially when creating dummy data; any column changes typically cause all sorts of data insertion code to need to be repaired.\nIn many cases the actual data values are completely uninteresting to the test -- any values would do.  There are several strategies you can use to get good dummy data into your database in a more maintainable way."),(0,r.kt)("h4",{id:"simple-inserts-with-dummy-data"},"Simple Inserts With Dummy Data"),(0,r.kt)("p",null,"The simplest form uses a variant of the insert statement that fills in any missing columns with a seed value.  An example might be something like the below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create proc dummy_user()\nbegin\n  insert into users () values () @dummy_seed(123)\n     @dummy_nullables @dummy_defaults;\nend;\n")),(0,r.kt)("p",null,"This statement causes all values including columns that are nullable or have a default value to get the value ",(0,r.kt)("inlineCode",{parentName:"p"},"123")," for any numeric type and\n",(0,r.kt)("inlineCode",{parentName:"p"},"'column_name_123'")," for any text."),(0,r.kt)("p",null,"If you omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"@dummy_nullables")," then any nullable fields will be null as usual.  And likewise if you omit ",(0,r.kt)("inlineCode",{parentName:"p"},"@dummy_defaults")," then any fields with a default value will use that value as usual.  You might want any combination of these for your tests (null values are handy in your tests and default behavior is also handy.)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@dummy_seed")," expression provided can be anything that resolves to a non-null integer value, so it can be pretty flexible.  You might use a ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop to insert a bunch of\nrows with the seed value being computed from the ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop variable."),(0,r.kt)("p",null,"The form above is sort of like ",(0,r.kt)("inlineCode",{parentName:"p"},"insert * into table")," in that it is giving dummy values for all columns but you can also specify some of the columns while using the seed value for others.  Importantly, you can specify values you particularly want to control either for purposes of creating a more tailored test or because you need them\nto match existing or created rows in a table referenced by a foreign key."),(0,r.kt)("p",null,"As an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"insert into users (id) values (1234) @dummy_seed(123)\n   @dummy_nullables @dummy_defaults;\n")),(0,r.kt)("p",null,"will provide dummy values for everything but the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," column."),(0,r.kt)("h4",{id:"using-with-recursive"},"Using ",(0,r.kt)("inlineCode",{parentName:"h4"},"WITH RECURSIVE")),(0,r.kt)("p",null,"Sometimes what you want to do is create a dummy result set without necessarily populating the database at all.  If you have code\nthat consumes a result set of a particular shape, it's easy enough to create a fake result set with a pattern something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'create procedure dummy_stuff(lim integer not null)\nbegin\n  WITH RECURSIVE\n  dummy(x) AS (\n     SELECT 1\n     UNION ALL\n     SELECT x+1 FROM dummy WHERE x < lim)\n  SELECT\n    x id,\n    printf("name_%d", x) name,\n    cast(x % 2 as bool) is_cool,\n    x * 1.3 as rate,\n    x etc1,\n    x etc2\n  FROM dummy;\nend;\n')),(0,r.kt)("p",null,"The first part of the above creates a series of numbers from 1 to ",(0,r.kt)("inlineCode",{parentName:"p"},"lim"),".  The second uses those values to create dummy columns.\nAny result shape can be generated in this fashion."),(0,r.kt)("p",null,"You get data like this from the above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"1|name_1|1|1.3|1|1\n2|name_2|0|2.6|2|2\n3|name_3|1|3.9|3|3\n4|name_4|0|5.2|4|4\n5|name_5|1|6.5|5|5\n6|name_6|0|7.8|6|6\n7|name_7|1|9.1|7|7\n8|name_8|0|10.4|8|8\n9|name_9|1|11.7|9|9\n10|name_10|0|13.0|10|10\n")),(0,r.kt)("p",null,"The result of the select statement is itself quite flexible and if more dummy data is what you wanted, this form can be combined with\n",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT ... FROM SELECT...")," to create dummy data in real tables.   And of course once you have a core query you could use it in a variety of ways,\ncombined with cursors or any other strategy to ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," out pieces and ",(0,r.kt)("inlineCode",{parentName:"p"},"insert")," them into various tables."),(0,r.kt)("h4",{id:"using-temporary-tables"},"Using Temporary Tables"),(0,r.kt)("p",null,"If you need an API to create very flexible dummy data with values of your choice you can use temporary tables and a series of helper procedures."),(0,r.kt)("p",null,"First, create a table to hold the results. You can of course make this table however you need to but the ",(0,r.kt)("inlineCode",{parentName:"p"},"like")," construct in the table creation\nis especially helpful; it creates columns in the table that match the name and type of the named object.  For instance ",(0,r.kt)("inlineCode",{parentName:"p"},"like my_proc")," is shorthand for the column names ands of the shape that ",(0,r.kt)("inlineCode",{parentName:"p"},"my_proc")," returns.  This is perfect for\nemulating the results of ",(0,r.kt)("inlineCode",{parentName:"p"},"my_proc"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create proc begin_dummy()\nbegin\n   drop table if exists my_dummy_data;\n\n   -- the shape of my_dummy_data matches the columns\n   -- returned by proc_I_want_to_emulate\n   create temp table my_dummy_data(\n     like proc_I_want_to_emulate;\n   );\nend;\n")),(0,r.kt)("p",null,"Next, you will need a procedure that accepts and writes a single row to your temp table.  You can of course write this all explicitly but the testing\nsupport features provide more support to make things easier; In this example, arguments  of the procedure will exactly match the output of the procedure we emulating,\none argument for each column the proc returns. The ",(0,r.kt)("inlineCode",{parentName:"p"},"insert")," statement gets its values from the arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create proc add_dummy(like proc_I_want_to_emulate)\nbegin\n   insert into my_dummy_data from arguments;\nend;\n")),(0,r.kt)("p",null,"This allows you to create the necessary helper methods automatically even if the procedure changes over time."),(0,r.kt)("p",null,"Next we need a procedure to get our result set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create proc get_dummy()\nbegin\n  select * from my_dummy_data;\nend;\n")),(0,r.kt)("p",null,"And finally, some cleanup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create proc cleanup_dummy()\nbegin\n   drop table if exists my_dummy_data;\nend;\n")),(0,r.kt)("p",null,"Again the temp table could be combined with ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO ...FROM SELECT...")," to create dummy data in real tables."),(0,r.kt)("h4",{id:"other-considerations"},"Other Considerations"),(0,r.kt)("p",null,"Wrapping your ",(0,r.kt)("inlineCode",{parentName:"p"},"insert")," statements in ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch")," can be very useful if there may be dummy data conflicts.  In test code searching for a new suitable seed is pretty easy.  Alternatively"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"set seed := 1 + (select max(id) from foo);\n")),(0,r.kt)("p",null,"could be very useful.  Many alternatives are also possible."),(0,r.kt)("p",null,"The dummy data features are not suitable for use in production code, only tests.  But the LIKE features are generally useful for creating contract-like behavior in procs and there\nare reasonable uses for them in production code."),(0,r.kt)("h4",{id:"complex-result-set-example"},"Complex Result Set Example"),(0,r.kt)("p",null,"Here's a more complicated example that can be easily rewritten using the sugar features.  This method is designed to\nreturn a single-row result set that can be used to mock a method.  I've replaced the real fields with 'f1, 'f2' etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROCEDURE test_my_subject(\n  f1_ LONG INTEGER NOT NULL,\n  f2_ TEXT NOT NULL,\n  f3_ INTEGER NOT NULL,\n  f4_ LONG INTEGER NOT NULL,\n  f5_ TEXT,\n  f6_ TEXT,\n  f7_ TEXT,\n  f8_ BOOL NOT NULL,\n  f9_ TEXT,\n  f10_ TEXT\n)\nBEGIN\n  DECLARE data_cursor CURSOR LIKE my_subject;\n  FETCH data_cursor()\n        FROM VALUES (f1_, f2_, f3_, f4_, f5_, f6_, f7_, f8_, f9_, f10);\n  OUT data_cursor;\nEND;\n")),(0,r.kt)("p",null,"This can be written much more maintainably as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROCEDURE test_my_subject(like my_subject)\nBEGIN\n  DECLARE C CURSOR LIKE my_subject;\n  FETCH C FROM ARGUMENTS;\n  OUT C;\nEND;\n")),(0,r.kt)("p",null,"Naturally, real columns have much longer names and there are often many more than 10."),(0,r.kt)("h3",{id:"autotest-attributes"},"Autotest Attributes"),(0,r.kt)("p",null,"Some of the patterns described above are so common that CQL offers a mechanism to automatically generate those test procedures."),(0,r.kt)("h4",{id:"temporary-table-pattern"},"Temporary Table Pattern"),(0,r.kt)("p",null,"The attributes dummy_table, dummy_insert, and dummy_select can be used together to create and populate temp tables."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,"To create a dummy row set for ",(0,r.kt)("inlineCode",{parentName:"p"},"sample_proc"),", add the cql:autotest attribute with dummy_table, dummy_insert, and dummy_select values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table foo(\n  id integer not null,\n  name text not null\n);\n\n@attribute(cql:autotest=(dummy_table, dummy_insert, dummy_select))\ncreate proc sample_proc(foo int)\nbegin\n  select * from Foo;\nend;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dummy_table")," generates procedures for creating and dropping a temp table with the same shape as ",(0,r.kt)("inlineCode",{parentName:"p"},"sample_proc"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROC open_sample_proc()\nBEGIN\n  CREATE TEMP TABLE test_sample_proc(LIKE sample_proc);\nEND;\n\nCREATE PROC close_sample_proc()\nBEGIN\n  DROP test_sample_proc;\nEND;\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy_insert")," attribute generates a procedure for inserting into the temp table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROC insert_sample_proc(LIKE sample_proc)\nBEGIN\n  INSERT INTO test_sample_proc FROM ARGUMENTS;\nEND;\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy_select")," attribute generates procedures for selecting from the temp table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROC select_sample_proc()\nBEGIN\n  SELECT * FROM test_sample_proc;\nEND;\n")),(0,r.kt)("p",null,"It's interesting to note that the generated test code does not ever\nneed to mention the exact columns it is emulating because it can always use ",(0,r.kt)("inlineCode",{parentName:"p"},"like"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"from arguments")," in a generic way."),(0,r.kt)("p",null,"When compiled, the above will create C methods that can create, drop, insert, and select from the temp table.  They will have the following signatures:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CQL_WARN_UNUSED cql_code open_sample_proc(\n  sqlite3 *_Nonnull _db_);\n\nCQL_WARN_UNUSED cql_code close_sample_proc(\n  sqlite3 *_Nonnull _db_);\n\nCQL_WARN_UNUSED cql_code insert_sample_proc(\n  sqlite3 *_Nonnull _db_,\n  cql_int32 id_,\n  cql_string_ref _Nonnull name_);\n\nCQL_WARN_UNUSED cql_code select_sample_proc_fetch_results(\n  sqlite3 *_Nonnull _db_,\n  select_sample_proc_result_set_ref _Nullable *_Nonnull result_set);\n")),(0,r.kt)("h4",{id:"single-row-resultset"},"Single Row ResultSet"),(0,r.kt)("p",null,"In some cases, using four APIs to generate fake data can be verbose.\nIn the case that only a single row of data needs to be faked, the dummy_result_set attribute can be more convenient."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@attribute(cql:autotest=(dummy_result_set))\ncreate proc sample_proc()\nbegin\n  select id from Foo;\nend;\n")),(0,r.kt)("p",null,"Will generate the following procedure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROC generate_sample_proc_row(LIKE sample_proc)\nBEGIN\n  DECLARE curs CURSOR LIKE sample_proc;\n  FETCH curs FROM ARGUMENTS;\n  OUT curs;\nEND;\n")),(0,r.kt)("p",null,"Which generates this C API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void generate_sample_proc_row_fetch_results(\n    generate_sample_proc_row_rowset_ref _Nullable *_Nonnull result_set,\n    string_ref _Nonnull foo_,\n    int64_t bar_);\n")),(0,r.kt)("p",null,"These few test helpers are useful in a variety of scenarios and can save you a lot of typing and maintenance.  They evolve automatically as the code\nchanges, always matching the signature of the attributed procedure."),(0,r.kt)("h4",{id:"generalized-dummy-test-pattern"},"Generalized Dummy Test Pattern"),(0,r.kt)("p",null,"The most flexible test helper is the ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy_test")," form.  This is far more advanced than the simple helpers above.  While the choices above were designed to help you create fake result sets pretty easily, ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy_test")," goes much further letting you set up arbitrary schema and data so that you can run your procedure on actual data.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy_test")," code generator uses the features above to do its job and like the other autotest options, it works by automatically generating CQL code from your procedure definition.  However, you get a lot more code in this mode.  It's easiest to study an example so let's begin there."),(0,r.kt)("p",null,"To understand ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy_test")," we'll need a more complete example, so we start with this simple two-table schema with a trigger and some indices. To this we add a very small procedure that we might want to test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"create table foo(\n id integer not null primary key,\n name text\n);\n\ncreate table bar(\n id integer not null primary key references foo(id),\n data text\n);\n\ncreate index foo_index on foo(name);\n\ncreate index bar_index on bar(data);\n\ncreate temp trigger if not exists trigger1\n  before delete on foo\nbegin\n  delete from foo where name = 'this is so bogus';\nend;\n\n@attribute(cql:autotest=(\n  dummy_table,\n  dummy_insert,\n  dummy_select,\n  dummy_result_set,\n  (dummy_test, (bar, (data), ('plugh'))))\n)\ncreate proc the_subject()\nbegin\n  select * from bar;\nend;\n")),(0,r.kt)("p",null,"As you can see, we have two tables, ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),"; the ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," table has a trigger;  both ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," have indices.  This schema is very simple, but of course it could be a lot more complicated, and real cases typically are."),(0,r.kt)("p",null,"The procedure we want to test is creatively called ",(0,r.kt)("inlineCode",{parentName:"p"},"the_subject"),".  It has lots of test attributes on it.  We've already discussed ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy_table"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy_insert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy_select"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy_result_set")," above but as you can see they can be mixed in with ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy_test"),".  Now let's talk about ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy_test"),".  First you'll notice that annotation has additional sub-attributes; the attribute grammar is sufficiently flexible such that, in principle, you could represent an arbitrary LISP program, so the instructions can be very detailed.  In this case, the attribute provides table and column names, as well as sample data.  We'll discuss that when we get to the population code."),(0,r.kt)("p",null,"First let's dispense with the attributes we already discussed -- since we had all the attributes, the output will include those helpers, too.  Here they are again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- note that the code does not actually call the test subject\n-- this declaration is used so that CQL will know the shape of the result\nDECLARE PROC the_subject () (id INTEGER NOT NULL, data TEXT);\n\nCREATE PROC open_the_subject()\nBEGIN\n  CREATE TEMP TABLE test_the_subject(LIKE the_subject);\nEND;\n\nCREATE PROC close_the_subject()\nBEGIN\n  DROP TABLE test_the_subject;\nEND;\n\nCREATE PROC insert_the_subject(LIKE the_subject)\nBEGIN\n  INSERT INTO test_the_subject FROM ARGUMENTS;\nEND;\n\nCREATE PROC select_the_subject()\nBEGIN\n  SELECT * FROM test_the_subject;\nEND;\n\nCREATE PROC generate_the_subject_row(LIKE the_subject)\nBEGIN\n  DECLARE curs CURSOR LIKE the_subject;\n  FETCH curs FROM ARGUMENTS;\n  OUT curs;\nEND;\n")),(0,r.kt)("p",null,"That covers what we had before, so, what's new?  Actually, quite a bit.  We'll begin with the easiest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROC test_the_subject_create_tables()\nBEGIN\n  CREATE TABLE IF NOT EXISTS foo(\n    id INTEGER NOT NULL PRIMARY KEY,\n    name TEXT\n  );\n  CREATE TABLE IF NOT EXISTS bar(\n    id INTEGER NOT NULL PRIMARY KEY REFERENCES foo (id),\n    data TEXT\n  );\nEND;\n")),(0,r.kt)("p",null,"Probably the most important of all the helpers, ",(0,r.kt)("inlineCode",{parentName:"p"},"test_the_subject_create_tables")," will create all the tables you need to run the procedure.  Note that in this case, even though the subject code only references ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),", CQL determined that ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," is also needed because of the foreign key."),(0,r.kt)("p",null,"The symmetric drop procedure is also generated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROC test_the_subject_drop_tables()\nBEGIN\n  DROP TABLE IF EXISTS bar;\n  DROP TABLE IF EXISTS foo;\nEND;\n")),(0,r.kt)("p",null,"Additionally, in this case there were triggers and indices.  This caused the creation of helpers for those aspects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROC test_the_subject_create_indexes()\nBEGIN\n  CREATE INDEX bar_index ON bar (data);\n  CREATE INDEX foo_index ON foo (name);\nEND;\n\nCREATE PROC test_the_subject_create_triggers()\nBEGIN\n  CREATE TEMP TRIGGER IF NOT EXISTS trigger1\n    BEFORE DELETE ON foo\n  BEGIN\n  DELETE FROM foo WHERE name = 'this is so bogus';\n  END;\nEND;\n\nCREATE PROC test_the_subject_drop_indexes()\nBEGIN\n  DROP INDEX IF EXISTS bar_index;\n  DROP INDEX IF EXISTS foo_index;\nEND;\n\nCREATE PROC test_the_subject_drop_triggers()\nBEGIN\n  DROP TRIGGER IF EXISTS trigger1;\nEND;\n")),(0,r.kt)("p",null,"If there are no triggers or indices, the corresponding create/drop methods will not be generated."),(0,r.kt)("p",null,"With these helpers available, when writing test code you can then choose if you want to create just the tables, or the tables and indices, or tables and indices and triggers by invoking the appropriate combination of helper methods.  Since all the implicated triggers and indices are automatically included, even if they change over time, maintenance is greatly simplified."),(0,r.kt)("p",null,"Note that in this case the code simply reads from one of the tables, but in general the procedure under test might make modifications as well.  Test code frequently has to read back the contents of the tables to verify that they were modified correctly.  So these additional helper methods are also included:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROC test_the_subject_read_foo()\nBEGIN\n SELECT * FROM foo;\nEND;\n\nCREATE PROC test_the_subject_read_bar()\nBEGIN\n SELECT * FROM bar;\nEND;\n")),(0,r.kt)("p",null,"These procedures will allow you to easily create result sets with data from the relevant tables which can then be verified for correctness.  Of course if more tables were implicated, those would have been included as well."),(0,r.kt)("p",null,"As you can see, the naming always follows the convention ",(0,r.kt)("inlineCode",{parentName:"p"},"test_[YOUR_PROCEDURE]_[helper_type]")),(0,r.kt)("p",null,"Finally, the most complicated helper is the one that used that large annotation.  Recall that we provided the fragment ",(0,r.kt)("inlineCode",{parentName:"p"},"(dummy_test, (bar, (data), ('plugh'))))")," to the compiler.  This fragment helped to produce this last helper function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE PROC test_the_subject_populate_tables()\nBEGIN\n  INSERT OR IGNORE INTO foo(id) VALUES(1) @dummy_seed(123);\n\n  INSERT OR IGNORE INTO foo(id) VALUES(2) @dummy_seed(124)\n      @dummy_nullables @dummy_defaults;\n\nINSERT OR IGNORE INTO bar(data, id) VALUES('plugh', 1) @dummy_seed(125);\n\n  INSERT OR IGNORE INTO bar(id) VALUES(2) @dummy_seed(126)\n     @dummy_nullables @dummy_defaults;\nEND;\n")),(0,r.kt)("p",null,"In general the ",(0,r.kt)("inlineCode",{parentName:"p"},"populate_tables")," helper will fill all implicated tables with at least two rows of data.  It uses the dummy data features discussed earlier to generate the items using a seed.  Recall that if ",(0,r.kt)("inlineCode",{parentName:"p"},"@dummy_seed")," is present in an ",(0,r.kt)("inlineCode",{parentName:"p"},"insert")," statement then any missing columns are generated using that value, either as a string, or as an integer (or true/false for a boolean).   Note that the second of the two rows that is generated also specifies ",(0,r.kt)("inlineCode",{parentName:"p"},"@dummy_nullables")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@dummy_defaults"),".  This means that even nullable columns, and columns with a default value will get the non-null seed instead.  So you get a mix of null/default/explicit values loaded into your tables."),(0,r.kt)("p",null,"Of course blindly inserting data doesn't quite work.  As you can see, the insert code used the foreign key references in the schema to figure out the necessary insert order and the primary key values for ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," were automatically specified so that they could then be used again in ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),"."),(0,r.kt)("p",null,"Lastly, the autotest attribute included explicit test values for the table ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),", and  in particular the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," column has the value ",(0,r.kt)("inlineCode",{parentName:"p"},"'plugh'"),".  So the first row of data for table ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," did not use dummy data for the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," column but rather used ",(0,r.kt)("inlineCode",{parentName:"p"},"'plugh'"),"."),(0,r.kt)("p",null,"In general, the ",(0,r.kt)("inlineCode",{parentName:"p"},"dummy_test")," annotation can include any number of tables, and for each table you can specify any of the columns and you can have any number of tuples of values for those columns."),(0,r.kt)("p",null,"NOTE: if you include primary key and/or foreign key columns among the explicit values, it's up to you to ensure that they are valid combinations.  SQLite will complain as usual if they are not, but the CQL compiler will simply emit the data you asked for."),(0,r.kt)("p",null,"Generalizing the example a little bit, we could use the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(dummy_test, (foo, (name), ('fred'), ('barney'), ('wilma'), ('betty')),\n                        (bar, (id, data), (1, 'dino'), (2, 'hopparoo'))))\n")),(0,r.kt)("p",null,"to generate this population:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE PROC test_the_subject_populate_tables()\nBEGIN\n  INSERT OR IGNORE INTO foo(name, id) VALUES('fred', 1) @dummy_seed(123);\n\n  INSERT OR IGNORE INTO foo(name, id) VALUES('barney', 2) @dummy_seed(124)\n    @dummy_nullables @dummy_defaults;\n\n  INSERT OR IGNORE INTO foo(name, id) VALUES('wilma', 3) @dummy_seed(125);\n\n  INSERT OR IGNORE INTO foo(name, id) VALUES('betty', 4) @dummy_seed(126)\n    @dummy_nullables @dummy_defaults;\n\n  INSERT OR IGNORE INTO bar(id, data) VALUES(1, 'dino') @dummy_seed(127);\n\n  INSERT OR IGNORE INTO bar(id, data) VALUES(2, 'hopparoo') @dummy_seed(128)\n    @dummy_nullables @dummy_defaults;\nEND;\n")),(0,r.kt)("p",null,"And of course if the annotation is not flexible enough, you can write your own data population."),(0,r.kt)("p",null,"The CQL above results in the usual C signatures.  For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"CQL_WARN_UNUSED cql_code test_the_subject_populate_tables(sqlite3 *_Nonnull _db_);\n")),(0,r.kt)("p",null,"So, it's fairly easy to call from C/C++ test code or from CQL test code."),(0,r.kt)("h4",{id:"cross-procedure-limitations"},"Cross Procedure Limitations"),(0,r.kt)("p",null,"Generally it's not possible to compute table usages that come from called procedures. This is\nbecause to do so you need to see the body of the called procedure and typically that body is in a different\ntranslation -- and is therefore not available.  A common workaround for this particular problem is to create\na dummy procedure that explicitly uses all of the desired tables.  This is significantly easier than creating all\nthe schema manually and still gets you triggers and indices automatically.  Something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@attribute(cql:autotest=(dummy_test))\ncreate proc use_my_stuff()\nbegin\n  let x := select 1 from t1, t2, t3, t4, t5, t6, etc..;\nend;\n")),(0,r.kt)("p",null,"The above can be be done as a macro if desired.  But in any case ",(0,r.kt)("inlineCode",{parentName:"p"},"use_my_stuff")," simply and directly lists the desired tables.\nUsing this approach you can have one set of test helpers for an entire unit rather than one per procedure.  This\nis often desirable and the maintenance is not too bad.  You just use the ",(0,r.kt)("inlineCode",{parentName:"p"},"use_my_stuff")," test helpers everywhere."))}p.isMDXComponent=!0}}]);