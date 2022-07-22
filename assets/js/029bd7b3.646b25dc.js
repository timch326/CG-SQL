"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[459],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(o,".").concat(h)]||d[h]||c[h]||s;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3596:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),r=["components"],l={id:"int07",title:"Part 7: JSON Generation",sidebar_label:"Part 7: JSON Generation"},o=void 0,u={unversionedId:"int07",id:"int07",title:"Part 7: JSON Generation",description:"\x3c!---",source:"@site/../CQL_Guide/int07.md",sourceDirName:".",slug:"/int07",permalink:"/cql-guide/int07",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tim Cheung",lastUpdatedAt:1658456309,formattedLastUpdatedAt:"7/22/2022",frontMatter:{id:"int07",title:"Part 7: JSON Generation",sidebar_label:"Part 7: JSON Generation"},sidebar:"someSidebar",previous:{title:"Part 6: Schema Management",permalink:"/cql-guide/int06"},next:{title:"Part 8: Test Helpers",permalink:"/cql-guide/int08"}},p={},c=[{value:"Preface",id:"preface",level:3},{value:"JSON Schema",id:"json-schema",level:2},{value:"Walking the AST",id:"walking-the-ast",level:3},{value:"Example JSON Writer: Views",id:"example-json-writer-views",level:4},{value:"View Loop",id:"view-loop",level:4},{value:"View Extraction",id:"view-extraction",level:4},{value:"Test Output",id:"test-output",level:4},{value:"View Basics",id:"view-basics",level:4},{value:"Optional Info",id:"optional-info",level:4},{value:"The View Details",id:"the-view-details",level:4},{value:"Formatting the JSON",id:"formatting-the-json",level:3},{value:"Quoted Text",id:"quoted-text",level:4},{value:"Dependency Analysis",id:"dependency-analysis",level:3},{value:"Walking the AST for Dependencies",id:"walking-the-ast-for-dependencies",level:4},{value:"Additional Test Output",id:"additional-test-output",level:3},{value:"Recap",id:"recap",level:3}],d={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"preface"},"Preface"),(0,s.kt)("p",null,"Part 7 continues with a discussion of the JSON generation code.\nAs in the previous sections, the goal here is not to go over every detail but rather to give\na sense of how JSON creation works in general -- the core strategies and implementation choices --\nso that when reading the source you will have an idea how it all hangs together. To accomplish\nthis, we'll illustrate the key strategies used to extract the data and format the JSON."),(0,s.kt)("h2",{id:"json-schema"},"JSON Schema"),(0,s.kt)("p",null,"The JSON schema is described in ",(0,s.kt)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/ch13"},"Chapter 13")," of the Guide and there\nis a nice diagram of its ",(0,s.kt)("a",{parentName:"p",href:"https://cgsql.dev/json-diagram"},"grammar")," for reference.  So, we won't be\ndiscussing all the details of the output.  Instead we're going to go over the theory of how the\nJSON generator works. It is structured very much like the other code generators but it happens\nto produce a JSON file.  It's call the \"JSON Schema\" because most of the content is a description\nof the database schema in JSON form.  As such it's almost entirely just a simple walk of the AST\nin the correct order.  The only really tricky bit is the extra dependency analysis on the AST.\nThis allows us to emit usage information in the output for downstream tools to use as needed."),(0,s.kt)("p",null,"We'll cover these topics:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"walking the AST"),(0,s.kt)("li",{parentName:"ul"},"formatting"),(0,s.kt)("li",{parentName:"ul"},"computing the dependencies")),(0,s.kt)("p",null,"This should be a short chapter compared to the others, this output really is much simpler to\ncreate than the C or the schema upgrader."),(0,s.kt)("h3",{id:"walking-the-ast"},"Walking the AST"),(0,s.kt)("p",null,"If you run this command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ cql --in x --rt json_schema --cg x.json\n")),(0,s.kt)("p",null,"Where ",(0,s.kt)("inlineCode",{parentName:"p"},"x")," is an empty file, you'll get the following skeletal JSON, lightly reformatted for brevity:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "tables" : [  ],\n  "virtualTables" : [  ],\n  "views" : [  ],\n  "indices" : [  ],\n  "triggers" : [  ],\n  "attributes" : [  ],\n  "queries" : [  ],\n  "inserts" : [  ],\n  "generalInserts" : [  ],\n  "updates" : [  ],\n  "deletes" : [  ],\n  "general" : [  ],\n  "regions" : [  ],\n  "adHocMigrationProcs" : [  ],\n  "enums" : [  ]\n}\n')),(0,s.kt)("p",null,"From this we can deduce a great deal of the structure of the code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'// Main entry point for json schema format\ncql_noexport void cg_json_schema_main(ast_node *head) {\n  Contract(options.file_names_count == 1);\n\n  cql_exit_on_semantic_errors(head);\n\n  tables_to_procs = symtab_new();\n\n  CHARBUF_OPEN(main);\n  charbuf *output = &main;\n\n  bprintf(output, "%s", rt->source_prefix);\n\n  // master dictionary begins\n  bprintf(output, "\\n{\\n");\n  BEGIN_INDENT(defs, 2);\n  cg_json_tables(output);\n  bprintf(output, ",\\n");\n  cg_json_virtual_tables(output);\n  bprintf(output, ",\\n");\n  cg_json_views(output);\n  bprintf(output, ",\\n");\n  cg_json_indices(output);\n  bprintf(output, ",\\n");\n  cg_json_triggers(output);\n  bprintf(output, ",\\n");\n  cg_json_stmt_list(output, head);\n  bprintf(output, ",\\n");\n  cg_json_regions(output);\n  bprintf(output, ",\\n");\n  cg_json_ad_hoc_migration_procs(output);\n  bprintf(output, ",\\n");\n  cg_json_enums(output);\n\n  if (options.test) {\n    bprintf(output, ",\\n");\n    cg_json_table_users(output);\n  }\n\n  END_INDENT(defs);\n  bprintf(output, "\\n}\\n");\n\n  cql_write_file(options.file_names[0], output->ptr);\n  CHARBUF_CLOSE(main);\n\n  SYMTAB_CLEANUP(tables_to_procs);\n}\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"cg_json_schema_main")," is the main function and you can see that it mirrors that skeletal\nJSON output nearly exactly with some additional test output options.  We'll cover\nthe test output in a later section when we've had a chance to discuss the dependency\nanalysis."),(0,s.kt)("h4",{id:"example-json-writer-views"},"Example JSON Writer: Views"),(0,s.kt)("p",null,'These are sufficiently easy that we can just walk through one of the procedures front to back.\nLet\'s look at the "views" section.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'// The set of views look rather like the query section in as much as\n// they are in fact nothing more than named select statements.  However\n// the output here is somewhat simplified.  We only emit the whole select\n// statement and any binding args, we don\'t also emit all the pieces of the select.\nstatic void cg_json_views(charbuf *output) {\n  bprintf(output, "\\"views\\" : [\\n");\n  BEGIN_INDENT(views, 2);\n\n  int32_t i = 0;\n  for (list_item *item = all_views_list; item; item = item->next) {\n    ast_node *ast = item->ast;\n    Invariant(is_ast_create_view_stmt(ast));\n\n    ast_node *misc_attrs = NULL;\n    ast_node *attr_target = ast->parent;\n    if (is_ast_stmt_and_attr(attr_target)) {\n      EXTRACT_STMT_AND_MISC_ATTRS(stmt, misc, attr_target->parent);\n      misc_attrs = misc;\n    }\n\n    cg_json_test_details(output, ast, misc_attrs);\n\n    EXTRACT_OPTION(flags, ast->left);\n    EXTRACT(view_and_attrs, ast->right);\n    EXTRACT(name_and_select, view_and_attrs->left);\n    EXTRACT_ANY_NOTNULL(select_stmt, name_and_select->right);\n    EXTRACT_ANY_NOTNULL(name_ast, name_and_select->left);\n    EXTRACT_STRING(name, name_ast);\n\n    if (i > 0) {\n      bprintf(output, ",\\n");\n    }\n    bprintf(output, "{\\n");\n\n    bool_t is_deleted = ast->sem->delete_version > 0;\n    BEGIN_INDENT(view, 2);\n    bprintf(output, "\\"name\\" : \\"%s\\"", name);\n    bprintf(output, ",\\n\\"CRC\\" : \\"%lld\\"", crc_stmt(ast));\n    bprintf(output, ",\\n\\"isTemp\\" : %d", !!(flags & VIEW_IS_TEMP));\n    bprintf(output, ",\\n\\"isDeleted\\" : %d", is_deleted);\n    if (is_deleted) {\n      bprintf(output, ",\\n\\"deletedVersion\\" : %d", ast->sem->delete_version);\n      cg_json_deleted_migration_proc(output, view_and_attrs);\n    }\n\n    if (ast->sem->region) {\n      cg_json_emit_region_info(output, ast);\n    }\n\n    if (misc_attrs) {\n      bprintf(output, ",\\n");\n      cg_json_misc_attrs(output, misc_attrs);\n    }\n\n    cg_json_projection(output, select_stmt);\n    cg_fragment_with_params(output, "select", select_stmt, gen_one_stmt);\n    cg_json_dependencies(output, ast);\n    END_INDENT(view);\n    bprintf(output, "\\n}\\n");\n    i++;\n  }\n\n  END_INDENT(views);\n  bprintf(output, "]");\n}\n')),(0,s.kt)("h4",{id:"view-loop"},"View Loop"),(0,s.kt)("p",null,"Already we can see the structure emerging, and of course its nothing\nmore than a bunch of ",(0,s.kt)("inlineCode",{parentName:"p"},"bprintf"),".  Let's do it section by section:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'bprintf(output, "\\"views\\" : [\\n");\nBEGIN_INDENT(views, 2);\n\nfor (list_item *item = all_views_list; item; item = item->next) {\n  ..\n}\n\nEND_INDENT(views);\nbprintf(output, "]");\n')),(0,s.kt)("p",null,"Unsurprisingly, this code will iterate the ",(0,s.kt)("inlineCode",{parentName:"p"},"all_views_list")," which was\ncreated precisely for this kind of output.  The semantic pass populates\nthis list for use downstream."),(0,s.kt)("p",null,"We'll deal with ",(0,s.kt)("inlineCode",{parentName:"p"},"BEGIN_INDENT")," a bit later, but it should be clear what\nit does by the name for now.  So we've made the \"views\" section and\nwe'll put 0 or more views in it."),(0,s.kt)("h4",{id:"view-extraction"},"View Extraction"),(0,s.kt)("p",null,"The next section extracts the necessary information and emits\nthe test output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"    ast_node *ast = item->ast;\n    Invariant(is_ast_create_view_stmt(ast));\n\n    ast_node *misc_attrs = NULL;\n    ast_node *attr_target = ast->parent;\n    if (is_ast_stmt_and_attr(attr_target)) {\n      EXTRACT_STMT_AND_MISC_ATTRS(stmt, misc, attr_target->parent);\n      misc_attrs = misc;\n    }\n\n    cg_json_test_details(output, ast, misc_attrs);\n\n    EXTRACT_OPTION(flags, ast->left);\n    EXTRACT(view_and_attrs, ast->right);\n    EXTRACT(name_and_select, view_and_attrs->left);\n    EXTRACT_ANY_NOTNULL(select_stmt, name_and_select->right);\n    EXTRACT_ANY_NOTNULL(name_ast, name_and_select->left);\n    EXTRACT_STRING(name, name_ast);\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"is_ast_stmt_and_attr"),' node tell us if there were any misc attributes on the\nstatement.  Those attributes can be extracted and printed.  We have to look up\nthe tree a little bit from where we are because this is the "all views" list,\nif there were attributes on this view they were attached two levels up.  In any\ncase ',(0,s.kt)("inlineCode",{parentName:"p"},"misc_attrs")," ends with attributes if there are any."),(0,s.kt)("p",null,"After the test output, the necessary view attributes are extracted the usual\nway with ",(0,s.kt)("inlineCode",{parentName:"p"},"EXTRACT")," macros for the view shape."),(0,s.kt)("h4",{id:"test-output"},"Test Output"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'static void cg_json_test_details(charbuf *output, ast_node *ast, ast_node *misc_attrs) {\n  if (options.test) {\n    bprintf(output, "\\nThe statement ending at line %d\\n", ast->lineno);\n    bprintf(output, "\\n");\n\n    gen_set_output_buffer(output);\n    if (misc_attrs) {\n      gen_with_callbacks(misc_attrs, gen_misc_attrs, NULL);\n    }\n    gen_with_callbacks(ast, gen_one_stmt, NULL);\n    bprintf(output, "\\n\\n");\n  }\n}\n')),(0,s.kt)("p",null,'All of the JSON fragments have the usual test pattern "The statement ending at line nnn".\nThis means that the normal validator will be able to find comments in the test file\nand associate them with json parts.  The testing strategies are discussed in\n',"[Part 4]","((",(0,s.kt)("a",{parentName:"p",href:"https://cgsql.dev/cql-guide/int04"},"https://cgsql.dev/cql-guide/int04"),")."),(0,s.kt)("p",null,"In addition, while in test mode, we also emit the original statement that caused\nthis JSON fragment to be created. This allows the test patterns to cross check\nthe input and output and also makes the test output more readable for humans."),(0,s.kt)("p",null,"Note that in test mode the JSON is effectively corrupted by the test output as it\nis not well-formed JSON in any way.  So use of --test is strictly for validation only."),(0,s.kt)("h4",{id:"view-basics"},"View Basics"),(0,s.kt)("p",null,"All of the things that go into the JSON have some attributes that are universally present\nand generally come directly from the AST."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'  if (i > 0) {\n    bprintf(output, ",\\n");\n  }\n  bprintf(output, "{\\n");\n\n  bool_t is_deleted = ast->sem->delete_version > 0;\n\n  BEGIN_INDENT(view, 2);\n  bprintf(output, "\\"name\\" : \\"%s\\"", name);\n  bprintf(output, ",\\n\\"CRC\\" : \\"%lld\\"", crc_stmt(ast));\n  bprintf(output, ",\\n\\"isTemp\\" : %d", !!(flags & VIEW_IS_TEMP));\n  bprintf(output, ",\\n\\"isDeleted\\" : %d", is_deleted);\n  if (is_deleted) {\n    bprintf(output, ",\\n\\"deletedVersion\\" : %d", ast->sem->delete_version);\n    cg_json_deleted_migration_proc(output, view_and_attrs);\n  }\n\n  ...\n\n  END_INDENT(view);\n  bprintf(output, "\\n}\\n");\n  i++;\n}\n')),(0,s.kt)("p",null,"This part of the output is the simplest"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"we emit a comma if we need one (only the first entry doesn't)"),(0,s.kt)("li",{parentName:"ul"},"we start the view object '{'"),(0,s.kt)("li",{parentName:"ul"},"more indenting for the interior of the view"),(0,s.kt)("li",{parentName:"ul"},"emit the view name"),(0,s.kt)("li",{parentName:"ul"},"emit the CRC of the view (this makes it easy to see if the view changed)",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"crc_stmt")," computes the CRC by echoing the statement into a scratch buffer and then running the CRC algorithm on that buffer"))),(0,s.kt)("li",{parentName:"ul"},'note the ",\\n" pattern, this pattern is used because sometimes there are optional parts and using a leading ",\\n" makes it clear which part is supposed to emit the comma',(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"it turns out getting the commas right is one of the greater annoyances of JSON output"))),(0,s.kt)("li",{parentName:"ul"},'emit "isTemp"'),(0,s.kt)("li",{parentName:"ul"},'emit "isDeleted"'),(0,s.kt)("li",{parentName:"ul"},'if the view is deleted, emit "deletedVersion"'),(0,s.kt)("li",{parentName:"ul"},"if there is a migration procedure on the ",(0,s.kt)("inlineCode",{parentName:"li"},"@delete")," attribute emit that as well",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cg_json_deleted_migration_proc")," scans the attribute list for ",(0,s.kt)("inlineCode",{parentName:"li"},"@delete")," attribute and emits the procedure name on that attribute if there is one")))),(0,s.kt)("h4",{id:"optional-info"},"Optional Info"),(0,s.kt)("p",null,"The next fragment emits two optional pieces that are present in many types of objects:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'    if (ast->sem->region) {\n      cg_json_emit_region_info(output, ast);\n    }\n\n    if (misc_attrs) {\n      bprintf(output, ",\\n");\n      cg_json_misc_attrs(output, misc_attrs);\n    }\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"if there is a region assocatied with this view, we emit it here"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cg_json_emit_region_info")," emits two things:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"the view's region"),(0,s.kt)("li",{parentName:"ul"},'the "deployment region" of that region if any (regions are contained in deployable groups)'),(0,s.kt)("li",{parentName:"ul"},"see ",(0,s.kt)("a",{parentName:"li",href:"https://cgsql.dev/cql-guide/ch10#schema-regions"},"Chapter 10")," for more info on regions and deployment regions"))))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"if there are any miscellaneous attributes they are emitted"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"we'll use ",(0,s.kt)("inlineCode",{parentName:"li"},"cg_json_misc_attrs")," as our general formatting example when we get to that")))),(0,s.kt)("h4",{id:"the-view-details"},"The View Details"),(0,s.kt)("p",null,"There is very little left in the view emitting code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'  cg_json_projection(output, select_stmt);\n  cg_fragment_with_params(output, "select", select_stmt, gen_one_stmt);\n  cg_json_dependencies(output, ast);\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cg_json_projection")," emits the name and type of each column in the view select list"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cg_fragment_with_params"),' emits the statement that creates the view in an attribute named "select"',(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"the normal echoing code emits the statement"),(0,s.kt)("li",{parentName:"ul"},"views have no variables to bind but other statement forms inside of procedures can have variables in the statement"),(0,s.kt)("li",{parentName:"ul"},'the variable names are replace with "?" in the text of the statement'),(0,s.kt)("li",{parentName:"ul"},'the names of the variable appear in "selectArgs" (always empty for views)'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cg_json_dependencies")," emits the tables and views that were used by this view, it gets its own section")),(0,s.kt)("p",null,"Those few things produce all JSON for a view. All the other schema elements do basically the same things.  Most of the\nhelpers are shared so, for instance, regions, misc attributes, and dependencies appear in nearly every kind of object\nin the JSON."),(0,s.kt)("h3",{id:"formatting-the-json"},"Formatting the JSON"),(0,s.kt)("p",null,"To make the JSON pretty we want to indent it appropriately and put commas in the right\nplaces.  There are some useful macros for this, and they all rely on the fact that\nthe emitted text goes to a ",(0,s.kt)("inlineCode",{parentName:"p"},"charbuf")," variable creatively called ",(0,s.kt)("inlineCode",{parentName:"p"},"output"),"."),(0,s.kt)("p",null,"Here's a sample procedure that was mentioned earlier, it does the usual things:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'// Emit a list of attributes for the current entity, it could be any kind of entity.\n// Whatever it is we spit out the attributes here in array format.\nstatic void cg_json_misc_attrs(charbuf *output, ast_node *_Nonnull list) {\n  Contract(is_ast_misc_attrs(list));\n  bprintf(output, "\\"attributes\\" : [\\n");\n  BEGIN_INDENT(attr, 2);\n  BEGIN_LIST;\n\n  for (ast_node *item = list; item; item = item->right) {\n    COMMA;\n    cg_json_misc_attr(output, item->left);\n  }\n  END_LIST;\n  END_INDENT(attr);\n  bprintf(output, "]");\n}\n')),(0,s.kt)("p",null,"The miscellaneous attributes are going to be emitted in a list, and since any\none attribute can actually be a list of attributes, this ends up being recursive\n(",(0,s.kt)("inlineCode",{parentName:"p"},"cg_json_misc_attr")," can end up calling back to ",(0,s.kt)("inlineCode",{parentName:"p"},"cg_json_misc_attrs"),").  Attributes\nare actually quite flexible.  Let's look at the helpers that will be used\nto do this formatting."),(0,s.kt)("p",null,"From ",(0,s.kt)("inlineCode",{parentName:"p"},"charbuf.h"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'// These helpers push a buffer and use it for the output temporarily.\n// When the buffer is finished (at END_INDENT) bindent is used to\n// indent it by the indicated amount.  They assume the output buffer is called\n// "output".\n#define BEGIN_INDENT(name, level) \\\n  charbuf *name##_saved = output; \\\n  int32_t name##_level = level; \\\n  CHARBUF_OPEN(name); \\\n  output = &name;\n\n#define END_INDENT(name) \\\n  output = name##_saved; \\\n  bindent(output, &name, name##_level); \\\n  CHARBUF_CLOSE(name); \\\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"BEGIN_INDENT")," : sets up the indenting",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"save the current output buffer"),(0,s.kt)("li",{parentName:"ul"},"stash the desired indent level in a named local"),(0,s.kt)("li",{parentName:"ul"},"make a new scratch buffer using the given name"),(0,s.kt)("li",{parentName:"ul"},"set the output to be the scratch buffer"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"END_INDENT")," : flushes the indented stuff",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"restores the output buffer to what it was"),(0,s.kt)("li",{parentName:"ul"},"writes the temporary buffer into the output buffer, indenting it by the desired abount"),(0,s.kt)("li",{parentName:"ul"},"close the temporrary buffer"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bindent")," : a ",(0,s.kt)("inlineCode",{parentName:"li"},"charbuf")," helper that reads the input line by line and writes it with indenting spaces to the output")),(0,s.kt)("p",null,"The rest of the helpers  manage the commas in the (nested) lists:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'// These little helpers are for handling comma seperated lists where you may or may\n// not need a comma in various places.  The local tracks if there is an item already\n// present and you either get ",\\n"  or just "\\n" as needed.\n#define BEGIN_LIST bool_t list_start = 1\n#define CONTINUE_LIST bool_t list_start = 0\n#define COMMA if (!list_start) bprintf(output, ",\\n"); else list_start = 0\n#define END_LIST if (!list_start) bprintf(output, "\\n")\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"BEGIN_LIST")," : starts a list, records that we are at the beginning of the list"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"CONTINUE_LIST")," : starts a list, but assumes things have already been put into it"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"COMMA")," : a new item is about to be emitted, add a comma if one is needed",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"i.e. add a comma if we are not on the first item"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"END_LIST")," : emits a blank line if anything went into the list",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"this puts us in the write place to put an end marker such as ']' or '}'")))),(0,s.kt)("p",null,"So reviewing this bit of code,"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'emit the attribute name and start the array "["'),(0,s.kt)("li",{parentName:"ul"},"we start indenting"),(0,s.kt)("li",{parentName:"ul"},"we start a list"),(0,s.kt)("li",{parentName:"ul"},"we emit a comma if needed"),(0,s.kt)("li",{parentName:"ul"},"we emit the new misc attribute",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"this will crack the AST, and get the attribute name and value"),(0,s.kt)("li",{parentName:"ul"},"this can recurse"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"cg_json_misc_attr")," is pretty simple and a good exercise for the reader"))),(0,s.kt)("li",{parentName:"ul"},"repeat for all attributes"),(0,s.kt)("li",{parentName:"ul"},"end the list"),(0,s.kt)("li",{parentName:"ul"},"end the indenting"),(0,s.kt)("li",{parentName:"ul"},'emit the attribute end "]"')),(0,s.kt)("h4",{id:"quoted-text"},"Quoted Text"),(0,s.kt)("p",null,"Most quoted text in the JSON output is either hard-coded constants,\nor else is a CQL identifier and therefore has no special characters.\nThose two cases are very simple and no escaping or special formatting\nis needed.  We just emit the text with quotes around it. However,\nthere are cases where general text that might have special characters\nin it needs to be emitted.  When that happens a call like this is used:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"cg_pretty_quote_plaintext(\n    sql.ptr,\n    output,\n    PRETTY_QUOTE_JSON | PRETTY_QUOTE_SINGLE_LINE);\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"cg_pretty_quote_plaintext")," has been discussed before when it was used to\ncreate SQL strings for the C output. This usage is similar.\nHere we're using ",(0,s.kt)("inlineCode",{parentName:"p"},"PRETTY_QUOTE_JSON"),' to indicate that only\nescape sequences supported by JSON should appear in the output. The format for\nhexadecimal escape sequences for non-printable characters is different than C\nand some of the C short escapes are not supported\n(e.g. "\\a" is not legal JSON).  We always use ',(0,s.kt)("inlineCode",{parentName:"p"},"PRETTY_QUOTE_SINGLE_LINE"),"\nin the JSON output so that multi-line SQL is rendered as one line.\nRemember here we are are JSON-escaping the SQL so the embedded newlines\nin the original SQL were already converted to '\\' 'n' (two characters)\nand therefore any newlines still in the string are those placed there by the\nline breaking of the SQL not by newlines in string literals.  Hence\nthose newlines are optional, any whitespace will do."),(0,s.kt)("p",null,"In any case, ",(0,s.kt)("inlineCode",{parentName:"p"},"cg_pretty_quote_plaintext")," is just the function to do what we need\nand this output is only slightly different than what would be emitted for\nthe C codegen."),(0,s.kt)("h3",{id:"dependency-analysis"},"Dependency Analysis"),(0,s.kt)("p",null,"There are a number of places where dependencies have to be computed. To do this job,\nthis function is used universally:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"// For procedures and triggers we want to walk the statement list and emit a set\n// of dependency entries that show what the code in question is using and how.\n// We track tables that are used and if they appear in say the FROM clause\n// (or some other read-context) or if they are the subject of an insert, update,\n// or delete.  We also track the use of nested procedures and produce a list of\n// procs the subject might call.  Of course no proc calls ever appear in triggers.\nstatic void cg_json_dependencies(charbuf *output, ast_node *ast) {\n    ...\n}\n")),(0,s.kt)("p",null,"In general this code walks any AST looking for a variety of patterns in the AST\nthat correspond to use of tables, directly or indirectly. Actually more accurately,\n",(0,s.kt)("inlineCode",{parentName:"p"},"cg_json_dependencies")," uses ",(0,s.kt)("inlineCode",{parentName:"p"},"find_table_refs")," to do the job, and it does so by:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"creating an output buffer for each kind of thing ",(0,s.kt)("inlineCode",{parentName:"li"},"find_table_refs")," might find"),(0,s.kt)("li",{parentName:"ul"},"setting up a simple callback to fill in the buffer"),(0,s.kt)("li",{parentName:"ul"},"invoking ",(0,s.kt)("inlineCode",{parentName:"li"},"find_table_refs")),(0,s.kt)("li",{parentName:"ul"},"formatting the buffers that have any resulting dependency data and emitting them as dependencies")),(0,s.kt)("p",null,"This works for any kind of AST really, though typically you do this for procedures\nor triggers because they have an interesting body.  But the analysis also makes sense for views\nbecause views can refer to other views and to tables."),(0,s.kt)("p",null,"The primary code looks like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"  table_callbacks callbacks = {\n      .callback_any_table = cg_found_table,\n      .callback_any_view = cg_found_view,\n      .callback_inserts = cg_found_insert,\n      .callback_updates = cg_found_update,\n      .callback_deletes = cg_found_delete,\n      .callback_from = cg_found_from,\n      .callback_proc = cg_found_proc,\n      .callback_context = &context,\n  };\n  find_table_refs(&callbacks, ast);\n")),(0,s.kt)("p",null,"And an example callback:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"// This is the callback function that tells us a view name was found in the body\n// of the stored proc we are currently examining.  The void context information\n// is how we remember which proc we were processing.   For each table we have\n// a character buffer.  We look it up, create it if not present, and write into it.\n// We also write into the buffer for the current proc which came in with the context.\nstatic void cg_found_view(\n  CSTR view_name,\n  ast_node* table_ast,\n  void* pvContext)\n{\n  json_context *context = (json_context *)pvContext;\n  Contract(context->cookie == cookie_str);  // sanity check\n  Contract(context->used_views);\n\n  add_name_to_output(context->used_views, view_name);\n}\n")),(0,s.kt)("p",null,"The callback gets the ",(0,s.kt)("inlineCode",{parentName:"p"},"pvContext")," back, which is the ",(0,s.kt)("inlineCode",{parentName:"p"},"context")," local variable\nfrom ",(0,s.kt)("inlineCode",{parentName:"p"},"cg_json_dependencies"),".  This has all the buffers in it.  All\nwe have to do is add the name to the buffer, which is done as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'static void add_name_to_output(charbuf* output, CSTR table_name) {\n  Contract(output);\n  if (output->used > 1) {\n    bprintf(output, ", ");\n  }\n  bprintf(output, "\\"%s\\"", table_name);\n}\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"add a comma if needed"),(0,s.kt)("li",{parentName:"ul"},"add the name"),(0,s.kt)("li",{parentName:"ul"},"done :D")),(0,s.kt)("p",null,"Note: The added name of course doesn't have to be a table name, but it usually is."),(0,s.kt)("p",null,"So we can see that ",(0,s.kt)("inlineCode",{parentName:"p"},"find_table_refs")," will tell us the kind of thing it found and the name of the thing."),(0,s.kt)("p",null,"When all this is done each kind of dependency is emitted if it exists, like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'  if (used_views.used > 1) {\n    bprintf(output, ",\\n\\"usesViews\\" : [ %s ]", used_views.ptr);\n  }\n')),(0,s.kt)("p",null,"This gives us a quoted list of the dependencies.  Now, how do we find these?"),(0,s.kt)("h4",{id:"walking-the-ast-for-dependencies"},"Walking the AST for Dependencies"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"find_table_refs")," is a fairly simple tree walk that looks for certain key patterns\nactually the tree walk happens in ",(0,s.kt)("inlineCode",{parentName:"p"},"find_table_node")," which looks for tables and\nprocedure calls in the nested AST."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"find_table_refs")," records the callbacks that were specified, and it makes some symbol\ntables so that the same table/view/procedure is not reported twice.  After that\nit starts walking the AST recursively looking for the patterns.  Here's an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},"\n// Recursively finds table nodes, executing the callback for each that is found.  The\n// callback will not be executed more than once for the same table name.\nstatic void find_table_node(table_callbacks *callbacks, ast_node *node) {\n  // Check the type of node so that we can find the direct references to tables. We\n  // can't know the difference between a table or view in the ast, so we will need to\n  // later find the definition to see if it points to a create_table_stmt to distinguish\n  // from views.\n\n  find_ast_str_node_callback alt_callback = NULL;\n  symtab *alt_visited = NULL;\n  ast_node *table_or_view_name_ast = NULL;\n\n  ...\n  else if (is_ast_delete_stmt(node)) {\n    EXTRACT_ANY_NOTNULL(name_ast, node->left);\n    table_or_view_name_ast = name_ast;\n    alt_callback = callbacks->callback_deletes;\n    alt_visited = callbacks->visited_delete;\n  }\n\n  ...\n\n}\n")),(0,s.kt)("p",null,"The code afterward will do these steps:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"notice that ",(0,s.kt)("inlineCode",{parentName:"li"},"table_or_view_name_ast")," was set, hence something was found"),(0,s.kt)("li",{parentName:"ul"},"determine that it is in fact a table"),(0,s.kt)("li",{parentName:"ul"},"call the general callback for any table seen (but only once for this table)"),(0,s.kt)("li",{parentName:"ul"},"call the alternate callback that this is a table being deleted (but only once)")),(0,s.kt)("p",null,"Almost all the other operations work similarly:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"table_or_view_name_ast")," is set"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"alt_callback")," is called but only if"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"alt_visited")," doesn't already have the symbol")),(0,s.kt)("p",null,"The exception to the above is the processing that's done for procedure calls.\nWe've actually only talked about table dependencies so far but, additionally,\nany procedure includes dependencies on the procedures it calls."),(0,s.kt)("p",null,"If a procedure call is found then ",(0,s.kt)("inlineCode",{parentName:"p"},"callbacks->callback_proc")," is used and\n",(0,s.kt)("inlineCode",{parentName:"p"},"callbacks->visited_proc")," verifies that there are no duplicates.  So much\nthe same except the names are procedure names."),(0,s.kt)("p",null,"Note that the code does not do transitive closure of procedure calls because\nin general the called procedure is likely in a different translation unit.\nHowever with the direct calls in place it is easy enough to do transitive closure\nfrom the JSON if you do have all the procedures in one unit or if you have\nseveral JSON results from different compilations."),(0,s.kt)("p",null,"However, when a view is encountered, the code does follow into the view body\nand recursively reports what the view uses. This means that the reported tables\ndo include any tables that were used indirectly via views."),(0,s.kt)("p",null,"Finally, any CTEs that are used will not be reported because\n",(0,s.kt)("inlineCode",{parentName:"p"},"find_table_or_view_even_deleted")," will fail for a CTE.  However the body\nof the CTE is processed so while the CTE name does not appear, what the\nCTE uses does appear, just like any other table usage."),(0,s.kt)("h3",{id:"additional-test-output"},"Additional Test Output"),(0,s.kt)("p",null,"The extra test output is simply a reverse index:  a mapping that goes\nfrom any table to the procedures that depend on that table."),(0,s.kt)("p",null,"The mapping can easily be created by processing the JSON for procedures,\neach such procedure includes its dependency information.  As a result it's only\nused for additional validation."),(0,s.kt)("h3",{id:"recap"},"Recap"),(0,s.kt)("p",null,"The JSON output produced by ",(0,s.kt)("inlineCode",{parentName:"p"},"cg_json_schema.c")," is similar to other codegen\noutput but lacks most of the complexities.  It deals largely with the\ndeclared schema and the declared procedures and their parameters.  Most\nof the output it needs to produce is well supported by the normal text\nemission features in the compiler and so we end up with a very straightforward\nwalk of the AST, visiting each of the relevant kinds of nodes in order."),(0,s.kt)("p",null,"Topics covered included:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the types of output that will be produced"),(0,s.kt)("li",{parentName:"ul"},"the general structure of the main JSON emitter"),(0,s.kt)("li",{parentName:"ul"},"an example emitter"),(0,s.kt)("li",{parentName:"ul"},"typical formatting features necessary to produce good quality JSON"),(0,s.kt)("li",{parentName:"ul"},"a tour of the dependency emitter")),(0,s.kt)("p",null,"As with the other parts, no attempt was made to cover every function in detail.  That is\nbest done by reading the source code. But there is overall structure here and an understanding\nof the basic principles is helpful before diving into the source code."))}h.isMDXComponent=!0}}]);