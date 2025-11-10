// JSON vs JS Object

/*
Theory difference
-----------------
Feature                 JSON                                            Object table
-----------------------------------------------------------------------------------------------------------------------
What it is              Text format for sotring/transferring data       Structured storage system(usually in databases)
Usage                   For APIs, configs, and communication            For querying and persistent data storage                
Structure               Key-value pairs                                 Rows & Columns (SQL) or Documents (NoSQL)
Language Support        Universal (JavaScript, Python, etc.)            Depends on DB engine (SSQL, MongoDB, etc.)
Editable by humans      Yes                                             Usually via queries or admin tools
Supports functions?     No                                              Sometimes (e.g., SQL functions, triggers)
------------------------------------------------------------------------------------------------------------------------

Syntax difference
-----------------
Feature                 JSON                                            JavaScript object
------------------------------------------------------------------------------------------------------------------------------------
Definition              Text format for storing & transferring data     In-memory data structure used in code
Quotes for keys         Mandatory double quotes ("key")                 Optional quotes - can use key, 'key' or "key"
String values           Must use double quotes only                     can use single or double quotes
Functions allowed?      No                                              Yes
Comments allowed?       No                                              Yes (// or multiline comments)
Data types allowed      String, number, boolean, null, object, array    Everything JSON allows + functions, symbols, undefined, etc.
Usage                   For APIs, config files and storage              For logic inside JS programs
-------------------------------------------------------------------------------------------------------------------------------------
*/