(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),l=n(6),r=(n(0),n(156)),i=["components"],o={id:"int05",title:"Part 5: CQL Runtime",sidebar_label:"Part 5: CQL Runtime"},c={unversionedId:"int05",id:"int05",isDocsHomePage:!1,title:"Part 5: CQL Runtime",description:"\x3c!---",source:"@site/../CQL_Guide/int05.md",slug:"/int05",permalink:"/cql-guide/int05",version:"current",lastUpdatedBy:"Ricardo Juan Palma Duran",lastUpdatedAt:1644474814,sidebar_label:"Part 5: CQL Runtime",sidebar:"someSidebar",previous:{title:"Part 4: Testing",permalink:"/cql-guide/int04"},next:{title:"Part 6: Schema Management",permalink:"/cql-guide/int06"}},s=[{value:"Preface",id:"preface",children:[]},{value:"CQL Runtime",id:"cql-runtime",children:[{value:"Standard headers",id:"standard-headers",children:[]},{value:"Contract and Error Macros",id:"contract-and-error-macros",children:[]},{value:"The Value Types",id:"the-value-types",children:[]},{value:"The Reference Types",id:"the-reference-types",children:[]},{value:"Mocking",id:"mocking",children:[]},{value:"Profiling",id:"profiling",children:[]},{value:"Encoding of Sensitive Columns",id:"encoding-of-sensitive-columns",children:[]},{value:"Boxing Statements",id:"boxing-statements",children:[]},{value:"The Common Headers",id:"the-common-headers",children:[]},{value:"The <code>cqlrt_cf</code> Runtime",id:"the-cqlrt_cf-runtime",children:[]},{value:"Recap",id:"recap",children:[]}]}],b={rightToc:s};function d(e){var t=e.components,n=Object(l.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"preface"},"Preface"),Object(r.b)("p",null,"Part 5 continues with a discussion of the essentials of the CQL Runtime.\nAs in the previous sections, the goal here is not to go over every detail but rather to give\na sense of how the runtime works in general -- the core strategies and implementation choices --\nso that when reading the source you will have an idea how it all hangs together. To accomplish\nthis, we'll illustrate the key pieces that can be customized and we'll discuss some\ninteresting cases."),Object(r.b)("h2",{id:"cql-runtime"},"CQL Runtime"),Object(r.b)("p",null,"The parts of the runtime that you can change are in ",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt.h"),", that file invariably ends by including\n",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt_common.h")," which are the runtime parts that you shouldn't change.  Of course this is open source\nso you can change anything, but the common things usually don't need to change -- ",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt.h")," should\nprovide you with everything you need to target new environments."),Object(r.b)("p",null,"The compiler itself can be customized see ",Object(r.b)("inlineCode",{parentName:"p"},"rt.c")," to emit different strings to work with your runtime.\nThis is pretty easy to do without creating a merge hell for yourself. Meta Platforms, for instance,  has its\nown CQL runtime customized for use on phones that is not open source (and really I don't think anyone\nwould want it anyway).  But the point is that you can make your own. In fact I know of two just within\nMeta Platforms."),Object(r.b)("p",null,"We'll go over ",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt.h")," bit by bit.  Keeping in mind it might change but this is\nessentially what's going on.  And the essentials don't change very often."),Object(r.b)("h3",{id:"standard-headers"},"Standard headers"),Object(r.b)("p",null,"The rest of the system will use these, ",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt.h")," is responsible for bringing in what you need\nlater, or what ",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt_common.h")," needs on your system."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"#pragma once\n\n#include <assert.h>\n#include <stddef.h>\n#include <stdint.h>\n#include <math.h>\n#include <sqlite3.h>\n\n#ifndef __clang__\n#ifndef _Nonnull\n    /* Hide Clang-only nullability specifiers if not Clang */\n    #define _Nonnull\n    #define _Nullable\n#endif\n#endif\n")),Object(r.b)("h3",{id:"contract-and-error-macros"},"Contract and Error Macros"),Object(r.b)("p",null,"CQL has a few different macros it uses for errors.  ",Object(r.b)("inlineCode",{parentName:"p"},"contract"),", ",Object(r.b)("inlineCode",{parentName:"p"},"invariant"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"tripwire"),"\nusually all map to ",Object(r.b)("inlineCode",{parentName:"p"},"assert"),".  Note that ",Object(r.b)("inlineCode",{parentName:"p"},"tripwire")," doesn't have to be fatal, it can log\nin production and continue.  This is a \"softer\" assertion.  Something that you're trying out\nthat you'd like to be a ",Object(r.b)("inlineCode",{parentName:"p"},"contract")," but maybe there are lingering cases that have to be fixed\nfirst."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"#define cql_contract assert\n#define cql_invariant assert\n#define cql_tripwire assert\n#define cql_log_database_error(...)\n#define cql_error_trace()\n")),Object(r.b)("h3",{id:"the-value-types"},"The Value Types"),Object(r.b)("p",null,"You can define these types to be whatever is appropriate on your system.\nUsually the mapping is pretty obvious."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"// value types\ntypedef unsigned char cql_bool;\n#define cql_true (cql_bool)1\n#define cql_false (cql_bool)0\n\ntypedef unsigned long cql_hash_code;\ntypedef int32_t cql_int32;\ntypedef uint32_t cql_uint32;\ntypedef uint16_t cql_uint16;\ntypedef sqlite3_int64 cql_int64;\ntypedef double cql_double;\ntypedef int cql_code;\n")),Object(r.b)("h3",{id:"the-reference-types"},"The Reference Types"),Object(r.b)("p",null,"The default runtime first defines 4 types of reference objects.\nThese are the only reference types that CQL creates itself. In\nfact CQL doesn't actually create ",Object(r.b)("inlineCode",{parentName:"p"},"CQL_C_TYPE_OBJECT")," but the tests\ndo.  CQL never creates raw object things, only external functions\ncan do that."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"// metatypes for the straight C implementation\n#define CQL_C_TYPE_STRING 0\n#define CQL_C_TYPE_BLOB 1\n#define CQL_C_TYPE_RESULTS 2\n#define CQL_C_TYPE_BOXED_STMT 3\n#define CQL_C_TYPE_OBJECT 4\n")),Object(r.b)("p",null,"All the reference types are reference counted. So they\nneed a simple shape that allows them to know their own\ntype and have a count.  They also have a finalize method\nto clean up their memory when the count goes to zero."),Object(r.b)("p",null,"You get to define ",Object(r.b)("inlineCode",{parentName:"p"},"cql_type_ref")," to be whatever you want."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"// base ref counting struct\ntypedef struct cql_type *cql_type_ref;\ntypedef struct cql_type {\n  int type;\n  int ref_count;\n  void (*_Nullable finalize)(cql_type_ref _Nonnull ref);\n} cql_type;\n")),Object(r.b)("p",null,"Whatever you do with the types you'll need to define\na retain and release method that uses them as the signature.\nNormal references should have a generic value comparison and a hash."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"void cql_retain(cql_type_ref _Nullable ref);\nvoid cql_release(cql_type_ref _Nullable ref);\n\ncql_hash_code cql_ref_hash(cql_type_ref _Nonnull typeref);\ncql_bool cql_ref_equal(cql_type_ref _Nullable typeref1, cql_type_ref _Nullable typeref2);\n")),Object(r.b)("p",null,"Now each of the various kinds of reference types needs an\nobject which probably includes the base type above.  It doesn't\nhave to.  You can arrange for some other universal way to do\nthese.  On iOS these can be easily mapped to ",Object(r.b)("inlineCode",{parentName:"p"},"CF")," types."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"retain")," and ",Object(r.b)("inlineCode",{parentName:"p"},"release")," macros should all map to the same thing.\nThe compiler emits different variations for readability only. It\ndoesn't really work if they don't have common retain/release\nsemantics."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"// builtin object\ntypedef struct cql_object *cql_object_ref;\ntypedef struct cql_object {\n  cql_type base;\n  const void *_Nonnull ptr;\n} cql_object;\n\n#define cql_object_retain(object) cql_retain((cql_type_ref)object);\n#define cql_object_release(object) cql_release((cql_type_ref)object);\n")),Object(r.b)("p",null,"Boxed statement gets its own implementation, same as object."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"// builtin statement box\ntypedef struct cql_boxed_stmt *cql_boxed_stmt_ref;\ntypedef struct cql_boxed_stmt {\n  cql_type base;\n  sqlite3_stmt *_Nullable stmt;\n} cql_boxed_stmt;\n")),Object(r.b)("p",null,"Same for blob, and blob has a couple of additional helper macros\nthat are used to get information. Blobs also have hash and equality\nfunctions."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"// builtin blob\ntypedef struct cql_blob *cql_blob_ref;\ntypedef struct cql_blob {\n  cql_type base;\n  const void *_Nonnull ptr;\n  cql_uint32 size;\n} cql_blob;\n#define cql_blob_retain(object) cql_retain((cql_type_ref)object);\n#define cql_blob_release(object) cql_release((cql_type_ref)object);\ncql_blob_ref _Nonnull cql_blob_ref_new(const void *_Nonnull data, cql_uint32 size);\n#define cql_get_blob_bytes(data) (data->ptr)\n#define cql_get_blob_size(data) (data->size)\ncql_hash_code cql_blob_hash(cql_blob_ref _Nullable str);\ncql_bool cql_blob_equal(cql_blob_ref _Nullable blob1, cql_blob_ref _Nullable blob2);\n")),Object(r.b)("p",null,"Strings are the same as the others but they have many more functions\nassociated with them."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"// builtin string\ntypedef struct cql_string *cql_string_ref;\ntypedef struct cql_string {\n  cql_type base;\n  const char *_Nullable ptr;\n} cql_string;\ncql_string_ref _Nonnull cql_string_ref_new(const char *_Nonnull cstr);\n#define cql_string_retain(string) cql_retain((cql_type_ref)string);\n#define cql_string_release(string) cql_release((cql_type_ref)string);\n")),Object(r.b)("p",null,"The compiler uses this macro to create a named string literal. You decide\nhow those will be implemented right here."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"#define cql_string_literal(name, text) \\\n  cql_string name##_ = { \\\n    .base = { \\\n      .type = CQL_C_TYPE_STRING, \\\n      .ref_count = 1, \\\n      .finalize = NULL, \\\n    }, \\\n    .ptr = text, \\\n  }; \\\n  cql_string_ref name = &name##_\n")),Object(r.b)("p",null,"Strings get assorted comparison and hashing functions. Note blob also had a hash."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"int cql_string_compare(cql_string_ref _Nonnull s1, cql_string_ref _Nonnull s2);\ncql_hash_code cql_string_hash(cql_string_ref _Nullable str);\ncql_bool cql_string_equal(cql_string_ref _Nullable s1, cql_string_ref _Nullable s2);\nint cql_string_like(cql_string_ref _Nonnull s1, cql_string_ref _Nonnull s2);\n")),Object(r.b)("p",null,"Strings can be converted from their reference form to standard C form. These\nmacros define how this is done.  Note that temporary allocations are possible\nhere but the standard implementation does not actually need to do an alloc.  It\nstores UTF8 in the string pointer so it's ready to go."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"#define cql_alloc_cstr(cstr, str) const char *_Nonnull cstr = (str)->ptr\n#define cql_free_cstr(cstr, str) 0\n")),Object(r.b)("p",null,'The macros for result sets have somewhat less flexibility.  The main thing\nthat you can do here is add additional fields to the "meta" structure.  It\nneeds those key fields because it is created by the compiler.  However the\nAPI is used to create a result set so that can be any object you like.  It\nonly has to respond to the ',Object(r.b)("inlineCode",{parentName:"p"},"get_meta"),", ",Object(r.b)("inlineCode",{parentName:"p"},"get_data"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"get_count"),' apis.\nThose can be mapped as you desire.  In principle there could have been\na macro to create the "meta" as well (a PR for this is welcome) but it\'s\nreally a pain for not much benefit.  The advantage of defining your own "meta"\nis that you can use it to add additional custom APIs to your result set that\nmight need some storage.'),Object(r.b)("p",null,"The additional API ",Object(r.b)("inlineCode",{parentName:"p"},"cql_result_set_note_ownership_transferred(result_set)"),"\nis used in the event that you are moving ownership of the buffers from\nout of CQL's universe.  So like maybe JNI is absorbing the result, or\nObjective C is absorbing the result.  The default implementation is a no-op."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"// builtin result set\ntypedef struct cql_result_set *cql_result_set_ref;\n\ntypedef struct cql_result_set_meta {\n ...\n}\n\ntypedef struct cql_result_set {\n  cql_type base;\n  cql_result_set_meta meta;\n  cql_int32 count;\n  void *_Nonnull data;\n} cql_result_set;\n\n#define cql_result_set_type_decl(result_set_type, result_set_ref) \\\n  typedef struct _##result_set_type *result_set_ref;\n\ncql_result_set_ref _Nonnull cql_result_set_create(\n  void *_Nonnull data,\n  cql_int32 count,\n  cql_result_set_meta meta);\n\n#define cql_result_set_retain(result_set) cql_retain((cql_type_ref)result_set);\n#define cql_result_set_release(result_set) cql_release((cql_type_ref)result_set);\n#define cql_result_set_note_ownership_transferred(result_set)\n#define cql_result_set_get_meta(result_set) (&((cql_result_set_ref)result_set)->meta)\n#define cql_result_set_get_data(result_set) ((cql_result_set_ref)result_set)->data\n#define cql_result_set_get_count(result_set) ((cql_result_set_ref)result_set)->count\n")),Object(r.b)("h3",{id:"mocking"},"Mocking"),Object(r.b)("p",null,"The CQL run test needs to do some mocking.  This bit is here for that test.  If you\nwant to use the run test with your version of ",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt")," you'll need to define a\nshim for ",Object(r.b)("inlineCode",{parentName:"p"},"sqlite3_step")," that can be intercepted.  This probably isn't going to come up."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"#ifdef CQL_RUN_TEST\n#define sqlite3_step mockable_sqlite3_step\nSQLITE_API cql_code mockable_sqlite3_step(sqlite3_stmt *_Nonnull);\n#endif\n")),Object(r.b)("h3",{id:"profiling"},"Profiling"),Object(r.b)("p",null,"If you want to support profiling you can implement ",Object(r.b)("inlineCode",{parentName:"p"},"cql_profile_start")," and ",Object(r.b)("inlineCode",{parentName:"p"},"cql_profile_stop"),"\nto do whatever you want.  The CRC uniquely identifies a procedure (you can log that).  The\n",Object(r.b)("inlineCode",{parentName:"p"},"index")," provides you with a place to store something that you can use as a handle in\nyour logging system.  Typically an integer.  This lets you assign indices to the procedures\nyou actually saw in any given run and then log them or something like that.  No data\nabout parameters is provided, this is deliberate."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"// No-op implementation of profiling\n// * Note: we emit the crc as an expression just to be sure that there are no compiler\n//   errors caused by names being incorrect.  This improves the quality of the CQL\n//   code gen tests significantly.  If these were empty macros (as they once were)\n//   you could emit any junk in the call and it would still compile.\n#define cql_profile_start(crc, index) (void)crc; (void)index;\n#define cql_profile_stop(crc, index)  (void)crc; (void)index;\n")),Object(r.b)("p",null,"The definitions in ",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt_common.c"),' can provide codegen than either has generic\n"getters" for each column type (useful for JNI) or produces a unique getter that isn\'t\nshared.  The rowset metadata will include the values for ',Object(r.b)("inlineCode",{parentName:"p"},"getBoolean"),", ",Object(r.b)("inlineCode",{parentName:"p"},"getDouble")," etc.\nif ",Object(r.b)("inlineCode",{parentName:"p"},"CQL_NO_GETTERS")," is 0.  Getters are a little slower for C but give you a small number\nof functions that need to have JNI if you are targeting Java."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"// the basic version doesn't use column getters\n#define CQL_NO_GETTERS 1\n")),Object(r.b)("h3",{id:"encoding-of-sensitive-columns"},"Encoding of Sensitive Columns"),Object(r.b)("p",null,"By setting an attribute on any procedure that produces a result set you can\nhave the selected sensitive values encoded.  If this happens CQL first asks\nfor the encoder and then calls the encode methods passing in the encoder.\nThese aren't meant to be cryptograhically secure but rather to provide some\nability to prevent mistakes.  If you opt in, sensitive values have to be deliberately\ndecoded and that provides an audit trail."),Object(r.b)("p",null,"The default implementation of all this is a no-op."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"// implementation of encoding values. All sensitive values read from sqlite db will\n// be encoded at the source. CQL never decode encoded sensitive string unless the\n// user call explicitly decode function from code.\ncql_object_ref _Nullable cql_copy_encoder(sqlite3 *_Nonnull db);\ncql_bool cql_encode_bool(...)\ncql_int32 cql_encode_int32(...)\ncql_int64 cql_encode_int64(...)\ncql_double cql_encode_double(...)\ncql_string_ref _Nonnull cql_encode_string_ref_new(...);\ncql_blob_ref _Nonnull cql_encode_blob_ref_new(..);\ncql_bool cql_decode_bool(...);\ncql_int32 cql_decode_int32(...);\ncql_int64 cql_decode_int64(...);\ncql_double cql_decode_double(...);\ncql_string_ref _Nonnull cql_decode_string_ref_new(...);\ncql_blob_ref _Nonnull cql_decode_blob_ref_new(...);\n")),Object(r.b)("h3",{id:"boxing-statements"},"Boxing Statements"),Object(r.b)("p",null,'You must provide helpers to "box" and "unbox" a SQLite statement\ninto a ',Object(r.b)("inlineCode",{parentName:"p"},"cql_ref_type")," of the appropriate type.  These are used\nto create boxed cursors."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},"cql_object_ref _Nonnull cql_box_stmt(sqlite3_stmt *_Nullable stmt);\nsqlite3_stmt *_Nullable cql_unbox_stmt(cql_object_ref _Nonnull ref);\n")),Object(r.b)("h3",{id:"the-common-headers"},"The Common Headers"),Object(r.b)("p",null,"The standard APIs all build on the above, so they should be included last."),Object(r.b)("p",null,"Now in some cases the signature of the things you provide in ",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt.h")," is basically fixed,\nso it seems like it would be easier to move the prototpyes into ",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt_common.h"),".\nHowever, in many cases additional things are needed like ",Object(r.b)("inlineCode",{parentName:"p"},"declspec")," or ",Object(r.b)("inlineCode",{parentName:"p"},"export")," or\nother system specific things.  The result is that ",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt.h")," is maybe a bit more\nverbose that it strictly needs to be.  Also some versions of cqlrt.h choose to\nimplement some of the APIs as macros..."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-C"},'// NOTE: This must be included *after* all of the above symbols/macros.\n#include "cqlrt_common.h"\n')),Object(r.b)("h3",{id:"the-cqlrt_cf-runtime"},"The ",Object(r.b)("inlineCode",{parentName:"h3"},"cqlrt_cf")," Runtime"),Object(r.b)("p",null,"In order to use the Objective-C code-gen (",Object(r.b)("inlineCode",{parentName:"p"},"--rt objc"),") you need a runtime that has reference\ntypes that are friendly to Objective-C.  For this purpose we created an open-source\nversion of such a runtime: it can be found in the ",Object(r.b)("inlineCode",{parentName:"p"},"sources/cqlrt_cf")," directory.\nThis runtime is also a decent example of how much customization you can do with just\na little code. Some brief notes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This runtime really only makes sense on macOS, iOS, or maybe some other place that Core Foundation (",Object(r.b)("inlineCode",{parentName:"li"},"CF"),") exists",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"As such its build process is considerably less portable than other parts of the system"))),Object(r.b)("li",{parentName:"ul"},"The CQL reference types have been redefined so that they map to:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CFStringRef")," (strings)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CFTypeRef")," (objects)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CFDataRef")," (blobs)"))),Object(r.b)("li",{parentName:"ul"},"The key worker functions use ",Object(r.b)("inlineCode",{parentName:"li"},"CF"),", e.g.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cql_ref_hash")," maps to ",Object(r.b)("inlineCode",{parentName:"li"},"CFHash")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cql_ref_equal")," maps to ",Object(r.b)("inlineCode",{parentName:"li"},"CFEqual")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cql_retain")," uses ",Object(r.b)("inlineCode",{parentName:"li"},"CFRetain")," (with a null guard)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cql_release")," uses ",Object(r.b)("inlineCode",{parentName:"li"},"CFRelease")," (with a null guard)"))),Object(r.b)("li",{parentName:"ul"},"Strings use ",Object(r.b)("inlineCode",{parentName:"li"},"CF")," idioms, e.g.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"string literals are created with ",Object(r.b)("inlineCode",{parentName:"li"},"CFSTR")),Object(r.b)("li",{parentName:"ul"},"C strings are created by using ",Object(r.b)("inlineCode",{parentName:"li"},"CFStringGetCStringPtr")," or ",Object(r.b)("inlineCode",{parentName:"li"},"CFStringGetCString")," when needed")))),Object(r.b)("p",null,"Of course, since the meaning of some primitive types has changed, the contract to the CQL generated\ncode has changed accordingly.  For instance:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"procedures compiled against this runtime expect string arguments to be ",Object(r.b)("inlineCode",{parentName:"li"},"CFStringRef")),Object(r.b)("li",{parentName:"ul"},"result sets provide ",Object(r.b)("inlineCode",{parentName:"li"},"CFStringRef")," values for string columns")),Object(r.b)("p",null,"The consequence of this is that the Objective-C code generation ",Object(r.b)("inlineCode",{parentName:"p"},"--rt objc")," finds friendly\ncontracts that it can freely convert to types like ",Object(r.b)("inlineCode",{parentName:"p"},"NSString *")," which results in\nseamless integration with the rest of an Objective-C application."),Object(r.b)("p",null,"Of course the downside of all this is that the ",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt_cf")," runtime is less portable.  It can only go\nwhere ",Object(r.b)("inlineCode",{parentName:"p"},"CF")," exists.  Still, it is an interesting demonstration of the flexablity of the system."),Object(r.b)("p",null,"The system could be further improved by creating a custom result type (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"--rt c_cf"),") and using\nsome of the result type options for the C code generation. For instance, the compiler could do these things:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"generate ",Object(r.b)("inlineCode",{parentName:"li"},"CFStringRef foo;")," instead of ",Object(r.b)("inlineCode",{parentName:"li"},"cql_string_ref foo;")," for declarations"),Object(r.b)("li",{parentName:"ul"},"generate ",Object(r.b)("inlineCode",{parentName:"li"},"SInt32 an_integer")," instead of ",Object(r.b)("inlineCode",{parentName:"li"},"cql_int32 an_integer"))),Object(r.b)("p",null,"Even though ",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt_cf")," is already mapping ",Object(r.b)("inlineCode",{parentName:"p"},"cql_int32")," to something compatible with ",Object(r.b)("inlineCode",{parentName:"p"},"CF"),",\nmaking such changes would make the C output a little bit more ",Object(r.b)("inlineCode",{parentName:"p"},"CF")," idiomatic. This educational\nexercise could probably be completed in just a few minutes by interested readers."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"make.sh")," file in the ",Object(r.b)("inlineCode",{parentName:"p"},"sources/cqlrt_cf")," directory illustrates how to get CQL to use\nthis new runtime.  The demo itself is a simple port of the code in ",Object(r.b)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/x10"},"Appendix 10"),"."),Object(r.b)("h3",{id:"recap"},"Recap"),Object(r.b)("p",null,"The CQL runtime, ",Object(r.b)("inlineCode",{parentName:"p"},"cqlrt.c"),", is intended to be replaced.  The version that ships with the distribution\nis a simple, portable implementation that is single threaded. Serious users of CQL will likely\nwant to replace the default version of the runtime with something more tuned to their use case."),Object(r.b)("p",null,"Topics covered included:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"contract, error, and tracing macros"),Object(r.b)("li",{parentName:"ul"},"how value types are defined"),Object(r.b)("li",{parentName:"ul"},"how reference types are defined"),Object(r.b)("li",{parentName:"ul"},"mocking (for use in a test suite)"),Object(r.b)("li",{parentName:"ul"},"profiling"),Object(r.b)("li",{parentName:"ul"},"encoding of sensitive columns"),Object(r.b)("li",{parentName:"ul"},"boxing statements"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"cqlrt_cf")," runtime")),Object(r.b)("p",null,"As with the other parts, no attempt was made to cover every detail.  That is\nbest done by reading the source code."))}d.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),b=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,h=d["".concat(i,".").concat(p)]||d[p]||u[p]||r;return n?l.a.createElement(h,o(o({ref:t},s),{},{components:n})):l.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);