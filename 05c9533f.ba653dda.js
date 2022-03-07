(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{160:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,f=u["".concat(s,".").concat(b)]||u[b]||p[b]||a;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(160)),s=["components"],i={id:"x10",title:"Appendix 10: CQL Working Example",sidebar_label:"Appendix 10: CQL Working Example"},c={unversionedId:"x10",id:"x10",isDocsHomePage:!1,title:"Appendix 10: CQL Working Example",description:"\x3c!---",source:"@site/../CQL_Guide/x10.md",slug:"/x10",permalink:"/cql-guide/x10",version:"current",lastUpdatedBy:"Rhiannon Hecht",lastUpdatedAt:1646696199,sidebar_label:"Appendix 10: CQL Working Example",sidebar:"someSidebar",previous:{title:"Appendix 9: Using the CQL Amalgam",permalink:"/cql-guide/x9"},next:{title:"Appendix 11: Production Considerations",permalink:"/cql-guide/x11"}},l=[{value:"Build Steps",id:"build-steps",children:[]},{value:"Results",id:"results",children:[]}],d={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,s);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is a working example that shows all of the basic DML statements and the call patterns\nto access them. The code also includes the various helpers you can use to convert C types to\nCQL types."),Object(a.b)("h4",{id:"todosql"},Object(a.b)("inlineCode",{parentName:"h4"},"todo.sql")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-SQL"},"-- This is a simple schema for keeping track of tasks and whether or not they have been completed\n\n-- this serves to both declare the table and create the schema\ncreate proc todo_create_tables()\nbegin\n  create table if not exists tasks(\n    description text not null,\n    done bool default false not null\n  );\nend;\n\n-- adds a new not-done task\ncreate proc todo_add(task TEXT NOT null)\nbegin\n  insert into tasks values(task, false);\nend;\n\n-- gets the tasks in inserted order\ncreate proc todo_tasks()\nbegin\n  select rowid, description, done from tasks order by rowid;\nend;\n\n-- updates a given task by rowid\ncreate proc todo_setdone_(rowid_ integer not null, done_ bool not null)\nbegin\n  update tasks set done = done_ where rowid == rowid_;\nend;\n\n-- deletes a given task by rowid\ncreate proc todo_delete(rowid_ integer not null)\nbegin\n  delete from tasks where rowid == rowid_;\nend;\n")),Object(a.b)("h4",{id:"mainc"},Object(a.b)("inlineCode",{parentName:"h4"},"main.c")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-C"},'#include <stdlib.h>\n#include <sqlite3.h>\n\n#include "todo.h"\n\nint main(int argc, char **argv)\n{\n  /* Note: not exactly world class error handling but that isn\'t the point */\n\n  // create a db\n  sqlite3 *db;\n  int rc = sqlite3_open(":memory:", &db);\n  if (rc != SQLITE_OK) {\n    exit(1);\n  }\n\n  // make schema if needed (in memory databases always begin empty)\n  rc = todo_create_tables(db);\n   if (rc != SQLITE_OK) {\n    exit(2);\n  }\n\n  // add some tasks\n  const char * const default_tasks[] = {\n    "Buy milk",\n    "Walk dog",\n    "Write code"\n  };\n\n  for (int i = 0; i < 3; i++) {\n    // note we make a string reference from a c string here\n    cql_string_ref dtask = cql_string_ref_new(default_tasks[i]);\n    rc = todo_add(db, dtask);\n    cql_string_release(dtask); // and then dispose of the reference\n    if (rc != SQLITE_OK) {\n      exit(3);\n    }\n  }\n\n  // mark a task as done\n  rc = todo_setdone_(db, 1, true);\n  if (rc != SQLITE_OK) {\n    exit(4);\n  }\n\n  // delete a row in the middle, rowid = 2\n  rc = todo_delete(db, 2);\n  if (rc != SQLITE_OK) {\n    exit(5);\n  }\n\n  // select out some results\n  todo_tasks_result_set_ref result_set;\n  rc = todo_tasks_fetch_results(db, &result_set);\n  if (rc != SQLITE_OK) {\n    printf("error: %d\\n", rc);\n    exit(6);\n  }\n\n  // get result count\n  cql_int32 result_count = todo_tasks_result_count(result_set);\n\n  // loop to print\n  for (cql_int32 row = 0; row < result_count; row++) {\n    // note "get" semantics mean that a ref count is not added\n    // if you want to keep the string you must "retain" it\n    cql_string_ref text = todo_tasks_get_description(result_set, row);\n    cql_bool done = todo_tasks_get_done(result_set, row);\n    cql_int32 rowid = todo_tasks_get_rowid(result_set, row);\n\n    // convert to c string format\n    cql_alloc_cstr(ctext, text);\n    printf("%d: rowid:%d %s (%s)\\n",\n      row, rowid, ctext, done ? "done" : "not done");\n    cql_free_cstr(ctext, text);\n  }\n\n  // done with results, free the lot\n  cql_result_set_release(result_set);\n\n  // and close the database\n  sqlite3_close(db);\n}\n')),Object(a.b)("h3",{id:"build-steps"},"Build Steps"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# ${cgsql} refers to the root of the CG/SQL repo\n% cql --in todo.sql --cg todo.h todo.c\n% cc -o todo -I${cqsql}/sources main.c todo.c ${cgsql}/sources/cqlrt.c -lsqlite3\n")),Object(a.b)("h3",{id:"results"},"Results"),Object(a.b)("p",null,"Note that rowid 2 has been deleted, the leading number is the index in\nthe result set. The rowid is of course the database rowid."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"% ./todo\n0: rowid:1 Buy milk (done)\n1: rowid:3 Write code (not done)\n")))}u.isMDXComponent=!0}}]);