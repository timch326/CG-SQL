"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6653],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(a),m=r,p=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return a?n.createElement(p,l(l({ref:t},d),{},{components:a})):n.createElement(p,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5056:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"ch11",title:"Chapter 11: Previous Schema Validation",sidebar_label:"Chapter 11: Previous Schema Validation"},s=void 0,c={unversionedId:"ch11",id:"ch11",title:"Chapter 11: Previous Schema Validation",description:"\x3c!---",source:"@site/../CQL_Guide/ch11.md",sourceDirName:".",slug:"/ch11",permalink:"/cql-guide/ch11",draft:!1,tags:[],version:"current",lastUpdatedBy:"Vaishnavi Mantha",lastUpdatedAt:1660789478,formattedLastUpdatedAt:"8/18/2022",frontMatter:{id:"ch11",title:"Chapter 11: Previous Schema Validation",sidebar_label:"Chapter 11: Previous Schema Validation"},sidebar:"someSidebar",previous:{title:"Chapter 10: Schema Management Features",permalink:"/cql-guide/ch10"},next:{title:"Chapter 12: Testability Features",permalink:"/cql-guide/ch12"}},d={},u=[{value:"Basic Usage",id:"basic-usage",level:3},{value:"Case 1 : No problemo",id:"case-1--no-problemo",level:4},{value:"Case 2 : table create version changed",id:"case-2--table-create-version-changed",level:4},{value:"Case 3 : table delete version changed",id:"case-3--table-delete-version-changed",level:4},{value:"Case 4 : table not present in new schema",id:"case-4--table-not-present-in-new-schema",level:4},{value:"Case 5 : table is now a view",id:"case-5--table-is-now-a-view",level:4},{value:"Case 6 : table was in base schema, now created",id:"case-6--table-was-in-base-schema-now-created",level:4},{value:"Case 7: table was in base schema, now deleted (ok)",id:"case-7-table-was-in-base-schema-now-deleted-ok",level:4},{value:"Case 8: column name changed",id:"case-8-column-name-changed",level:4},{value:"Case 9 : column type changed",id:"case-9--column-type-changed",level:4},{value:"Case 10 : column attribute changed",id:"case-10--column-attribute-changed",level:4},{value:"Case 11: column version changed for delete",id:"case-11-column-version-changed-for-delete",level:4},{value:"Case 12 : column version changed for create",id:"case-12--column-version-changed-for-create",level:4},{value:"Case 13 : column default value changed",id:"case-13--column-default-value-changed",level:4},{value:"Case 14 : column default value did not change (ok)",id:"case-14--column-default-value-did-not-change-ok",level:4},{value:"Case 15 : create table with additional attribute present and matching (ok)",id:"case-15--create-table-with-additional-attribute-present-and-matching-ok",level:4},{value:"Case 16 : create table with additional attribute (doesn&#39;t match)",id:"case-16--create-table-with-additional-attribute-doesnt-match",level:4},{value:"Case 17 : column removed",id:"case-17--column-removed",level:4},{value:"Case 18 : create table with added facet not present in the previous",id:"case-18--create-table-with-added-facet-not-present-in-the-previous",level:4},{value:"Case 19 : create table with additional column and no <code>@create</code>",id:"case-19--create-table-with-additional-column-and-no-create",level:4},{value:"Case 20 : create table with additional column and `<code>@create</code> (ok)",id:"case-20--create-table-with-additional-column-and-create-ok",level:4},{value:"Case 21 : create table with different flags (like TEMP)",id:"case-21--create-table-with-different-flags-like-temp",level:4},{value:"Case 22 : create table and apply annotation (ok)",id:"case-22--create-table-and-apply-annotation-ok",level:4},{value:"Case 23 : create new table without annotation (error)",id:"case-23--create-new-table-without-annotation-error",level:4},{value:"Case 24 : create new table stale annotation (error)",id:"case-24--create-new-table-stale-annotation-error",level:4},{value:"Case 25 : add columns to table, marked <code>@create</code> and <code>@delete</code>",id:"case-25--add-columns-to-table-marked-create-and-delete",level:4},{value:"Case 26 : add columns to table, marked <code>@create</code> correctly",id:"case-26--add-columns-to-table-marked-create-correctly",level:4},{value:"Case 27 : create table with a create migration proc where there was none",id:"case-27--create-table-with-a-create-migration-proc-where-there-was-none",level:4},{value:"Case 28 : create table with a different create migration proc",id:"case-28--create-table-with-a-different-create-migration-proc",level:4},{value:"Case 29 : create table with a delete migration proc where there was none",id:"case-29--create-table-with-a-delete-migration-proc-where-there-was-none",level:4},{value:"Case 30 : create table with a different delete migration proc",id:"case-30--create-table-with-a-different-delete-migration-proc",level:4},{value:"Case 31 : create a table which was a view in the previous schema",id:"case-31--create-a-table-which-was-a-view-in-the-previous-schema",level:4},{value:"Case 32 : delete a view without marking it deleted",id:"case-32--delete-a-view-without-marking-it-deleted",level:4},{value:"Case 33 : create a new version of this view that is not temp",id:"case-33--create-a-new-version-of-this-view-that-is-not-temp",level:4},{value:"Case 34 : create a new version of this view that was created in a different version",id:"case-34--create-a-new-version-of-this-view-that-was-created-in-a-different-version",level:4},{value:"Case 35 : create an index that is now totally gone in the new schema",id:"case-35--create-an-index-that-is-now-totally-gone-in-the-new-schema",level:4},{value:"Case 36 : create a view with no annotation that is not in the previous schema",id:"case-36--create-a-view-with-no-annotation-that-is-not-in-the-previous-schema",level:4},{value:"Case 37 : index created in different version",id:"case-37--index-created-in-different-version",level:4},{value:"Case 38 : create a new index but with no <code>@create</code> annotation",id:"case-38--create-a-new-index-but-with-no-create-annotation",level:4},{value:"Case 39 : create a table with a column def that has a different create migrator proc",id:"case-39--create-a-table-with-a-column-def-that-has-a-different-create-migrator-proc",level:4},{value:"Case 40 : create a table with a column def that has a different delete migrator proc",id:"case-40--create-a-table-with-a-column-def-that-has-a-different-delete-migrator-proc",level:4}],h={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As we saw in the previous chapter, CQL includes powerful schema management tools for creating automatic\nupgrade scripts for your databases.  However, not all schema alterations are possible after-the-fact\nand so CQL also includes schema comparison tools to help you avoid problems as you version your schema over time."),(0,i.kt)("p",null,"You can compare the previous version of a schema with the current version to do additional checks such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the data type of a column may not change"),(0,i.kt)("li",{parentName:"ul"},"the attributes of a column (e.g. nullable, default value) may not change"),(0,i.kt)("li",{parentName:"ul"},"columns can't be renamed"),(0,i.kt)("li",{parentName:"ul"},"columns can't be removed, only marked delete"),(0,i.kt)("li",{parentName:"ul"},"new columns must be at the end of the table and marked with create"),(0,i.kt)("li",{parentName:"ul"},"created columns have to be created in a schema version >= any that previously existed (no creating columns in the past)"),(0,i.kt)("li",{parentName:"ul"},"nothing other than new columns at the end may be added to a table (e.g. new PK/UK is right out)"),(0,i.kt)("li",{parentName:"ul"},"new tables must be marked create, deleted tables must be marked delete"),(0,i.kt)("li",{parentName:"ul"},"new views must be marked create, deleted views must be marked delete"),(0,i.kt)("li",{parentName:"ul"},"new indices must be marked create, deleted indices must be marked delete"),(0,i.kt)("li",{parentName:"ul"},"an item that was previously a table/view cannot turn into the other one"),(0,i.kt)("li",{parentName:"ul"},"version numbers in the annotations may not ever change"),(0,i.kt)("li",{parentName:"ul"},"if any annotation has a migration proc associated with it, it cannot change to a different proc later"),(0,i.kt)("li",{parentName:"ul"},"created tables, views, indices have to be created in a schema version >= any that previously existed (no creating tables in the past)"),(0,i.kt)("li",{parentName:"ul"},"there may be other checks not mentioned here")),(0,i.kt)("p",null,"When checking ",(0,i.kt)("inlineCode",{parentName:"p"},"@recreate")," tables against the previous schema version for errors, these checks are done:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"suppress checking of any table facet changes in previous schema on recreate tables; you can do anything you want"),(0,i.kt)("li",{parentName:"ul"},"allow new ",(0,i.kt)("inlineCode",{parentName:"li"},"@recreate")," tables to appear with no ",(0,i.kt)("inlineCode",{parentName:"li"},"@create")," needed"),(0,i.kt)("li",{parentName:"ul"},'allow a table to go from "original schema" (no annotation) to ',(0,i.kt)("inlineCode",{parentName:"li"},"@recreate")," but not back"),(0,i.kt)("li",{parentName:"ul"},"allow a table to go from ",(0,i.kt)("inlineCode",{parentName:"li"},"@recreate")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"@create")," at the current schema version"),(0,i.kt)("li",{parentName:"ul"},"allow a table to go from recreate directly to ",(0,i.kt)("inlineCode",{parentName:"li"},"@delete")," at the current schema version"),(0,i.kt)("li",{parentName:"ul"},"do not allow a table to go from ",(0,i.kt)("inlineCode",{parentName:"li"},"@create")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"@delete")," state to ",(0,i.kt)("inlineCode",{parentName:"li"},"@recreate"))),(0,i.kt)("p",null,"All of these are statically checked."),(0,i.kt)("p",null,"To use these tools, you must run CQL in a mode where it has both the proposed and existing schema in its input stream,\nthen it can provide suitable errors if any unsupported change is about to happen."),(0,i.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("p",null,"The normal way that you do previous schema validation is to create an input file that provides both schema."),(0,i.kt)("p",null,"This file may look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- prev_check.sql\ncreate table foo(\n  id integer,\n  new_field text @create(1)\n);\n\n@previous_schema;\n\ncreate table foo(\n  id integer\n);\n")),(0,i.kt)("p",null,"So, here the old version of ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," will be validated against the new version and all is well.  A new nullable text field was added at the end."),(0,i.kt)("p",null,"In practice these comparisons are likely to be done in a somewhat more maintainable way, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'-- prev_check.sql\n#include "table1.sql"\n#include "table2.sql"\n#include "table3.sql"\n\n@previous_schema;\n\n#include "previous.sql"\n')),(0,i.kt)("p",null,"Now importantly, in this configuration, everything that follows the ",(0,i.kt)("inlineCode",{parentName:"p"},"@previous_schema")," directive does not actually contribute to\nthe declared schema.  This means the ",(0,i.kt)("inlineCode",{parentName:"p"},"--rt schema")," result type will not see it.   Because of this, you can do your checking\noperation like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cc -E -x c prev_check.sql | cql --cg new_previous_schema.sql --rt schema\n")),(0,i.kt)("p",null,"The above command will generate the schema in new_previous_schema and, if this command succeeds, it's safe to replace the existing\n",(0,i.kt)("inlineCode",{parentName:"p"},"previous.sql")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"new_previous_schema"),"."),(0,i.kt)("p",null,"NOTE: you can bootstrap the above by leaving off the ",(0,i.kt)("inlineCode",{parentName:"p"},"@previous_schema")," and what follows to get your first previous schema from the command above."),(0,i.kt)("p",null,"Now, as you can imagine, comparing against the previous schema allows many more kinds of errors to be discovered.\nWhat follows is a large chunk of the CQL tests for this area taken from the test files themselves.\nFor easy visibility I have brought each fragment of current and previous schema close to each other\nand I show the errors that are reported.  We start with a valid fragment and go from there."),(0,i.kt)("h4",{id:"case-1--no-problemo"},"Case 1 : No problemo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table foo(\n  id integer not null,\n  rate long int @delete(5, deletor),\n  rate_2 long int @delete(4),\n  id2 integer @create(4),\n  name text @create(5),\n  name_2 text @create(6)\n);\n-------\ncreate table foo(\n  id integer not null,\n  rate long int @delete(5, deletor),\n  rate_2 long int @delete(4),\n  id2 integer @create(4),\n  name text @create(5),\n  name_2 text @create(6)\n);\n")),(0,i.kt)("p",null,"The table ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," is the same!  It doesn't get any easier than that."),(0,i.kt)("h4",{id:"case-2--table-create-version-changed"},"Case 2 : table create version changed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_create_verison_changed(id integer) @create(1);\n-------\ncreate table t_create_verison_changed(id integer) @create(2);\n\nError at sem_test_prev.sql:15 : in str : current create version not equal to\nprevious create version for 't_create_verison_changed'\n")),(0,i.kt)("p",null,"You can't change the version a table was created in.  Here the new schema says it appeared in version 1.  The old schema says 2."),(0,i.kt)("h4",{id:"case-3--table-delete-version-changed"},"Case 3 : table delete version changed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_delete_verison_changed(id integer) @delete(1);\n-------\ncreate table t_delete_verison_changed(id integer) @delete(2);\n\nError at sem_test_prev.sql:18 : in str : current delete version not equal to\nprevious delete version for 't_delete_verison_changed'\n")),(0,i.kt)("p",null,"You can't change the version a table was deleted in.  Here the new schema says it was gone in version 1.  The old schema says 2."),(0,i.kt)("h4",{id:"case-4--table-not-present-in-new-schema"},"Case 4 : table not present in new schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- t_not_present_in_new_schema is gone\n-------\ncreate table t_not_present_in_new_schema(id integer);\n\nError at sem_test_prev.sql:176 : in create_table_stmt : table was present but now it\ndoes not exist (use @delete instead) 't_not_present_in_new_schema'\n")),(0,i.kt)("p",null,"So here ",(0,i.kt)("inlineCode",{parentName:"p"},"t_not_present_in_new_schema")," was removed, it should have been marked with ",(0,i.kt)("inlineCode",{parentName:"p"},"@delete"),".  You don't remove tables."),(0,i.kt)("h4",{id:"case-5--table-is-now-a-view"},"Case 5 : table is now a view"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create view t_became_a_view as select 1 id @create(6);\n-------\ncreate table t_became_a_view(id integer);\n\nError at sem_test_prev.sql:24 : in create_view_stmt : object was a table but is now a\nview 't_became_a_view'\n")),(0,i.kt)("p",null,"Tables can't become views..."),(0,i.kt)("h4",{id:"case-6--table-was-in-base-schema-now-created"},"Case 6 : table was in base schema, now created"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_created_in_wrong_version(id integer) @create(1);\n-------\ncreate table t_created_in_wrong_version(id integer);\n\nError at sem_test_prev.sql:27 : in str : current create version not equal to previous\ncreate version for 't_created_in_wrong_version'\n")),(0,i.kt)("p",null,"Here a version annotation is added after the fact.  This item was already in the base schema."),(0,i.kt)("h4",{id:"case-7-table-was-in-base-schema-now-deleted-ok"},"Case 7: table was in base schema, now deleted (ok)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_was_correctly_deleted(id integer) @delete(1);\n-------\ncreate table t_was_correctly_deleted(id integer);\n")),(0,i.kt)("p",null,"No errors here, just a regular delete."),(0,i.kt)("h4",{id:"case-8-column-name-changed"},"Case 8: column name changed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_column_name_changed(id_ integer);\n-------\ncreate table t_column_name_changed(id integer);\n\nError at sem_test_prev.sql:33 : in str : column name is different between previous and\ncurrent schema 'id_'\n")),(0,i.kt)("p",null,"You can't rename columns.  We could support this but it's a bit of a maintenance nightmare and logical renames are possible easily without doing physical renames."),(0,i.kt)("h4",{id:"case-9--column-type-changed"},"Case 9 : column type changed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_column_type_changed(id real);\n-------\ncreate table t_column_type_changed(id integer);\n\nError at sem_test_prev.sql:36 : in str : column type is different between previous\nand current schema 'id'\n")),(0,i.kt)("p",null,"You can't change the type of a column."),(0,i.kt)("h4",{id:"case-10--column-attribute-changed"},"Case 10 : column attribute changed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_column_attribute_changed(id integer not null);\n-------\ncreate table t_column_attribute_changed(id integer);\n\nError at sem_test_prev.sql:39 : in str : column type is different between previous\nand current schema 'id'\n")),(0,i.kt)("p",null,"Change of column attributes counts as a change of type."),(0,i.kt)("h4",{id:"case-11-column-version-changed-for-delete"},"Case 11: column version changed for delete"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_column_delete_version_changed(id integer, id2 integer @delete(1));\n-------\ncreate table t_column_delete_version_changed(id integer, id2 integer @delete(2));\n\nError at sem_test_prev.sql:42 : in str : column current delete version not equal to\nprevious delete version 'id2'\n")),(0,i.kt)("p",null,"You can't change the delete version after it has been set."),(0,i.kt)("h4",{id:"case-12--column-version-changed-for-create"},"Case 12 : column version changed for create"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_column_create_version_changed(id integer, id2 integer @create(1));\n-------\ncreate table t_column_create_version_changed(id integer, id2 integer @create(2));\n\nError at sem_test_prev.sql:45 : in str : column current create version not equal to\nprevious create version 'id2'\n")),(0,i.kt)("p",null,"You can't change the create version after it has been set."),(0,i.kt)("h4",{id:"case-13--column-default-value-changed"},"Case 13 : column default value changed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_column_default_value_changed(id integer, id2 integer not null default 2);\n-------\ncreate table t_column_default_value_changed(id integer, id2 integer not null default 1);\n\nError at sem_test_prev.sql:48 : in str : column current default value not equal to\nprevious default value 'id2'\n")),(0,i.kt)("p",null,"You can't change the default value after the fact.  There's no alter statement that would allow this even though it does make some logical sense."),(0,i.kt)("h4",{id:"case-14--column-default-value-did-not-change-ok"},"Case 14 : column default value did not change (ok)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_column_default_value_ok(id integer, id2 integer not null default 1);\n-------\ncreate table t_column_default_value_ok(id integer, id2 integer not null default 1);\n")),(0,i.kt)("p",null,"No change. No error here."),(0,i.kt)("h4",{id:"case-15--create-table-with-additional-attribute-present-and-matching-ok"},"Case 15 : create table with additional attribute present and matching (ok)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_additional_attribute_present(a int not null, b int, primary key (a,b));\n-------\ncreate table t_additional_attribute_present(a int not null, b int, primary key (a,b));\n")),(0,i.kt)("p",null,"No change. No error here."),(0,i.kt)("h4",{id:"case-16--create-table-with-additional-attribute-doesnt-match"},"Case 16 : create table with additional attribute (doesn't match)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_additional_attribute_mismatch(a int not null, primary key (a));\n-------\ncreate table t_additional_attribute_mismatch(a int not null, b int, primary key (a,b));\n\nError at sem_test_prev.sql:57 : in pk_def : a table facet is different in the previous\nand current schema\n")),(0,i.kt)("p",null,"This is an error because the additional attribute does not match the previous schema."),(0,i.kt)("h4",{id:"case-17--column-removed"},"Case 17 : column removed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_columns_removed(id integer);\n-------\ncreate table t_columns_removed(id integer, id2 integer);\n\nError at sem_test_prev.sql:255 : in col_def : items have been removed from the table\nrather than marked with @delete 't_columns_removed'\n")),(0,i.kt)("p",null,"You can't remove columns from tables.  You have to mark them with ",(0,i.kt)("inlineCode",{parentName:"p"},"@delete")," instead."),(0,i.kt)("h4",{id:"case-18--create-table-with-added-facet-not-present-in-the-previous"},"Case 18 : create table with added facet not present in the previous"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_attribute_added(a int not null, primary key (a));\n-------\ncreate table t_attribute_added(a int not null);\n\nError at sem_test_prev.sql:63 : in pk_def : table has a facet that is different in the\nprevious and current schema 't_attribute_added'\n")),(0,i.kt)("p",null,"Table facets like primary keys cannot be added after the fact. There is no way to do this in sqlite."),(0,i.kt)("h4",{id:"case-19--create-table-with-additional-column-and-no-create"},"Case 19 : create table with additional column and no ",(0,i.kt)("inlineCode",{parentName:"h4"},"@create")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_additional_column(a int not null, b int);\n-------\ncreate table t_additional_column(a int not null);\n\nError at sem_test_prev.sql:66 : in col_def : table has columns added without marking\nthem @create 't_additional_column'\n")),(0,i.kt)("p",null,"If you add a new column like ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," above you have to mark it with ",(0,i.kt)("inlineCode",{parentName:"p"},"@create")," in a suitable version."),(0,i.kt)("h4",{id:"case-20--create-table-with-additional-column-and-create-ok"},"Case 20 : create table with additional column and `",(0,i.kt)("inlineCode",{parentName:"h4"},"@create")," (ok)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_additional_column_ok(a int not null, b int @create(2), c int @create(6));\n-------\ncreate table t_additional_column_ok(a int not null, b int @create(2));\n")),(0,i.kt)("p",null,"Column properly created.  No errors here."),(0,i.kt)("h4",{id:"case-21--create-table-with-different-flags-like-temp"},"Case 21 : create table with different flags (like TEMP)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create TEMP table t_becomes_temp_table(a int not null, b int);\n-------\ncreate table t_becomes_temp_table(a int not null, b int);\n\nError at sem_test_prev.sql:72 : in create_table_stmt : table create statement attributes\ndifferent than previous version 't_becomes_temp_table'\n")),(0,i.kt)("p",null,"Table became a TEMP table, there is no way to generate an alter statement for that.  Not allowed."),(0,i.kt)("h4",{id:"case-22--create-table-and-apply-annotation-ok"},"Case 22 : create table and apply annotation (ok)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_new_table_ok(a int not null, b int) @create(6);\n-------\n-- no previous version\n")),(0,i.kt)("p",null,"No errors here; this is a properly created new table."),(0,i.kt)("h4",{id:"case-23--create-new-table-without-annotation-error"},"Case 23 : create new table without annotation (error)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_new_table_no_annotation(a int not null, b int);\n-------\n-- no previous version\n\nError at sem_test_prev.sql:85 : in create_table_stmt : new table must be added with\n@create(6) or later 't_new_table_no_annotation'\n")),(0,i.kt)("p",null,"This table was added with no annotation.  It has to have an @create and be at least version 6, the current largest."),(0,i.kt)("h4",{id:"case-24--create-new-table-stale-annotation-error"},"Case 24 : create new table stale annotation (error)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_new_table_stale_annotation(a int not null, b int) @create(2);\n-------\n-- no previous version\n\nError at sem_test_prev.sql:91 : in create_table_stmt : new table must be added with\n@create(6) or later 't_new_table_stale_annotation'\n")),(0,i.kt)("p",null,"The schema is already up to version 6.  You can't then add a table in the past at version 2."),(0,i.kt)("h4",{id:"case-25--add-columns-to-table-marked-create-and-delete"},"Case 25 : add columns to table, marked ",(0,i.kt)("inlineCode",{parentName:"h4"},"@create")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"@delete")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_new_table_create_and_delete(a int not null, b int @create(6) @delete(7));\n-------\ncreate table t_new_table_create_and_delete(a int not null);\n\nError at sem_test_prev.sql:96 : in col_def : table has newly added columns that are\nmarked both @create and @delete 't_new_table_create_and_delete'\n")),(0,i.kt)("p",null,"Adding a column in the new version and marking it both create and delete is ... weird... don't do that.  Technically you can do it (sigh) but it must be done one step at a time."),(0,i.kt)("h4",{id:"case-26--add-columns-to-table-marked-create-correctly"},"Case 26 : add columns to table, marked ",(0,i.kt)("inlineCode",{parentName:"h4"},"@create")," correctly"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_new_legit_column(a int not null, b int @create(6));\n-------\ncreate table t_new_legit_column(a int not null);\n")),(0,i.kt)("p",null,"No errors here; new column added in legit version."),(0,i.kt)("h4",{id:"case-27--create-table-with-a-create-migration-proc-where-there-was-none"},"Case 27 : create table with a create migration proc where there was none"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table with_create_migrator(id integer) @create(1, ACreateMigrator);\n-------\ncreate table with_create_migrator(id integer) @create(1);\n\nError at sem_test_prev.sql:104 : in str : @create procedure changed in object\n'with_create_migrator'\n")),(0,i.kt)("p",null,"You can't add a create migration proc after the fact."),(0,i.kt)("h4",{id:"case-28--create-table-with-a-different-create-migration-proc"},"Case 28 : create table with a different create migration proc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table with_create_migrator(id integer) @create(1, ACreateMigrator);\n-------\ncreate table with_create_migrator(id integer) @create(1, ADifferentCreateMigrator);\n\nError at sem_test_prev.sql:104 : in str : @create procedure changed in object\n'with_create_migrator'\n")),(0,i.kt)("p",null,"You can't change a create migration proc after the fact."),(0,i.kt)("h4",{id:"case-29--create-table-with-a-delete-migration-proc-where-there-was-none"},"Case 29 : create table with a delete migration proc where there was none"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table with_delete_migrator(id integer) @delete(1, ADeleteMigrator);\n-------\ncreate table with_delete_migrator(id integer) @delete(1);\n\nError at sem_test_prev.sql:107 : in str : @delete procedure changed in object\n'with_delete_migrator'\n")),(0,i.kt)("p",null,"You can't add a delete migration proc after the fact."),(0,i.kt)("h4",{id:"case-30--create-table-with-a-different-delete-migration-proc"},"Case 30 : create table with a different delete migration proc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table with_delete_migrator(id integer) @delete(1, ADeleteMigrator);\n-------\ncreate table with_delete_migrator(id integer) @delete(1, ADifferentDeleteMigrator);\n\nError at sem_test_prev.sql:107 : in str : @delete procedure changed in object\n'with_delete_migrator'\n")),(0,i.kt)("p",null,"You can't change a delete migration proc after the fact."),(0,i.kt)("h4",{id:"case-31--create-a-table-which-was-a-view-in-the-previous-schema"},"Case 31 : create a table which was a view in the previous schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table view_becomes_a_table(id int);\n-------\ncreate view view_becomes_a_table as select 1 X;\n\nError at sem_test_prev.sql:110 : in create_table_stmt : object was a view but is now a\ntable 'view_becomes_a_table'\n")),(0,i.kt)("p",null,"Converting views to tables is not allowed."),(0,i.kt)("h4",{id:"case-32--delete-a-view-without-marking-it-deleted"},"Case 32 : delete a view without marking it deleted"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"--- no matching view in current schema\n-------\ncreate view view_was_zomg_deleted as select 1 X;\n\nError at sem_test_prev.sql:333 : in create_view_stmt : view was present but now it does\nnot exist (use @delete instead) 'view_was_zomg_deleted'\n")),(0,i.kt)("p",null,"Here the view was deleted rather than marking it with ",(0,i.kt)("inlineCode",{parentName:"p"},"@delete"),", resulting in an error."),(0,i.kt)("h4",{id:"case-33--create-a-new-version-of-this-view-that-is-not-temp"},"Case 33 : create a new version of this view that is not temp"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create view view_was_temp_but_now_it_is_not as select 1 X;\n-------\ncreate temp view view_was_temp_but_now_it_is_not as select 1 X;\n\nError at sem_test_prev.sql:339 : in create_view_stmt : TEMP property changed in new\nschema for view 'view_was_temp_but_now_it_is_not'\n")),(0,i.kt)("p",null,"A temp view became a view.  This flag is not allowed to change.  Side note: temp views are weird."),(0,i.kt)("h4",{id:"case-34--create-a-new-version-of-this-view-that-was-created-in-a-different-version"},"Case 34 : create a new version of this view that was created in a different version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create view view_with_different_create_version as select 1 X @create(3);\n-------\ncreate view view_with_different_create_version as select 1 X @create(2);\n\nError at sem_test_prev.sql:116 : in str : current create version not equal to previous\ncreate version for 'view_with_different_create_version'\n")),(0,i.kt)("p",null,"You can't change the create version of a view after the fact."),(0,i.kt)("h4",{id:"case-35--create-an-index-that-is-now-totally-gone-in-the-new-schema"},"Case 35 : create an index that is now totally gone in the new schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"--- no matching index in current schema\n-------\ncreate index this_index_was_deleted_with_no_annotation on foo(id);\n\nError at sem_test_prev.sql:349 : in create_index_stmt : index was present but now it\ndoes not exist (use @delete instead) 'this_index_was_deleted_with_no_annotation'\n")),(0,i.kt)("p",null,"You have to use ",(0,i.kt)("inlineCode",{parentName:"p"},"@delete")," on indices to remove them correctly."),(0,i.kt)("h4",{id:"case-36--create-a-view-with-no-annotation-that-is-not-in-the-previous-schema"},"Case 36 : create a view with no annotation that is not in the previous schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create view view_created_with_no_annotation as select 1 X;\n-------\n--- there is no previous version\n\nError at sem_test_prev.sql:122 : in create_view_stmt : new view must be added with\n@create(6) or later 'view_created_with_no_annotation'\n")),(0,i.kt)("p",null,"You have to use ",(0,i.kt)("inlineCode",{parentName:"p"},"@create")," on views to create them correctly."),(0,i.kt)("h4",{id:"case-37--index-created-in-different-version"},"Case 37 : index created in different version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create index this_index_has_a_changed_attribute on foo(id) @create(2);\n-------\ncreate index this_index_has_a_changed_attribute on foo(id) @create(1);\n\nError at sem_test_prev.sql:125 : in str : current create version not equal to previous\ncreate version for 'this_index_has_a_changed_attribute'\n")),(0,i.kt)("p",null,"You can't change the ",(0,i.kt)("inlineCode",{parentName:"p"},"@create")," version of an index."),(0,i.kt)("h4",{id:"case-38--create-a-new-index-but-with-no-create-annotation"},"Case 38 : create a new index but with no ",(0,i.kt)("inlineCode",{parentName:"h4"},"@create")," annotation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create index this_index_was_created_with_no_annotation on foo(id);\n-------\n--- there is no previous version\n\nError at sem_test_prev.sql:130 : in create_index_stmt : new index must be added with\n@create(6) or later 'this_index_was_created_with_no_annotation'\n")),(0,i.kt)("p",null,"You have to use ",(0,i.kt)("inlineCode",{parentName:"p"},"@create")," on indices to make new ones."),(0,i.kt)("h4",{id:"case-39--create-a-table-with-a-column-def-that-has-a-different-create-migrator-proc"},"Case 39 : create a table with a column def that has a different create migrator proc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table create_column_migrate_test(\n id int,\n id2 int @create(2, ChangedColumnCreateMigrator)\n);\n-------\ncreate table create_column_migrate_test(\n id int,\n id2 int @create(2, PreviousColumnCreateMigrator)\n);\n\nError at sem_test_prev.sql:136 : in str : column @create procedure changed 'id2'\n")),(0,i.kt)("p",null,"You can't change the ",(0,i.kt)("inlineCode",{parentName:"p"},"@create")," migration stored proc on columns."),(0,i.kt)("h4",{id:"case-40--create-a-table-with-a-column-def-that-has-a-different-delete-migrator-proc"},"Case 40 : create a table with a column def that has a different delete migrator proc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"create table delete_column_migrate_test(\n id int,\n id2 int @delete(2, ChangedColumnDeleteMigrator)\n);\n-------\ncreate table delete_column_migrate_test(\n id int,\n id2 int @delete(2, PreviousColumnDeleteMigrator)\n);\n\nError at sem_test_prev.sql:142 : in str : column @delete procedure changed 'id2'\n")),(0,i.kt)("p",null,"You can't change the ",(0,i.kt)("inlineCode",{parentName:"p"},"@delete")," migration stored proc on columns."),(0,i.kt)("p",null,"NOTE: in addition to these errors, there are many more that do not require the previous schema which are also checked (not shown here).  These comprise things like making sure the delete version is greater than the create version on any item.  There is a lot of sensibility checking that can happen without reference to the previous schema."))}m.isMDXComponent=!0}}]);