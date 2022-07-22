"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4642],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,N=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return t?a.createElement(N,o(o({ref:n},u),{},{components:t})):a.createElement(N,o({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6833:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],s={id:"x7",title:"Appendix 7: CQL Anti-patterns",sidebar_label:"Appendix 7: CQL Anti-patterns"},i=void 0,p={unversionedId:"x7",id:"x7",title:"Appendix 7: CQL Anti-patterns",description:"\x3c!---",source:"@site/../CQL_Guide/x7.md",sourceDirName:".",slug:"/x7",permalink:"/cql-guide/x7",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tim Cheung",lastUpdatedAt:1658456309,formattedLastUpdatedAt:"7/22/2022",frontMatter:{id:"x7",title:"Appendix 7: CQL Anti-patterns",sidebar_label:"Appendix 7: CQL Anti-patterns"},sidebar:"someSidebar",previous:{title:"Appendix 6: CQL In 20 Minutes",permalink:"/cql-guide/x6"},next:{title:"Appendix 8: CQL Best Practices",permalink:"/cql-guide/x8"}},u={},d=[{value:"Common Schema",id:"common-schema",level:3},{value:"Declarations",id:"declarations",level:3},{value:"Casts",id:"casts",level:3},{value:"Booleans",id:"booleans",level:4},{value:"Boolean expressions and CASE/WHEN",id:"boolean-expressions-and-casewhen",level:3},{value:"CASE and CAST and NULL",id:"case-and-cast-and-null",level:3},{value:"Filtering out NULLs",id:"filtering-out-nulls",level:3},{value:"Not null boolean expressions",id:"not-null-boolean-expressions",level:3},{value:"Using <code>IS</code> when it makes sense to do so",id:"using-is-when-it-makes-sense-to-do-so",level:3},{value:"Left joins that are not left joins",id:"left-joins-that-are-not-left-joins",level:3}],m={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"These are a few of the antipatterns I've seen while travelling through various CQL source files.  They are in various categories."),(0,l.kt)("p",null,"Refer also to Appendix 8: CQL Best Practices."),(0,l.kt)("h3",{id:"common-schema"},"Common Schema"),(0,l.kt)("p",null,"For these examples let's create a couple of tables we might need for examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE foo (\n    id integer primary key,\n    name text\n);\n\nCREATE TABLE bar (\n    id integer primary key,\n    rate real\n);\n")),(0,l.kt)("h3",{id:"declarations"},"Declarations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE v LONG NOT NULL;\nSET v := 1;\n")),(0,l.kt)("p",null,"better"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LET v := 1L;  -- long literals have the L suffix like in C\n")),(0,l.kt)("p",null,"Similarly"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DECLARE v REAL NOT NULL;\nSET v := 1;\n")),(0,l.kt)("p",null,"better"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"LET v := 1.0; -- use scientific notation or add .0 to make a real literal\n")),(0,l.kt)("h3",{id:"casts"},"Casts"),(0,l.kt)("p",null,"Redundant casts fatten the code and don't really add anything to readability.  Sometimems it's necessary to cast NULL to\na  particular type so that you can be sure that generated result set has the right data type, but most of the casts\nbelow are not necessary."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT\n    CAST(foo.id as INTEGER) as id,\n    CAST(foo.name as TEXT) as name,\n    CAST(NULL as REAL) as rate\n  FROM foo\nUNION ALL\n  SELECT\n    CAST(bar.id as INTEGER) as id,\n    CAST(NULL as TEXT) as name,\n    CAST(bar.rate as REAL) as rate\n  FROM bar\n")),(0,l.kt)("p",null,"Better"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT\n    foo.id,\n    foo.name,\n    CAST(NULL as REAL) as rate\n  FROM foo\nUNION ALL\n  SELECT\n    bar.id,\n    CAST(NULL as TEXT) as name,\n    bar.rate\n  FROM bar\n")),(0,l.kt)("p",null,"It's possible to do the following to make this even cleaner:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- somewhere central\n#define NULL_TEXT CAST(NULL as TEXT)\n#define NULL_REAL CAST(NULL as REAL)\n#define NULL_INT CAST(NULL as INTEGER)\n#define NULL_LONG CAST(NULL as LONG)\n")),(0,l.kt)("p",null,"Then you can write"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT\n    foo.id,\n    foo.name,\n    NULL_REAL as rate\n  FROM foo\nUNION ALL\n  SELECT\n    bar.id,\n    NULL_TEXT as name,\n    bar.rate\n  FROM bar\n")),(0,l.kt)("h4",{id:"booleans"},"Booleans"),(0,l.kt)("p",null,"TRUE and FALSE can be used as boolean literals."),(0,l.kt)("p",null,"SQLite doesn't care about the type but CQL will get the type information it needs to make the columns of type BOOL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT\n    foo.id,\n    foo.name,\n    NULL_REAL as rate,\n    TRUE as has_name,  -- this is a bit artificial but you get the idea\n    FALSE as has_rate\n  FROM foo\nUNION ALL\n  SELECT\n    bar.id,\n    NULL_TEXT as name,\n    bar.rate,\n    FALSE as has_name,\n    TRUE as has_rate\n  FROM bar\n")),(0,l.kt)("h3",{id:"boolean-expressions-and-casewhen"},"Boolean expressions and CASE/WHEN"),(0,l.kt)("p",null,"It's easy to get carried away with the power of ",(0,l.kt)("inlineCode",{parentName:"p"},"CASE")," expressions, I've seen this kind of thing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CAST(CASE WHEN foo.name IS NULL THEN 0 ELSE 1 END AS BOOL)\n")),(0,l.kt)("p",null,"But this is simply"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"foo.name IS NOT NULL\n")),(0,l.kt)("p",null,"In general, if your case alternates are booleans a direct boolean expression would have served you better."),(0,l.kt)("h3",{id:"case-and-cast-and-null"},"CASE and CAST and NULL"),(0,l.kt)("p",null,"Somtimes there's clamping or filtering going on in a case statement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CAST(CASE WHEN foo.name > 'm' THEN foo.name ELSE NULL END AS TEXT)\n")),(0,l.kt)("p",null,"Here the ",(0,l.kt)("inlineCode",{parentName:"p"},"CAST")," is not needed at all so we could go to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CASE WHEN foo.name > 'm' THEN foo.name ELSE NULL END\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," is already the default value for the ",(0,l.kt)("inlineCode",{parentName:"p"},"ELSE")," clause so you never need ",(0,l.kt)("inlineCode",{parentName:"p"},"ELSE NULL")),(0,l.kt)("p",null,"So better:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CASE WHEN foo.name > 'm' THEN foo.name END\n")),(0,l.kt)("h3",{id:"filtering-out-nulls"},"Filtering out NULLs"),(0,l.kt)("p",null,"Consider"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\n    FROM foo\n    WHERE foo.name IS NOT NULL AND foo.name > 'm';\n")),(0,l.kt)("p",null,"There's no need to test for ",(0,l.kt)("inlineCode",{parentName:"p"},"NOT NULL")," here, the boolean will result in ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL")," if ",(0,l.kt)("inlineCode",{parentName:"p"},"foo.name")," is null\nwhich is not true so the ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," test will fail."),(0,l.kt)("p",null,"Better:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\n    FROM foo\n    WHERE foo.name > 'm';\n")),(0,l.kt)("h3",{id:"not-null-boolean-expressions"},"Not null boolean expressions"),(0,l.kt)("p",null,"In this statement we do not want to have a null result for the boolean expression"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    id,\n    name,\n    CAST(IFNULL(name > 'm', 0) AS BOOL) AS name_bigger_than_m\n    FROM FOO;\n")),(0,l.kt)("p",null,"So now we've made several mistakes.  We could have used the usual ",(0,l.kt)("inlineCode",{parentName:"p"},"FALSE")," defintion to avoid the cast.\nBut even that would have left us with an IFNULL that's harder to read.  Here's a much simpler formulation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    id,\n    name,\n    name > 'm' IS TRUE AS name_bigger_than_m\n    FROM FOO;\n")),(0,l.kt)("p",null,"Even without the ",(0,l.kt)("inlineCode",{parentName:"p"},"TRUE")," macro you could do ",(0,l.kt)("inlineCode",{parentName:"p"},"IS 1")," above and still get a result of type ",(0,l.kt)("inlineCode",{parentName:"p"},"BOOL NOT NULL")),(0,l.kt)("h3",{id:"using-is-when-it-makes-sense-to-do-so"},"Using ",(0,l.kt)("inlineCode",{parentName:"h3"},"IS")," when it makes sense to do so"),(0,l.kt)("p",null,"This kind of boolean expression is also verbose for no reason"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"    rate IS NOT NULL AND rate = 20\n")),(0,l.kt)("p",null,"In a ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clause probably ",(0,l.kt)("inlineCode",{parentName:"p"},"rate = 20")," suffices but even if you really need a ",(0,l.kt)("inlineCode",{parentName:"p"},"NOT NULL BOOL"),"\nresult the expression above is exactly what the ",(0,l.kt)("inlineCode",{parentName:"p"},"IS")," operator is for.  e.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"    rate IS 20\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"IS")," operator is frequently avoided except for ",(0,l.kt)("inlineCode",{parentName:"p"},"IS NULL")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"IS NOT NULL")," but it's a general equality operator\nwith the added semantic that it never returns ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),".   ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL IS NULL")," is true.  ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL IS [anything not null]")," is false."),(0,l.kt)("h3",{id:"left-joins-that-are-not-left-joins"},"Left joins that are not left joins"),(0,l.kt)("p",null,"Consider"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT foo.id,\n         foo.name,\n         bar.rate\n  FROM foo\n  LEFT JOIN bar ON foo.id = bar.id\n  WHERE bar.rate > 5;\n")),(0,l.kt)("p",null,"This is no longer a left join because the ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clause demands a value for at least one column from ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),"."),(0,l.kt)("p",null,"Better:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT foo.id,\n         foo.name,\n         bar.rate\n  FROM foo\n  INNER JOIN bar ON foo.id = bar.id\n  WHERE bar.rate > 5;\n")))}c.isMDXComponent=!0}}]);