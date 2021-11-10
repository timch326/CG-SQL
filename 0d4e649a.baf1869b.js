(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?i.a.createElement(m,r(r({ref:t},s),{},{components:n})):i.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),o=(n(0),n(148)),l=["components"],r={id:"x8",title:"Appendix 8: CQL Best Practices",sidebar_label:"Appendix 8: CQL Best Practices"},c={unversionedId:"x8",id:"x8",isDocsHomePage:!1,title:"Appendix 8: CQL Best Practices",description:"\x3c!---",source:"@site/../CQL_Guide/x8.md",slug:"/x8",permalink:"/cql-guide/x8",version:"current",lastUpdatedBy:"Jiawei Lv",lastUpdatedAt:1636522266,sidebar_label:"Appendix 8: CQL Best Practices",sidebar:"someSidebar",previous:{title:"Appendix 7: CQL Anti-patterns",permalink:"/cql-guide/x7"},next:{title:"Appendix 9: Using the CQL Amalgam",permalink:"/cql-guide/x9"}},s=[{value:"Data Definition Language (DDL)",id:"data-definition-language-ddl",children:[]},{value:"Ad Hoc Migrations",id:"ad-hoc-migrations",children:[]},{value:"Transactions",id:"transactions",children:[]},{value:"Savepoints",id:"savepoints",children:[]},{value:"Compilation options",id:"compilation-options",children:[]},{value:"Previous Schema",id:"previous-schema",children:[]},{value:"Schema Regions",id:"schema-regions",children:[]},{value:"Schema Version",id:"schema-version",children:[]},{value:"C Text Echo",id:"c-text-echo",children:[]},{value:"Enumerations",id:"enumerations",children:[]},{value:"Cursor Lifetime",id:"cursor-lifetime",children:[]},{value:"Procedure Calls and Exceptions",id:"procedure-calls-and-exceptions",children:[]},{value:"Control Flow with &quot;Big Moves&quot;",id:"control-flow-with-big-moves",children:[]},{value:"Getting access to external code",id:"getting-access-to-external-code",children:[]},{value:"Regular Data Manipulation Language (DML)",id:"regular-data-manipulation-language-dml",children:[]},{value:"Variable and Cursor declarations",id:"variable-and-cursor-declarations",children:[]},{value:"Query Plans",id:"query-plans",children:[]},{value:"Fetching Data from a Cursor or from Loose Data",id:"fetching-data-from-a-cursor-or-from-loose-data",children:[]},{value:"Control Flow",id:"control-flow",children:[]},{value:"Manual Control of Results",id:"manual-control-of-results",children:[]}],b={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is a brief discussion of every statement type and some general best practices for that statement.\nThe statements are in mostly alphabetical order except related statements were moved up in the order\nto make logical groups."),Object(o.b)("p",null,"Refer also to Appendix 7: CQL Anti-patterns."),Object(o.b)("h3",{id:"data-definition-language-ddl"},"Data Definition Language (DDL)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ALTER TABLE ADD COLUMN")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CREATE INDEX")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CREATE PROC")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CREATE TABLE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CREATE TRIGGER")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CREATE VIEW")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CREATE VIRTUAL TABLE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DROP INDEX")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DROP TABLE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DROP TRIGGER")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DROP VIEW"))),Object(o.b)("p",null,"These statements almost never appear in normal procedures and generally should be avoided.  The normal way of handling schema in CQL\nis to have one or more files declare all the schema you need and then let CQL create a schema upgrader for you.  This means you'll\nnever manually drop tables or indices etc.  The ",Object(o.b)("inlineCode",{parentName:"p"},"create")," declarations with their annotations will totally drive the schema."),Object(o.b)("p",null,"Any ad hoc DDL is usually a very bad sign."),Object(o.b)("h3",{id:"ad-hoc-migrations"},"Ad Hoc Migrations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@SCHEMA_AD_HOC_MIGRATION"))),Object(o.b)("p",null,"This is a special upgrade step that should be taken at the version indicated in the statement.  These can be quite complex and even super important\nbut should not be used lightly.  Any migration procedure has to be highly tolerant of a variety of incoming schema versions and previous partial successes.\nIn any case this directive should not appear in normal code.  It should be part of the schema DDL declarations."),Object(o.b)("h3",{id:"transactions"},"Transactions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BEGIN TRANSACTION")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"COMMIT TRANSACTION")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ROLLBACK TRANSACTION"))),Object(o.b)("p",null,'Transactions do not nest and most procedures do not know the context in which they will be called, so the vast majority of\nprocedures will not and should not actually start transactions.  You can only do this if you know, somehow, for sure, that\nthe procedure in question is somehow a "top level" procedure.  So generally, don\'t use these statements.'),Object(o.b)("h3",{id:"savepoints"},"Savepoints"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SAVEPOINT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ROLLBACK TO SAVEPOINT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"RELEASE SAVEPOINT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PROC SAVEPOINT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"COMMIT RETURN")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ROLLBACK RETURN"))),Object(o.b)("p",null,"Savepoints are the preferred tool for having interim state that can be rolled back if needed.  You can use ad hoc\nsavepoints, just give your save point and name then use ",Object(o.b)("inlineCode",{parentName:"p"},"RELEASE SAVEPOINT")," to commit it, or else ",Object(o.b)("inlineCode",{parentName:"p"},"ROLLBACK TO SAVEPOINT"),"\nfollowed by a ",Object(o.b)("inlineCode",{parentName:"p"},"RELEASE")," to abort it.  Note that you always ",Object(o.b)("inlineCode",{parentName:"p"},"RELEASE")," savepoints in both the rollback and the commit case."),Object(o.b)("p",null,"Managing savepoints can be tricky, especially given the various error cases.  They combine nicely with ",Object(o.b)("inlineCode",{parentName:"p"},"TRY CATCH")," to do\nthis job.  However, even that is a lot of boilerplate.  The best way to use savepoints is with ",Object(o.b)("inlineCode",{parentName:"p"},"PROC SAVEPOINT BEGIN")," .. ",Object(o.b)("inlineCode",{parentName:"p"},"END"),";"),Object(o.b)("p",null,"When you use ",Object(o.b)("inlineCode",{parentName:"p"},"PROC SAVEPOINT"),", a savepoint is created for you with the name of your procedure.  When the block exits\nthe savepoint is released (committed).  However you also get an automatically generated try/catch block which will\nrollback the savepoint if anything inside the block were to invoke ",Object(o.b)("inlineCode",{parentName:"p"},"THROW"),".  Also, you may not use a regular ",Object(o.b)("inlineCode",{parentName:"p"},"RETURN"),"\ninside this block, you must use either ",Object(o.b)("inlineCode",{parentName:"p"},"ROLLBACK RETURN")," or ",Object(o.b)("inlineCode",{parentName:"p"},"COMMIT RETURN"),".  Both of these directly indicate the fate\nof the automatically generated statement when they run.  This gives you useful options to early-out (with no error)\nwhile keeping or abandoning any work in progress.  Of course you can use ",Object(o.b)("inlineCode",{parentName:"p"},"THROW")," to return an error and\nabandon the work in progress."),Object(o.b)("h3",{id:"compilation-options"},"Compilation options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@ENFORCE_NORMAL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@ENFORCE_POP")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@ENFORCE_PUSH")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@ENFORCE_RESET")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@ENFORCE_STRICT"))),Object(o.b)("p",null,'CQL allows you to specify a number of useful options such as "do not allow Window Functions" or "all foreign keys must choose some update or delete strategy".\nThese additional enforcements are designed to prevent errors.  Because of this they should be established once, somewhere central and they should be rarely\nif ever overridden.  For instance ',Object(o.b)("inlineCode",{parentName:"p"},"@ENFORCE_NORMAL WINDOW FUNCTION")," would allow you to use window functions again, but this is probably a bad idea. If\nstrict mode is on, disallowing them, that probably means your project is expected to target versions of SQLite that do not have window functions.  Overriding\nthat setting is likely to lead to runtime errors."),Object(o.b)("p",null,"In general you don't want to see these options in most code."),Object(o.b)("h3",{id:"previous-schema"},"Previous Schema"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@PREVIOUS_SCHEMA"))),Object(o.b)("p",null,"CQL can ensure that the current schema is compatible with the previous schema, meaning that an upgrade script could reasonably be generated to go from the\nprevious to the current.  This directive demarks the start of the previous schema section when that validation happens.  This directive is useless except\nfor creating that schema validation so it should never appear in normal procedures."),Object(o.b)("h3",{id:"schema-regions"},"Schema Regions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@BEGIN_SCHEMA_REGION")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@DECLARE_DEPLOYABLE_REGION")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@DECLARE_SCHEMA_REGION")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@END_SCHEMA_REGION"))),Object(o.b)("p",null,"CQL allows you to declare arbitrary schema regions and limit what parts of the schema any given region may consume.  This helps you to prevent schema from getting\nentangled.  There is never a reason to use this directives inside normal procedures;  They should appear only in your schema declaration files."),Object(o.b)("h3",{id:"schema-version"},"Schema Version"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@SCHEMA_UPGRADE_SCRIPT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@SCHEMA_UPGRADE_VERSION"))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@SCHEMA_UPGRADE_SCRIPT")," directive is only used by CQL itself to declare that the incoming file is an autogenerated schema upgrade script.\nThese scripts have slightly different rules for schema declaration that are not useful outside of such scripts.  So you should never use this."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"@SCHEMA_UPGRADE_VERSION")," on the other hand is used if you are creating a manual migration script.  You need this script to run in the context\nof the schema version that it affects.  Use this directive at the start of the file to do so.  Generally manual migration scripts are to be\navoided so hopefully this directive is rarely if ever used."),Object(o.b)("h3",{id:"c-text-echo"},"C Text Echo"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@ECHO"))),Object(o.b)("p",null,"This directive emits plain text directly into the compiler's output stream.  It can be invaluable for adding new runtime features and for ensuring that\n(e.g.) additional ",Object(o.b)("inlineCode",{parentName:"p"},"#include")," or ",Object(o.b)("inlineCode",{parentName:"p"},"#define")," directives are present in the output but you can really break things by over-using this feature.  Most parts\nof the CQL output are subject to change so any use of this should be super clean.  The intended use was, as mentioned, to allow an extra ",Object(o.b)("inlineCode",{parentName:"p"},"#include")," in your code\nso that CQL could call into some library.  Most uses of this combine with ",Object(o.b)("inlineCode",{parentName:"p"},"DECLARE FUNCTION")," or ",Object(o.b)("inlineCode",{parentName:"p"},"DECLARE PROCEDURE")," to declare an external entity."),Object(o.b)("h3",{id:"enumerations"},"Enumerations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DECLARE ENUM")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@EMIT_ENUMS"))),Object(o.b)("p",null,"Avoid embedded constants whenever possible.  Instead declare a suitable enumeration.   Use ",Object(o.b)("inlineCode",{parentName:"p"},"@EMIT_ENUMS Some_Enum")," to get the enumeration\nconstants into the generated .h file for C. But be sure to do this only from one compiland.  You do not want the enumerations in every .h file.\nChoose a single .sql file (not included by lots of other things) to place the ",Object(o.b)("inlineCode",{parentName:"p"},"@EMIT_ENUMS")," directive. You can make a file specifically for this\npurpose if nothing else is serviceable."),Object(o.b)("h3",{id:"cursor-lifetime"},"Cursor Lifetime"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CLOSE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"OPEN"))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"OPEN")," statement is a no-op, SQLite has no such notion.  It was included because it is present in ",Object(o.b)("inlineCode",{parentName:"p"},"MYSQL")," and other variants and its inclusion can\neasy readability sometimes.  But it does nothing.   The ",Object(o.b)("inlineCode",{parentName:"p"},"CLOSE")," statement is normally not necessary because all cursors are closed at the end of the\nprocedure they are declared in (unless they are boxed, see below).  You only need ",Object(o.b)("inlineCode",{parentName:"p"},"CLOSE"),' if you want to close a global cursor (which has no scope)\nor if you want to close a local cursor "sooner" because waiting to the end of the procedure might be a very long time.  Using close more than once\nis safe, the second and later close operations do nothing.'),Object(o.b)("h3",{id:"procedure-calls-and-exceptions"},"Procedure Calls and Exceptions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CALL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"THROW")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TRY CATCH"))),Object(o.b)("p",null,"Remember that if you call a procedure and it uses ",Object(o.b)("inlineCode",{parentName:"p"},"THROW")," or else uses some SQL that failed, this return code will cause your\ncode to ",Object(o.b)("inlineCode",{parentName:"p"},"THROW")," when the procedure returns.  Normally that's exactly what you want, the error will ripple out and some top-level\n",Object(o.b)("inlineCode",{parentName:"p"},"CATCH")," will cause a ",Object(o.b)("inlineCode",{parentName:"p"},"ROLLBACK")," and the top level callers sees the error.  If you have your own rollback needs be sure to install\nyour own ",Object(o.b)("inlineCode",{parentName:"p"},"TRY"),"/",Object(o.b)("inlineCode",{parentName:"p"},"CATCH")," block or else use ",Object(o.b)("inlineCode",{parentName:"p"},"PROC SAVEPOINT")," as above to do it for you."),Object(o.b)("p",null,"Inside of a ",Object(o.b)("inlineCode",{parentName:"p"},"CATCH")," block you can use the special variable ",Object(o.b)("inlineCode",{parentName:"p"},"@RC")," to see the most recent return code from SQLite."),Object(o.b)("h3",{id:"control-flow-with-big-moves"},'Control Flow with "Big Moves"'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CONTINUE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LEAVE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"RETURN"))),Object(o.b)("p",null,"These work as usual but beware, you can easily use any of these to accidentally leave a block with a savepoint or transaction\nand you might skip over the ",Object(o.b)("inlineCode",{parentName:"p"},"ROLLBACK")," or ",Object(o.b)("inlineCode",{parentName:"p"},"COMMIT")," portions of the logic.  Avoid this problem by using ",Object(o.b)("inlineCode",{parentName:"p"},"PROC SAVEPOINT"),"."),Object(o.b)("h3",{id:"getting-access-to-external-code"},"Getting access to external code"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DECLARE FUNCTION")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DECLARE SELECT FUNCTION")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DECLARE PROCEDURE"))),Object(o.b)("p",null,"The best practice is to put any declarations into a shared header file which you can ",Object(o.b)("inlineCode",{parentName:"p"},"#include")," in all the places it is needed.\nThis is especially important should you have to forward declare a procedure.  CQL normally provides exports for all procedures\nso you basically get an automatically generated and certain-to-be-correct ",Object(o.b)("inlineCode",{parentName:"p"},"#include")," file.  But, if the procedures are being compiled\ntogether then an export file won't have been generated yet at the time you need it;  To work around this you use the ",Object(o.b)("inlineCode",{parentName:"p"},"DECLARE PROCEDURE"),"\nform.  However, procedure declarations are tricky;  they include not just the type of the arguments but the types of any/all of the\ncolumns in any result set the procedure might have.  This must not be wrong or callers will get unpredictable failures."),Object(o.b)("p",null,"The easiest way to ensure it is correct is to use the same trick as you would in C -- make sure that you ",Object(o.b)("inlineCode",{parentName:"p"},"#include")," the declaration\nthe in the translation unit with the definition.  If they don't match there will be an error."),Object(o.b)("p",null,"A very useful trick: the error will include the exact text of the correct declaration.  So if you don't know it, or are too lazy to\nfigure it out; simply put ",Object(o.b)("inlineCode",{parentName:"p"},"ANY")," declaration in the shared header file and then paste in the correct declaration from the error.  should\nthe definition ever change you will get a compilation error which you can again harvest to get the correct declaration."),Object(o.b)("p",null,"In this way you can be sure the declarations are correct."),Object(o.b)("p",null,"Functions have no CQL equivalent, but they generally don't change very often.  Use ",Object(o.b)("inlineCode",{parentName:"p"},"DECLARE FUNCTION")," to allow access to some C code\nthat returns a result of some kind.   Be sure to add the ",Object(o.b)("inlineCode",{parentName:"p"},"CREATE")," option if the function returns a reference that the caller owns."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"DECLARE SELECT FUNCTION")," to tell CQL about any User Defined Functions you have added to SQLite so that it knows how to call them.\nNote that CQL does not register those UDFs, it couldn't make that call lacking the essential C information required to do so.  If you\nfind that you are getting errors when calling a UDF the most likely reason for the failure is that the UDF was declared but never\nregistered with SQLite at runtime.  This happens in test code a lot -- product code tends to have some central place to register the\nUDFs and it normally runs at startup, e.g. right after the schema is upgraded."),Object(o.b)("h3",{id:"regular-data-manipulation-language-dml"},"Regular Data Manipulation Language (DML)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DELETE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"INSERT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SELECT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"UPDATE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"UPSERT"))),Object(o.b)("p",null,"These statements are the most essential and they'll appear in almost every procedure. There are a few general best practices we can go over."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Try to do as much as you can in one batch rather than iterating;  e.g."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"don't write a loop with a ",Object(o.b)("inlineCode",{parentName:"li"},"DELETE")," statement that deletes one row if you can avoid it, write a delete statement that deletes all you need to delete"),Object(o.b)("li",{parentName:"ul"},"don't write a loop with of ",Object(o.b)("inlineCode",{parentName:"li"},"SELECT")," statement that fetches one row, try to fetch all the rows you need with one select"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Make sure ",Object(o.b)("inlineCode",{parentName:"p"},"UPSERT")," is supported on the SQLite system you are using, older versions do not support it")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Don't put unnecessary casts in your ",Object(o.b)("inlineCode",{parentName:"p"},"SELECT")," statements, they just add fat")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Don't use ",Object(o.b)("inlineCode",{parentName:"p"},"CASE"),"/",Object(o.b)("inlineCode",{parentName:"p"},"WHEN")," to compute a boolean, the boolean operations are more economical (e.g. use ",Object(o.b)("inlineCode",{parentName:"p"},"IS"),")")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Don't use ",Object(o.b)("inlineCode",{parentName:"p"},"COUNT")," if all you need to know is whether a row exists or not, use ",Object(o.b)("inlineCode",{parentName:"p"},"EXISTS"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Don't use ",Object(o.b)("inlineCode",{parentName:"p"},"GROUP BY"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ORDER BY"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"DISTINCT")," on large rowsets, the sort is expensive and it will make your ",Object(o.b)("inlineCode",{parentName:"p"},"SELECT")," statements write to disk rather than just read")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Always use the ",Object(o.b)("inlineCode",{parentName:"p"},"INSERT INTO FOO USING")," form of the ",Object(o.b)("inlineCode",{parentName:"p"},"INSERT")," statement, it's much easier to read than the standard form and compiles to the same thing"))),Object(o.b)("h3",{id:"variable-and-cursor-declarations"},"Variable and Cursor declarations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DECLARE OUT CALL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DECLARE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LET")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SET"))),Object(o.b)("p",null,"These are likely to appear all over as well.  If you can avoid a variable declaration by using ",Object(o.b)("inlineCode",{parentName:"p"},"LET")," then do so;  The code will be more concise and you'll\nget the exact variable type you need.  This is the same as ",Object(o.b)("inlineCode",{parentName:"p"},"var x = foo();")," in other languages.  Once the variable is declared use ",Object(o.b)("inlineCode",{parentName:"p"},"SET"),"."),Object(o.b)("p",null,"You can save yourself a lot of declarations of ",Object(o.b)("inlineCode",{parentName:"p"},"OUT")," variables with ",Object(o.b)("inlineCode",{parentName:"p"},"DECLARE OUT CALL"),".  That declaration form automatically declares the ",Object(o.b)("inlineCode",{parentName:"p"},"OUT")," variables used\nin the call you are about to make with the correct type.  If the number of arguments changes you just have to add the args you don't have to also add\nnew declarations."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"LIKE")," construct can be used to let you declare things whose type is the same as another thing.  Patterns like ",Object(o.b)("inlineCode",{parentName:"p"},"DECLARE ARGS CURSOR LIKE FOO ARGUMENTS"),'\nsave you a lot of typing and also enhance correctness.  There\'s a whole chapter dedicated to "shapes" defined by ',Object(o.b)("inlineCode",{parentName:"p"},"LIKE"),"."),Object(o.b)("h3",{id:"query-plans"},"Query Plans"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"EXPLAIN"))),Object(o.b)("p",null,"Explain can be used in front of other queries to generate a plan.  The way SQLite handles this is that you fetch the rows of the plan as usual.  So basically\n",Object(o.b)("inlineCode",{parentName:"p"},"EXPLAIN")," is kind of like ",Object(o.b)("inlineCode",{parentName:"p"},"SELECT QUERY PLAN OF"),".  This hardly ever comes up in normal coding.  CQL has an output option where it will generate code that gives you\nthe query plan for a procedures queries rather than the normal body of the procedure."),Object(o.b)("h3",{id:"fetching-data-from-a-cursor-or-from-loose-data"},"Fetching Data from a Cursor or from Loose Data"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"FETCH")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"UPDATE CURSOR"))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"FETCH")," statement has many variations, all are useful at some time or another. There are a few helpful guidelines."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If fetching from loose values into a cursor use the ",Object(o.b)("inlineCode",{parentName:"li"},"FETCH USING")," form (as you would with ",Object(o.b)("inlineCode",{parentName:"li"},"INSERT INTO USING"),") because it is less error prone"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"FETCH INTO")," is generally a bad idea, you'll have to declare a lot of variables, instead just rely on automatic storage in the cursor e.g.\n",Object(o.b)("inlineCode",{parentName:"li"},"fetch my_cursor")," rather than ",Object(o.b)("inlineCode",{parentName:"li"},"fetch my_cursor into a, b, c")),Object(o.b)("li",{parentName:"ul"},"If you have data already in a cursor you can mutate some of the columns using ",Object(o.b)("inlineCode",{parentName:"li"},"UPDATE CURSOR"),", this can let you adjust values or apply defaults")),Object(o.b)("h3",{id:"control-flow"},"Control Flow"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"IF")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LOOP")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SWITCH")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"WHILE"))),Object(o.b)("p",null,"These are your bread and butter and they will appear all over.  One tip: Use the ",Object(o.b)("inlineCode",{parentName:"p"},"ALL VALUES")," variant of switch whenever possible to ensure that you haven't missed any cases."),Object(o.b)("h3",{id:"manual-control-of-results"},"Manual Control of Results"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"OUT"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"OUT UNION"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you know you are producing exactly one row ",Object(o.b)("inlineCode",{parentName:"p"},"OUT")," is more economical than ",Object(o.b)("inlineCode",{parentName:"p"},"SELECT"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you need complete flexibility on what rows to produce (e.g. skip some, add extras, mutate some) then ",Object(o.b)("inlineCode",{parentName:"p"},"OUT UNION")," will give you that, use it only when needed, it's more expensive than just ",Object(o.b)("inlineCode",{parentName:"p"},"SELECT")))))}u.isMDXComponent=!0}}]);