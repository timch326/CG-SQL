(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{162:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||h[d]||r;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(6),r=(n(0),n(162)),i=["components"],l={slug:"blob-storage",title:"Introducing Blob Storage",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql"]},s={permalink:"/blog/blob-storage",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2022-03-17-blob-storage.md",source:"@site/blog/2022-03-17-blob-storage.md",description:"Introduction and Context",date:"2022-03-17T00:00:00.000Z",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"}],title:"Introducing Blob Storage",readingTime:9.625,truncated:!1,nextItem:{title:"Using the FROM construct in more places",permalink:"/blog/from-general"}},c=[{value:"Introduction and Context",id:"introduction-and-context",children:[{value:"How do I define one of these blobs?",id:"how-do-i-define-one-of-these-blobs",children:[]},{value:"Where do you keep your blob storage?",id:"where-do-you-keep-your-blob-storage",children:[]},{value:"How do I make one of these blobs?",id:"how-do-i-make-one-of-these-blobs",children:[]},{value:"How do I unpack one of these blobs?",id:"how-do-i-unpack-one-of-these-blobs",children:[]},{value:"What is the representation of one of these blobs?",id:"what-is-the-representation-of-one-of-these-blobs",children:[]},{value:"What about more than one row in a blob?",id:"what-about-more-than-one-row-in-a-blob",children:[]},{value:"Conclusion",id:"conclusion",children:[]}]}],b={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,i);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction-and-context"},"Introduction and Context"),Object(r.b)("p",null,"The general idea here is that you might want to store composite data in a single column in the database.  This is a common way to get more generic schema, the idea being that you can have one or more blob columns that store in tables a lot of data that doesn't have to be indexed. You could store it in other ways, like a JSON blob or some such, but we'll be using blobs as the basis for storage here -- hence\nthe name blob \"storage\"."),Object(r.b)("h3",{id:"how-do-i-define-one-of-these-blobs"},"How do I define one of these blobs?"),Object(r.b)("p",null,"In SQL/CQL, the main way you define structures, especially those that you want to maintain, is with tables.  Hence we introduce this"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"@attribute(cql:blob_storage)\ncreate table news_info(\n  who text,\n  what text,\n  when_ long -- timestamp of some kind\n);\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"blob_storage attribute")," indicates that the thing we're about to define here is not really going to be a materialized table.  As a result, you will not be\nable to (e.g.) ",Object(r.b)("inlineCode",{parentName:"p"},"DROP")," the table or ",Object(r.b)("inlineCode",{parentName:"p"},"SELECT")," from it, and there will be no schema upgrade for it should you request one. However, the usual schema rules still\napply which help you to create compatible versions of this structure.  For instance, new columns can be added only at the end, and only if they are nullable.\nHere we add ",Object(r.b)("inlineCode",{parentName:"p"},"source"),' to the schema in a hypothetical "version 6".  Note that schema versions move forward globally in the schema, not locally in one table; this implies there are versions 1-5 elsewhere, not shown.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"@attribute(cql:blob_storage)\ncreate table news_info(\n  who text,\n  what text,\n  when_ long -- timestamp of some kind\n  source text @create(6)\n);\n")),Object(r.b)("p",null,"Additionally, since the storage is not backed by SQL with SQL's constraint system, default values and constraints are not allowed in a table marked\nwith ",Object(r.b)("inlineCode",{parentName:"p"},"cql:blob_storage"),'; it\'s just data. Similarly, triggers, views, and indices may not use the "table".'),Object(r.b)("h3",{id:"where-do-you-keep-your-blob-storage"},"Where do you keep your blob storage?"),Object(r.b)("p",null,"Naturally, blob storage goes in a blob field, but recall CQL has discriminated types so we could make something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"create table info(\n  id long primary key,\n  news_info blob<news_info>\n);\n")),Object(r.b)("p",null,"From a SQL perspective ",Object(r.b)("inlineCode",{parentName:"p"},"news_info")," is just a blob.  That means if you want to do a ",Object(r.b)("inlineCode",{parentName:"p"},"WHERE")," clause or something like that on the info,\nyou're out of luck.  Maybe you could write a user-defined function to crack the blob and so forth but really this isn't the point.\nIf you're using this feature then, by construction, you don't need to index on this data.  It's simply not suitable for use at all\nif you need field-at-a-time access within SQL."),Object(r.b)("h3",{id:"how-do-i-make-one-of-these-blobs"},"How do I make one of these blobs?"),Object(r.b)("p",null,"The natural place that CQL stores structures is in value cursors so the most natural thing to do is to provide a variation of the ",Object(r.b)("inlineCode",{parentName:"p"},"SET"),"\nstatement that lets you load a blob from a cursor like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"create proc make_blob(like news_info, out result blob<news_info>)\nbegin\n  declare c cursor like news_info;\n  fetch c from arguments;\n  set result from cursor c;\nEND;\n")),Object(r.b)("p",null,"This declares a cursor, loads it from argument values, and converts it to a blob.  Of course all of the usual cursor building forms can be\nused to power your blob creation, you just do one serialization at the end.  The above is assembling a blob from arguments but you could\nequally make the blob from data."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"create proc get_news_info(id_ long not null, out result blob<news_info>)\nbegin\n   -- use our columns sugar syntax for getting just news_info columns from\n   -- a table with potentially lots of stuff (or an error if it's missing columns)\n   declare c cursor for\n     select columns(like news_info) from some_source_of_info where info.id = id_;\n   fetch c;\n   set result from cursor c;\nEND;\n")),Object(r.b)("p",null,"There are ",Object(r.b)("em",{parentName:"p"},"many")," cursor fetch forms, including dummy data forms and other interesting bits of sugar.  You can fetch a cursor from arguments,\nfrom other cursors, and even combinations.  We want all of that to work for blobs as well without adding tons of new syntax and code generation.\nThe obvious way to accomplish that is for cursors to be the source of blobs."),Object(r.b)("h3",{id:"how-do-i-unpack-one-of-these-blobs"},"How do I unpack one of these blobs?"),Object(r.b)("p",null,"Again, the normal way that you work with records in CQL is by creating suitable cursors. These can be economically accessed on a field-by-field basis.\nWhat we need is a way to easily recreate a cursor from the blob so we can read the data values. This gives rise to this form:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"let b := (select news_info from info where id = id_ if nothing null);\ndeclare c cursor like b;\nfetch c from b; -- note this can fail\n-- now use c.who, c.what, etc.\n")),Object(r.b)("p",null,"Data loaded in a cursor is very economical to access on a field-by-field basis, and, since the deserialization of the blob happens all at once, that is also economical.\nImportantly, we cannot assume that the blob is well formed, it could be coming from anywhere.  For secure-code reasons we must assume it is hostile.  Hence the\ndecoding validates the shape, internal lengths, and so forth."),Object(r.b)("p",null,"If we had instead started with something this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"let b := (select news_info from info where id = id_ if nothing null);\n")),Object(r.b)("p",null,"Then maybe we might like to write:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"if b.who == 'U2') then ... end if;\n")),Object(r.b)("p",null,'However, this sort of thing would be very uneconomical. For one thing, the blob does not have fixed-offset fields: It is carrying all the serialized data for the string fields\nand so forth.  Each "dot" operation would be costly and, furthermore, each "dot" operation could fail if the blob is badly formed.  Having to deal with a ',Object(r.b)("inlineCode",{parentName:"p"},"b.who")," that might fail\nseems very bad indeed."),Object(r.b)("p",null,"Once you have the cursor you can make new blobs with different combinations, slice the cursor fields using the ",Object(r.b)("inlineCode",{parentName:"p"},"LIKE")," operator, return the cursor with ",Object(r.b)("inlineCode",{parentName:"p"},"OUT"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"OUT UNION"),",\nor pass the blob fields as arguments to functions using the ",Object(r.b)("inlineCode",{parentName:"p"},"FROM")," forms. Cursors already are super flexible in terms of what you can do with their contents."),Object(r.b)("h3",{id:"what-is-the-representation-of-one-of-these-blobs"},"What is the representation of one of these blobs?"),Object(r.b)("p",null,"It's important that we allow the blobs to evolve over time, so each blob has to be self-describing.  We also want to be able to throw an error if you use the wrong kind of blob when\nloading a cursor, so the blob has to contain the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the number of columns in the blob data type when it was stored"),Object(r.b)("li",{parentName:"ul"},"the type of each field is encoded as a single plain-text character",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the types are bool, int, long, (double) real, (string) text, blob;"),Object(r.b)("li",{parentName:"ul"},"we use 'f' (flag) for bools, hence \"fildsb\""),Object(r.b)("li",{parentName:"ul"},"these are encoded with one letter each, upper case meaning 'not null' so the storage might be \"LFss\""),Object(r.b)("li",{parentName:"ul"},"the buffer begins with a null terminated string that serve for both the count and the types"))),Object(r.b)("li",{parentName:"ul"},"Each nullable field may be present or null; 1 bit is used to store this fact.  The bits are in an array of bytes that comes immediately after the type info (which implicitly tells us its size)"),Object(r.b)("li",{parentName:"ul"},"Boolean values are likewise encoded as bits within the same array, so the total number of bits stored is nullables plus booleans (nullable booleans use 2 bits)"),Object(r.b)("li",{parentName:"ul"},"If you are reading a newer version of a record from an older piece of data that is missing a column then the column is assumed to be NULL"),Object(r.b)("li",{parentName:"ul"},"Any columns you add after the initial version (using @create) must be nullable; this is normal for adding columns to existing schema"),Object(r.b)("li",{parentName:"ul"},"Integers and longs are stored in varint format after zigzag encoding"),Object(r.b)("li",{parentName:"ul"},"Text is stored inline in null terminated strings (embedded nulls are not allowed in CQL text)"),Object(r.b)("li",{parentName:"ul"},"Nested blobs are stored inline, with a length prefix encoded like any other int")),Object(r.b)("h3",{id:"what-about-more-than-one-row-in-a-blob"},"What about more than one row in a blob?"),Object(r.b)("p",null,"Well, this is a bit more advanced but in principle this could be done as well.  To make it useful, we would want to make a new cursor type that can iterate over rows in a blob. The syntax leaves\nroom for this, something like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"declare c cursor for blob b;\nloop fetch c\nbegin\n  -- the usual stuff\nend;\n")),Object(r.b)("p",null,"This cursor would be another variation; it would keep its current index into the blob to read data out of it.  Such a blob would also have to include a count of rows as part of its storage."),Object(r.b)("p",null,"However, that's future looking. There is no such support at present."),Object(r.b)("h3",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"With a fairly modest amount of work, we now support structured storage natively and have pretty rich language constructs.  We carefully chose language constructs that lead to economical\nserialization and deserialization patterns and a record format that is versioned well, without resorting to something super loose like JSON."),Object(r.b)("p",null,"As with many other features, it's possible to replace the (de)serialization with code of your choice by supplying your own runtime methods.  So for instance, thrift encoding is possible;\nthough it is more flexible than is strictly necessary for the few SQL data types, it might be convenient."),Object(r.b)("p",null,"Storage types that are going to be persisted in the database or go over a wire-protocol should be managed like schema with the usual validation rules.  On the other hand,\nformats that will be used only transiently in memory can be changed at whim from version to version.  As mentioned above, the design specifically considers cases where a new\nclient discovers and old-format blob (with fewer columns) and, the reverse, cases where an old client recieves a datagram from a new client with too many columns."),Object(r.b)("h4",{id:"appendix"},"Appendix"),Object(r.b)("p",null,"A more complete example is included for reference."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sql"},"@attribute(cql:blob_storage)\ncreate table news_info(\n  who text,\n  what text,\n  when_ long -- timestamp of some kind\n);\n\n-- a place where the blob appears in storage\ncreate table some_table(\n  x integer,\n  y integer,\n  news_blob blob<news_info>\n);\n\n-- a procedure that creates the blob from loose args\ncreate proc make_blob(like news_info, out result blob<news_info>)\nbegin\n  declare c cursor like news_info;\n  fetch c from arguments;\n  set result from cursor c;\nend;\n\n-- a procedure that cracks the blob\ncreate proc crack_blob(data blob<news_info>)\nbegin\n  declare c cursor like news_info;\n  fetch c from data;\n  out c;\nend;\n\n-- a procedure that cracks the blob into loose args if needed\n-- the OUT statement was created specifically to allow you to avoid this sort mass OUT awfulness\ncreate proc crack_blob_to_vars(\n  data blob<news_info>,\n  out who text,\n  out what text,\n  out when_ long)\nbegin\n  declare c cursor like news_info;\n  fetch c from data;\n  set who := c.who;\n  set what := c.what;\n  set when_ := c.when_;\nend;\n\n-- this just defines a shape for the part we are keeping from the original structure\ndeclare proc my_basic_columns() (\n  x int,\n  y int\n);\n\n-- this just defines a shape for the result we want\n-- we're never actually defining this procedure\ndeclare proc my_result_shape() (\n  like my_basic_columns,\n  like news_info\n);\n\ncreate proc select_and_crack(whatever_condition bool)\nbegin\n  declare c cursor for select * from some_table where whatever_condition;\n  loop fetch c\n  begin\n    -- crack the blob in c\n    declare n cursor like news_info;\n    fetch n from blob c.news_blob;\n\n    -- assemble the result we want from the parts we have\n    declare result cursor like my_result_shape;\n    fetch result from values (from c like my_basic_columns, from n);\n\n    -- emit one row\n    out union result;\n  end;\nend;\n")))}u.isMDXComponent=!0}}]);